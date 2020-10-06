import React, { useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './admin-style.css'
import logo from '../../logo.png'
import { Link } from 'react-router-dom';

const Admin = () => {
    const [allVolunteers, setAllVolunteers] = useState([])
    useEffect(() => {
        fetch('https://cryptic-headland-36065.herokuapp.com/getAllVolunteer')
        .then(response => response.json())
        .then(data => setAllVolunteers(data))
    }, [allVolunteers])

    const deleteVolunteer = listId =>{
        console.log(listId)
        fetch(`https://cryptic-headland-36065.herokuapp.com/deleteVlunteerList/${listId}`, {
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
        <Container fluid={true} >
            <Row>
                <Col md={3}>
                    <div className="admin-sidebar">
                        <Link to="/"><img className="brand__img" src={logo} alt="logo" /></Link> 
                        <h6 className="my-3 text-primary">Volunteer register list</h6>
                        <button className="my-3 btn btn-primary">Add Event</button>
                    </div>
                </Col>
                <Col md={9}>
                    <h4 className="my-3 py-3">Volunteer register lists</h4>
                    <table className="table table-striped table-dark">
                        <thead>

                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Registered Date</th>
                                <th scope="col">Volunteer List</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allVolunteers.map(allVolunteer => 
                                    <tr key={allVolunteer._id}>
                                        <td>{allVolunteer.Name}</td>
                                        <td>{allVolunteer.email}</td>
                                        <td>{allVolunteer.date}</td>
                                        <td>{allVolunteer.volunteer}</td>
                                        <td >
                                            <button onClick={()=>deleteVolunteer(allVolunteer._id)} className="btn btn-danger ">Delete</button>
                                        </td>
                                    </tr>
                                
                                )
                            }
                            
                           
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;