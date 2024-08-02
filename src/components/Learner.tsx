import Score from './Score';

import { ILearner } from '../interfaces';

import '../styles/Learner.css';

export default function Learner({ name, bio, scores }: ILearner) {
  return (
    <div className='learner-container'>
      <h2 className='learner-name'>{name}</h2>
      <p className='learner-bio'>{bio}</p>
      <ul className='scores-list'>
        {scores.map((score) => (
          <Score key={score.date} {...score} />
        ))}
      </ul>
    </div>
  );
}
