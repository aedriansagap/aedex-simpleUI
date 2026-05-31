# Getting Started

`aedex-simpleUI` (Styling Simplified) is designed to cure Tailwind "class soup" and make React components readable again.

## Installation

```bash
npm install aedex-simpleUI
```

## Quick Setup

Move the styling logic *out* of your JSX return statement and into a highly structured, strongly-typed JavaScript object using `createStyle`.

```tsx
import { createStyle } from 'aedex-simpleUI';

const styles = createStyle({
  card: {
    // Mobile-first layout shorthands
    layout: 'col',
    p: 'xl',
    bg: 'gray800',
    rounded: '2xl',
    shadow: 'xl',
    
    // Responsive breakpoints
    md: {
      layout: 'row',
      p: '3xl'
    },
    
    // Pseudo-classes
    hover: { 
      transform: 'translateY(-4px)',
      borderColor: 'primary',
    }
  }
});

function MyCard() {
  return <div {...styles.card}>Hello World</div>;
}
```
