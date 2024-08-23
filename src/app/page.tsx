'use client';

import data from '@/api/data.json';

import RecipeCard from '@/components/RecipeCard';

import { Recipe } from '@/types';

import * as S from './styles';

export default function Home() {
  return (
    <main>
      <h1 id="title">Trending Recipes</h1>
      <S.RecipeGrid aria-labelledby="title">
        {data.recipes.map(({ id, ...recipe }) => (
          <RecipeCard key={id} recipe={recipe as Recipe} />
        ))}
      </S.RecipeGrid>
    </main>
  );
}
