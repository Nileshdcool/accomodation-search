import React, { ChangeEvent } from 'react';

interface SearchInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  showClearBtn: boolean;
  onClear: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange, showClearBtn, onClear }) => (
  <div className="form d-flex align-items-center">
    <i className="fa fa-search mr-2"></i>
    <input
      type="text"
      className="form-control form-input"
      placeholder="Search accommodation..."
      onChange={onChange}
    />
    {showClearBtn && (
      <span className="left-pan ml-2" onClick={onClear}>
        <i className="fa fa-close"></i>
      </span>
    )}
  </div>
);

export default SearchInput;