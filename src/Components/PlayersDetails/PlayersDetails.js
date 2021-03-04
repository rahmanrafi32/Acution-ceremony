import { useEffect, useState } from 'react';
import fakeData from '../../fakePlayerInfo/fakePlayerInfo.json';
import ClubPlayer from '../ClubPlayer/ClubPlayer';
import PlayersInfo from '../PlayersInfo/PlayersInfo';
import './PlayersDetails.css';

const PlayersDetails = () => {
    const [playersDetails,setPlayersDetails] = useState([]);
    useEffect(()=>{
        setPlayersDetails(fakeData.playerInfo)
      },[])
      
      const [clubPlayer,setClubPlayer]=useState([])
      
      const handleClick = (player) =>{
          const newClubPlayer = [...clubPlayer,player]
          setClubPlayer(newClubPlayer);
      }
      
    return (
      <div className='d-flex justify-content-between'>
          <div className='player-details'>
              {
                  playersDetails.map(player=><PlayersInfo player={player} click = {handleClick} />)
              }
          </div>
          <div className='club-details'>
             <ClubPlayer addedPlayer = {clubPlayer}/>
          </div>
      </div>
    );
};

export default PlayersDetails;