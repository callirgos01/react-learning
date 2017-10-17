import React from 'react';
import ReactPDF from 'react-pdf';
import fileName from '../assets/CarlosCallirgos.pdf'

const Resume = () => (
    <div className="resume">
        <ReactPDF file={fileName}/>
    </div>
);

export default Resume;