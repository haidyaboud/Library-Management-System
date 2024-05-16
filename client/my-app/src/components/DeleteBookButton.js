import React from 'react';
import axios from 'axios';
import './deletebtn.css';

const DeleteBookButton = ({ bookId, onDelete }) => {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/delete/${bookId}`);
            if (response && response.data) {
                console.log(response.data.message); // Log the success message
                onDelete(bookId); // Pass the bookId to the onDelete function
            } else {
                // Handle the case where response or response.data is undefined
                console.error('Received an undefined response or response.data from the server');
            }
        } catch (error) {
            // It's important to check if error.response and error.response.data exist before trying to access error.response.data.message
            if (error.response && error.response.data) {
                console.error('Error deleting book', error.response.data.message); // Log the error message
            } else {
                console.error('Error deleting book', error);
            }
            // Optionally, show an error message to the user
        }
    };

    return (
        <button onClick={handleDelete} className="delete-button">
            Delete
        </button>
    );
};

export default DeleteBookButton;
