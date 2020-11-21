import React from 'react'

class Class2Compo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name:"Class_2Compo"
        }
    }
    render() {
        return (
            <div id="Class_2Compo" className='items'>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
export default Class2Compo