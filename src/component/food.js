import React from 'react'


class Food extends React.Component {
    
    render() {
        return (
            <div id='food'>
                <img src={this.props.image} alt={this.props.alt} width="300" height="150"/>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}
export default Food 