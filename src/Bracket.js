import bracket from '../src/imgs/HoopfullBraket.png'


function Bracket() {
    return (
      <div className="Map">
        <h1 className="title">Bracket</h1>
        <div className="bracketPic">
          <img src = {bracket} width={390} height={335} alt = 'flyer'/>
        </div>
      </div>
    );
  }
  
  export default Bracket;