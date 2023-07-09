import React from 'react';
import './TaskItem.scss';

interface IProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
}

export const TaskItem: React.FC<IProps> = ({ task }) => {
  return (
      <div>
        <p>{task.title}</p>
        <p>{task.completed ? 'Completed' : 'Incomplete'}</p>
      </div>
  );
};
