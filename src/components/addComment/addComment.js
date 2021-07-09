import { useState } from "react";
import ReactStars from "react-rating-stars-component";


function AddComment(props) {

  const ratingChanged = (newRating) => {
    props.vote(newRating)  
  };

  const handleChange = (e) => {
    props.setTextAreaValue(e.target.value);
  }
  
  return (
    <div>

      <textarea value={props.textAreaValue} onChange={ e => handleChange(e) } onBlur={() => props.handleBlur(props.textAreaValue)}/>
      
      <div className="comment-stars">
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={34}
            activeColor="#ffd700"
          />
      </div>

    </div>
  )
}

export default AddComment
