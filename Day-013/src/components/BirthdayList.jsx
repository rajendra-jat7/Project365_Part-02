import { useState } from "react";
import birthdaysData from "../data";
import "./BirthdayList.css";

const BirthdayList = () => {
  const [birthdays, setBirthdays] = useState(birthdaysData);

  return (
    <div className="birthday-container">
      <h2>{birthdays.length} Birthdays Today</h2>
      {birthdays.map((person) => (
        <div key={person.id} className="birthday-card">
          <img src={person.image} alt={person.name} className="birthday-img" />
          <div>
            <h3>{person.name}</h3>
            <p>{person.age} years old</p>
          </div>
        </div>
      ))}
      <button className="clear-btn" onClick={() => setBirthdays([])}>
        Clear List
      </button>
    </div>
  );
};

export default BirthdayList;
