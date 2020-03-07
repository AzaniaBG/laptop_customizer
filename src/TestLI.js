import React, { Component } from 'react'

export default class TestLI extends Component {

    render() {
        return (
            <input 
                name={this.props.name}
                option={this.props.option}
                onClick={this.props.onChange}
                key={this.props.id}
            />
        )
    }
}