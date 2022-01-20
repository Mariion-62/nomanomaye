import axios from 'axios';
import { useState, useEffect } from 'react';
import STips from './style';

export default function Tips() {
  const [tips, setTips] = useState([]);
  const id = 1;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}/tips`)
      .then(({ data }) => {
        console.log(data);
        setTips(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <STips>
      {tips.map((tip) => (
        <p>
          {tip.comment} - {tip.username}
        </p>
      ))}
    </STips>
  );
}
