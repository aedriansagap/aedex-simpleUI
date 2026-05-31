import { tokens } from './tokens';

export type ColorToken = keyof typeof tokens.colors | (string & {});
export type SpacingToken = keyof typeof tokens.spacing | (string & {}) | number;
export type RadiusToken = keyof typeof tokens.radii | (string & {}) | number;
export type ShadowToken = keyof typeof tokens.shadows | (string & {});
export type TypographyToken = keyof typeof tokens.typography;

export type LayoutShorthand = 
  | 'center' 
  | 'col' 
  | 'col-center' 
  | 'row' 
  | 'row-center' 
  | 'row-between' 
  | 'col-between';

export interface StyleObject {
  // Shorthands
  layout?: LayoutShorthand;
  bg?: ColorToken;
  color?: ColorToken;
  text?: TypographyToken;
  rounded?: RadiusToken;
  shadow?: ShadowToken;

  // Spacing
  p?: SpacingToken;
  px?: SpacingToken;
  py?: SpacingToken;
  pt?: SpacingToken;
  pb?: SpacingToken;
  pl?: SpacingToken;
  pr?: SpacingToken;
  m?: SpacingToken;
  mx?: SpacingToken;
  my?: SpacingToken;
  mt?: SpacingToken;
  mb?: SpacingToken;
  ml?: SpacingToken;
  mr?: SpacingToken;

  // CSS standard properties
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  flex?: string | number;
  display?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
  opacity?: number;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  cursor?: string;
  transition?: string;
  transform?: string;
  animation?: string;
  border?: string;
  borderWidth?: string | number;
  borderColor?: ColorToken;

  // Pseudo-classes
  hover?: StyleObject;
  focus?: StyleObject;
  active?: StyleObject;

  // Responsive Breakpoints
  sm?: StyleObject;
  md?: StyleObject;
  lg?: StyleObject;
  xl?: StyleObject;
  '2xl'?: StyleObject;
  
  // Any other CSS property
  [key: string]: any;
}

export type StyleDefinitions<T extends string> = Record<T, StyleObject>;
