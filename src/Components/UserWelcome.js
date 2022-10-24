import React from "react";
import fetchData from "../api/fetchData";

const resorceData = fetchData(
  "https://run.mocky.io/v3/d6ac91ac-6dab-4ff0-a08e-9348d7deed51"
);

const UserWelcome = () =>{
    const userDetails = resorceData.read();

    return (
        <span>
            <div>Welcome : {userDetails.name}</div>
        </span>
    );
};
export default UserWelcome;
