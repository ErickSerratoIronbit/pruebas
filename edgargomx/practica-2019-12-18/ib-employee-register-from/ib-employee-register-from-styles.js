import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

.content-col-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; }

.content-col-left {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left; }

.content-row-center {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center; }
`;
