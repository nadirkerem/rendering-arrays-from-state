export interface ILearner {
  name: string;
  bio: string;
  scores: IScore[];
}

export interface IScore {
  date: string;
  score: number;
}
