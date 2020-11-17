
import React from 'react';

class FormEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message:"Hi user!"
        }


    }

    render() {
        return (
            <div id="form-event">

                <h2>I'm formOne</h2>    
                <h2>{this.state.message}</h2>

            </div>
        )
    }
}

export default FormEvent