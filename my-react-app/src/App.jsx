import './App.css'

function App() {
const todos = [
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
];

const newTodos = todos.map((todo) => {
let todoClass = "todo"

if(todo.favorite === true){
  todoClass = "todo selected"
}
return (
  <div className='todos'>
        <div className={todoClass}>
          <div className="favorite">
            <span>★</span>
          </div>
          <div className="todo-text">
            {todo.text}
          </div>
          <div className="actions">
            <span>❌</span>
          </div>
        </div>
      </div>
)
})


  return (
    <div className='app'>
      <div className='header'>
        Список дел
      </div>
      <div className='form'>
        <input placeholder='Введите текст...' type="text" />
        <button>Добавить</button>
      </div>
      <div className='todos'>
        {newTodos}
      </div>
    </div>
  )
}

export default App
