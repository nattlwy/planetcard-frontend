import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

export default function CreatePlanet() {
  const [planetname, setPlanetname] = useState('');
  const [diameter, setDiameter] = useState('');
  const [moons, setMoons] = useState('');
  const [desc, setDesc] = useState('');
  const [url, setUrl] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    const planetvar = {
      name: planetname,
      diameter: diameter,
      moons: moons,
      desc: desc,
      url: url
    };

    axios
      .post('https://planetcard-backend-api.onrender.com/planets/add', planetvar)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div>
      <Navbar />
      <Link to="/" className="nav-link">
              Back to planet list
        </Link>

      <h3>Create New Planet</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          Planet name:
          <input
            type="text"
            required
            className="form-control"
            name="planetname"
            value={planetname}
            onChange={(e) => setPlanetname(e.target.value)}
          />
        Planet diameter:
        <input
            type="text"
            required
            className="form-control"
            value={diameter}
            onChange={(e) => setDiameter(e.target.value)}
          />
          Planet moons:
        <input
            type="text"
            required
            className="form-control"
            value={moons}
            onChange={(e) => setMoons(e.target.value)}
          />
          Planet desc:
        <input
            type="text"
            required
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          Image URL
        <input
            type="text"
            required
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <br></br>

        <div className="form-group">
          <input
            type="submit"
            value="Create new planet!"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
