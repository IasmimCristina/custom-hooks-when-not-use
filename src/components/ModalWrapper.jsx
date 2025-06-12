import React from "react";
import Modal from "./Modal";
import useModal from "../hooks/useModal";

const ModalWrapper = () => {
  const {
    isOpen,
    closeModal,
    form,
    setForm,
    handleImageChange,
    handleSubmit,
    openModal,
  } = useModal();

  return (
    <>
      <button onClick={openModal}>Add Cat</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        form={form}
        setForm={setForm}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ModalWrapper;
