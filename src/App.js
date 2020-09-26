import React, {Component} from 'react';
import './App.css';
import TodoItems from './components/TodoItem';
import done from './img/done.svg';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newItem: {title: '', isComplete: false},
      TodoItems: [
        {title: 'Go to school', isComplete: true},
        {title: 'Play game', isComplete: false},
        {title: 'Have lunch', isComplete: true},
        {title: 'Go to coffeshop', isComplete: true}
      ]
    }
    this.addItem = this.addItem.bind(this);
    this.getEnterKey = this.getEnterKey.bind(this);
  }
  itemOnclick(item){
    return (event) =>{
      const newTodoItem = [...this.state.TodoItems];
      const index = newTodoItem.indexOf(item);
      this.setState({
        TodoItems: [
          ...newTodoItem.slice(0, index),
          {...newTodoItem[index], isComplete: !newTodoItem[index].isComplete},
          ...newTodoItem.slice(index + 1)
        ]
      })
    }
  }
  addItem(event) {
    let content = event.target.value.trim();
    if(!content)
      return;
    this.setState({
      newItem: {...this.state.newItem, title: content}
    });
  }
  getEnterKey(event) {
    if(event.keyCode === 13){
      this.setState({
        TodoItems: [
          this.state.newItem,
          ...this.state.TodoItems
        ]
      });
      this.setState(
        {newItem: {title: '', isComplete:false}}
      );

    }
  }
  render(){
    return (
      <div className="App">
        <div className="header">
            <img src={done} alt="done" />
            <input type="text" 
              onChange={this.addItem} 
              onKeyUp={this.getEnterKey}
              placeholder="Add new item"
              value={this.state.newItem.title}
              />
        </div>
        {this.state.TodoItems.map((item, index) => <TodoItems onClick={this.itemOnclick(item)} item={item} key={index} />)}
      </div>
    );
  }
}

export default App;
