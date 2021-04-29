import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeInedx, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };

  const renderdItems = items.map((item, index) => {
    const show = index === activeInedx ? 'show' : '';
    return (
      <div
        className="accordion-item"
        key={item.title}
        onClick={() => onTitleClicked(index)}
      >
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {item.title}
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`accordion-collapse collapse ${show}`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{item.content}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="accordion" id="accordionExample">
      {renderdItems}
    </div>
  );
};

export default Accordion;
