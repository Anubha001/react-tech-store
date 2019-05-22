import React from 'react';
import logo from '../../images/aboutBcg.jpeg'
import './ProductCard.css';

export default class ProductCard extends React.Component {
    render() {
        const {
            id,
            name,
            category,
            types,
            logo
        } = this.props;
        return (
            <div className='product-card'>
         
<div>
                    <label>id</label>
                    <label>{id}</label>
                </div>
                <div>
                    <label>Name</label>
                    <label>{name}</label>
                </div>

                <div>
                    <label>Category</label>
                    <label>{category}</label>
                </div>
                <div>
                    <label>Images</label>
                    <br></br>
                    <label>{logo}</label>
                   
                </div>
  
  
            </div>
        );
    }
};