import axios from 'axios';
import { useState, useEffect } from 'react';
import STips from './style';

export default function Tips() {
  const [showInput, setShowInput] = useState(false);
  const [tips, setTips] = useState([]);
  const [tipComment, setTipComment] = useState('...');
  const [dataTip, setDataTip] = useState([]);
  const id = 1;

  const handleClick = () => {
    setShowInput(true);
  };

  const handleSearchChange = (e) => {
    setTipComment(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setDataTip([id, 10, tipComment])
      .post(`http://localhost:5000/items/tips`, [dataTip])
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}/tips`)
      .then(({ data }) => {
        setTips(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <STips>
      {tips.map((tip) => (
        <p key={tip.comment}>
          {tip.comment} - {tip.username}
        </p>
      ))}
      {!showInput && (
        <button onClick={handleClick} type="button">
          Partage un conseil !
        </button>
      )}
      {showInput && (
        <form
          action=""
          method="get"
          className="usrform"
          onSubmit={handleSubmit}
        >
          <textarea
            rows="4"
            cols="50"
            name="comment"
            form="usrform"
            value={tipComment}
            onChange={handleSearchChange}
          />

          <div className="usrform">
            <input
              className="submit"
              type="submit"
              value="Partage un conseil !"
            />
          </div>
          {console.log(tipComment)}
        </form>
      )}
    </STips>
  );
}
