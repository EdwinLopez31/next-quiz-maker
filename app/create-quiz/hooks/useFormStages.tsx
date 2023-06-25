import { useState } from 'react';

const useFormStages = (initialStage: number) => {
  const [currentStage, setCurrentStage] = useState(initialStage);
  const [formValues, setFormValues] = useState<Record<string, string | number>>(
    {}
  );

  const nextStage = () => {
    setCurrentStage((prevStage) => prevStage + 1);
  };

  const previousStage = () => {
    setCurrentStage((prevStage) => prevStage - 1);
  };

  const goToStage = (stageNumber: number) => {
    setCurrentStage(stageNumber);
  };

  const updateFormValues = (values: {}) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const resetForm = () => {
    setCurrentStage(initialStage);
    setFormValues({});
  };

  return {
    currentStage,
    formValues,
    nextStage,
    previousStage,
    goToStage,
    updateFormValues,
    resetForm,
  };
};

export default useFormStages;
