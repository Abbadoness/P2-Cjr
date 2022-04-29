import React from 'react';
import "./User.css"

const User = ({users, handleUserDelete}) => {
    return (<nav>
        <span className="names">{users.first_name + ' ' +users.last_name}</span>
        <span className="email">{users.email}</span>
        <span className="criado">{users.created_at}</span>

        <span className="button-container">
            <button className="edit-User-button">editar</button>
        </span>

        <span className="button-container">
            <button className="remove-User-button" onClick={() => handleUserDelete(users.id)}>excluir</button>
        </span>

    </nav>
    );
}

export default User;