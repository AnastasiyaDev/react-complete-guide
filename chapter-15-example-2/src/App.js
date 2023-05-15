import React, { useEffect, useState, useCallback, useMemo } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import useHttp from './hooks/use-http';

function App() {
    const [tasks, setTasks] = useState([]);

    const requestConfig = useMemo(() => {
        return {
            url: 'https://react-hooks-254a3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        }
    }, []);
    const transformData = useCallback((data) => {
        const loadedTasks = [];

        for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }

        setTasks(loadedTasks);
    }, []);

    const {
        isLoading,
        error,
        sendRequest: fetchTasks,
    } = useHttp(requestConfig, transformData);


    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={ taskAddHandler }/>
            <Tasks
                items={ tasks }
                loading={ isLoading }
                error={ error }
                onFetch={ fetchTasks }
            />
        </React.Fragment>
    );
}

export default App;
