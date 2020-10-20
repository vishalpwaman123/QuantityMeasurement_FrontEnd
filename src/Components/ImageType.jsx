import React from 'react'
import '../Components/ImageType.scss'
import Length1 from '../Asserts/Length1.png'
import Length2 from '../Asserts/Length2.png'
import Volume1 from '../Asserts/Volume1.png'
import Volume2 from '../Asserts/Volume2.png'
import Temp1 from '../Asserts/Temp1.png'
import Temp2 from '../Asserts/Temp2.png'

export default class ImageType extends React.Component {

    render() {
        return (
            <div className="MainImageContainer">
                <div className="MainBlock">
                    
                    <div className="ImageContainer">
                        <div className="Image1"></div>
                        <div className="Image2"></div>
                        <div className="Image3"></div>
                    </div>
                </div>
            </div>
        )
    }
}