import React, { useState, useRef, useEffect } from 'react';
import './ButtonColors.css'; // Import the CSS file for styling

interface Position {
  type: string;
  left: number | string;
  with: string;
}

const ButtonColors: React.FC = () => {
  const [hrefs, setHrefs] = useState<string[]>([
    'Home',
    'About',
    'Blog',
    'portfolio',
    'contact',
  ]);
  const [type, setType] = useState<string>('Home');

  const handleMoveButton = (item: string) => {
    document.body.className = item;
    setType(item);
  };

  return (
    <nav className="button-container">
      {hrefs.map((item: string, ind: number) => {
        return <p onClick={() => handleMoveButton(item)}>{item}</p>;
      })}
      <div className={`animation start-home ${type}`}></div>
    </nav>
  );
};

export default ButtonColors;
