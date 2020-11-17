import './App.css';

import MyPersonComponent from './components/MyPersonComponent';

function App() {
  return (
    <div className="App">
      <MyPersonComponent lastName="Doe" firstName="Jane" age={ 45 } hairColor="Black" />
      <MyPersonComponent lastName="Smith" firstName="John" age={ 88 } hairColor="Brown" />
      <MyPersonComponent lastName="Fillmore" firstName="Millard" age={ 50 } hairColor="Brown" />
      <MyPersonComponent lastName="Smith" firstName="Maria" age={ 62 } hairColor="Brown" />
    </div>
  );
}

export default App;
