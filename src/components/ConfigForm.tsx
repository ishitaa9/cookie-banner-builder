import React from "react";
import { useBannerStore } from "../store/useBannerStore";
import * as styles from "../styles/ConfigFormStyles";

export default function ConfigForm() {
  const { config, setConfig } = useBannerStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConfig({ [name]: value });
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.heading}>Customize Cookie Banner</h2>

      <form className={styles.formLayout}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            name="title"
            value={config.title}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter banner title"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Description</label>
          <textarea
            name="description"
            value={config.description}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Enter banner description"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Accept Button Text</label>
          <input
            type="text"
            name="acceptText"
            value={config.acceptText}
            onChange={handleChange}
            className={styles.input}
            placeholder="Accept"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Decline Button Text</label>
          <input
            type="text"
            name="declineText"
            value={config.declineText}
            onChange={handleChange}
            className={styles.input}
            placeholder="Decline"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Background Color</label>
          <input
            type="color"
            name="backgroundColor"
            value={config.backgroundColor}
            onChange={handleChange}
            className={styles.colorInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Text Color</label>
          <input
            type="color"
            name="textColor"
            value={config.textColor}
            onChange={handleChange}
            className={styles.colorInput}
          />
        </div>
      </form>
    </div>
  );
}
