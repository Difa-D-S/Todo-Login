
const AddTask = ({tasklist, setTasklist, task, setTask, IsLoggedIn}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(task.id){
          const date = new Date();
          const updateEdit = tasklist.map( (todo) => (
            todo.id === task.id ? { id: task.id, name: task.name, time:`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} : todo
          ));
          setTasklist(updateEdit);
          setTask({});
        }
        else{    
          const date = new Date();
          const newTask = {
              id: date.getTime(), 
              name: e.target.task.value, 
              time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
              complete: false
            }
          setTasklist([...tasklist, newTask]);
          setTask({});
        }
      }

      const HandleLogout = () => {
        // localStorage.removeItem('formData');
        IsLoggedIn();
    }
    
    return (
        <section className='container'>
          <form onSubmit={handleSubmit}>
            <div className='inputAdd my-5'>
              <input type='text' placeholder='Add Task' name="task" value={task.name || "" } 
                  onChange={(e) => setTask({...task, name: e.target.value})} autoComplete='off' maxLength="25" />
              <button type='submit'>{task.id ? "Edit" : "Add"}</button>
            </div>
          </form>
          <button onClick={() => HandleLogout()}>Logout</button>
        </section>
    )
}

export default AddTask