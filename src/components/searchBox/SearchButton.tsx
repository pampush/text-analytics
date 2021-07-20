import React from 'react';
import styled from 'styled-components';
import { Size } from '../types';

interface _SearchButtonProps {
  size: keyof Size;
}

const _SearchButton = styled.button<_SearchButtonProps>`
  background: #f2f4f8;
  width: 100%;
  height: 100%;
  font-size: inherit;
  padding: 1.1rem;
  color: #5964cc;
  border-radius: 1.5rem;
  cursor: pointer;
  border-style: none;
  &:hover {
    background-color: #c3c3c3;
  }
  &:active {
    transform: translateY(0.1rem);
  }
`;

interface SearchButtonProps {
  onClick: () => void;
  value: string;
  size: keyof Size;
}

function SearchButton({ onClick, value, size }: SearchButtonProps) {
  return (
    <_SearchButton size={size} onClick={onClick}>
      {value}
    </_SearchButton>
  );
}

export default SearchButton;
