import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import STips from './style';

export default function Tips() {
  const [showInput, setShowInput] = useState(false);
  const [tips, setTips] = useState([]);
  const [tipComment, setTipComment] = useState('...');
  const [dataTip, setDataTip] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();

  const handleClick = () => {
    setShowInput(true);
  };

  const handleSearchChange = (e) => {
    setTipComment(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await setDataTip([id, 10, tipComment]);
    setShowInput(false);
  };
  useEffect(() => {
    axios
      .post(`http://localhost:5000/items/tips`, [dataTip])
      .then(() => {
        setToggle(!toggle);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dataTip]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}/tips`)
      .then(({ data }) => {
        setTips(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [toggle]);

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
        </form>
      )}
    </STips>
  );
}
