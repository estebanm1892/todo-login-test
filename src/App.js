import { useAuth0 } from '@auth0/auth0-react';

import './App.css';
import { Title } from './components/Title/title';
import { TodoInput } from './components/TodoInput/todoInput';
import { TodoList } from './components/TodoList/todoList';
import { LoginButton } from './login';
import logo from './logo.svg';
import { Profile } from './profile';
import { Todo } from './components/Todo';

function App() {
  const { isAuthenticated } = useAuth0();
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
                <TodoInput />
                <TodoList>
                  <Todo />
                  <Todo />
                  <Todo />
                </TodoList>
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

