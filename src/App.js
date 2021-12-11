import { useState } from 'react';

import './App.css';
import { PassContext } from './Context/context';
import PassphraseForm from './Components/PassphraseForm/PassphraseForm ';
import { Content } from './Components/Content';


function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState('');
  const { user } = useState({email: "jan@kowalski.pl",
  isAdmin: false,})

  return (
    <div className="App">
       <PassContext.Provider value={{ isAuthenticated, setIsAuthenticated, user: user}}>
         { isAuthenticated ? <Content /> : <PassphraseForm />}
      </PassContext.Provider>

    </div>
  );
}

export default App;
