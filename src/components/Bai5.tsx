import React, { useState } from 'react';

interface Product {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
}

const Bai5: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    productCode: '',
    productName: '',
    price: 0,
    quantity: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Thêm mới sản phẩm</h2>
      <div>
        <label>Mã sản phẩm</label>
        <input
          type="text"
          name="productCode"
          value={product.productCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tên sản phẩm</label>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Giá</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Số lượng</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default Bai5;