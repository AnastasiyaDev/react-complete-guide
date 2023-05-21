import { useEffect, useState, useCallback } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);

    const fetchMeals = useCallback(async () => {
        const response = await fetch('https://react-food-order-8550c-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
        const responseData = await response.json();

        const loadedMeals = [];

        for(const key in responseData) {
            loadedMeals.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price,
            })
        }

        setMeals(loadedMeals);
    }, []);

    useEffect(() => {
        fetchMeals();
    }, []);


    const mealsList = meals.map((meal) => (
        <MealItem
            key={ meal.id }
            id={ meal.id }
            name={ meal.name }
            description={ meal.description }
            price={ meal.price }
        />
    ));

    return (
        <section className={ classes.meals }>
            <Card>
                <ul>{ mealsList }</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
