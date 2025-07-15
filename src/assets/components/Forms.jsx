import React, { useEffect, useState } from 'react';


const Forms = ({ onAdd, contactToEdit }) => {
  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    } else {
      setContact({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
      });
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Corrected validation
    if (contact.firstname && contact.lastname && contact.email && contact.phone) {
      onAdd(contact);
      setContact({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="firstname"
        value={contact.firstname}
        onChange={handleChange}
        placeholder="First Name"
        className="w-full border p-2 rounded"
      />
      <input
        name="lastname"
        value={contact.lastname}
        onChange={handleChange}
        placeholder="Last Name"
        className="w-full border p-2 rounded"
      />
      <input
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border p-2 rounded"
      />
      <input
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {contactToEdit ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
};

export default Forms;
