import React, { Component } from 'react'

class Square extends Component {
    constructor () {
        super()
        this.state = {
        backgroundColor: 'white'
        }
    }

handleClick = () => {
    this.setState({
        backgroundColor: this.props.selectedColor
    })
}

    render() {
        return (
            <div 
            onMouseEnter= {this.handleClick}
            
            style ={{
                height: 30,
                width: 30,
                border: '1px solid black',
                backgroundColor: this.state.backgroundColor
            }}>

            </div>
        )
    }
}
export default Square