import React, { useState } from 'react';

const Bai4: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [submittedProgress, setSubmittedProgress] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedProgress(progress);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="progress">Progress:</label>
          <input
            type="range"
            id="progress"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            required
          />
          <span>{progress}%</span>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedProgress !== null && (
        <div>
          <p>Submitted Progress: {submittedProgress}%</p>
        </div>
      )}
    </div>
  );
};

export default Bai4;
