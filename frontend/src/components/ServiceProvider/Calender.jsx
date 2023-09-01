//import React from 'react';

function Calendar() {
  const generateDayLinks = () => {
    const dayLinks = [];
    for (let i = 1; i <= 31; i++) {
      let className = '';
      if (i === 12) {
        className = 'selected';
      } else if ([8, 10, 27].includes(i)) {
        className = 'event';
      }
      dayLinks.push(
        <li key={i}>
          <a href="#" title={i} data-value={i} className={className}>
            {i}
          </a>
        </li>
      );
    }
    return dayLinks;
  };

  return (
    <div className="cbody">
    <div className="calendar">
      <div className="col leftCol">
        <div className="content">
          <h1 className="date">
            Friday<span>September 12th</span>
          </h1>
          <div className="notes">
            <p>
              <input type="text" value="" placeholder="new note" />
              <a href="#" title="Add note" className="addNote animate">
                +
              </a>
            </p>
            <ul className="noteList">
              <li>
                Headbutt a lion
                <a href="#" title="Remove note" className="removeNote animate">
                  x
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col rightCol">
        <div className="content">
          <h2 className="year">2013</h2>
          <ul className="months">
            {/* ... (your month links) ... */}
          </ul>
          <div className="clearfix"></div>
          <ul className="weekday">
            {/* ... (your weekday links) ... */}
          </ul>
          <div className="clearfix"></div>
          <ul className="days">{generateDayLinks()}</ul>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Calendar;