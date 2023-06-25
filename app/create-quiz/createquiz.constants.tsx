interface IFormStages {
  stageName: string;
  inputFields: IInputFields[];
}

interface IInputFields {
  label?: string;
  fieldDetail: {
    element: 'input' | 'select' | 'textarea';
    id: string;
    name: string;
    options?: string[];
    type?: string;
    placeHolder?: string;
    onChange?: () => void;
    value?: string | number;
  };
}

export const formStages: IFormStages[] = [
  {
    stageName: 'Set Quiz Name',
    inputFields: [
      {
        label: 'What is the name of your quiz?',
        fieldDetail: {
          element: 'input',
          type: 'text',
          placeHolder: 'E.g. The Magical Quiz',
          id: 'quizName',
          name: 'quizName',
        },
      },
    ],
  },
  {
    stageName: 'Quiz Category',
    inputFields: [
      {
        label: 'In what category does your quiz fall into?',
        fieldDetail: {
          element: 'select',
          options: ['kamote'],
          placeHolder: 'E.g. The Magical Quiz',
          id: 'selectQuizCategory',
          name: 'selectQuizCategory',
        },
      },
    ],
  },
];
