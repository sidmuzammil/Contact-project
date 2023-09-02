import React, { useState } from "react";
import "./CreateContact.css";

// firebase things

// import firebase from 'firebase/compat/app'
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, update, push, remove, onValue } from 'firebase/database';
// import { getDatabase } from 'firebase/database';


// firebase config

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCAAKZIumyuO_YfT4fcAXtptVDq6s9QrAI",
//   authDomain: "contact-app-b2fdb.firebaseapp.com",
//   databaseURL: "https://contact-app-b2fdb-default-rtdb.firebaseio.com",
//   projectId: "contact-app-b2fdb",
//   storageBucket: "contact-app-b2fdb.appspot.com",
//   messagingSenderId: "516910893753",
//   appId: "1:516910893753:web:74a35e1d7e89402eb3e968",
//   measurementId: "G-SYMHVED01Q"
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);



export const Createcontact = () => {
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState("active"); 
  const [editingContact, setEditingContact] = useState(null);
  const [isInputVisible, setInputVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSaveContact = () => {
    if (firstName && lastName) {
      const contactData = {
        firstName,
        lastName,
        status, // use the select status
      };

      if (editingContact !== null) {
        const updatedContacts = [...contacts];
        updatedContacts[editingContact] = contactData;
        setContacts(updatedContacts);
        setEditingContact(null);
      } else {
        setContacts([...contacts, contactData]);
      }
      setFirstName("");
      setLastName("");
      setStatus("active"); // Reset status to 'active'
      setInputVisible(false);
    }
  };

  // if i want to store this datas to firebase 


  // const handleSaveContact = () => {
  //   if (firstName && lastName) {
  //     const contactData = {
  //       firstName,
  //       lastName,
  //       status,
  //     };
  
  //     if (editingContact !== null) {
  //       // If editing an existing contact, update it in Firebase
  //       const contactRef = ref(db, `contacts/${editingContact}`);
  //       update(contactRef, contactData)
  //         .then(() => {
  //           setEditingContact(null);
  //           setFirstName('');
  //           setLastName('');
  //           setStatus('active'); // Reset status to 'active'
  //           setInputVisible(false);
  //         })
  //         .catch(error => {
  //           console.error("Error updating contact:", error);
  //         });
  //     } else {
  //       // If adding a new contact, push it to Firebase
  //       const contactsRef = ref(db, 'contacts');
  //       push(contactsRef, contactData)
  //         .then(() => {
  //           setFirstName('');
  //           setLastName('');
  //           setStatus('active'); // Reset status to 'active'
  //           setInputVisible(false);
  //         })
  //         .catch(error => {
  //           console.error("Error adding contact:", error);
  //         });
  //     }
  //   }
  // };
  
  

  const handleEditContact = (index) => {
    setEditingContact(index);
    const contactToEdit = contacts[index];
    setFirstName(contactToEdit.firstName);
    setLastName(contactToEdit.lastName);
    setStatus(contactToEdit.status);
    setInputVisible(true); // Show the input fields
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div className="container-create-page">
      <h1>Contact Page</h1>
      {isInputVisible ? (
        <div className="main-input-feilds">
          <input
            className="contact-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="contact-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <div className="status-items">
            <label className="status">
              <input
                type="radio"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
              />
              Active
            </label>
            <label className="status">
              <input
                type="radio"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => setStatus("inactive")}
              />
              Inactive
            </label>
          </div>
          <button className="save-contact" onClick={handleSaveContact}>
            {editingContact !== null ? "Edit Contact" : "Save Contact"}
          </button>
        </div>
      ) : (
        <button
          className="create-contact-btn"
          onClick={() => setInputVisible(true)}
        >
          Create Contact
        </button>
      )}
      {/* <p>Status: {status}</p> */}
      <ul className="saving-names">
        <div className="divided-contact">
          {contacts.map((contact,index) => (
            <ul key={index}>
              <strong>
                {contact.firstName} {contact.lastName}
              </strong>
              <br />
              Status: {contact.status}
              <button
                onClick={() => handleEditContact(index)}
                className="save-and-delet-btn edit"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteContact(index)}
                className="save-and-delet-btn delet"
              >
                Delete
              </button>
            </ul>
          ))}
        </div>
      </ul>
    </div>
  );
};
