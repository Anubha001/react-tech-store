import React from 'react';

import './ProductCard.css';

export default class ProductCard extends React.Component {
    render() {
        const {
            id,
            name,
            category
        } = this.props;
        return (
            <div className='product-card'>
                <div>
                    <label>Name</label>
                    <label>{name}</label>
                </div>
                <div>
                    <label>Category</label>
                    <label>{category}</label>
                </div>
            </div>
        );
    }
};