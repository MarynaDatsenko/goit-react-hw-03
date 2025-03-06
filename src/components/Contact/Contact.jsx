import css from "./Contact.module.css";

export default function Contact({ data, onDelete }) {
  const { id, name, number } = data;

  return (
    <div className={css.contact}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
