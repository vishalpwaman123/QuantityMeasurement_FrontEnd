import {LENGTH} from './QuantityType'
import {VOLUME} from './QuantityType'
import {TEMPERATURE} from './QuantityType'
import {WEIGHT} from './QuantityType'
import {FIRSTFUNCTION} from './QuantityType'
import {SECONDFUNCTION} from './QuantityType'
import {LENGTHTOGGLE} from './QuantityType'
import {VOLUMETOGGLE} from './QuantityType'
import {TEMPERATURETOGGLE} from './QuantityType'
import {WEIGHTTOGGLE} from './QuantityType'
import {LENGTHTOGGLEOFF} from './QuantityType'
import {VOLUMETOGGLEOFF} from './QuantityType'
import {TEMPERATURETOGGLEOFF} from './QuantityType'
import {WEIGHTTOGGLEOFF} from './QuantityType'
 
export  const legthStatus = () => {
    return {
        type : LENGTH
    }
}

export  const volumeStatus = () => {
    return {
        type : VOLUME
    }
}

export  const temperatureStatus = () => {
    return {
        type : TEMPERATURE
    }
}

export  const weightStatus = () => {
    return {
        type : WEIGHT
    }
}

export  const FirstFunction = (value) => {
    return {
        type : FIRSTFUNCTION,
        values : value 
    }
}

export  const SecondFunction = (value) => {
    return {
        type : SECONDFUNCTION,
        values : value 
    }
}


export  const lengthColorToggle = () => {
    return {
        type : LENGTHTOGGLE
    }
}

export  const volumeColorToggle = () => {
    return {
        type : VOLUMETOGGLE
    }
}

export  const temperatureColorToggle = () => {
    return {
        type : TEMPERATURETOGGLE
    }
}

export  const weightColorToggle = () => {
    return {
        type : WEIGHTTOGGLE
    }
}

export  const lengthColorOffToggle = () => {
    return {
        type : LENGTHTOGGLEOFF
    }
}

export  const volumeColorOffToggle = () => {
    return {
        type : VOLUMETOGGLEOFF
    }
}

export  const temperatureColorOffToggle = () => {
    return {
        type : TEMPERATURETOGGLEOFF
    }
}

export  const weightColorOffToggle = () => {
    return {
        type : WEIGHTTOGGLEOFF
    }
}