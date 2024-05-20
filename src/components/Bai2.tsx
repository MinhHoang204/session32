import React, { useState } from 'react';

const Bai2: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const [submittedColor, setSubmittedColor] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedColor(color);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedColor && (
        <div>
          <p>Submitted Color: {submittedColor}</p>
          <div style={{ backgroundColor: submittedColor, width: '100px', height: '100px' }}></div>
        </div>
      )}
    </div>
  );
};

export default Bai2;