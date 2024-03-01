import { useAuth0 } from '@auth0/auth0-react';

import './App.css';
import { Title } from './components/Title/title';
import { TodoInput } from './components/TodoInput/todoInput';
import { TodoList } from './components/TodoList/todoList';
import { LoginButton } from './login';
import logo from './logo.svg';
import { Profile } from './profile';
import { useEffect, useState } from 'react';

function App() {
  const { isAuthenticated } = useAuth0();
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: true
    },
    {
      id: 2,
      title: "walk the dog",
      completed: false
    },
    {
      id: 3,
      title: "make a coffee",
      completed: true
    },
    {
      id: 4,
      title: "wash the dishes",
      completed: false
    },
  ]);

  const [activeFilter, setActiveFilter] = useState('all');

  const [filteredTodos, setFilteredTodos] = useState(todos);


  // add element to the list based in the last id
  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);

    setTodos(todoList);
  }

  // update the list based in the id and the completed status is changed
  const handleSetComplete = (id) => {
    const updateList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo
    })
    setTodos(updateList);
  }

  const handleelete = (id) => {
    const updateList = todos.filter(todo => todo.id !== id);
    setTodos(updateList);
  }


  // filter the list based in the active filter

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  };

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }

  }, [activeFilter, todos]);

  return (
    <div className="App">


      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-white">TODO APP</h1>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <div href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
              {isAuthenticated ? (
                <li>
                  <Profile />
                </li>
              ) : (
                <li>
                  <LoginButton />
                </li>
              )}
            </div>

          </ul>

        </div>
      </nav>

      <header className="App-header">
        <div className="min-h-screen w-full items-center justify-center py-20 px-5 flex ">
          <div className="container flex flex-col max-w-xl">
            {isAuthenticated ? (
              <>
                <Title />
                <TodoInput addTodo={addTodo} />
                <TodoList
                  todos={filteredTodos}
                  activeFilter={activeFilter}
                  handleSetComplete={handleSetComplete}
                  handleelete={handleelete}
                  showAllTodos={showAllTodos}
                  showActiveTodos={showActiveTodos}
                  showCompletedTodos={showCompletedTodos}
                  handleClearComplete={handleClearComplete}
                />
              </>
            ) : (
              <h1>Loging first</h1>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

