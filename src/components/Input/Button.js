import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: royalblue;
  border: 2px solid royalblue;
`;

// Define what main theme will look like

const StyledButton = ({children}) => {
    return (
        <Button>
            {children}
        </Button>
    )
}   

export default StyledButton;