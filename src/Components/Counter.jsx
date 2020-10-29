import React from 'react'
import '../Components/Counter.scss'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';
import userService from '../Services/userService'
import { legthStatus } from '../Redux';
import { FirstFunction } from '../Redux';
import { SecondFunction } from '../Redux';

const user_service = new userService();

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstInput: 1,
            SecondInput: 1,
            Result : 1
        }
    }

    getNotes() {

        let values = this.props.FirstValue + 'To' + this.props.SecondValue;
        console.log("measurementType and value :", this.props.measurementType , values);
        if(!(this.props.measurementType === '')){
        const data = {
            measurementType: this.props.measurementType,
            conversionType: values,
            value: this.state.FirstInput
        }
    
        console.log(data);

        user_service.PostNotes(data)
            .then(response => {
                console.log("Result :", response.data.data.result);
                this.setState({Result : response.data.data.result});
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    componentDidMount() {
        this.getNotes();
    }

    componentDidUpdate() {
        this.getNotes()
    }

    handleFirstValue = (event) => {
        this.setState({
            FirstInput: event.target.value
        }, () => { console.log(this.state.FirstInput); });


    }

    onChangeFirstProperty = (event) => {
        let value = event.target.value;
        console.log(value);
    }

    onChangeSecondProperty = (event) => {
        let value = event.target.value;
        this.setState({
            SecondValue: value
        }, () => { console.log(this.state.SecondValue); })
    }

    render() {
        let Option = this.props.options;

        return (
            <div>
                <div className="MainCounterContainer">
                    <div className="CounterTitle">
                        <div className="From">From</div>
                        <div className="To">To</div>
                    </div>
                    <div className="CounterContainer">

                        <div className="FromContainer">

                            <div >
                                <InputGroup
                                    size="lg">
                                    <FormControl
                                        aria-label="Large"
                                        value={this.state.FirstInput}
                                        onChange={this.handleFirstValue}
                                        aria-describedby="inputGroup-sizing-sm"
                                        className="FirstInput" />
                                </InputGroup>

                            </div>
                            <div>
                                <div>
                                    <Form.Control
                                        className="FirstChoose"
                                        as="select"
                                        value={this.props.FirstValue}
                                        onChange={this.props.FirstFunction}
                                    >
                                        {
                                            Option.map((element, key) => {
                                                return <option key={key}>{element}</option>
                                            })
                                        }
                                    </Form.Control>
                                </div>

                            </div>
                        </div>
                        <div className="ToContainer">
                            <div>
                                <InputGroup
                                    size="lg">
                                    <FormControl
                                        aria-label="Large"
                                        Value={this.state.Result}
                                        //onChange={this.handleSecondValue}
                                        aria-describedby="inputGroup-sizing-sm"
                                        className="SecondInput" />
                                </InputGroup>
                            </div>
                            <div>
                                <Form.Control
                                as="select"
                                    className="FirstChoose"
                                    value={this.props.SecondValue}
                                    onChange={this.props.SecondFunction.bind(this)}
                                >
                                    {
                                        Option.map((element, key) => {
                                            return <option key={key}>{element}</option>
                                        })
                                    }
                                </Form.Control>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        options: state.options,
        FirstValue: state.FirstValue,
        SecondValue: state.SecondValue,
        measurementType: state.measurementType,
    }

}


const mapDispatchToProps = (dispatch) => {

    return {

        legthStatus: function () {
            dispatch(legthStatus());
        },

        FirstFunction: function (event) {
            dispatch(FirstFunction(event.target.value));
        },

        SecondFunction: function (event) {
            dispatch(SecondFunction(event.target.value));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)