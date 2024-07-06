import React from 'react';
import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage = (props) => {
    return (
        <div class="holder">
            <h2>Nuestros servicios:</h2>
            <div id="lista_servicios">
                <ul>
                    <li>
                        <h4>Programación de PLC:</h4>
                        <div class="servicios">
                            <img src="images/PLC.png" alt=""></img>
                            <p>
                                Nos encargamos del diseño y programación de controladores lógicos programables (PLC),
                                esenciales
                                para la automatización y el control de procesos industriales. Nuestros expertos desarrollan
                                soluciones a medida para garantizar que sus sistemas funcionen de manera óptima y eficiente.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4>Desarrollo de pantallas SCADA:</h4>
                        <div class="servicios">
                            <img src="images/SCADA.png" alt=""></img>
                            <p>
                                Diseñamos y programamos sistemas SCADA que permiten la supervisión y control de sus procesos
                                industriales en tiempo real. Los sistemas SCADA proporcionan una interfaz gráfica que
                                facilita
                                la
                                monitorización y gestión de todas las operaciones desde una ubicación central.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4>Programación de automatización integral:</h4>
                        <div class="servicios">
                            <img src="images/automatizacion.png" alt=""></img>
                            <p>
                                Ofrecemos soluciones completas de automatización que abarcan desde el diseño conceptual
                                hasta la implementación y el mantenimiento de los sistemas. Nos encargamos de cada detalle para asegurar la optimización de sus procesos industriales.
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4>Diseño de tableros eléctricos:</h4>
                        <div class="servicios">
                            <img src="images/Tablero.png" alt=""></img>
                            <p>
                                Diseñamos, fabricamos y ensamblamos tableros eléctricos a medida para satisfacer las
                                necesidades
                                específicas de cada proyecto. Nuestros tableros cumplen con los más altos estándares de
                                calidad
                                y seguridad.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ServiciosPage;