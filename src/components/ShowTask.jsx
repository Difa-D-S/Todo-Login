
const ShowTask = ({tasklist, setTasklist, setTask}) => {
    const handleDelete = (id) => {
        const update = tasklist.filter((task) => task.id !== id);
        setTasklist(update);
      }
    
      const handleEdit = (id) => {
        const selectTask = tasklist.find(todo => todo.id === id)
        setTask(selectTask);
      }
    
      const checkBox = (id) => {
          const update = tasklist.map((todo) => 
             todo.id === id ? {...todo, complete: !todo.complete} : todo
          );
          setTasklist(update);
      }
      
      return (
        <>
        <section className='container'>
      <div className='task-list'>
        <p className='task-count'>
          <span>
            <span className='me-3' style={{fontSize:"25px", fontWeight:'bold'}}>Task</span>
            <span className='count'>{tasklist.length}</span>
          </span>
          <span><button className='ClearAll' onClick={() => setTasklist([])}>ClearAll</button></span>
        </p>        
        <ul>
          <div className='row'>
            {tasklist.map((todo) => (
              <div className='col-6'>
                  <div>
                  <li className='list mt-3' key={todo.id}>
                  
                  <div>
                    <span>{todo.name}</span> <input type='checkBox' checked={todo.complete} onChange={() => checkBox(todo.id)}/> <br></br>
                    <span>{todo.time}</span>
                  </div>
                  <div>
                    <i onClick={() => handleEdit(todo.id)} className='me-2' style={{cursor:"pointer"}}>Edit</i>
                    <i onClick={() => handleDelete(todo.id)} style={{cursor:"pointer"}}>delete</i>
                  </div>
              
              </li>
                  </div>
              </div>
            ))}
            </div>
        </ul>
        
      </div>
    </section>
        </>
      )
}

export default ShowTask