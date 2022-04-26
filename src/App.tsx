import {FC} from 'react';
import './App.scss';
import Balance from './components/Balance';
import Track from './components/track/Track';

const App: FC = () => {
  return (
    <div className="app">
      <Balance/>
      <Track/>
       <div className='btn'>
        <p>+</p>
      </div>
    </div>
  );
}

export default App;
