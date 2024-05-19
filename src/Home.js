
import homeImg from '../src/imgs/basketball.png'
import pic1 from '../src/imgs/tournament1.png'
import pic2 from '../src/imgs/tournament2.png'
import pic3 from '../src/imgs/tournament3.png'
import pic4 from '../src/imgs/tournament4.png'

const Divider = () => {
  return (
      <hr
          style={{ borderTop: "3px solid black", width: 400,}}
      ></hr>
  );
};

function Home() {
    return (
      <div className="Home">
        <h1 className="title">HoopFull</h1>
        <h3 className="subtitle" >Basketball Tournaments</h3>
        <Divider/>
        <div className='img'>
        <img src = {homeImg} width={350} height={350} alt = 'home'/>
        </div>
        <div className='info'>
        <p1 className= 'text'>Welcome to Hoopfull Tornaments, a place where you can organize your basketball tournaments. 
          This website(?) is designed to make it easy to look at the ongoing progression 
          of the tournament and the location of the tournament. We want to help make setting up a turnament much easier. 
        </p1>
        </div>
        <div className='info'>
        <h4 className='text'>Here are some of our past tournaments:</h4>
        </div>
        <div className='pics'>
          <div className='pics'>
          <img src = {pic1} width={250} height={175} alt = 'pic1'/>
          </div>
          <div className='pics'>
          <img src = {pic2} width={250} height={175} alt = 'pic2'/>
          </div>
          <div className='pics'>
          <img src = {pic3} width={250} height={175} alt = 'pic3'/>
          </div>
          <div className='pics'>
          <img src = {pic4} width={250} height={175} alt = 'pic4'/>
          </div>
        </div>

      </div>
    );
  }
  
  export default Home;