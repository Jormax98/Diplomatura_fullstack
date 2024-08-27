import React from 'react';
import { TrabajosProps } from '../components/Props.js'
import { useState, useEffect } from 'react';
import axios from 'axios';
import trabajoItem from '../components/trabajos/TrabajoItem';
import TrabajoItem from '../components/trabajos/TrabajoItem';

const TrabajosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [trabajos, setTrabajos] = useState([]);

    useEffect(() => {
        const cargarTrabajos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/trabajos');
            setTrabajos(response.data);
            setLoading(false);
        };

        cargarTrabajos();
    }, []);

    return (
        <div class="holder">
            <h2>Nuestros trabajos:</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    trabajos.map(item => <TrabajoItem key={item.id}
                        company={item.empresa} work={item.trabajo}
                        image={item.imagen} body={item.cuerpo}
                    />)
                )
            }
        </div>
    );
}

export default TrabajosPage;