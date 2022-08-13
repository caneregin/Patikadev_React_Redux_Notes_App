import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FormNotes from './components/Form';
import List from './components/List';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <FormNotes/>
      <List/>
    </div>
  );
}

export default App;
