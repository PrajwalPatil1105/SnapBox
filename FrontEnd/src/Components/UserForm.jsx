import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../Styles/UserForm.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isDirty, setIsDirty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: uuidv4(),
      ...formData,
      timestamp: new Date().toISOString(),
    };
    const existingData = JSON.parse(localStorage.getItem("userData") || "[]");
    localStorage.setItem(
      "userData",
      JSON.stringify([...existingData, userData])
    );
    setFormData({
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    setIsDirty(false);
    toast.success("Data Saved Successfully");
  };

  return (
    <div className={styles.FormPage}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>User Information</h2>
        <form onSubmit={handleSubmit} className={styles.userForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setIsDirty(true);
              }}
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setIsDirty(true);
              }}
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.formLabel}>
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
                setIsDirty(true);
              }}
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                setIsDirty(true);
              }}
              className={styles.formInput}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Save
          </button>
        </form>
      </div>
      <Toaster
        toastOptions={{
          style: {
            color: "#aaa",
            backgroundColor: "transparent",
            border: "2px solid #aaa",
            fontFamily: "Poppins",
            fontSize: "0.8em",
            fontWeight: "400",
            marginLeft: "3em",
          },
        }}
      />
    </div>
  );
}

export default UserForm;
