export type ContainerProps = {
  children: React.ReactNode;
};

export enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

export type Recipe = {
  id: number;
  position: number;
  name: string;
  difficulty: Difficulty;
  imageUrl: string;
};
