var express = require('express');
var router = express.Router();
var trabajosModel = require('./../models/trabajosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/trabajos', async function (req,res,next) {
    let trabajos = await trabajosModel.getTrabajos();

    trabajos = trabajos.map(trabajos => {
        if (trabajos.img_id){
            const imagen = cloudinary.url(trabajos.img_id,{
                width: 250,
                height: 250,
                crop: 'fit'
            });
            return {
                ...trabajos,
                imagen
            }
        } else{
            return{
                ...trabajos,
                imagen: ''
            }
        }
    });
    
    res.json(trabajos);
});


router.post('/contacto', async (req, res) =>{
    const mail = {
        to: 'jorgemaxiromero@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su celular es: ${req.body.telefono}`
    }

    const JMD = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await JMD.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
})

module.exports = router;