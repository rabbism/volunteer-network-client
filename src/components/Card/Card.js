import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../fakeData/image/animalShelter.png'
import './card-style.css'

const Card = ({volunteer : { volunteerId, name, imageUrl}}) => {
    return (
        <Col md={3}>
            <Link to={`/register/${volunteerId}`}>
                <div className="card card-width mt-5">
                    <img src={imageUrl} className="card-img-top" alt="" />
                    <div className="card-body margin-top">
                        <h6 className="card-title">{name}</h6>
                    </div>
                </div>
        </Link>
           
        </Col>
    );
};

export default Card;