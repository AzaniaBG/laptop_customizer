import React from 'react'
// import Features from './Features'

export default function Customizer(props) {
    console.log(`props are ${props}`)
    return (
        <fieldset className="feature">
          <legend className="feature__name">
            <h3 key={props.idx}>{props.name}</h3>
            {/* {console.log(`key is ${props.idx}`)} */}
          </legend>
          {props.children}
        </fieldset>
    )
}