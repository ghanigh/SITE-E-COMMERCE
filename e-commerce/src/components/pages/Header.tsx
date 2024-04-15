import React from 'react';

interface HeaderProps {
  viteLogo: string;
  reactLogo: string;
}

const Header: React.FC<HeaderProps> = ({ viteLogo, reactLogo }) => {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

export default Header;
