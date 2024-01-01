
import './App.css'
import AddTodo from './components/AddTodo'
import TodoAssemble from './components/TodoAssemble'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Counter } from './components/TodoAssemble'


function App() {

  return (
    <Provider store={store}>
      <div className='p-12 flex flex-col justify-center items-center '>
        <AddTodo/>
        <TodoAssemble/>
        <Counter/>
      </div>
    </Provider>
  )
}

export default App
