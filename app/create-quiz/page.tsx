'use client';
import CustomButton from '@/components/ui/button/CustomButton';
import CustomInput from '@/components/ui/input/CustomInput';
import { CheckIcon, ChevronLeft, ChevronRight } from '@/components/icons';
import useFormStages from './hooks/useFormStages';
import React from 'react';
import { formStages } from './createquiz.constants';

const CreateQuiz = () => {
  const {
    currentStage,
    formValues,
    nextStage,
    previousStage,
    goToStage,
    updateFormValues,
    resetForm,
  } = useFormStages(1);
  return (
    <main className="grid relative items-center min-h-screen p-6">
      <form
        role="form"
        className="lg:w-2/4 sm:w-1/2 w-full justify-self-center min-h-[16rem] rounded form-control"
      >
        {currentStage > 1 && (
          <button
            type="button"
            className="btn btn-circle btn-outline absolute bottom-4 left-4 md:top-1/2 md:-translate-y-1/2"
            onClick={previousStage}
          >
            <ChevronLeft />
          </button>
        )}
        {formStages[currentStage - 1].inputFields.map((inputField) => {
          if (inputField.fieldDetail.element === 'input') {
            return (
              <CustomInput
                key={inputField.fieldDetail.id}
                className="border border-transparent border-b rounded-none border-b-neutral focus:outline-none"
                isLabelVisible={!!inputField?.label}
                labelText={inputField?.label}
                placeholder={inputField.fieldDetail?.placeHolder}
                id={inputField.fieldDetail.id}
                name={inputField.fieldDetail.name}
              />
            );
          }
        })}
        <div className="flex justify-end mt-4">
          <CustomButton
            text="Ok"
            className="btn-accent"
            hasIcon
            icon={<CheckIcon />}
          />
        </div>
        {currentStage < formStages.length && (
          <button
            type="button"
            className="btn btn-circle btn-outline absolute bottom-4 right-4 md:top-1/2 md:-translate-y-1/2"
            onClick={nextStage}
          >
            <ChevronRight />
          </button>
        )}
      </form>
    </main>
  );
};

export default CreateQuiz;
