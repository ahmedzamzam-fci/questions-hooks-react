import React from 'react';

const DropDown = ({ options, selected, setOnSelectionChange, label }) => {
  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }
    return (
      <div className="col-sm" key={option.label}>
        <li onClick={() => setOnSelectionChange(option)}>
          <a className="dropdown-item" href="#">
            {option.label}
          </a>
        </li>
      </div>
    );
  });

  return (
    <div className="dropdown">
      <p>{label}</p>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selected.label}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {renderedOptions}
      </ul>
    </div>
  );
};

export default DropDown;
