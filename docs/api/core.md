# Core API

## `createStyle(styles)`
The primary function to generate scoped CSS classes.

```ts
import { createStyle } from 'aedex-simpleUI';

const styles = createStyle({
  container: {
    bg: 'primary',
    p: 'md'
  }
});
```

## `ThemeProvider`
Wrap your application to override global design tokens natively using CSS variables.

```tsx
import { ThemeProvider } from 'aedex-simpleUI';

const myTheme = { colors: { primary: '#ec4899' } };

<ThemeProvider theme={myTheme}>
  <App />
</ThemeProvider>
```

## `createGlobalStyle(styles)`
Inject CSS resets directly into the document head.

```ts
import { createGlobalStyle } from 'aedex-simpleUI';

createGlobalStyle({
  'body': { margin: 0, bg: 'gray900' }
});
```

## `createKeyframes(frames)`
Generate an optimized `@keyframes` string to use in animations.

```ts
import { createKeyframes, createStyle } from 'aedex-simpleUI';

const pulse = createKeyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1.05)' }
});

const styles = createStyle({
  box: { animation: `${pulse} 1s infinite` }
});
```
