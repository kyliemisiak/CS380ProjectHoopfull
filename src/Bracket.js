import bracket from '../src/imgs/HoopfullBraket.png'


function Bracket() {
    return (
      <div className="Map">
        <h1 className="title">Bracket</h1>
        <div>
          <img src = {bracket} width={335} height={500} alt = 'flyer'/>
        </div>
      </div>
    );
  }
  
  export default Bracket;