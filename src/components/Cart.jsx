import React, { useContext } from 'react';
import {ShoppingContext} from './context/ShoppingContext';

export default function Cart() {
    const {cartItems, incrementQ, decrementQ, removeFromCart} = useContext(ShoppingContext);

    return (
        <div className='row my-4'>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>
                                                <img src={item.image} 
                                                className='fluid rounded'
                                                width={60}
                                                height={60}    
                                                alt={item.name} />
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                <i 
                                                    onClick={() => incrementQ(item)}
                                                    style={{cursor: 'pointer'}}
                                                    className="bi bi-caret-up"></i>
                                                <span className="mx-2">
                                                    {item.quantity}
                                                </span>
                                                <i 
                                                    onClick={() => decrementQ(item)}
                                                    style={{cursor: 'pointer'}}
                                                    className="bi bi-caret-down"></i>
                                            </td>
                                            <td>
                                                ${item.price}
                                            </td>
                                            <td>
                                                ${item.price * item.quantity} 
                                            </td>
                                            <td>
                                                <i 
                                                    onClick={() => removeFromCart(item)}
                                                    style={{cursor: 'pointer'}}
                                                    className="bi bi-cart-x text-danger"></i>
                                            </td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <th colSpan={3} className='text-center'>
                                        Total
                                    </th>
                                    <td colSpan={3} className='text-center'>
                                        <span className="badge bg-danger rounded-pill">
                                            ${
                                                cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)
                                            }
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
