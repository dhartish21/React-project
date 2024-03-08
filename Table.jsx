import React, { useState } from 'react';
import './Table.css';
import { Link } from 'react-router-dom';

const TableWithCRUD = () => {
  const initialData = [
    { id: 1, category: 'Men', name: 'T-shirt', price: '$999',image:'https://m.media-amazon.com/images/I/51cDOG9YaYL._SX200_.jpg'},
    { id: 2, category: 'Women', name: 'T-shirt', price: '$20',image:'https://m.media-amazon.com/images/I/61IytOl+V7L._SY200_.jpg' },
    { id: 3, category: 'Kids', name: 'Tops', price: '$15',image:'https://m.media-amazon.com/images/I/61gRX0cXOxL._AC_UL200_FMwebp_QL65_.jpg' },
  ];

  const [data, setData] = useState(initialData);


  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const filteredData = data.filter((item) => {
    return (
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <table className="product-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><img src={item.image} alt={item.name} /></td>
              <td>
              <Link to={`/http://localhost:3000/product/${item.id}`} className="read-btn">Read</Link>
              <Link to={`/edit/${item.id}`} className="edit-btn">Edit</Link>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default TableWithCRUD;
