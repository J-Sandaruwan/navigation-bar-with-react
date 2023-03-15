import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      {/* Your app content goes here */}
    </AppContainer>
  );
};

export default App;