import React from 'react';

interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => (
  <span className="left-pan ml-2" onClick={onClick}>
    <i className="fa fa-close"></i>
  </span>
);

export default ClearButton;