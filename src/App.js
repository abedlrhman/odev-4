import react,{ Component } from 'react';
import {Comment} from './components/comment/index';
import {AddComment} from './components/addComment/index';
import './App.css';


class App extends Component {

  state = {
    comments: [],
    commentValue: "",
    vote: 0,
    errorMessage: "",
    textAreaValue: "",
  }
  
  handleComment = () => {

    if(this.state.commentValue.length < 4 || this.state.vote === 0) {
      
        this.setState({
          ...this.state,
          errorMessage : 'lutfen duzgun bir yorum yapin'
        })
      
    } else {



      const newState = this.state;

      newState.comments.push({ 
          text: this.state.commentValue, 
          vote: this.state.vote ,
          id : this.state.comments.length + 1
      });
      newState.commentValue = "";
      newState.vote = 0;
      newState.errorMessage = "";
      newState.textAreaValue = "";

      this.setState({
        ...newState
      });
    }
    
  }

  commentFromAddComment = (n) => this.setState ({
    ...this.state,
    commentValue: n
    
  })

  voteFromAddComment = (v) => this.setState({
    ...this.state,
    vote : v
  })

  setTextAreaValue = (value) => this.setState({
    ...this.state,
    textAreaValue: value
  })
  
  
  render() {

    return (
      <div className="app">
        <div className="content">
          <h1>yorumlar</h1>
          <div>
            {this.state.comments.length === 0 ?
              (<p>hic yorum yok</p> ) :
              <Comment 
              comments = {this.state.comments}
              />
            }
            
          </div>
          <div>
            <h2>yorum ekle</h2>
            <div>{this.state.errorMessage}</div>
            <AddComment 
              handleBlur = { (n) => this.commentFromAddComment(n) }
              vote = { (v) => this.voteFromAddComment(v) } 
              textAreaValue = {this.state.textAreaValue}
              setTextAreaValue = {(value) => this.setTextAreaValue(value)}
              />
            <button onClick= {this.handleComment} >yorum yap</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
