
import React from 'react';
import './Card.css';

import ImgGithub from './GitHub.png';
import ImgLinkdin from './Linkdin.png'

const ImgMap = {
    "github": ImgGithub,
    "linkdin": ImgLinkdin
}

function Card(props) {
  return (
    <div className={`link-card bg-${props.title}`}>
     <a href={props.link} className='hyperlink'>
     
     <div className='container'>
     
     <div>
     <img src={ImgMap[props.title]} className='card-img' />
     </div>

     <div className='handle-name'>
         <h3>{props.username}</h3>
     </div>

     </div>


     <div className='handle-description'>
         <p>{props.tagline}</p>
     </div>
    </a>

    </div>
  );
}

export default Card;
