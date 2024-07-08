import React from 'react';
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
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
                    <form class="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text"></input>
                        </p>
                        <p>
                            <label for="email">e-mail</label>
                            <input type="email"></input>
                        </p>
                        <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text"></input>
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea></textarea>
                        </p>
                        <p class="acciones">
                            <input type="submit" value="Enviar"></input>
                        </p>
                    </form>
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