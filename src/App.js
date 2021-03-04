import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlayersDetails from './Components/PlayersDetails/PlayersDetails';

function App() {
  
  return (
    <div>
      <div className='text-center p-5'>
        <h1 className='text-muted'>Welcome to <br/>Bangobondhu t20 Cricket Tournament <br/>Player Auction Ceremony 2021</h1>
      </div>
      <div className='player-list'>
        <h1 className='text-muted'>Players List</h1>
      <PlayersDetails />
      </div>
    </div>
  );
}

export default App;
