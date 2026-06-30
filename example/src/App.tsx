import { createStyle, createKeyframes } from 'styling-simplified';

const pulse = createKeyframes({
  '0%': { transform: 'scale(1)', shadow: 'xl' },
  '50%': { transform: 'scale(1.02)', shadow: '2xl' },
  '100%': { transform: 'scale(1)', shadow: 'xl' }
});

const styles = createStyle({
  container: {
    layout: 'col-center',
    p: 'xl',
    width: '100vw',
    height: '100vh',
    bg: 'gray100',
    dark: { bg: 'gray900' }
  },
  card: {
    layout: 'col',
    p: 'xl',
    bg: 'white',
    rounded: '2xl',
    shadow: 'md',
    width: '90%', // Mobile width
    maxWidth: 400,
    border: '1px solid',
    borderColor: 'gray200',
    transition: 'all 0.3s ease',
    md: {
      layout: 'row',
      maxWidth: 800,
      p: '3xl'
    },
    animation: `${pulse} 3s ease-in-out infinite`,
    hover: {
      transform: 'translateY(-4px)',
      borderColor: 'primary',
      shadow: 'xl'
    },
    dark: {
      bg: 'gray800',
      borderColor: 'gray800',
      shadow: 'xl',
      hover: {
        shadow: '2xl'
      }
    }
  },
  title: {
    text: 'h2',
    color: 'gray900',
    mb: 'sm',
    dark: { color: 'white' },
    md: {
      text: 'h1',
      mb: 'md',
      color: 'primary'
    }
  },
  badge: {
    position: 'relative',
    display: 'inline-block',
    before: {
      content: '""',
      position: 'absolute',
      top: -5,
      right: -25,
      width: 12,
      height: 12,
      bg: 'primary',
      rounded: 'full',
      shadow: 'xl'
    }
  },
  description: {
    text: 'body',
    color: 'gray600',
    mb: 'lg',
    dark: { color: 'gray300' }
  },
  button: {
    layout: 'center',
    py: 'sm',
    px: 'md',
    bg: 'primary',
    color: 'white',
    text: 'body',
    rounded: 'lg',
    cursor: 'pointer',
    border: 'none',
    hover: {
      bg: 'info'
    },
    transition: 'background-color 0.2s ease'
  }
});

export function App() {
  return (
    <div {...styles.container}>
      <div {...styles.card}>
        <div {...styles.badge}>
          <h1 {...styles.title}>Styling Simplified!</h1>
        </div>
        <p {...styles.description}>
          Look ma, no CSS classes in my JSX! Just a clean object mapping to fully scoped, injected CSS classes.
        </p>
        <button {...styles.button}>Click Me</button>
      </div>
    </div>
  );
}
