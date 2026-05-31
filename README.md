# aedex-simpleUI (Styling Simplified)

A blazing-fast, zero-verbosity CSS-in-JS styling engine designed to cure Tailwind "class soup" and make React components readable again.

## The Problem

Utility-first CSS frameworks like Tailwind are incredibly powerful, but they have a fatal flaw: **Verbosity**. 
Reading a component with 15 utility classes strung together makes it incredibly difficult to see the actual structure of your HTML. It pollutes your JSX and makes maintaining complex components a headache.

## The Solution

`aedex-simpleUI` moves the styling logic *out* of your JSX return statement and into a highly structured, strongly-typed JavaScript object. 

Under the hood, it parses these objects, converts them to heavily optimized CSS, and injects them directly into the document `<head>`. It leverages modern **CSS Variables (Custom Properties)** to ensure zero React rendering overhead.

### Key Features
- ✨ **Zero-Clutter JSX:** Your components become purely structural (`<div {...styles.card}>`).
- 🚀 **Blazing Fast:** Styles are hashed, cached, and injected instantly.
- 📱 **Object-Based Breakpoints:** Write media queries natively as nested objects (`md: { layout: 'row' }`).
- 🎨 **Zero-Overhead Theming:** The `<ThemeProvider>` uses CSS variables so the browser natively repaints your app on theme change—no React re-renders required.
- 🎬 **First-Class Animations:** Generate heavily optimized `@keyframes` easily with `createKeyframes`.

---

## Quick Start

```bash
npm install aedex-simpleUI
# or your package name, e.g., styling-simplified
```

### 1. The Core API

Instead of long strings of classes, you write clean, autocompleted objects:

```tsx
import { createStyle } from 'aedex-simpleUI';

const styles = createStyle({
  card: {
    // Mobile-first layout shorthands!
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

### 2. Animations

Define an animation once, and re-use its hashed identifier infinitely:

```tsx
import { createStyle, createKeyframes } from 'aedex-simpleUI';

const pulse = createKeyframes({
  '0%': { transform: 'scale(1)', shadow: 'xl' },
  '50%': { transform: 'scale(1.02)', shadow: '2xl' },
  '100%': { transform: 'scale(1)', shadow: 'xl' }
});

const styles = createStyle({
  button: {
    animation: `${pulse} 3s ease-in-out infinite`,
  }
});
```

### 3. Global Theming

Wrap your app in the `ThemeProvider` to instantly override design tokens globally. 

```tsx
import { ThemeProvider } from 'aedex-simpleUI';

const myTheme = {
  colors: {
    primary: '#ec4899', // Change primary from blue to hot pink!
  }
};

function Root() {
  return (
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  );
}
```

---

## 🤝 Call for Contributors!

This package was born out of a desire to make UI design in React **fun and readable** again. We are currently in the MVP stage and actively looking for collaborators and maintainers!

**What we are looking to build next:**
- Expanding the built-in design tokens and spacing systems.
- Adding a `createGlobalStyle` API for CSS resets.
- Creating a Vite/Webpack build-time extraction plugin (Zero-Runtime CSS!).
- Building a comprehensive documentation site.

If you are passionate about UI engineering, Design Systems, or AST/Build-tools, we would love your insights! 

### How to Contribute
1. Fork the repository.
2. Clone it locally and run `npm install`.
3. Check out the `example/` directory—it's a linked React app you can use as a sandbox (`cd example && npm run dev`).
4. Submit a Pull Request with your ideas!

Let's build the cleanest styling engine together.
