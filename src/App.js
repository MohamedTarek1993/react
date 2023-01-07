import './App.css';
import Welcome from './componenets/Welcome';
import WelcomeHooks from './componenets/WelcomeHook';
import Cards from './componenets/Cards'
function App() {
 const Myname = "hassan"
  function sayMyName(name){
    return <h3>say {name} </h3>
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1> {sayMyName(Myname)}</h1>
      
       <Welcome age="29" />

       < WelcomeHooks />
       <Cards />
      </header>
    </div>
  );
}

export default App;
