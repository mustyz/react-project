import React from 'react';


const Text  = (props) => {
    return(
      <div className = "card_text">
        <h4>{props.text}</h4>
        <span><p>{props.topic}</p></span>
      </div>
    )
  }



export default Text;
