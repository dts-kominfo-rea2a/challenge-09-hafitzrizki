// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className='card'>
            <img src={props.data.photo} alt={props.data.name}/>
            <div className='wrap-text'>
                <h2>{props.data.name}</h2>
                <p>{props.data.phone}</p>
                <p>{props.data.email}</p>
            </div>
        </div>
    )
}

export default Contact;