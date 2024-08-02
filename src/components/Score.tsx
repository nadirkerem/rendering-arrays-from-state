import { IScore } from '../interfaces';
import '../styles/Score.css';

export default function Score({ date, score }: IScore) {
  return (
    <li className='score-item'>
      <p className='score-date'>{date}</p>
      <p className='score-value'>{score}</p>
    </li>
  );
}
