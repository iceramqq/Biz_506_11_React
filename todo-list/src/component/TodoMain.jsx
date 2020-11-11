import React, { Component } from "react";
import "../css/TodoMain.css";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

/**
 * class 방식의 component
 * 반드시 react component 클래스를 상속받아야 한다
 * render(  )method를 사용하여 실제 view를 구현하도록 되어있다
 * 함수방식에서 바로 나타나던 return문이 render() method 내부에 위치한다
 */
class todoMain extends Component {
  id = 3;
  // class 방식에서 state 변수 선언하기
  state = {
    todoList: [
      { id: 0, text: "오늘은 빼빼로데이", isComplete: false },
      { id: 1, text: "오늘은 수요일", isComplete: true },
      { id: 2, text: "TODO 리스트 만드는 날", isComplete: false },
    ],
  };

  /**
   *
   */
  onToggle = (id) => {
    const { todoList } = this.state;
    const compTodoList = todoList.map((todo) => {
      if (todo.id === Number(id))
        return { ...todo, isComplete: !todo.isComplete };
      else return todo;
    });
    /**
     * 클래스방식 에서는 state변수를 setting
     */
    this.setState({ todoList: compTodoList });
  };

  onCreate = (todo) => {
    const newTodoList = [
      ...this.state.todoList,
      { id: this.id++, text: todo, isComplete: false },
    ];
    this.setState({ todoList: newTodoList });
  };

  onDeleteItem = (id) => {
    const deleteTodoList = this.state.todoList.filter((todo) => {
      if (todo.id !== Number(id)) return todo;
    });
    this.setState({ todoList: deleteTodoList });
  };

  render() {
    return (
      <main className="todo-main">
        <h3>To-Do list</h3>
        <TodoInsert onCreate={this.onCreate} />
        <TodoList
          todoList={this.state.todoList}
          onToggle={this.onToggle}
          onDeleteItem={this.onDeleteItem}
        />
      </main>
    );
  }
}

export default todoMain;
