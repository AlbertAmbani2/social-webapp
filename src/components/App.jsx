import React, { useState } from "react";
import Card from "./Card";
import contactsData from "../contacts";

function App() {
  const [contacts, setContacts] = useState(contactsData);

   // Function to add a new contact
   const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  

  // Function to remove a contact by its index
    const removeContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };


   // Render all contacts using the map function
   const contactCards = contacts.map((contacts, index) => (
    <Card
      key={index} 
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
      LinkedIn={contacts.link}
      onDelete={() => removeContact(index)}
    />
  ));

  // New contact object
  const newContact = {
    name: "Kemal",
    imgURL: "https://media.licdn.com/dms/image/D4D03AQFbrtdv3ChVNQ/profile-displayphoto-shrink_100_100/0/1684659923009?e=1704326400&v=beta&t=jcB9yRa805yYToTWnrvFbBWL8LyI3yXAnUjKSmhgyaY",
    phone: "+1 (501) 442-0274",
    email: "kemal.aydin@franklin.edu",
    link:"https://www.linkedin.com/in/albert-ambani-996b85253/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BW1Y5vbn2RAunsCbgXVIDig%3D%3D"
  };

  

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contactCards}
      {() => addContact(newContact)}
    </div>
  );
}

export default App;