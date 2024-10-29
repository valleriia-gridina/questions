export type TAnswerOption = { id: number; title: string; isCorrect: boolean };

export type TQuestion = {
  id: number;
  title: string;
  answerOptions: TAnswerOption[];
  explanation: string;
  currentNumber: number;
};

export type TAnswer = {
  id: number;
  isCorrect: boolean;
  isDisabled: boolean;
  value: string;
};
