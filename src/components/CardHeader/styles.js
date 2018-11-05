import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 20px 10px;
`;

export const Day = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-secondary);
`;

export const Tasks = styled.h2`
  margin-top: 2.5vw;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-primary);
`;

export const Button = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  right: 5px;
  transform: translateX(-50%) translateY(50%);
  background-color: var(--color-primary);
  border: none;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-zero);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
