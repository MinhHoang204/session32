import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Bai6: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      console.log('Passwords do not match!');
      return;
    }
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Thêm mới tài khoản</h2>
      <div>
        <label>Tên</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mật khẩu</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nhập lại mật khẩu</label>
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Đăng ký</button>
    </form>
  );
};

export default Bai6;