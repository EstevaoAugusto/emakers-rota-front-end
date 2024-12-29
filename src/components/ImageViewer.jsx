import React, { useState, useEffect } from "react";

// ainda necessita ser corrijido

const ImageViewer = ({ image, alt, formato, nota }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        // Caminho relativo à pasta pública ou à raiz do projeto
        const updatedPath = `../assets/images/${formato}/${image}.png`;
        setImageSrc(updatedPath);
    }, [image, formato]); // Atualize quando "image" ou "formato" mudarem

    return (
        <div>
            {imageSrc != null ? (
                <img src={imageSrc} alt={alt} />
            ) : (
                <p>{alt}</p>
            )}


            {/* Exibindo a nota ou a opção de adicionar avaliação */}
            <p> {nota ? `${nota}/10` : `Adicionar avaliação`} </p>
        </div>
    );
};

export default ImageViewer;
