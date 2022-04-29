import React from "react";
import User from "./User";

const Users = ({users, handleUserDelete}) => {
    return (
        <>
            {users.map(users => <User users={users} handleUserDelete={handleUserDelete}/>)}
        </>
    );
};

export default Users;