import React from 'react';
import IconButton from '@mui/material/IconButton';

const IconButtonComponent = ({ 
  onClick ,
  Icone, 
  color, 
  fontSize,
  border, 
  backgroundColor = "black", 
  width = "auto", 
  height = "auto", 
  margin = "auto", 
  padding = "auto"}
) => {

  const styling = {
    border: `${border}`,
    color: `${color}`,
    backgroundColor: `${backgroundColor}`,
    fontSize: `${fontSize}`,
    width: `${width}`,
    height: `${height}`,
    padding: `${padding}`,
    margin: `${margin}`,
  };

  return (
    <div>
      <IconButton sx={styling} color="primary" aria-label="home" onClick={onClick}>
        {Icone}
      </IconButton>
    </div>
  );
};

export default IconButtonComponent;
