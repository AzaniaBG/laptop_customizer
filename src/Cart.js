import React from 'react'

export default function Cart(props) {
    console.log(`Cart's selectedOption is`, props.selectedOption)
        return (
            
            <div className="summary__option" id={props.id}>
                {/* <div className="summary__option__label">{props.feature}</div> */}
                <div className="summary__option__value">{props.children}</div>
                {/* <div className="summary__option__value">{props.name}</div> */}
                <div className="summary__option__cost">
                    
                </div>
            </div>
        ) 
}