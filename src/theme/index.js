import * as styledComponents from 'styled-components';
import vars from 'src/theme/vars';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents;
const uiPoint = vars.uiPoint;

export { css, createGlobalStyle, keyframes, ThemeProvider, vars, uiPoint };
export default styled;
