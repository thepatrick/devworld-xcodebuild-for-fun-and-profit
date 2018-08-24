// example theme.js
import theme from 'mdx-deck/themes'

const text = 'tomato';
const background = '#220011';

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Lobster, cursive',
  monospace: '"Roboto Mono", monospace',
  // custom colors
  colors: {
    text: text,
    background,
    link: text
  },
  css: {
    textAlign: 'left',
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '32px'
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh'
    }
  }
}