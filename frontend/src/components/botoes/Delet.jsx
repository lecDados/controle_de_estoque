import "./Delet.css"

export function Delet({ id, onDelete }) {
  async function handleDelete() {
    await fetch(`http://localhost:3000/lista/${id}`, {
      method: "DELETE",
    });

    onDelete(); // atualiza lista no pai
  }

  return (
    <button className="delet" onClick={handleDelete}>
        <i className="bi bi-trash-fill"></i>
       Deletar
    </button>
  );
}