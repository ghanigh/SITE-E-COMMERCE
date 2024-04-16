import React from 'react';

interface HeaderProps {
  OrangeLogo: string;
}

const Header: React.FC<HeaderProps> = ({ OrangeLogo }) => {
  return (
    <div>
      <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer">
        <img src={OrangeLogo} className="logo" alt="Vite logo" />
      </a>
     
    </div>
  );
}

export default Header;
