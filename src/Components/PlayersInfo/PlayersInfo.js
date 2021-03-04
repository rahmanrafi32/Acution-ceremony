import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const PlayersInfo = (props) => {
    const {name,age,Salary,Team,Roll, img, key}=props.player;
    const id = key;
    const [isClicked, serClick]=useState(false)
    var color ={
        backgroundColor: 'rgb(255, 252, 249, 0.705)'
    }
    return (
        <div className='player'>
            <div className="card m-3 shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
             <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body p-5" style={color}>
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Team: {Team}</p>
                    <p className="card-text">Roll: {Roll}</p>
                    <p className="card-text">Transfre Money: ${Salary}</p>
                    <p className="card-text"></p>
                    <button 
                        disabled={isClicked}
                        onClick={()=>{
                            props.click(props.player);
                            serClick(true)}}
                        className="btn btn-primary p-2"> 
                        {
                            isClicked?`Already added`:`Add player `
                        } <span>{<FontAwesomeIcon icon={faUserPlus}/>}</span>   
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayersInfo; 