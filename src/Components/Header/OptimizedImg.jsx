import React, { useEffect } from 'react'

const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
};


export default function OptimizedImg({ src, alt, width, height }) {
    useEffect(() => {
        preloadImage(src);
    }, [src]);
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            style={{ maxWidth: '100%', height: 'auto' }}
        />
    )
}