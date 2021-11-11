import React, {useState} from 'react'
import axios from "axios";

export default function AddUser() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile_number, setMobileNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = "https://618d10c3edab980017fd51ad.mockapi.io/api/v1/users";
        axios.post(url, {
            name:name,
            email:email,
            mobile_number:mobile_number,
        })
        .then((response) => alert("User Added"))
        .catch((err) => alert(err));

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile_number").value = "";
    }

    return (
        <div className="container">
            <h1 className="text-center my-3">Add User</h1>
            <form onSubmit={handleSubmit} id="addUserForm"> 
                <div className="form-group">
                    <input type="name" name="name" value={name} className="form-control" id="name" placeholder="Name" onChange = {(event) => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="email" name="email" value={email} className="form-control" id="email" placeholder="Email" onChange = {(event) => setEmail(event.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="mobile" name="mobile_number" value={mobile_number} className="form-control" id="mobile_number" placeholder="Mobile" onChange = {(event) => setMobileNumber(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
                <button type="reset" className="btn btn-danger mx-3">Reset</button>
            </form>
        </div>
    )
}
