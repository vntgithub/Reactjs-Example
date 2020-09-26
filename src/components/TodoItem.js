import React, {Component} from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import check from '../img/check.svg';
import checkComplete from '../img/check (1).svg';
class TodoItem extends Component {
  render(){
      let url = check;
      if(this.props.item.isComplete)
        url = checkComplete;
    return (
      <div className={classNames('TodoItem',{isComplete: this.props.item.isComplete})}>
          <img onClick={this.props.onClick} className="imgcheck" src={url} alt=""/>
          <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
