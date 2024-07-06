import React from 'react';
import { TrabajosProps } from '../components/Props.js'

const TrabajosPage = (props) => {
    return (
        <div class="holder">
            <h2>Nuestros trabajos:</h2>
            <div>
                <TrabajosProps titulo="Titulo1 " subtitulo="Subtitulo 1" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod perferendis reprehenderit tempore iure voluptate porro illo ea laboriosam. Laudantium numquam cum quidem sit consequuntur ut rem magni architecto delectus." />
                <hr />
                <TrabajosProps titulo="Titulo 2" subtitulo="Subtitulo 2" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod perferendis reprehenderit tempore iure voluptate porro illo ea laboriosam. Laudantium numquam cum quidem sit consequuntur ut rem magni architecto delectus." />
                <hr />
                <TrabajosProps titulo="Titulo 3" subtitulo="Subtitulo 3" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod perferendis reprehenderit tempore iure voluptate porro illo ea laboriosam. Laudantium numquam cum quidem sit consequuntur ut rem magni architecto delectus." />
                <hr />

            </div>
        </div>
    );
}

export default TrabajosPage;