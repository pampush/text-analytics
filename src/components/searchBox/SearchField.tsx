import React from 'react';
import styled from 'styled-components';

import { Size } from '../types';

interface _SearchFieldProps {
  inputSize: keyof Size;
}

const _SearchField = styled.input<_SearchFieldProps>`
  padding: 1rem;
  font-size: inherit;
  border-style: none;
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
  background-color: #f2f4f8;
`;

interface SearchField {
  size: keyof Size;
  value: string;
  placeholder: string;
  name: string;
  onChange: (text: string) => void;
}

function SearchField({ size, placeholder, name, onChange }: SearchField) {
  return (
    <>
      <_SearchField
        inputSize={size}
        placeholder={placeholder}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default SearchField;
