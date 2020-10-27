import React from 'react';
import './Quantity.scss'
import ImageType from '../Components/ImageType'
import Counter from '../Components/Counter'

export default class Quantity extends React.Component {

    // constructor(props) {
    //     super(props);

    // }

    SignOut = () => {
        this.props.history.push("/history");
      }

    render() {
        return (
            <div className="MainContainer">
                <div className="NavBar1">
                    <div className="Title">Quanment</div>
                    <div 
                        className="History"
                        onClick={() => { this.SignOut() }}>
                            History</div>
                </div>
                <div className="NavBar2">
                    <div className="subTitle">Welcome To Quantity Measurement</div>
                </div>
                <div className="SelectorSection">
                    <div className="ImageTitle">
                        <div className="ChooseType">CHOOSE TYPE</div>
                    </div>
                    <div className="Selector">
                        <ImageType />
                        <Counter />
                    </div>
                </div>
            </div>
        )
    }

}