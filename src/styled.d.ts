import "styled-components";

export interface ThemeColors {
  primary1: string;
  primary2: string;
  primary3: string;
  primary4: string;
  primary5: string;
  primary6: string;
  primary7: string;
  primary8: string;

  secondary1: string;
  secondary2: string;
  secondary3: string;
  secondary4: string;
  secondary5: string;
  secondary6: string;
  secondary7: string;

  tertiary1: string;
  tertiary2: string;
  tertiary3: string;
  tertiary4: string;
  tertiary5: string;
}

export interface ThemeGradients {
  gold: string;
  goldHover: string;
}

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
}

export interface ThemeShadow {
  soft: string;
  gold: string;
}

export interface ThemeFonts {
  heading: string;
  body: string;
}

export interface ThemeMediaQuery {
  mobile: string;
  tablet: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColors;
    gradients: ThemeGradients;
    radius: ThemeRadius;
    shadow: ThemeShadow;
    fonts: ThemeFonts;
    mediaQuery: ThemeMediaQuery;
  }
}
