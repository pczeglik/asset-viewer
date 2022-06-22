import React from 'react'

export class UIFactory {
    static createButton({ category, onClick }) {
        return <button key={category} onClick={onClick} type="button">{category}</button>
    }

    static createImg({ src, altText }) {
        return <img src={src} alt={altText} />
    }
}