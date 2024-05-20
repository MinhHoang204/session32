import React, { useState } from 'react';

const Bai3: React.FC = () => {
  const [birthday, setBirthday] = useState<string>('');
  const [submittedBirthday, setSubmittedBirthday] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedBirthday(birthday);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedBirthday && (
        <div>
          <p>Submitted Birthday: {submittedBirthday}</p>
        </div>
      )}
    </div>
  );
};

export default Bai3;
