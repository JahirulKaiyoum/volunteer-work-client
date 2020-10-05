import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Volunteers.css'

const Volunteers = (props) => {
    const { name, img ,event } = props.volunteer;
    //console.log(props.volunteer);
    const location = useLocation();

    const routeChange = () => {
        location.push('/registration')
    }
    return (

        <Link to={`/registration/${event}`}><div className="col-md-3" >
        <Card style={{ width: '16rem', height: '23.5rem' }}>
        <Card.Img variant="top" className="img-fluid card-img" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
        </div>
</Link>
        
        
    );
};

export default Volunteers;