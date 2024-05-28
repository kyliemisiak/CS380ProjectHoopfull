// imports
import axios from 'axios'
import React, {useState} from "react";

function Teams(props) {
    const [data, setData] = useState([])
    const teamID = props.teamID;
    
    const teams = () => {
        axios.post('http://localhost:8801/login', {
            teamID: teamID,})
        .then(res => {
            if(res.data.message){
                res.console.log(data)
            }else {
                setData(res.data);
            }
         })
        .catch(err => console.log(err));
   
    }
    return (
        <div className="teams">
            <section className="window">
                <h1 className="title">Team</h1>
            </section>
            {teams}
            <table>
                <thead>
                    <th>Name</th>
                    <th>Number</th>
                </thead>
            </table>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td>{d.playerName}</td>
                        <td>{d.playerID}</td>
                    </tr>
                ))}
            </tbody>
            <section className="window">
                <h1>2</h1>
            </section>
        </div>
    );

}

export default Teams;