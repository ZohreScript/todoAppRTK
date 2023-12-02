import logo from './logo.svg';
import './App.css';
import AddToDoForm from './components/Todos/AddToDoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  return (
   
<div class="flex justify-center items-center h-screen glass-container bg-opacity-50 bg-pink-300">
  <div class="grid container justify-center items-center glass-container bg-opacity-70 bg-white w-1/3 shadow-lg shadow-white rounded-lg p-4 text-gray-800 font-semibold">    
  <h1 className=" text-3xl text-center font-bold text-pink-600">ToDoApp REDUX TOOLKIT</h1>
    {/* <CounterComp /> */}
      <AddToDoForm/>
      <TodoList/>
    {/* <TotalCompleteItems /> */}
   
    </div> 
    </div> 
    
  );
}

export default App;
