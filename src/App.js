import TodoHeader from './components/TodoHeader';
import TodoContent from './components/TodoContent'; 
import { Toaster } from 'react-hot-toast'
import './App.css';


function App() {
  return (
    <div className='todo-main'>
      <div className='container'>
        <TodoHeader />
        <TodoContent />           
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </div>
    </div>
  );
}

export default App;
