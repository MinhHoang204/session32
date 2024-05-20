import React, { useState } from 'react';

const Bai7: React.FC = () => {
  const [gender, setGender] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Giới tính được chọn: ${gender}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            value="Nam"
            checked={gender === 'Nam'}
            onChange={handleChange}
          />
          Nam
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Nữ"
            checked={gender === 'Nữ'}
            onChange={handleChange}
          />
          Nữ
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Khác"
            checked={gender === 'Khác'}
            onChange={handleChange}
          />
          Khác
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Bai7;