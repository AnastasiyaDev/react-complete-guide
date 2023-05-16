import Section from '../UI/Section';
import TaskForm from './TaskForm';

import useHttp from '../../hooks/use-http';


const NewTask = (props) => {
    const { isLoading, error, sendRequest: saveTasks } = useHttp();


    const enterTaskHandler = async (taskText) => {
        const requestConfig = {
            url: 'https://react-hooks-254a3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
            method: 'POST',
            body: { text: taskText },
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const createTask =(data) => {
            const generatedId = data.name; // firebase-specific => "name" contains generated id
            const createdTask = { id: generatedId, text: taskText };

            props.onAddTask(createdTask);
        };

        saveTasks(requestConfig, createTask);
    };

    return (
        <Section>
            <TaskForm onEnterTask={ enterTaskHandler } loading={ isLoading }/>
            { error && <p>{ error }</p> }
        </Section>
    );
};

export default NewTask;
