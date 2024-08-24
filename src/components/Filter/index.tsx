import { MouseEvent } from 'react';
import { Difficulty } from '@/types';
import * as S from './styles';

type FilterProps = {
  filter: Difficulty | '';
  onChange(difficulty: string | null): void;
};

const Filter = ({ filter, onChange }: FilterProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const value = event.currentTarget.textContent!;
    onChange(filter === value ? null : event.currentTarget.textContent!);
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
            id="easy"
            $isActive={isButtonActive('Easy')}
            role="button"
            onClick={handleClick}
          >
            Easy
          </S.Button>
          <S.Button
            id="medium"
            $isActive={isButtonActive('Medium')}
            role="button"
            onClick={handleClick}
          >
            Medium
          </S.Button>
          <S.Button
            id="hard"
            $isActive={isButtonActive('Hard')}
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
