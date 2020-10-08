import styled from 'styled-components';
import device from './utilities/media';

const MainLayout = styled.main`
  display: grid;
  grid-auto-flow: row;
  max-width: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    display: block;
  }
  @media ${device.desktop} {
  }
  @media ${device.desktopL} {
  }
`;

export default MainLayout;
