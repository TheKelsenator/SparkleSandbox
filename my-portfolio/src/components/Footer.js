import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Footer() {
  return (
    <>
    <style>{styles}</style>
      <div className="footer">
        <p className="footer-text">&copy; 2024 TheKelsenator. All rights reserved.</p>
      </div>
    </>
  );
}

const styles= `
  div.footer {
    display: flex;
    color: #9b4922;
    background-color: #d3a15e !important;
    font-size: 20px;
    font-weight: 500;
    padding: 0.75% 0 0.25% 0;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  p.footer-text {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-right:3%;
  }

  @media screen and (max-width: 400px) {
    div.footer {
      display: flex;
      color: #9b4922;
      background-color: #d3a15e !important;
      font-size: 20px;
      font-weight: 500;
      padding: 0.75% 0 0.25% 0;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
    
    p.footer-text {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding-right:3%;
    }
  }
  
  @media screen and (min-width: 401px) and (max-width: 720px) {
    div.footer {
      display: flex;
      color: #9b4922;
      background-color: #d3a15e !important;
      font-size: 20px;
      font-weight: 500;
      padding: 0.75% 0 0.25% 0;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
    
    p.footer-text {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding-right:3%;
    }
  }
  
  @media screen and (min-width: 721px) and (max-width: 1280px) {
    div.footer {
      display: flex;
      color: #9b4922;
      background-color: #d3a15e !important;
      font-size: 20px;
      font-weight: 500;
      padding: 0.75% 0 0.25% 0;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
    
    p.footer-text {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding-right:3%;
    }
  }
  
  @media screen and (min-width: 1281px) and (max-width: 1440px) {
    div.footer {
      display: flex;
      color: #9b4922;
      background-color: #d3a15e !important;
      font-size: 20px;
      font-weight: 500;
      padding: 0.75% 0 0.25% 0;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
    
    p.footer-text {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding-right:3%;
    }
  }
  
  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    div.footer {
      display: flex;
      color: #9b4922;
      background-color: #d3a15e !important;
      font-size: 20px;
      font-weight: 500;
      padding: 0.75% 0 0.25% 0;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
    
    p.footer-text {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding-right:3%;
    }
  }
  
  @media screen and (min-width: 1921px) {
    div.footer {
      display: flex;
      color: #9b4922;
      background-color: #d3a15e !important;
      font-size: 20px;
      font-weight: 500;
      padding: 0.75% 0 0.25% 0;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }
    
    p.footer-text {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding-right:3%;
    }
  }
`;

export default Footer;



 
