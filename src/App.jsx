import React, { useState, useEffect } from "react";
import NavBar from "./assets/components/NavBar";
import Forms from "./assets/components/Forms";
import ContactList from "./assets/components/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stored = localStorage.getItem("contacts");
    return stored ? JSON.parse(stored) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAdd = (contact) => {
    if (editingIndex !== null) {
      const updated = [...contacts];
      updated[editingIndex] = contact;
      setContacts(updated);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this contact?");
    if (confirmed) {
      const updated = contacts.filter((_, i) => i !== index);
      setContacts(updated);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-300">
      <NavBar />
      <div className="max-w-md mx-auto p-4">
        <Forms onAdd={handleAdd} contactToEdit={contacts[editingIndex]} />
        <ContactList contacts={contacts} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
