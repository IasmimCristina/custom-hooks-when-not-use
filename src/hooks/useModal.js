import { useState, useCallback, useEffect } from "react";
import useCatList from "./useCatList";

const useModal = () => {
  const { addCat } = useCatList();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ breed: "", image: "", country: "" });

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    resetForm();
  }, []);

  const resetForm = useCallback(() => {
    setForm({ breed: "", image: "", country: "" });
  }, []);

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addCat(form);
      closeModal();
    },
    [addCat, form]
  );

  // Adding useEffect to track changes in function references!
  useEffect(() => {
    console.log("openModal function reference changed");
  }, [openModal]);

  useEffect(() => {
    console.log("closeModal function reference changed");
  }, [closeModal]);

  useEffect(() => {
    console.log("resetForm function reference changed");
  }, [resetForm]);

  useEffect(() => {
    console.log("handleImageChange function reference changed");
  }, [handleImageChange]);

  useEffect(() => {
    console.log("handleSubmit function reference changed");
  }, [handleSubmit]);

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
