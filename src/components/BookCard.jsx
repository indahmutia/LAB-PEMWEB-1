import "../styles/Card.css";


export default function BookCard({ data, editBook, deleteBook }) {
return (
<div className="book-card">
<h3>{data.title}</h3>
<p><strong>Author:</strong> {data.author}</p>
<p><strong>Date:</strong> {data.date}</p>
<p><strong>Publisher:</strong> {data.publisher}</p>


<div className="actions">
<button className="edit" onClick={() => editBook(data)}>Edit</button>
<button className="delete" onClick={() => deleteBook(data.id)}>Delete</button>
</div>
</div>
);
}