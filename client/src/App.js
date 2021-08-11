import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import AppContextProvider from './AppContext';

function App() {
  return (
    <AppContextProvider>
        <div className="App">
          <Dashboard />
        </div>
      </AppContextProvider>
  );
}

export default App;
