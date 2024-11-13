export type TQuestion = {
  id: number;
  title: string;
  answerOptions: Array<{ id: number; title: string; isCorrect: boolean }>;
  explanation: string;
  quantity: number;
};

export type AnswerOption = {
  id: number;
  title: string;
  isCorrect: boolean;
};

export type TAnswers = {
  id: number;
  isCorrect: boolean;
  selectedAnswerId: number | null;
};

export type TQuestionOrig = {
  id: number;
  title: string;
  answerOptions: AnswerOption[];
  explanation: string;
};

export type TQuestionsProps = {
  quantityOfQuestions: number;
};
