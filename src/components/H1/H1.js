import styled from 'styled-components';

const H1 = styled.h1`
  font-size:  ${({ isBig }) => (isBig ? '5em' : '3em')};
  color:  ${({ isBlue }) => (isBlue ? 'blue' : 'white')};
`;

//const BlueH1 = styled(H1)`
//  color: blue;
//`;

export default H1;