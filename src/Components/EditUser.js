import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

export default function EditData() {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        mobile_number: "",
        id: "",
    });

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://618d10c3edab980017fd51ad.mockapi.io/api/v1/users/${id}`)
            .then((data) => data.json())
            .then((value) => setUserDetails(value));          
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        userDetails.id = id;
        axios.put(
            "https://618d10c3edab980017fd51ad.mockapi.io/api/v1/users/" + id,
            userDetails
        );
        alert("User Updated Successfully!!");
        
    };

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleReset = (event) => {
        history.push(`/user`);
    }

    return (
        <div className="container">
            <h1 className="text-center my-3">Edit User</h1>
            <form onSubmit={handleSubmit} id="addUserForm"> 
                <div className="form-group">
                    <input type="text" name="name" value={userDetails.name} className="form-control" id="name" placeholder="Name" onChange = {handleChange}/>
                </div>
                <div className="form-group">
                    <input type="email" name="email" value={userDetails.email} className="form-control" id="email" placeholder="Email" onChange = {handleChange}/>
                </div>
                <div className="form-group">
                    <input type="mobile" name="mobile_number" value={userDetails.mobile_number} className="form-control" id="mobile_number" placeholder="Mobile" onChange = {handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Update User</button>
                <button type="reset" className="btn btn-danger mx-3" onClick={handleReset}>Cancel</button>
            </form>
        </div>
    );
}
