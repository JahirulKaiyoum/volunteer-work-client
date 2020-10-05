import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';

const UserActivity = (props) => {
    const { eventName, date, _id, img } = props.activity;
    console.log(props.activity);

    const handleDelete = props.handleDelete;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className='col-md-6'>
            <div className='row d-flex'>
                <div className='col-md-6'>
                <img src={img} alt='images'/>
                </div>
                <div className='col-md-6'>
                <h3> {eventName}</h3>
                <p>{(new Date(date).toDateString('dd/MM/YYYY'))}</p>
                <Button onClick={()=>handleDelete(_id)}>Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default UserActivity;