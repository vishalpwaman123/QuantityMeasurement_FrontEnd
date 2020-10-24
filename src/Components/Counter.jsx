import React from 'react'
import '../Components/Counter.scss'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
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
                                    aria-describedby="inputGroup-sizing-sm"
                                    className="FirstInput" />
                            </InputGroup>

                        </div>
                        <div>
                            <div>
                                {this.props.temperatureStatus ?
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" className="FirstChoose">
                                            <option>Celsius</option>
                                            <option>Fahrenheit</option>
                                            <option>Kelvin</option>
                                        </Form.Control>
                                    </Form.Group>
                                    :
                                    <div>
                                        {this.props.volumeStatus ?
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select" className="FirstChoose">
                                                    <option>Litre</option>
                                                    <option>Gallon</option>
                                                    <option>Millilitre</option>
                                                </Form.Control>
                                            </Form.Group>
                                            :
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select" className="FirstChoose">
                                                    <option>Inch</option>
                                                    <option>Feet</option>
                                                    <option>Centimeter</option>
                                                    <option>Yard</option>
                                                </Form.Control>
                                            </Form.Group>
                                        }
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                    <div className="ToContainer">
                        <div>
                            <InputGroup
                                size="lg">
                                <FormControl
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                    className="SecondInput" />
                            </InputGroup>
                        </div>
                        <div>
                            <div>
                                {this.props.temperatureStatus ?
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select" className="FirstChoose">
                                            <option>Celsius</option>
                                            <option>Fahrenheit</option>
                                            <option>Kelvin</option>
                                        </Form.Control>
                                    </Form.Group>
                                    :
                                    <div>
                                        {this.props.volumeStatus ?
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select" className="FirstChoose">
                                                    <option>Litre</option>
                                                    <option>Gallon</option>
                                                    <option>Millilitre</option>
                                                </Form.Control>
                                            </Form.Group>
                                            :
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select" className="FirstChoose">
                                                    <option>Inch</option>
                                                    <option>Feet</option>
                                                    <option>Centimeter</option>
                                                    <option>Yard</option>
                                                </Form.Control>
                                            </Form.Group>
                                        }
                                    </div>
                                }
                            </div>                    </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
    return {
        lengthStatus: state.lengthStatus,
        volumeStatus: state.volumeStatus,
        temperatureStatus: state.temperatureStatus
    }

}

export default connect(mapStateToProps)(Counter)