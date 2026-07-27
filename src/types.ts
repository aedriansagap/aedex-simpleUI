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
  | 'col-between'
  | 'grid';

export interface StyleObject {
  // Shorthands
  layout?: LayoutShorthand;
  bg?: ColorToken;
  color?: ColorToken;
  text?: TypographyToken;
  rounded?: RadiusToken;
  shadow?: ShadowToken;

  // Flexbox & Grid Extensions
  gap?: SpacingToken;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  
  // Flex & Grid Children
  flexGrow?: number | string;
  flexShrink?: number | string;
  flexBasis?: string | number;
  gridColumn?: string | number;
  gridRow?: string | number;
  justifySelf?: 'auto' | 'normal' | 'stretch' | 'center' | 'start' | 'end';
  alignSelf?: 'auto' | 'normal' | 'stretch' | 'center' | 'start' | 'end';

  // Typography Extensions
  fontWeight?: number | string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';

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

  // Interaction
  cursor?: 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' | 'not-allowed' | (string & {});
  pointerEvents?: 'auto' | 'none' | (string & {});
  userSelect?: 'auto' | 'none' | 'text' | 'all';

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
  transition?: string;
  transform?: string;
  transformOrigin?: string;
  animation?: string;
  border?: string;
  borderWidth?: string | number;
  borderColor?: ColorToken;
  content?: string;

  // Pseudo-classes and Pseudo-elements
  hover?: StyleObject;
  focus?: StyleObject;
  active?: StyleObject;
  before?: StyleObject;
  after?: StyleObject;

  // Responsive Breakpoints
  sm?: StyleObject;
  md?: StyleObject;
  lg?: StyleObject;
  xl?: StyleObject;
  '2xl'?: StyleObject;
  
  // Dark Mode
  dark?: StyleObject;
  
  // Any other CSS property
  [key: string]: any;
}

export type StyleDefinitions<T extends string> = Record<T, StyleObject>;
export type GlobalStyleObject = Record<string, StyleObject>;
