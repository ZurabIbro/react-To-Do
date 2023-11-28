import { useState } from 'react';
import './App.css'
import Header from './Header';
import Form from './form';
import Todos from './Todos';

function App() {
const [todos, setTodos] = useState([
  {
    text: "Купить бананы",
    favorite: false
  },
  {
    text: "Продать квартиру",
    favorite: true
  },
  {
    text: "Вычить уроки по Java",
    favorite: false
  },
]);

const makeFavorite = (i) => {
  const saveTodo = todos.map((item, index) => {
    if(i === index){
      return{
        ...item, 
        favorite: !item.favorite
    }
    }return item
  })
  setTodos(saveTodo)
}

const deleteTodo = (i) => {
  const filtered = todos.filter((todo, index) => {
    if(index === i){
      return false
    }
  return true  
  })
  setTodos(filtered)
}

const [text, setText] = useState("")

const addTodo = () => {
  setTodos([
    {
      text: text,
      favorite: false
    },
    ...todos
  ])
  setText("")
}
  return (
    <div className='app'>
      <Header/>
      <Form text={text} setText={setText} addTodo={addTodo}/>
      <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
