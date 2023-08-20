import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user, "profile");
  useEffect(() => {
    if (user) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("userDetails", JSON.stringify(data));
          setUserDetails(data);
        });
    }
  }, []);

  const handleLogout=()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("userDetails");
    window.location.href="/";
  }

  return (
    <div>
      <img src={userDetails.image} alt="#" />
      <h4>
        Username : <span>{userDetails.username}</span>
      </h4>
      <h4>
        Name :{" "}
        <span>
          {userDetails.firstName} {userDetails.maidenName} {userDetails.lastName}
        </span>
      </h4>
      <h4>
        Email : <span>{userDetails.email}</span>
      </h4>
      <h4>
        Gender : <span>{userDetails.gender}</span>
      </h4>
      <h4>
        DOB : <span>{userDetails.birthDate}</span>
      </h4>
      <h4>
        Age : <span>{userDetails.age}</span>
      </h4>
      <h4>
        Blood_Group : <span>{userDetails.bloodGroup}</span>
      </h4>
      <h4>
        Height : <span>{userDetails.height} cms.</span>
      </h4>
      <h4>
        Weight : <span>{userDetails.weight} kgs</span>
      </h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
