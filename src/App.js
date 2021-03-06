import React from 'react';
import './style.css';

//importing libraries

import Episodes from './Episodes';
import wallpaper from './assests/moon.png';
import logo from './assests/favicon.jpg';

function App() {
  const headImg = () => (
    <div className="">
      <img
        className=" img img-thumbnail p-0 border-0 mh-25 carousel-inner"
        src={wallpaper}
        alt="wallpaper"
      />
      <a href="/">
        <img
          src={logo}
          alt="logo"
          className="img rounded-circle top-left"
          style={{ height: '100px' }}
        />
      </a>
    </div>
  );

  return (
    <div className="mainColor">
      {headImg()}
      <div>
        <Episodes />
      </div>
      <hr className="bg-secondary" />
      <div className="text-white pb-5 pl-5">
        Created by : akshataggarwal360@gmail.com |{' '}
        <a className="text-white" href="https://github.com/akshat360/">
          Github
        </a>
        {' | '}
        <a className="text-white" href="https://www.linkedin.com/in/akshat360/">
          Linkedin
        </a>{' '}
      </div>
    </div>
  );
}
// Exporting App
export default App;
