import React, {Component} from 'react';
import { ListGroupItem } from 'react-bootstrap';

class CommentsListItem extends Component {

  render() {
      const { comment, created_at } = this.props.comment;
      let ts= new Date(created_at);
      let date = ts.toLocaleString()
    return(
        <ListGroupItem header={date}> {comment}</ListGroupItem>
    )
  }
}

export default CommentsListItem;
