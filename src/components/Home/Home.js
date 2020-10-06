import React, { useContext, useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from '../Card/Card'
import './home.style.css'
import { UserContext } from '../../App';

const Home = () => {
    const { allVolunteer} = useContext(UserContext)

    const [volunteers, setVolunteers] = allVolunteer
    return (
        <Container>
            <Row>
                <div className="d-flex flex-wrap">
                    {
                        volunteers.map((volunteer => <Card key={volunteer.volunteerId} volunteer={volunteer}/>))
                    }
                </div>
            </Row>
        </Container>
    );
};

export default Home;
