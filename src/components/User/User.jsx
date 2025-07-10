import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
    // useParams is a hook that returns an object of key-value pairs of URL parameters
  return <div className="bg-gray-600 text-3xl text-white p-4 text-center">User: {userid} </div>;
}

export default User;






