import React from 'react';
import { ThemeProvider, createGlobalStyle, styled } from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const darkTheme = {
  body: '#333',
  text: '#fff',
  primary: '#007bff',
  hover: '#0056b3',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }
`;

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.primary};
  border-color: ${props => props.theme.primary};
  &:hover {
    background-color: ${props => props.theme.hover};
    border-color: ${props => props.theme.hover};
  }
`;

function BasicExample() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
        <Card style={{ width: '18rem', backgroundColor: darkTheme.body }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{darkTheme.text}</Card.Title>
            <Card.Text>{darkTheme.text}</Card.Text>
            <StyledButton variant="primary">Go somewhere</StyledButton>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', backgroundColor: darkTheme.body }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{darkTheme.text}</Card.Title>
            <Card.Text>{darkTheme.text}</Card.Text>
            <StyledButton variant="primary">Go somewhere</StyledButton>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', backgroundColor: darkTheme.body }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{darkTheme.text}</Card.Title>
            <Card.Text>{darkTheme.text}</Card.Text>
            <StyledButton variant="primary">Go somewhere</StyledButton>
          </Card.Body>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default BasicExample;