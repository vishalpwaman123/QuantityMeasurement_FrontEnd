
import { LENGTH } from './QuantityType'
import { VOLUME } from './QuantityType'
import { TEMPERATURE } from './QuantityType'
import { FIRSTFUNCTION } from './QuantityType'
import { SECONDFUNCTION } from './QuantityType'
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
    FirstInput : 1,
    SecondInput : 1,
    FirstValue : 'Inch',
    SecondValue : 'Feet',
    unit1: ['Inch', 'Feet', 'Yard', 'Centimeter'],
    unit2: ['Celsius', 'Fahrenheit','Kelvin'],
    unit3: ['Liter', 'Gallon', 'MilliLiter'],
    options : ['Inch', 'Feet', 'Yard', 'Centimeter'],
    measurementType : 'length'
}
 
const quantityReducer = (state = initialState, action) => {

    switch (action.type) {

        case LENGTH:

            // if ( state.measurementType === '' ) {
            //     state.measurementType = 'length'
            // } else {
            //     state.measurementType = ''
            // }

            return {
                ...state,
                SecondInput : 1,
                FirstValue : 'Inch',
                SecondValue : 'Inch',
                lengthStatus: !state.lengthStatus,
                volumeStatus: false,
                temperatureStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: false,
                options : state.unit1,
                measurementType : 'length'
            }

        case VOLUME:

            // if ( state.measurementType === '' ) {
            //     state.measurementType = 'volume'
            // } else {
            //     state.measurementType = ''
            // }

            return {
                ...state,
                SecondInput : 1,
                FirstValue : 'Liter',
                SecondValue : 'Liter',
                volumeStatus: !state.volumeStatus,
                lengthStatus: false,
                temperatureStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: false,
                options : state.unit3,
                measurementType : 'volume'
            }

        case TEMPERATURE:

            // if ( state.measurementType === '' ) {
            //     state.measurementType = 'temperature'
            // } else {
            //     state.measurementType = ''
            // }    

            return {
                ...state,
                SecondInput : 1,
                FirstValue : 'Celsius',
                SecondValue : 'Celsius',
                temperatureStatus: !state.temperatureStatus,
                lengthStatus: false,
                volumeStatus: false,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: false,
                options : state.unit2,
                measurementType : 'temperature'
            }

        case LENGTHTOGGLE:

            return {
                ...state,
                lengthColorToggle: true,
                volumeColorToggle: false,
                temperatureColorToggle: false,
            }

        case VOLUMETOGGLE:

            return {
                ...state,
                lengthColorToggle: false,
                volumeColorToggle: true,
                temperatureColorToggle: false,
            }

        case TEMPERATURETOGGLE:

            return {
                ...state,
                lengthColorToggle: false,
                volumeColorToggle: false,
                temperatureColorToggle: true,
            }

            case LENGTHTOGGLEOFF:

                return {
                    ...state,
                    lengthColorToggle: false,
                    volumeColorToggle: false,
                    temperatureColorToggle: false,
                }
    
            case VOLUMETOGGLEOFF:

                return {
                    ...state,

                    lengthColorToggle: false,
                    volumeColorToggle: false,
                    temperatureColorToggle: false,
                }
    
            case TEMPERATURETOGGLEOFF:

                return {
                    ...state,

                    lengthColorToggle: false,
                    volumeColorToggle: false,
                    temperatureColorToggle: false,
                }

             case FIRSTFUNCTION :
                 return {
                     ...state,
                    FirstValue : action.values,
                 }   

             case SECONDFUNCTION :
                    return {
                        ...state,
                        SecondValue : action.values
                    }   
                    

        default: return state;

    }

}

export default quantityReducer;