import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

const handleAdd=() => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove=() => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };

  const teamStyle = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
  };

  return (
    <div style={teamStyle}>
      <h3>Team: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
