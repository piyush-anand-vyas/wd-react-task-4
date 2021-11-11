import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

export default function Users(props) {

    const [users, setUsers] = useState([]);
    const history = useHistory();
    const getUserDetails = () => {
        const url = "https://618d10c3edab980017fd51ad.mockapi.io/api/v1/users";
        fetch(url)
            .then((data) => (data.json()))
            .then((value) => setUsers(value));
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    const viewUserDetails = (id) => {
        history.push(`user/${id}`);
    };

    const deleteUser = (id) => {
        axios.delete(`https://618d10c3edab980017fd51ad.mockapi.io/api/v1/users/${id}`)
        .then((response) => {
            alert("User deleted successfully.");
            getUserDetails();
        })
        .catch((err) => console.log(err));
    }

    const editUser = (id) => {
        history.push(`editUser/${id}`);
    }

    return (
        <div className = "container">

            <h1 className="text-center my-3">Users</h1>

            <table className="table text-center">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">View</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile_number}</td>
                                <td><button className="btn btn-primary" onClick = {() => viewUserDetails(user.id)} >View</button></td>
                                <td><button className="btn btn-primary" onClick = {() => editUser(user.id)}>Edit</button></td>
                                <td><button className="btn btn-primary" onClick = {() => deleteUser(user.id)}>Delete</button></td>
                            </tr>
                        )
                        )
                    }


                </tbody>

            </table>
        </div>
    )
}
