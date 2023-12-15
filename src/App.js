import './App.css';
import { Todo } from './components/Todo';

// Gautham added your sample test here
function App() {
  const todo=[
    {id:1,title:"design",status:true},
    {id:2,title:"dev",status:true},
    {id:3,title:"testing",status:false},
    {id:4,title:"deploy",status:false},
  ]
  return (
    <div  className="App">
      <h1>Todo List</h1>
      {
        todo.map((todo)=>{
          return <Todo todo={todo}/>
        })
      }
    </div>
  );
}


export default App;
