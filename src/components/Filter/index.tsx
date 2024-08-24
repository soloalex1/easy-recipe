import { MouseEvent } from 'react';
import { Difficulty } from '@/types';
import * as S from './styles';

type FilterProps = {
  filter: Difficulty | '';
  onChange(difficulty: string): void;
};

const Filter = ({ filter, onChange }: FilterProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onChange(event.currentTarget.textContent!);
  };

  const isButtonActive = (id: string) => {
    if (!filter) return false;
    return id === filter;
  };

  return (
    <form>
      <S.Fieldset aria-describedby="form-description">
        <S.FiltersLabel>Difficulty</S.FiltersLabel>
        <S.FiltersDescription id="form-description">
          You can filter recipes by difficulty.
        </S.FiltersDescription>
        <div>
          <S.Button
            isActive={isButtonActive('Easy')}
            role="button"
            onClick={handleClick}
          >
            Easy
          </S.Button>
          <S.Button
            isActive={isButtonActive('Medium')}
            role="button"
            onClick={handleClick}
          >
            Medium
          </S.Button>
          <S.Button
            isActive={isButtonActive('Hard')}
            role="button"
            onClick={handleClick}
          >
            Hard
          </S.Button>
        </div>
      </S.Fieldset>
    </form>
  );
};

export default Filter;
