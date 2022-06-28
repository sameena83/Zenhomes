import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './style.css'

function SubEvents() {
    const data = [
        {
            image: "https://www.visitstockholm.com/media/images/c4e9cb12970f45859c5a6af1957e7254.width-1280.jpg",
            title: "Forever Piaf",
            topic:"FAMILY • MUSIC • STAGE & FILM",
        },
        {
            image: "https://www.visitstockholm.com/media/images/f96c2a01020b447d90f669c45778b265.width-1280.jpg",
            title: "Apocalyptica and Epica",
            topic:"MUSIC,FILM",
        },
        {
            image: "https://www.visitstockholm.com/media/images/bdea6e985ac1442498d0cc1c6ce7d5f7.width-1280.jpg",
            title: "Crossroads – Symphonic Rock In Concert",
            topic:"FAMILY,MUSIC",
        },
        {
            image: "https://www.visitstockholm.com/media/images/bdea6e985ac1442498d0cc1c6ce7d5f7.width-1280.jpg",
            title: "Crossroads – Symphonic Rock In Concert",
            topic:"FAMILY,MUSIC",
        },
       
       
    ]
  return (

    <div className="event_sub">
        {data.map((da)=>(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={da.image} />
            <Card.Body>
              <Card.Title>{da.title} </Card.Title>
              <Card.Text>
                {da.topic}
              </Card.Text>
              <Button variant="primary">More Info</Button>
            </Card.Body>
          </Card>

        ))}
       
  
    </div>
  )
}

export default SubEvents
