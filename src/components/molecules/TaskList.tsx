import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TaskItem } from './Taskİtem';

interface ITask {
    id: string;
    title: string;
    completed: boolean;
}

export const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const fetchData = async () => {
        const result = await axios.get('http://api.com/tasks');
        setTasks(result.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};
