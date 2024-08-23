'use client';

import { useState } from 'react';

import RecipeCard from '@/components/RecipeCard';

import { Recipe, Difficulty } from '@/types';
import data from '@/api/data.json';
import * as S from './styles';

export default function Home() {
  const [recipeList, setRecipeList] = useState(data.recipes);

  const filterRecipeList = (difficulty: Difficulty) => {
    setRecipeList(
      data.recipes.filter((recipe) => recipe.difficulty === difficulty)
    );
  };

  return (
    <S.MainContainer>
      <S.PageHeader>
        <S.PageTitle id="title">Trending Recipes</S.PageTitle>
      </S.PageHeader>
      <S.RecipeGrid aria-labelledby="title">
        {recipeList
          .sort((a, b) => a.position - b.position)
          .map(({ id, ...recipe }) => (
            <RecipeCard key={id} recipe={recipe as Recipe} />
          ))}
      </S.RecipeGrid>
    </S.MainContainer>
  );
}
