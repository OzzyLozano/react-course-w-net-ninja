import Navbar from './Navbar';
import Home from './Home';

function App() {
  const person = {
    name: 'Ozzy',
    age: 20
  }

  return (
    <div className="App">
      <Navbar/>
      <div className="content py-3">
        <Home/>
        <p className="lead">{ person.name } is { person.age } years old.</p>
      </div>
    </div>
  );
}

export default App;
