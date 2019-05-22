import React from 'react'
import ProductApi from '../api/MockProductsApi';
import ProductCard from '../components/products/ProductCard';

export default class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      start: 0,
      size: 15,
      categories: [],
      filters: []
    };
  }

  componentDidMount() {
    this.fetchProductCategories();
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.start !== this.state.start) {
      this.fetchProducts();
    }

    if (JSON.stringify(prevState.filters) !== JSON.stringify(this.state.filters)) {
      this.fetchProducts();
    }
  }

  render() {
    const {
      products,
      categories,
      start
    } = this.state;
    return (
      <div className='products-page'>
        <ul>
          {categories.map((category, i) => 
            <li key={category} onClick={this.filter.bind(this, 'category', category)}>{category}</li>
          )}
        </ul>
        <div className='products-page__product-list'>
          <h4>Products</h4>
          {products.map((product, i) => {
            return (
              <ProductCard key={product.id} {...product}/>
            );
          })}
          <button onClick={this.prev} disabled={start === 0}>Prev</button>
          <button onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }

  async fetchProductCategories() {
    let categories = await ProductApi.fetchProductCategories();
    this.setState({
      categories
    });
  }

  async fetchProducts() {
    const {
      start,
      filters,
      size
    } = this.state;
    let products = [];
    if (filters.length) {
      products =  await ProductApi.filterProducts(filters, start, start + size);
    } else {
      products = await ProductApi.fetchProducts(start, start + size);
    }
    this.setState({
      products
    });
  }

  prev = () => {
    this.setState({
      start: Math.max(this.state.start - this.state.size, 0)
    });
  };

  next = () => {
    this.setState({
      start: this.state.start + this.state.size
    });
  }

  filter = (name, value) => {
    let filters = this.state.filters;
    // is filter active
    let foundFilter = filters.find((f) => f.name === name);
    if (!foundFilter) {
      filters.push({
        name,
        value
      });
    } else {
      filters = filters.map((f) => {
        if (f.name === name) {
          return {
            name,
            value
          };
        }
        return f;
      });
    }
    this.setState({
      filters
    });
  }
};
