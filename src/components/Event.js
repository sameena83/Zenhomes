import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SubEvents from './SubEvents'
import './style.css'
function Event() {
  return (
    <div className="container mt-4">
        <h1 className="event" style={{alignSelf:"center"}}> Event Calendar</h1>
        <div className="container">
        <p>We  posts a wide variety of public events, exhibitions, sports events,<br/>
         tech meetups, festivals, and concerts with some of the world’s brightest stars</p>
        </div>
        <div className="section">
        <div className='left_section'>
            <img src="https://www.visitstockholm.com/media/images/lollapaloza_167190926_742664669774171_8025564.width-1280.jpg" alt="pic" style={{width:"90%"}}/>

        </div>
       
        <div className='right_section'>
            <div>
                <h4>1 JUL</h4>
                <h1>Lollapalooza Stockholm</h1>
                <div >
                    <ul className="options">
                        <li>FESTIVALS</li>
                        <li>MUSIC</li>
                    </ul>
                </div>
                <div>
                <FontAwesomeIcon icon="fa-solid fa-share-nodes" style={{color:"black"}} />
                <FontAwesomeIcon icon="fa-solid fa-plus" />
                <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                </div>

            </div>
            </div>


        </div>
       <div>
        <h2 className="mt-10">Check out for other similar events</h2>
        <div className='event_sub mt-5 ' >
        <SubEvents/>
        </div>
       </div>
    </div>
  )
}

export default Event