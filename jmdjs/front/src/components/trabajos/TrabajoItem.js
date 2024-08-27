import React from 'react';
import './../../styles/components/pages/TrabajosPage.css';

const TrabajoItem = (props) => {
    const { company, work, image, body } = props;

    return (
        <div className="trabajos">
            <h1>{company}</h1>
            <h2>{work}</h2>
            <div className='flexible'>
            <img src={image} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <hr />
        </div>
    );
}

export default TrabajoItem;