import React from 'react';
import CommentsListItem from './CommentsListItem'
import { ListGroup } from 'react-bootstrap';

const CommentsList = ({ comments }) => {

let order = comments.sort(function(a,b){
  return new Date(b.created_at) - new Date(a.created_at);
});

  const renderComments = order.map(comment =>
     <CommentsListItem comment={comment}  key={comment.id}/>
  );

  return (
    <div className="container-fluid text-center" style={{width: 600}}>
      {renderComments}
    </div>
  );
};

export default CommentsList;
