import ReactStars from "react-rating-stars-component";


function Comment(props) {
  return (
    <div>
      {props.comments.length > 0 ? 

        props.comments.map((comment) => (
          <div key = {comment.id}>
            <div className="commentText">{comment.text}</div>
            <div className="comment-stars">
              <ReactStars
                count={5}
                value={comment.vote}
                size={24}
                activeColor="#ffd700"
                edit={false}
                
              />
            </div>
            
          </div>
         ) )
                
      : console.log('error') }
    </div>
  )
}

export default Comment
