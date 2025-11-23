import { useState, useEffect } from "react";

function BookForm({ onSubmit, editData }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "",
    publisher: ""
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form);

    setForm({
      title: "",
      author: "",
      date: "",
      publisher: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>{editData ? "Edit Book" : "Add Book"}</h2>

      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author / Penulis"
        value={form.author}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="publisher"
        placeholder="Publisher"
        value={form.publisher}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn-primary">
        {editData ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}

export default BookForm;
