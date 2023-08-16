import React from "react";

import Styles from "./PopupStyle.module.css";
import Admissions from "../Admissions/Admissions";

export default function Popup({ onClose }) {
  return (
    <div
      className={`${Styles.modalContainer} modalContainer`}
      onClick={(e) => {
        if (e.target.className.includes("modalContainer")) {
          onClose();
        }
      }}
    >
      <div className={`${Styles.container}`}>
        {/* Close Button */}
        <div
          className={`${Styles.closeBtn}`}
          onClick={() => {
            onClose();
          }}
        >
          <button
            onClick={() => {
              onClose();
            }}
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className={`${Styles.wrapperContent}`}>
          <Admissions />
        </div>

        {/* Close below text */}
        <div
          className={`${Styles.closeBtnBelow}`}
          onClick={() => {
            onClose();
          }}
        >
          <button
            onClick={() => {
              onClose();
            }}
          >
            No thanks, I’m not interested.
          </button>
        </div>
      </div>
    </div>
  );
}
