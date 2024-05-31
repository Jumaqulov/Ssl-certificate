import React from 'react'

export default function OptimizedImg({ src, alt, width, height }) {
    return (
        <img src={src} alt={alt} width={width} height={height} loading="eager" />
    )
}