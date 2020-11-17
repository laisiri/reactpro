eveimport React  from 'react';

class FormTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            input:""

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }
    render() {
        return (
            <div id="formTwo">

                <form>

                    < input type="text"  onChange={this.handleChange}/>
                    <p>{this.state.input}</p>

                </form>

            </div>
        )
    }
}

export default FormTwo
