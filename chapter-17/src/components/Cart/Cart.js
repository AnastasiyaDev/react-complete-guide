import React, { useContext, useState } from 'react';

import useHttp from '../../hooks/use-http';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const { isLoading, error, sendRequest: saveOrder } = useHttp();

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${ cartCtx.totalAmount.toFixed(2) }`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    const onOrderButtonClick = () => {
        setIsCheckout(true);
    }

    const onSubmitOrder = async (userData) => {
        setIsSubmitting(true);

        const requestConfig = {
            url: 'https://react-food-order-8550c-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
            method: 'POST',
            body: { user: userData, products: cartCtx.items },
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const afterSubmit = () => {
            setIsSubmitting(false);
            setDidSubmit(true);
            cartCtx.clearCart();
        }

        saveOrder(requestConfig, afterSubmit);
    };

    const cartItems = (
        <ul className={ classes['cart-items'] }>
            { cartCtx.items.map((item) => (
                <CartItem
                    key={ item.id }
                    name={ item.name }
                    amount={ item.amount }
                    price={ item.price }
                    onRemove={ cartItemRemoveHandler.bind(null, item.id) }
                    onAdd={ cartItemAddHandler.bind(null, item) }
                />
            )) }
        </ul>
    );

    const modalActions = (
        <div className={ classes.actions }>
            <button className={ classes['button--alt'] } onClick={ props.onClose }>
                Close
            </button>
            { hasItems && <button className={ classes.button } onClick={onOrderButtonClick}>Order</button> }
        </div>
    );

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout onCancel={ props.onClose } onSubmit={onSubmitOrder}/>
            )}
            {!isCheckout && modalActions}
        </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = (
        <React.Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </React.Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;
