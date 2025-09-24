import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Count1:{count1}</h1>
      <h2>Name:{name}</h2>
      <h2>Location:{location}</h2>
      <h2>Contact:sahid@gmail</h2>
    </div>
  );
};
export default User;
