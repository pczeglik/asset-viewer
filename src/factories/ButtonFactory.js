import React from 'react'
export class ButtonFactory {
    static createButton({ category, onClick }) {
        return <button key={category} onClick={onClick} type="button">{category}</button>
    }
}