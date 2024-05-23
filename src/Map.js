
import flyer from '../src/imgs/Basketballflyer.png'


function Map() {
    return (
      <div className="Map">
        <h1 className="title">Map</h1>
        <div className="map-placement">
        <iframe src="https://www.google.com/maps/d/embed?mid=1DI5SODfRVzVP7Ou8z3oFypzvHG1w7EQ&ehbc=2E312F&noprof=1" width="380" height="235"></iframe>
        </div>
        <div>
          <img src = {flyer} width={335} height={500} alt = 'flyer'/>
        </div>
      </div>
    );
  }
  
  export default Map;