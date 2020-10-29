import React from 'react'
import '../Components/ImageType.scss'
import Length2 from '../Asserts/Length1.png'
import Length1 from '../Asserts/Length2.png'
import Volume1 from '../Asserts/Volume1.png'
import Volume2 from '../Asserts/Volume2.png'
import Temp1 from '../Asserts/Temp1.png'
import Temp2 from '../Asserts/Temp2.png'
import Weight1 from '../Asserts/Kg1.png'
import Weight2 from '../Asserts/Kg2.png'
import { legthStatus } from '../Redux';
import { volumeStatus } from '../Redux';
import { temperatureStatus } from '../Redux';
import { weightStatus } from '../Redux';
import { connect } from 'react-redux';
import { lengthColorToggle } from '../Redux'
import { volumeColorToggle } from '../Redux';
import { temperatureColorToggle } from '../Redux';
import { weightColorToggle } from '../Redux';
import { lengthColorOffToggle } from '../Redux'
import { volumeColorOffToggle } from '../Redux';
import { temperatureColorOffToggle } from '../Redux';
import { weightColorOffToggle } from '../Redux';

class ImageType extends React.Component {

    render() {
        //console.log(" Status :",this.props.lengthColorToggle , this.props.lengthStatus);
        return (
            <div className="MainImageContainer">
                <div className="MainBlock">

                    <div className="ImageContainer">
                        <div className={(this.props.lengthColorToggle || this.props.lengthStatus) ? "LengthOverOn" : "Image1"}
                            onClick={this.props.legthStatus}
                            onMouseOver={this.props.lengthColorToggles}
                            onMouseLeave={this.props.lengthColorOffToggles}
                        >
                            {this.props.lengthStatus || this.props.lengthColorToggle ?

                                <img src={Length2} className="Length1" alt="length"/>

                                :

                                <img src={Length1} className="Length1" alt="length"/>

                            }
                            <div className={this.props.lengthStatus || this.props.lengthColorToggle ? "LengthColor" : "Length"}>Length</div>
                        </div>
                        <div className={this.props.volumeColorToggle || this.props.temperatureStatus ? "TempOverOn" : "Image2"}
                            onClick={this.props.temperatureStatu}
                            onMouseOver={this.props.volumeColorToggles}
                            onMouseLeave={this.props.volumeColorOffToggles}
                        >
                            {this.props.temperatureStatus || this.props.volumeColorToggle ?
                                <div>
                                    <img src={Temp2} className="Temp1" alt="temperature"/>
                                </div>
                                :
                                <div>
                                    <img src={Temp1} className="Temp1" alt="temperature"/>
                                </div>
                            }
                            <div className={this.props.temperatureStatus || this.props.volumeColorToggle ? "TemperatureColor" : "Temperature"}>Temperature</div>
                        </div>
                        <div className={this.props.temperatureColorToggle || this.props.volumeStatus ? "VolumeOverOn" : "Image3"}
                            onClick={this.props.volumeStatu}
                            onMouseOver={this.props.temperatureColorToggles}
                            onMouseLeave={this.props.temperatureColorOffToggles}>
                            {this.props.volumeStatus || this.props.temperatureColorToggle ?
                                <div>
                                    <img src={Volume1} className="Volume1" alt="volume"/>
                                </div>
                                :
                                <div>
                                    <img src={Volume2} className="Volume1" alt="volume"/>
                                </div>
                            }
                            <div className={this.props.volumeStatus || this.props.temperatureColorToggle ? "VolumeColor" : "Volume"}>Volume</div>
                        </div>
                        <div className={this.props.weightColorToggle || this.props.weightStatus ? "WeightOverOn" : "Image4"}
                            onClick={this.props.weightStatu}
                            onMouseOver={this.props.weightColorToggles}
                            onMouseLeave={this.props.weightColorOffToggles}>
                            {this.props.weightStatus || this.props.weightColorToggle ?
                                <div>
                                    <img src={Weight2} className="Weight1" alt="Weight"/>
                                </div>
                                :
                                <div>
                                    <img src={Weight1} className="Weight1" alt="Weight"/>
                                </div>
                            }
                            <div className={this.props.weightStatus || this.props.weightColorToggle ? "WeightColor" : "Weight"}>Weight</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus, state.lengthColorToggle, state.temperatureColorToggle, state.volumeColorToggle);
    return {
        lengthStatus: state.lengthStatus,
        volumeStatus: state.volumeStatus,
        temperatureStatus: state.temperatureStatus,
        weightStatus: state.weightStatus,
        lengthColorToggle: state.lengthColorToggle,
        temperatureColorToggle: state.temperatureColorToggle,
        volumeColorToggle: state.volumeColorToggle,
        weightColorToggle: state.weightColorToggle,
    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        volumeStatu: function () {
            dispatch(volumeStatus());
        },
        legthStatus: function () {
            dispatch(legthStatus());
        },
        temperatureStatu: function () {
            dispatch(temperatureStatus());
        },
        weightStatu: function () {
            dispatch(weightStatus());
        },
        lengthColorToggles: function () {
            dispatch(lengthColorToggle());
        },
        volumeColorToggles: function () {
            dispatch(volumeColorToggle());
        },
        temperatureColorToggles: function () {
            dispatch(temperatureColorToggle());
        },
        weightColorToggles: function () {
            dispatch(weightColorToggle());
        },
        lengthColorOffToggles: function () {
            dispatch(lengthColorOffToggle());
        },
        volumeColorOffToggles: function () {
            dispatch(volumeColorOffToggle());
        },
        temperatureColorOffToggles: function () {
            dispatch(temperatureColorOffToggle());
        },
        weightColorOffToggles: function () {
            dispatch(weightColorOffToggle());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageType)