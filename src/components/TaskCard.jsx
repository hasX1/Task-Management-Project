import React from 'react';

const TaskCard = ({ task, onDelete, onUpdate, onComplete }) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-300 via-blue-100 to-pink-400 rounded-lg shadow-lg p-4">
      {/* Complete Task Button */}
      <button 
        onClick={() => onComplete(task)} 
        className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full hover:bg-green-700"
        title="Mark as Completed"
      >
        ✅
      </button>

      <h3 className="text-xl font-semibold">{task.name}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Task Type: <span className="font-bold">{task.type}</span></p> {/* Display the task type */}
      
      <div className="flex justify-between mt-4">
        <button 
          onClick={onUpdate} 
          className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white p-2 rounded-md"
        >
          Update
        </button>
        <button 
          onClick={onDelete} 
          className="bg-red-600 text-white p-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
