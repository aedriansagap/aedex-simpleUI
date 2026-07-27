# Features Guide

`aedex-simpleUI` comes packed with robust features designed for highly aesthetic, production-grade applications. Here is an overview of the advanced capabilities that give you fine-grained control over your layouts and styles.

## The Massive Color Palette

We provide a comprehensive set of color scales inspired by modern UI design systems. The scales range from `50` (lightest) to `900` (darkest).

Available color scales:
- **slate** (e.g., `slate50` ... `slate900`)
- **blue** (e.g., `blue50` ... `blue900`)
- **emerald** (e.g., `emerald50` ... `emerald900`)
- **rose** (e.g., `rose50` ... `rose900`)
- **amber** (e.g., `amber50` ... `amber900`)

### Semantic Colors
We also include standard semantic aliases that map out of the box to the palette:
- `primary`
- `secondary`
- `success`
- `danger`
- `warning`
- `info`

```tsx
import { createStyle } from 'aedex-simpleUI';

const styles = createStyle({
  badge: {
    bg: 'emerald100', // Light green background
    color: 'emerald800', // Dark green text
    px: 'md',
    py: 'xs',
    rounded: 'full'
  }
});
```

## Flex & Grid Layouts

Instead of relying solely on shorthands, you have total control over both the parent containers and the children elements.

### The `gap` property
The `gap` property maps directly to your spacing tokens!
```tsx
const styles = createStyle({
  gridContainer: {
    layout: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 'xl' // Resolves to 32px based on default tokens
  }
});
```

### Children Control
You can precisely align items using flex and grid children properties:
```tsx
const styles = createStyle({
  flexChild: {
    flexGrow: 1,
    flexShrink: 0,
    alignSelf: 'stretch'
  },
  gridChild: {
    gridColumn: 'span 2',
    justifySelf: 'end'
  }
});
```

## Interactions

Control exactly how users interact with your components using strictly-typed interaction properties:

```tsx
const styles = createStyle({
  disabledButton: {
    cursor: 'not-allowed',
    pointerEvents: 'none',
    userSelect: 'none',
    opacity: 0.5
  }
});
```

## Animations & Transitions

For micro-interactions, simply add `transition`. Combine it with the `hover` pseudo-class for buttery smooth effects.

```tsx
const styles = createStyle({
  card: {
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    transformOrigin: 'center',
    shadow: 'md',
    
    hover: {
      transform: 'scale(1.02) translateY(-4px)',
      shadow: 'xl'
    }
  }
});
```
