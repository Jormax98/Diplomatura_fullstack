import React from 'react';
import '../styles/components/pages/EmpresaPage.css';

const EmpresaPage = (props) => {
    return (
        <div class="holder">
            <h1>Por qué elegirnos:</h1>
            <div class="emp_flex">
                <img src="images/experiencia.jpeg" alt=""></img>
                <div>
                    <h4>Experiencia y conocimiento</h4>
                    <p>
                        Nuestro equipo está compuesto por profesionales altamente capacitados y con amplia experiencia en el sector de la automatización industrial.
                    </p>
                </div>
            </div>
            <div class="emp_flex">
                <img src="images/innovacion.jpeg" alt=""></img>
                <div>
                    <h4>Innovación constante</h4>
                    <p>
                        Nos mantenemos a la vanguardia de la tecnología para ofrecer soluciones
                        innovadoras y adaptadas a las últimas tendencias del mercado.
                    </p>
                </div>
            </div>
            <div class="emp_flex">
                <img src="images/calidad.jpeg" alt=""></img>
                <div>
                    <h4>Compromiso con la calidad</h4>
                    <p>
                        Cada proyecto es una oportunidad para superar las expectativas de
                        nuestros clientes, garantizando un servicio de primera calidad.
                    </p>
                </div>
            </div>
            <div class="emp_flex">
                <img src="images/soporte.jpeg" alt=""></img>
                <div>
                    <h4>Soporte técnico confiable</h4>
                    <p>
                        Nuestro servicio de consultas técnicas asegura que siempre tenga
                        acceso a
                        la ayuda necesaria para mantener sus sistemas funcionando de manera óptima.
                    </p>
                </div>
            </div>
            <p>
                En JMD entendemos que cada industria tiene sus propios desafíos y necesidades. Por ello,
                trabajamos de la mano con nuestros clientes para desarrollar soluciones personalizadas que impulsen su
                crecimiento y competitividad. Si busca optimizar sus procesos industriales y llevar su empresa al siguiente
                nivel, confíe en nosotros como su socio en automatización.
            </p>
            <div id="integrantes_empresa">
                <div class="integrantes">
                    <img class="img_integrantes" src="images/Dardo.jpg" alt=""></img>
                    <h4>Joel</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque impedit, sunt, recusandae
                        veritatis soluta eveniet labore amet eius ad fugiat placeat iusto doloribus cupiditate nihil
                        distinctio nam eligendi? Hic.</p>
                </div>
                <div class="integrantes">
                    <img class="img_integrantes" src="images/Maxi.jpg" alt=""></img>
                    <h4>Maximiliano</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius architecto reprehenderit quo ullam,
                        laudantium illum eos assumenda amet et mollitia esse praesentium incidunt eligendi ducimus nisi
                        itaque sit, consectetur atque!</p>
                </div>
                <div class="integrantes">
                    <img class="img_integrantes" src="images/David.jpeg" alt=""></img>
                    <h4>David</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consequuntur quia veniam ratione
                        velit. Possimus laborum aut, dolores impedit illo quaerat quia neque ratione magni rem id? Eius,
                        magnam eum!</p>
                </div>
            </div>

        </div>
    );
}

export default EmpresaPage;