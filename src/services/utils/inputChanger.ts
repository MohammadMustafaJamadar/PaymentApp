import { TUpdateFunction } from '@/app/types/types';
import { ChangeEvent } from 'react';

export const InputChanger = (event: ChangeEvent<HTMLInputElement>, updateFunction:TUpdateFunction ) => {
  const newValue: string = event.target.value;
  updateFunction(newValue);
}