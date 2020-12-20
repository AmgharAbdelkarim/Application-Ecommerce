import styled from 'styled-components';



export const AppContainer = styled.main`
    
    display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 64px 1fr 60px;
  grid-template-areas: 'header' 'content' 'footer';

  #header {
    grid-area: header;
  }
  #content {
    grid-area: content;
  }
  #footer {
    grid-area: footer;
  }
`;