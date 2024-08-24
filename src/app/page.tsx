'use client';

import { useState } from 'react';

import RecipeCard from '@/components/RecipeCard';
import Filter from '@/components/Filter';

import { Recipe, Difficulty } from '@/types';
import data from '@/api/data.json';
import * as S from './styles';

export default function Home() {
  const [filter, setFilter] = useState<Difficulty | ''>();
  const [recipeList, setRecipeList] = useState(data.recipes);

  const filterRecipeList = (difficulty: Difficulty) => {
    if (difficulty !== filter) {
      setFilter(difficulty);
      setRecipeList(
        data.recipes.filter((recipe) => recipe.difficulty === difficulty)
      );
      return;
    }
    setFilter('');
    setRecipeList(data.recipes);
  };

  return (
    <S.MainContainer>
      <S.PageHeader>
        <S.PageTitle>Recipes</S.PageTitle>
      </S.PageHeader>

      <Filter filter={filter!} onChange={filterRecipeList} />

      <section aria-labelledby="recipes-title">
        <S.SectionTitle id="recipes-title">Trending Recipes</S.SectionTitle>
        <S.RecipeGrid>
          {recipeList
            .sort((a, b) => a.position - b.position)
            .map(({ id, ...recipe }) => (
              <RecipeCard key={id} recipe={recipe as Recipe} />
            ))}
        </S.RecipeGrid>
      </section>
    </S.MainContainer>
  );
}
