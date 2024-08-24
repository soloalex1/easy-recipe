import { useMemo } from 'react';

import { Difficulty, Recipe } from '@/types';

import data from '@/api/data.json';

const useSortedRecipes = (difficulty: Difficulty | null) => {
  const sortedRecipes = useMemo(() => {
    if (!difficulty)
      return data.recipes.sort((a, b) => a.position - b.position);

    const [matchingDifficulty, otherRecipes] = data.recipes.reduce(
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

    const sortedMatchingDifficulty = matchingDifficulty.sort(
      (a, b) => a.position - b.position
    );

    const sortedOtherRecipes = otherRecipes.sort(
      (a, b) => a.position - b.position
    );

    return [...sortedMatchingDifficulty, ...sortedOtherRecipes];
  }, [difficulty]);

  return sortedRecipes;
};

export default useSortedRecipes;
