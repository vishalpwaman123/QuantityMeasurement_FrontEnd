import { volumeStatus } from './QuantityAction'
import { LENGTH } from './QuantityType'
import { VOLUME } from './QuantityType'
import { TEMPERATURE } from './QuantityType'
import { LENGTHTOGGLE } from './QuantityType'
import { VOLUMETOGGLE } from './QuantityType'
import { TEMPERATURETOGGLE } from './QuantityType'
import { LENGTHTOGGLEOFF } from './QuantityType'
import { VOLUMETOGGLEOFF } from './QuantityType'
import { TEMPERATURETOGGLEOFF } from './QuantityType'

const initialState = {
    lengthStatus: true,
    volumeStatus: false,
    temperatureStatus: false,
    lengthColorToggle: false,
    volumeColorToggle: false,
    temperatureColorToggle: false,

}

const quantityReducer = (state = initialState, action) => {

    //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);

    switch (action.type) {

        case LENGTH:
            //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
            return {
                ...state,
                lengthStatus: !state.lengthStatus,
                volumeStatus: false,
                temperatureStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: false,

            }

        case VOLUME:
            //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
            return {
                ...state,
                volumeStatus: !state.volumeStatus,
                lengthStatus: false,
                temperatureStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: false,

            }

        case TEMPERATURE:
            //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
            return {
                ...state,
                temperatureStatus: !state.temperatureStatus,
                lengthStatus: false,
                volumeStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: false,
            }

        case LENGTHTOGGLE:
            //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
            return {
                ...state,
                // temperatureStatus: false ,
                // lengthStatus: false,
                // volumeStatus: false,
                lengthColorToggle: true,
                volumeColorToggle: false,
                temperatureColorToggle: false,
            }

        case VOLUMETOGGLE:
            //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
            return {
                ...state,
                // temperatureStatus: false,
                // lengthStatus: false,
                // volumeStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: true,
                temperatureColorToggle: false,
            }

        case TEMPERATURETOGGLE:
            //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
            return {
                ...state,
                // temperatureStatus: false,
                // lengthStatus: false,
                // volumeStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: true,
            }

            case LENGTHTOGGLEOFF:
                //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
                return {
                    ...state,
                    // temperatureStatus: false ,
                    // lengthStatus: false,
                    // volumeStatus: false,
                    lengthColorToggle: false,
                    volumeColorToggle: false,
                    temperatureColorToggle: false,
                }
    
            case VOLUMETOGGLEOFF:
                //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
                return {
                    ...state,
                    // temperatureStatus: false,
                    // lengthStatus: false,
                    // volumeStatus: false,
                    lengthColorToggle: false,
                    volumeColorToggle: false,
                    temperatureColorToggle: false,
                }
    
            case TEMPERATURETOGGLEOFF:
                //console.log(state.lengthStatus, state.volumeStatus, state.temperatureStatus);
                return {
                    ...state,
                    // temperatureStatus: false,
                    // lengthStatus: false,
                    // volumeStatus: false,
                    lengthColorToggle: false,
                    volumeColorToggle: false,
                    temperatureColorToggle: false,
                }

        default: return state;

    }

}

export default quantityReducer;