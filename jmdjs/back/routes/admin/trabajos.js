var express = require('express');
var router = express.Router();
const trabajosModel = require('../../models/trabajosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {

    var trabajos = await trabajosModel.getTrabajos();

    trabajos = trabajos.map(trabajo => {
        if (trabajo.img_id) {
            const imagen = cloudinary.image(trabajo.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...trabajo,
                imagen
            }
        } else {
            return {
                ...trabajo,
                imagen: ''
            }
        }
    });

    res.render('admin/trabajos', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        trabajos

    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});


/*Agregar nuevo trabajo*/
router.post('/agregar', async (req, res, next) => {
    try {

        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.empresa != "" && req.body.trabajo != "" && req.body.cuerpo != "") {
            await trabajosModel.insertTrabajo({
                ...req.body,
                img_id
            });
            res.redirect('/admin/trabajos')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo el nuevo trabajo'
        })
    }
})

/*Eliminar trabajo por id*/
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await trabajosModel.deleteTrabajoById(id);
    res.redirect('/admin/trabajos');
});


/*Formulario de modificar*/
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var trabajo = await trabajosModel.getTrabajosById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        trabajo
    })
});

/*Modificar trabajo*/
router.post('/modificar', async (req, res, next) => {
    try {

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        if (req.body.empresa != "" && req.body.trabajo != "" && req.body.cuerpo != "") {
            var obj = {
                empresa: req.body.empresa,
                trabajo: req.body.trabajo,
                cuerpo: req.body.cuerpo,
                img_id
            }
            await trabajosModel.modificarTrabajoById(obj, req.body.id);
            res.redirect('/admin/trabajos');
        } else {
            const trabajo = {
                id: req.body.id,
                empresa: req.body.empresa,
                trabajo: req.body.trabajo,
                cuerpo: req.body.cuerpo,
                img_id
            }
            res.render('admin/modificar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos',
                trabajo: trabajo
            })
        }

    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico el trabajo'
        })
    }
})

module.exports = router;