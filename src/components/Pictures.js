import React from 'react'
import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function Pictures() {
    const maintainanceData = [
        {
            image: "https://previews.123rf.com/images/alvinge/alvinge1111/alvinge111100084/11553710-a-broken-pipe-that-leaks-water-in-all-directions-.jpg",
            title: "Broken pipe near apartment",
            topic:"Request you to fix this as water is valuable,",
        },
        {
            image: "https://image.shutterstock.com/image-photo/broken-door-when-man-forgot-260nw-656931061.jpg",
            title: "My Apartment Door is damaged",
            topic:"I request you to fix this. My Address:First floor no 1122",
        },
        {
            image: "https://thumbs.dreamstime.com/z/full-garbage-bin-20565207.jpg",
            title: "Trash can full",
            topic:"Please remove trash from this bin",
        },
        {
            image: "https://media.istockphoto.com/photos/lots-of-cigarette-buds-on-sandy-background-picture-id187475970",
            title: "Request for immediate action",
            topic:"Folks are putting cigar buds,Kids cannot enjoy in the park ,please maintain it",
        },
       
       
    ]
  return (
    <>
    <div className="form-container mt-5" style={{marginLeft:"100px"}}>
    <Form>
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
   
    <Form.Control type="text"  name="name" placeholder="Enter Your Compaint" />
    
  </Form.Group>
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
   
    <Form.Control type="text" name="topic"  placeholder="Enter the details" />
    <Form.Text className="text-muted">
      Upload the photos
    </Form.Text>
  </Form.Group>

  
  <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary"  className="col-lg-6" type="submit">
    Submit
  </Button>
</Form>
</div>
    {maintainanceData.map((da)=>(
    <div className="pictures">
       
        <div className="left mt-5">
            <img src={da.image}  style={{ width:"400px"}}alt=""/>

        </div>
        <div className="right mt-5">
            <h3>
            {da.title}
            </h3>
            <p>{da.topic}</p>

        </div>
       
    </div>
     ))}
      </>
  )
 


    }