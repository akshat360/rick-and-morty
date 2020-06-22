import React from 'react';

export default function Card({ name, air_date, episode, url, characters }) {
  const ename = name ? name : 'episode name ';
  const eair_date = air_date ? air_date : 'No date ';
  const eepisode = episode ? episode : 'S0E0 ';
  const eurl = url ? url : 'episode name ';

  return (
    <div className="card d-flex p-2 card-bg rounded font-r ">
      <h4
        id="title"
        className="card-header text-white font-weight-bold  font-b bg-orange"
      >
        {eepisode}
      </h4>
      <div className="card-body text-white">
        <a href={eurl}>
          <h5 className="card-title text-white font-b">{ename}</h5>
        </a>
        <h6 className="text-secondary font-weight-bold">Air date : </h6>
        <p className="card-text text-white">{eair_date}</p>
      </div>
    </div>
  );
}
