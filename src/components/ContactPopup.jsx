import React from 'react';

const ContactPopup = ({ contact, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6">
        <div className="text-lg font-bold mb-4">Contact Information</div>
        <div>Send your application to: <a href={`mailto:${contact}`}>{contact}</a></div>
        <button
          className="bg-thistle text-white px-4 py-2 mt-4 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
