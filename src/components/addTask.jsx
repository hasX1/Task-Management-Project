import React, { useState, useEffect } from 'react';

const AddTaskPopup = ({ onAddTask, onUpdateTask, taskToUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskType, setTaskType] = useState('Todo');
  const [error, setError] = useState('');

  // Populate fields if a task is being updated
  useEffect(() => {
    if (taskToUpdate) {
      setTask(taskToUpdate.name);
      setTaskDesc(taskToUpdate.description);
      setTaskDate(taskToUpdate.dueDate.split('-').reverse().join('-')); // Formatting for the date input (YYYY-MM-DD)
      setTaskType(taskToUpdate.type || 'Todo');
      setIsOpen(true);
    }
  }, [taskToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate task name
    if (!task.trim()) {
      setError('Task name is required');
      return;
    }

    // Validate and parse the due date
    const dueDate = new Date(taskDate);
    const today = new Date();
    if (isNaN(dueDate.getTime()) || dueDate < today) {
      setError('Invalid or past due date');
      return;
    }

    // Prepare the task object
    const newTask = {
      id: taskToUpdate?.id || null, // Include ID for updates
      name: task,
      description: taskDesc,
      dueDate: taskDate.split('-').reverse().join('-'), // Store as DD-MM-YYYY
      type: taskType,
    };

    if (taskToUpdate) {
      onUpdateTask(newTask); // Update task
    } else {
      onAddTask(newTask); // Add new task
    }

    // Reset fields after submission
    resetFields();
  };

  const resetFields = () => {
    setTask('');
    setTaskDesc('');
    setTaskDate('');
    setTaskType('Todo');
    setIsOpen(false);
    setError('');
  };

  const closePopup = () => {
    resetFields();
  };

  return (
    <div>
      <button
        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {taskToUpdate ? 'Update Task' : 'Add Task'}
      </button>

      {isOpen && (
        <>
          {/* Overlay to close popup on click */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={closePopup}
          />

          {/* Popup content */}
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="relative bg-blue-200 p-6 rounded-lg shadow-lg w-96">
              <button
                className="absolute top-3 right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
                onClick={closePopup}
              >
                &times;
              </button>

              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-4">
                  {taskToUpdate ? 'Update Task' : 'Add Task'}
                </h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <input
                  type="text"
                  placeholder="Task name"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="w-full border p-2 mb-4"
                />

                <textarea
                  placeholder="Task description"
                  value={taskDesc}
                  onChange={(e) => setTaskDesc(e.target.value)}
                  className="w-full border p-2 mb-4"
                />

                <div className="mb-4">
                  <label className="block mb-2">Due Date</label>
                  <input
                    type="date"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    className="w-full border p-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Task Type</label>
                  <select
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                    className="w-full border p-2"
                  >
                    <option value="Todo">Todo</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    {taskToUpdate ? 'Update Task' : 'Add Task'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddTaskPopup;
