import React, { ChangeEvent, useState } from 'react';

interface SearchInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  showClearBtn: boolean;
  onClear: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange, showClearBtn, onClear }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  const handleClear = () => {
    setInputValue('');
    onClear();
  };

  return (
    <div className="form d-flex align-items-center">
      <i className="fa fa-search mr-2"></i>
      <input
        type="text"
        className="form-control form-input"
        placeholder="Search accommodation..."
        value={inputValue}
        onChange={handleChange}
      />
      {showClearBtn && (
        <span className="left-pan ml-2" onClick={handleClear}>
          <i className="fa fa-close"></i>
        </span>
      )}
    </div>
  );
};

export default SearchInput;