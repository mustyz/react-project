import React from 'react';
import first from './images/1.jpeg';
import second from './images/2.jpeg';
import third from './images/3.jpeg';
import fourth from './images/4.jpeg';
import fifth from './images/5.jpeg';
import sixth from './images/6.jpeg';
import card from './Card';
import text from './Text';

import './App.css';


const Text  = (props) => {
  return(
    <div className = "card_text">
      <h4>{props.text}</h4>
      <span><p>{props.topic}</p></span>
    </div>
  )
}

const Card = (props) => {
  return (

    <div className = "card">
      <div className = "card_img">
        <img src = {props.pic} />
        </div>
        <Text text = {props.text} topic = {props.topic} />
    </div>
  )
}




class App extends React.Component {
  render (){
    return (
    <div className = "App">
           <h3>News Headlines</h3>

            <Card
             pic = {first} text = "A blue flower" 
             topic = "COOL PICTURES"
    />

             <Card
            pic = {second} text = "A cool Picture" 
            topic = "MORE COOL PICTURES"
    />

             <Card
              pic = {third} text = "An even cooler picture" 
              topic = "EVEN MORE COOL PICTURES"
    />

<div/>

    <div>
    <h3>Sports Headlines</h3>

    <Card
    pic = {fourth} text = "An even cooler picture" topic = "EVEN MORE COOL PICTURES"
    />

   <Card
    pic = {fifth} text = "An even cooler picture" topic = "EVEN MORE COOL PICTURES"
    />

   <Card
    pic = {sixth} text = "An even cooler picture" topic = "EVEN MORE COOL PICTURES"
    />

    </div>

    </div>
  );
}
}

export default App;
