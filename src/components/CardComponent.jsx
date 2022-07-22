import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardComponent = ({title,img,description}) => {
  return (
    <div>
        <Card style={{ width: '18rem' , margin:'5vh'}}>
            <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                <Button variant="primary">Watch it Now</Button>
                </Card.Body>
        </Card>
    </div>
  )
}

export default CardComponent