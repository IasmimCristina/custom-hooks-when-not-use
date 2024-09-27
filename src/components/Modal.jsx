import React from "react";

const Modal = ({ isOpen, onClose, form, setForm, handleImageChange, handleSubmit }) => {
  if (!isOpen) return null;

  console.log("Modal rendered!");

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add a new cat</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Breed"
            value={form.breed}
            onChange={(e) => setForm({ ...form, breed: e.target.value })}
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <input
            type="text"
            placeholder="Country"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          />
          <div className="modal__buttons-group">
            <button type="submit">Add Cat</button>
            <button type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
