import React from 'react';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="mt-6">
      {contacts.length === 0 ? (
        <p className="text-gray-500">No contacts found.</p>
      ) : (
        contacts.map((contact, index) => (
          <div key={index} className="border rounded p-4 mb-2 shadow-sm">
            <h3 className="font-bold">
              {contact.firstname} {contact.lastname}
            </h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => onEdit(index)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ContactList;
