import './CardList.css'
import React from 'react';


function Card({user}){
    const fullName = user.firstName + " " + user.lastName

    return(
        <div className="Card">
            <div className='Image-wrap'>
                <img src={user.image} alt="React Bootstrap logo"/> 
            </div>
                <h2>{fullName}</h2>
                <p>{user.position}</p>
                <p>{user.location}</p>
            
        </div>
    )
}

export default Card;