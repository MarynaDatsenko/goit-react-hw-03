import { FaUser, FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

export default function Contact({ data, onDelete }) {
  const { id, name, number } = data;

  return (
    <div className={css.contact}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser />
          {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
