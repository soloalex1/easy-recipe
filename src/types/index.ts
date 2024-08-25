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

export type Theme = {
  name: string;
  colors: {
    blue: string;
    easy: string;
    medium: string;
    hard: string;
    background: string;
    shadow: {
      default: string;
      hover: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
};

export type ThemeContextData = {
  theme: Theme;
  toggleTheme(): void;
};
