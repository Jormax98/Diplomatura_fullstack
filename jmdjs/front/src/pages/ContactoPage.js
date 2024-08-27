import React from 'react';
import '../styles/components/pages/ContactoPage.css'
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {


    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <div class="holder">
            <p>
                Contáctenos hoy mismo y descubra cómo podemos ayudarle a transformar su negocio a través de la
                automatización industrial eficiente y avanzada.
            </p>
            <h2>¡Esperamos trabajar con usted!</h2>
            <div class="contacto">
                <div>
                    <h2>Contacto rápido</h2>
                    <form onSubmit={handleSubmit} class="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}></input>
                        </p>
                        <p>
                            <label for="email">e-mail</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                        </p>
                        <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <p class="acciones">
                            <input type="submit" value="Enviar"></input>
                        </p>
                    </form>

                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

                </div>

                <div class="datos">
                    <h2>Otras vias de comunicación</h2>
                    <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Telefono: +549 (358) 4293310</li>
                        <li>e-mail: jmxromero@hotmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactoPage;