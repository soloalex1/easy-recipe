'use client';

import { useState } from 'react';

import RecipeCard from '@/components/RecipeCard';
import Filter from '@/components/Filter';

import useSortedRecipes from '@/hooks/useSortedRecipes';

import { Recipe, Difficulty } from '@/types';

import * as S from './styles';

export default function Home() {
  const [filter, setFilter] = useState<Difficulty | ''>();

  const recipeList = useSortedRecipes(filter as Difficulty);

  const handleChange = (difficulty: Difficulty) => {
    setFilter(difficulty);
  };

  return (
    <S.MainContainer>
      <S.PageHeader>
        <S.PageTitle>Recipes</S.PageTitle>
      </S.PageHeader>

      <Filter filter={filter!} onChange={handleChange} />

      <section aria-labelledby="recipes-title">
        <S.SectionTitle id="recipes-title">Trending Recipes</S.SectionTitle>
        <S.RecipeGrid>
          {recipeList.map(({ id, ...recipe }) => (
            <RecipeCard key={id} recipe={recipe as Recipe} selected={filter!} />
          ))}
        </S.RecipeGrid>
      </section>
    </S.MainContainer>
  );
}
