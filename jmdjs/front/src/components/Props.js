const TrabajosProps = ({titulo,subtitulo, texto}) => {
    return (
        <div>
            <h3>{ titulo }</h3>
            <h4>{ subtitulo }</h4>
            <p>{ texto }</p>
        </div>
    );
};

export {
    TrabajosProps
};