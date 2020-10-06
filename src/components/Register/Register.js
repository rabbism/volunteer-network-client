import React, { useContext} from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Row , Col} from 'react-bootstrap';
import { UserContext } from '../../App';

const Register = () => {
    const history = useHistory()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://cryptic-headland-36065.herokuapp.com/addvolunteer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
        history.push('/volunteerEvents') 
    };
    const {id} = useParams();

    const { allLogin, allVolunteer } = useContext(UserContext)
    const [volunteers, setVolunteers] = allVolunteer
    const [loggedInUser, setLoggedInUser] = allLogin
    // console.log(id)

    const volunteerData = volunteers.find(volunteer => Number(volunteer.volunteerId) === Number(id))
   
   
    return (
        <div className="container">
            <Row >
                <Col md={6} className="mx-auto py-5">
                    <h3>Register as a Volunteer</h3>
                    <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Full name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="Name"
                                placeholder="Full Name"
                                defaultValue={loggedInUser.name}
                                ref={register({ required: true, maxLength: 80 })}
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                defaultValue={loggedInUser.email}
                                ref={register({ required: true, maxLength: 100 })}
                            />
                        </div>
                        <div>
                            <label>Date</label>
                            <input
                                className="form-control"
                                type="date"
                                name="date"
                                placeholder="Date"
                                defaultValue="test"
                                ref={register({ required: true })}
                            />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea
                             name="description" 
                             id="" 
                             cols="30" 
                             rows="3"
                             className="form-control"
                            ref={register({ required: true })}
                            ></textarea>
                           
                        </div>
                        <div>
                            <label>Volunteer name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="volunteer"
                                placeholder="volunteer name"
                                defaultValue={volunteerData.name}
                                ref={register({ required: true })}
                            />
                        </div>
                        <button className="btn btn-primary my-3 mx-auto" > Register </button>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Register;