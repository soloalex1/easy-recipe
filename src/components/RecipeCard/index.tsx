'use client';

import { Recipe } from '@/types';

import * as S from './styles';
import Image from 'next/image';

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <S.Card>
      <h3>{recipe.name}</h3>
      <Image
        src={recipe.imageUrl}
        loading="lazy"
        alt={recipe.name}
        width={100}
        height={100}
      />
      <caption>{recipe.difficulty}</caption>
      <label>{recipe.position}</label>
    </S.Card>
  );
};

export default RecipeCard;
