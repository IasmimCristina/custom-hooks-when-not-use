import { useState } from "react";
import useCatList from "./useCatList";

const useModal = () => {
  const { addCat } = useCatList();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ breed: "", image: "", country: "" });

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setForm({ breed: "", image: "", country: "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCat(form);
    closeModal();
  };

  return {
    isOpen,
    openModal,
    closeModal,
    form,
    setForm,
    handleImageChange,
    handleSubmit,
  };
};

export default useModal;
