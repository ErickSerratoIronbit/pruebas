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

.card-content {
  width: 300px;
  height: 200px; }

.card-heading {
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; }

#bateryComponent {
  width: 30px;
  height: 30px; }

.card-content {
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; }

.card-complete {
  background-color: black; }

.card-actions {
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-left: 10px; }

.icon-component {
  background-color: white; }
`;
