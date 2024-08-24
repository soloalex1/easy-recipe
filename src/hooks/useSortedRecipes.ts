import { useMemo } from 'react';

import { Difficulty, Recipe } from '@/types';

import data from '@/api/data.json';

const useSortedRecipes = (difficulty: Difficulty) => {
  const sortedRecipes = useMemo(() => {
    const recipes = data.recipes;

    // Separar receitas pela dificuldade fornecida
    const [matchingDifficulty, otherRecipes] = recipes.reduce(
      ([matching, others], recipe) => {
        if (recipe.difficulty === difficulty) {
          matching.push(recipe as Recipe);
        } else {
          others.push(recipe as Recipe);
        }
        return [matching, others];
      },
      [[], []] as [Recipe[], Recipe[]]
    );

    // Ordenar as receitas pela posição
    const sortedMatchingDifficulty = matchingDifficulty.sort(
      (a, b) => a.position - b.position
    );
    const sortedOtherRecipes = otherRecipes.sort(
      (a, b) => a.position - b.position
    );

    // Retornar o array combinado
    return [...sortedMatchingDifficulty, ...sortedOtherRecipes];
  }, [difficulty]); // Dependência para recalcular somente quando a dificuldade muda

  return sortedRecipes;
};

export default useSortedRecipes;
