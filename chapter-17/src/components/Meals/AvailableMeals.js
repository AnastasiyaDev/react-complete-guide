import { useEffect, useState } from 'react';

import useHttp from '../../hooks/use-http';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const requestConfig = {
            url: 'https://react-food-order-8550c-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
        }
        const transformData = (data) => {
            const loadedMeals = [];

            for(const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                })
            }

            setMeals(loadedMeals);
        };

        fetchMeals(requestConfig, transformData);
    }, [fetchMeals]);

    if (isLoading) {
        return (
            <section className={ classes.meals }>
                <p className={ classes.mealsLoading }>Loading...</p>
            </section>
        )
    }

    if (error) {
        return (
            <section className={ classes.meals }>
                <p className={ classes.mealsError }>{ error }</p>
            </section>
        )
    }

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
