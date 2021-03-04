import React from 'react';

const ClubPlayer = (player) => {
    const clubPlayer = player.addedPlayer;
    const total= clubPlayer.reduce((accumulator,current)=> accumulator+current.Salary,0)
    return (
        <div>
             <h2 className='p-2'>Player Added in club: {clubPlayer.length}</h2>
                <table class="table table-hover">
                 <thead>
                   <tr>
                     <th scope="col">Player Name</th>
                     <th scope="col">Transfer Cost</th>
                   </tr>
                 </thead>
                    {
                    clubPlayer.map(player =>
                        <tbody>
                                <tr>
                                <th>{player.name} </th>
                                <td>${player.Salary}</td>
                                </tr>
                        </tbody>
                   )
                     }
                     <tbody>
                        <tr>
                            <th className='text-danger'>Total Budget:</th>
                            <td>${total}</td>
                         </tr>
                    </tbody>
               </table>
        </div>
    );
};

export default ClubPlayer;