"use client"
import React, { useState } from 'react';

const ItemForm = () => {
  const [items, setItems] = useState([
    { name: '', hsn: '', price: '', qty: '', total: '' },
  ]);

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: '', hsn: '', price: '', qty: '', total: '' }]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Items</h2>

      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-6 gap-2 mb-2 items-center">
          <input
            type="text"
            placeholder="Item"
            value={item.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            className="border p-2"
          />
          <input
            type="text"
            placeholder="HSN Code"
            value={item.hsn}
            onChange={(e) => handleChange(index, 'hsn', e.target.value)}
            className="border p-2"
          />
          <input
            type="number"
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleChange(index, 'price', e.target.value)}
            className="border p-2"
          />
          <input
            type="number"
            placeholder="Qty"
            value={item.qty}
            onChange={(e) => handleChange(index, 'qty', e.target.value)}
            className="border p-2"
          />
          <input
            type="number"
            placeholder="Total"
            value={item.total}
            onChange={(e) => handleChange(index, 'total', e.target.value)}
            className="border p-2"
          />
          <button
            type="button"
            onClick={() => removeItem(index)}
            className="text-red-500 font-bold"
          >
            X
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addItem}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add More
      </button>
    </div>
  );
};

export default ItemForm;
