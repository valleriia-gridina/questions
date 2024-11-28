export type TQuestion = {
  id: number;
  title: string;
  answerOptions: { id: number; title: string; isCorrect: boolean }[];
  explanation: string;
  currentNumber?: number;
};

export type TAnswer = {
  id: number;
  isCorrect: boolean;
  isDisabled: boolean;
  value: string;
};
