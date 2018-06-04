import React from 'react';
import CommentsListItem from './CommentsListItem'
import { ListGroup } from 'react-bootstrap';

const CommentsList = ({ comments }) => {

let order = comments.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.created_at) - new Date(a.created_at);
});

  const renderComments = order.map(comment =>
     <CommentsListItem comment={comment}  key={comment.id}/>
  );

  return (
    <div className="container-fluid text-left">
      <ListGroup>
        {renderComments}
      </ListGroup>
    </div>
  );
};

export default CommentsList;
