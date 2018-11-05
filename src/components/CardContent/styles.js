import styled, { css } from "styled-components";

export const List = styled.ul`
  margin-top: 3vw;
  list-style-type: none;
`;

export const Item = styled.li`
  margin-bottom: 3vw;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
`;

export const Check = styled.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  transition: none;

  &:checked + label {
    border: 1px solid transparent;
  }

  &:checked + label svg path {
    stroke-dashoffset: 0;
  }

  + label {
    border: 1px solid var(--color-tertiary);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    svg {
      pointer-events: none;
      height: 100%;
      path {
        fill: none;
        stroke: var(--color-primary);
        stroke-width: 4px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 100;
        stroke-dashoffset: 101;
        transition: all 350ms cubic-bezier(1, 0, 0.37, 0.91);
      }
    }
  }
`;

export const Text = styled.p.attrs({ checked: props => props.checked })`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 2rem;
  font-size: 1.5rem;
  color: var(--color-secondary);
  transition: color 200ms linear;

  ${props =>
    props.checked
      ? css`
          color: var(--color-tertiary);
          &::after {
            display: block;
            width: calc(100% - 2rem);
            height: 2px;
            position: absolute;
            content: "";
            bottom: 14px;
            left: 0;
            background-color: var(--color-tertiary);
            transition: all 250ms linear;
          }
        `
      : css`
          &::after {
            content: "";
            display: block;
            width: calc(100% - 2rem);
            height: 2px;
            position: absolute;
            bottom: -15px;
            left: 0;
            background-color: var(--color-secondary);
            transition: all 250ms linear;
          }
        `};

  &::selection {
    background: transparent;
  }
`;

export const Time = styled.small`
  font-size: 1rem;
  margin-right: 2rem;
  color: var(--color-tertiary);

  &::selection {
    background: transparent;
  }
`;
