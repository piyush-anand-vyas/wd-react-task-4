import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const [userDetails, setUserDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://618d10c3edab980017fd51ad.mockapi.io/api/v1/users/${id}`)
      .then((data) => data.json())
      .then((value) => setUserDetails(value));
  }, [id]);

  return (
    <div className="container">
        <h1 className="text-center my-3">User Details</h1>
        <div className="row">
            <div className="col-md-8">
                <h3><b>Name :</b> {userDetails?.name}</h3>
                <h3><b>Email :</b> {userDetails?.email}</h3>
                <h3><b>Mobile No. :</b> {userDetails?.mobile_number}</h3>
            </div>

        </div>
    </div>
  );
}
