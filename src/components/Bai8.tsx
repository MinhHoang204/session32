import React, { useState } from 'react';

const Bai8: React.FC = () => {
  const [hobbies, setHobbies] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter(hobby => hobby !== value));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Sở thích được chọn: ${hobbies.join(', ')}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="checkbox"
            value="Thể thao"
            checked={hobbies.includes('Thể thao')}
            onChange={handleChange}
          />
          Thể thao
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Âm nhạc"
            checked={hobbies.includes('Âm nhạc')}
            onChange={handleChange}
          />
          Âm nhạc
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Đọc sách"
            checked={hobbies.includes('Đọc sách')}
            onChange={handleChange}
          />
          Đọc sách
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Du lịch"
            checked={hobbies.includes('Du lịch')}
            onChange={handleChange}
          />
          Du lịch
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Bai8;
