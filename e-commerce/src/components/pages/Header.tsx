import React from 'react';

interface HeaderProps {
  OrangeLogo: string;
}

const Header: React.FC<HeaderProps> = ({ OrangeLogo }) => {
  return (
    <div>
      <a href="https://github.com/ghanigh/SITE-E-COMMERCE" target="_blank" rel="noopener noreferrer">
        <img src={OrangeLogo} className="logo" alt="Vite logo" />
      </a>
     
    </div>
  );
}

export default Header;
