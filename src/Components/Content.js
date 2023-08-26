import React from 'react'
function Content(props) {
  return (
    <div className="block"><img className="num" src={props.img} alt={props.nme}/><h4>{props.hding}</h4>
    <p>{props.p}</p>
    </div>
  );
}

export default Content
