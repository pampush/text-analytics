import React from 'react';
import styled from 'styled-components';

interface ErrorsBoxProps {
  errors: string[];
  message: string;
}

const _ErrorBox = styled.div`
  color: #e7320d;
  font-size: inherit;
`;

/**
 * Component displays errors if validation is not passed
 * @param params - message - error message, errors - wrong input characters  
 * @returns JSX.Element
 */
function ErrorsBox({ message, errors }: ErrorsBoxProps) {
  return (
    <_ErrorBox>
      <span>{message + ' '}</span>
      <span>{errors.join(', ')}</span>
    </_ErrorBox>
  );
}

export default ErrorsBox;
