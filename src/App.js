import './App.css';
import {Card} from './components/Card';
import imagenProfile from './images/image-jeremy.png';
import { useFetch } from './useFetch';
import { useEffect, useState } from 'react';


function App() {

  const { data } = useFetch({urlAPI: 'https://jsonplaceholder.typicode.com/users'});

  const [limitedData, setLimitedData] = useState(data ? data.slice(0, 6) : []);

  useEffect(() => {
    if (data) {
      setLimitedData(data.slice(0, 6));
    }
  }, [data]);

  const loadMoreRandomData = () => {
    if (data) {
      const randomIndexes = [];
      while (randomIndexes.length < 6) {
        const randomIndex = Math.floor(Math.random() * data.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
      const newData = randomIndexes.map(index => data[index]);
      setLimitedData(newData);
    }
  };

  if (!data) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 mx-auto">
          <div className="card tarjeta_principal " style={{ maxHeight: `417px` }}>
            <div className="card name_report">
              <div>
                <img src={imagenProfile} alt="" className="image_profile" width="74px" height="74px" />
              </div>
              <span className="contenido_p">Report for</span>
              <h6 className="user_name">{data[8].name}</h6>
            </div>
            <div className="card-body report">
              <a href="" className="contenido_report"> Daily</a> <br/>
              <a href="" className="contenido_report"> Weekly</a> <br/>
              <a href="" className="contenido_report"> Monthly</a>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12">

          <div className="row">
            {limitedData.map((user, index) => (

              <Card user={user} position={index} />

            ))}
          </div>
        </div>
        <button className="my-button p-3" onClick={loadMoreRandomData}>
            Cargar más datos al azar
          </button>
      </div>
    </div>
  );
}

export default App;
