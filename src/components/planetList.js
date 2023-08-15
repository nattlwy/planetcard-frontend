import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
// import url from '../Constants';

const PlanetCard = (props) => (

    <div className="card">
    <button className="remove-card" onClick={() => props.deletePlanet(props.keyt)}>✖</button>
    <div>
      <img src={props.url} alt={props.name} />

    </div>
    <h2>{props.name}</h2>
    <p>{props.desc}</p>
    <h3>Planet Profile</h3>
    <ul>
      <li><strong>Diameter:</strong> {props.diameter}</li>
      <li><strong>Moons:</strong> {props.moons}</li>
    </ul>
  </div>

);

export default function PlanetList() {
  const [planets, setPlanetList] = useState([]);
  useEffect(() => {
    axios
      .get('https://planetcard-backend-api.onrender.com/planets/')
      .then((response) => {
        setPlanetList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deletePlanet = (id) => {
    axios
      .delete('https://planetcard-backend-api.onrender.com/delete/' + id)
      .then((response) => {
        console.log(response.data);
        //refreshing instead of changing frontend
        window.location = '/';
      });

    // setPlanetList(planets.filter((el) => el._id !== id));
  };

//   const editReview = (id) => {
//     window.location = '/update/' + id;
//   };

  return (
    <div>
      <Navbar />
        <div className='container'>
          {planets.map((planet) => {
            return (
              <PlanetCard
                name={planet.name}
                diameter={planet.diameter}
                moons={planet.moons}
                desc={planet.desc}
                url={planet.url}
                keyt={planet._id}
                deletePlanet={deletePlanet}
              />
            );
          })}
          </div>
    </div>
  );
}
