import React, { useState } from 'react';

const Bai1: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('nva@gmail.com', email);
    // Xử lý dữ liệu email ở đây, ví dụ gửi lên server hoặc hiển thị trên UI
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Bai1;