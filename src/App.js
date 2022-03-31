import './App.css';
import { Users } from './users';

function App() {
  return (
    <div className="App">
      <div className="max-w-max mx-auto">
        <input type="text" placeholder="Search..." className="border-2 rounded-md p-3 border-gray-400 mt-12 focus:placeholder:text-zinc-900" />
      </div>

      <ul className="list">
        {Users.map((user) => (
          <li className="listItem">{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
