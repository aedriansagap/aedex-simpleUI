import { createStyle } from 'styling-simplified';

const styles = createStyle({
  container: {
    layout: 'col-center',
    p: 'xl',
    width: '100vw',
    height: '100vh',
    bg: 'gray900',
  },
  card: {
    layout: 'col',
    p: 'xl',
    bg: 'gray800',
    rounded: '2xl',
    shadow: 'xl',
    width: '90%', // Mobile width
    maxWidth: 400,
    border: '1px solid',
    borderColor: 'gray800',
    transition: 'all 0.3s ease',
    md: {
      layout: 'row',
      maxWidth: 800,
      p: '3xl'
    },
    hover: {
      transform: 'translateY(-4px)',
      borderColor: 'primary',
      shadow: '2xl'
    },
    transition: 'all 0.3s ease'
  },
  title: {
    text: 'h2',
    color: 'white',
    mb: 'sm',
    md: {
      text: 'h1',
      mb: 'md',
      color: 'primary'
    }
  },
  description: {
    text: 'body',
    color: 'gray300',
    mb: 'lg'
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
        <h1 {...styles.title}>Styling Simplified!</h1>
        <p {...styles.description}>
          Look ma, no CSS classes in my JSX! Just a clean object mapping to fully scoped, injected CSS classes.
        </p>
        <button {...styles.button}>Click Me</button>
      </div>
    </div>
  );
}
