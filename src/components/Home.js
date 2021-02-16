import { useEffect, useState } from "react";
import "../App.css";
import MyCalendar from "./Calendar";

export default function Home() {
  const [userNames, setUserNames] = useState([]);
  const [userName, setUserName] = useState('');
  const [counter, setCounter] = useState(0);
  const [userInformation, setUserInformation] = useState({});
  useEffect(() => {
    if (counter === 0) {
      fetch("/api/usernames")
        .then((res) => res.json())
        .then((json) => {
          setCounter(counter + 1);
          setUserNames(userNames.concat(json));
        });
    }
  }, []);
  const clickHandler = (event) => {
    setUserName(event.target.name)
    fetch(`/api/user/${event.target.name}`)
      .then((res) => res.json())
      .then((json) => {
        setUserInformation(json);
      });
  };

  if (userNames.length === 0) {
    return <div>Loading.....</div>;
  } else {
    console.log(userInformation);
    return (
      <div className="home">
        <div className="users">
          <h1>Users:</h1>
          {userNames.map((name, index) => {
            return (
              <div key={index}>
                <button onClick={clickHandler} className="button" name={name}>
                  {name}
                </button>
              </div>
            );
          })}
        </div>
        <div className="userInformation">
          {userInformation && userInformation.activity_periods && (
            <div>
              <h1>{`${userName} Activity`}</h1>
              <MyCalendar workingInfo={userInformation.activity_periods} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
