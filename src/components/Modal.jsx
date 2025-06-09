import React, { useState } from "react";
import useCatList from "../hooks/useCatList";

const Modal = ({ isOpen, onClose }) => {
  const { addCat } = useCatList();
  const [form, setForm] = useState({ breed: "", image: "", country: "" });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCat(form);
    onClose();
  };

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
            required
            value={form.breed}
            onChange={(e) => setForm({ ...form, breed: e.target.value })}
          />
          <input
            type="file"
            accept="image/*"
            required
            onChange={handleImageChange}
          />
          <input
            type="text"
            placeholder="Country"
            required
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
          />
          <div className="modal__buttons-group">
            <button type="submit">Add Cat</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
