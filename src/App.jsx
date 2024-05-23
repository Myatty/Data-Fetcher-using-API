import { useState } from 'react'

function App() {
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState({});

  const getData = async (e) => {
    e.preventDefault();

    if (id < 1){
      setError(true);
      setId("");
      return;
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();
    setError(false);
    setTodo(data);
  }

  return (
    <>
      <form action="" onSubmit={getData}>
        <input type="number" value={id} onChange={(e) => {
          setId(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
        <div>
        {
          error && <h1>Please Enter a valid ID</h1>
        }
        {
          todo && (
          <div key={todo.id}> 
            <h3>Title : {todo.title}</h3>
            <h3>ID : {todo.id}</h3>
            <h3>User ID : {todo.userId}</h3>
            <h3>Completed : {todo.completed ? "Done" : "Not Done"}</h3>
            
          </div>
          )
        }
        </div>
        
    </>
  )
}

export default App