import React from 'react'
//import Features from './Features'

export default class ListItem extends React.Component {
// console.log(`ListItem props.options is ${props.options}`)
    getSelected = (e) => {
        console.log(`getSelected from ListItem is ${e}`)
        this.props.onChange(e);
    }
    
    render() {
        return (
            <div id={this.props.key} className="feature__item">        
                <input 
                    type="radio"
                    id={this.props.id}
                    className="feature__option"
                    name={this.props.name}
                    cost={this.props.cost}
                    checked={this.props.checked}
                    onChange={e => this.props.onChange(this.props.name, this.props.value)}
                    onClick={(e) => this.getSelected(e.target.value)}
                    value={this.props.options}
                />
                <label htmlFor={this.props.id} item={this.props.name} className="feature__label" >
                {/* ////////////////// duplicate: ////////////////// */}
                {this.props.name} ({this.props.cost})
                {this.props.options}
                {/* ////////////////// duplicate: ////////////////// */}
                </label>
            </div>
        )
    }
}
