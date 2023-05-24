import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Allcss/Error.css';
import { BiArrowBack } from 'react-icons/bi'

const Error = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>4<span>0</span>4</h1>
          </div>
          <h2>The page you requested could not be found</h2>
          <button type="button" className="btnSubmit" onClick={goToHomePage}>
            <i><BiArrowBack/></i> &nbsp;&nbsp;GO TO HOMEPAGE
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
