import React, { useEffect, useState, useContext} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import volunteerImg from '../../fakeData/image/extraVolunteer.png'
import './volunterevent-style.css'

const VolunteerEvent = () => {

    const { allLogin } = useContext(UserContext)
    const [volunteerEvents, setVolunteerEvents] = useState([])
    const [loggedInUser, setLoggedInUser] = allLogin

    useEffect(() => {
        fetch('https://cryptic-headland-36065.herokuapp.com/getvolunteer?email='+loggedInUser.email)
        .then(response => response.json())
            .then(data => setVolunteerEvents(data))
    }, [volunteerEvents])

    // delete volunteer event
    const deleteVolunEvent = id => {
        console.log(id)
        fetch(`https://cryptic-headland-36065.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                   alert("Delete Successfully.")
                }
            })
    }
    
    return (
        <Container>
            <Row>
                {
                    volunteerEvents.map(volunEvent => 
                        <Col md={6} key={volunEvent._id}>
                            <Row>
                                <div className="d-flex bgcolor" >
                                  
                                        <img className="volun__img" src={volunteerImg} alt="volun" />
                                 
                                    
                                    <div className="volunteer__details">
                                        {/* {console.log(volunEvent._id)} */}
                                        <h4 className="volunteer__title">{volunEvent.volunteer}</h4>
                                            <p className="volunteer__date">{volunEvent.date}</p>
                                        <button onClick={()=>deleteVolunEvent(volunEvent._id)} className="volunteer-btn ml-auto mt-5 text-center">Cancel</button>
                                     </div>
                                 
                                </div>
                            </Row>
                        </Col>
                    )
                }
               
            </Row>
        </Container>
    );
};

export default VolunteerEvent;