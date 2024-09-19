export type TQuestion = {
  id: number;
  title: string;
  answerOptions: Array<{ id: number; title: string; isCorrect: boolean }>;
  // answerOptions: {id: number; title: string; isCorrect: boolean}[];
  explanation: string;
};
