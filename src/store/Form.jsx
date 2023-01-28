import React, {useState} from 'react';

const Form = ({store}) => {
  const [comment, setComment] = useState('');  

  const handleSubmit = (e, store) => {
    e.preventDefault();
    store.postComment(comment);
    setComment('');
  }

  return (
    <form>
        <input
              value={comment}
              id="comment"
              type="text"
              placeholder="Write a comment..."
              onChange= {e => setComment(e.target.value)}
         />
        <button
          className="submit" 
          onClick={(e) => handleSubmit(e, store)}>
          Submit 
        </button>
    </form>
  );
}

export default Form;
