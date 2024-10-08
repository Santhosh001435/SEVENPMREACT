function User (props) {
  return ( 
  <div className="card-container">
    <span className={props.online ? "pro online" : "pro offline"}>
      {props.online?"ONLINE" : "OFFLINE"}</span>
    <img src="images/1.jpg" className="img"alt="user" />
    <h3>{props.name}</h3>
    <h4>{props.city}</h4>
    <p>{props.description}</p>
    <div className="button">
      <button className="primary">Message</button>
      <button className="primary outline">Following</button>
    </div>

    <div className="skills">
      <h6>skills</h6>
      <ul>
       {props.skills.map((skills,index) => (
        <li key={index}>{skills}</li>
       ))}
      </ul>
    </div>
  </div>
  );
};
export const Usercard = () => {
  return (
      <User name="Sundar pichai" city="New york"
      description="Front-end developer" skills={["UI / UX","Front-end developer","Html","Css","Java script",
        "React Js","Node Js"]} online={true} />
  );
};
