import React, {useEffect, useState} from 'react'
import './History.scss'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import  userService from '../../Services/userService'

const user_service = new userService();

export default function History(props) {

    const [notes, setNotes] = useState([]);

    useEffect(() => {

        user_service.getNote()
        .then(data => {
            console.log(data.data.data);
            setNotes(data.data.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, []);

    const Notes = notes.map(note =>
        
        <div className="getDataNote">
            <div className="Index1">{note.id}</div>
            <div className="MeasurementType1">{note.conversionType}</div>
            <div className="conversionType1">{note.measurementType}</div>
            <div className="InputNumber1">{note.value}</div>
            <div className="Result1">{note.result}</div>
        </div>
    )

    return (

        <div className="GetData">
            <div className="HTitle">
            <Button 
                variant="dark"
                className="Back"
                href="/">Back</Button>{' '}
            <div className="HistoryTitle">History</div>
            </div>
            <div className="HeaderTitle">
                <div className="Index">Index No</div>
                <div className="MeasurementType">Measurement Type</div>
                <div className="conversionType">Conversion Type</div>
                <div className="InputNumber">Input Number</div>
                <div className="Result">Result</div>
            </div>
            <div >
            {Notes}
            </div>
        </div>

    );

}