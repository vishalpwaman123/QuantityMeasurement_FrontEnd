import React from 'react';
import './Quantity.scss'
import ImageType from '../Components/ImageType'

export default class Quantity extends React.Component {

    render() {
        return (
            <div className="MainContainer">
                <div className="NavBar1">
                    <div className="Title">Quanment</div>
                    <div className="History">History</div>
                </div>
                <div className="NavBar2">
                    <div className="subTitle">Welcome To Quantity Measurement</div>
                </div>
                <div className="SelectorSection">
                <div className="ImageTitle">
                        <div className="ChooseType">CHOOSE TYPE</div>
                    </div>
                <ImageType/>
                </div>
            </div>
        )
    }

}