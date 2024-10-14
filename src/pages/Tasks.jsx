import { Link } from 'react-router-dom';
import welcome from '../utils/welcome.png';

const Tasks = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center text-center"
      style={{
        background: 'linear-gradient(to right, purple, blue)',
      }}
    >
      
      <img className="w-1/5 mb-6" src={welcome} alt="Welcome" />
      <h1 className="text-4xl font-bold mb-4 text-white"> 
        Welcome to Task Management System
      </h1>
      <p className="text-lg text-white mb-6"> 
        Organize and manage your tasks efficiently!
      </p>

     
      <Link to="/signup">
        <button
          type="button"
          className="bg-blue-500 text-white p-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Let&apos;s Get Started
        </button>
      </Link>
    </div>
  );
};

export default Tasks;
