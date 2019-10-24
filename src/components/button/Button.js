import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 40px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1em;
  font-weight: 700;
  transition: box-shadow .3s ease;
  width: ${({ width }) => width}
  //width: 200px
  ${({ theme }) => theme.media.desktop} 
    :hover {
      box-shadow: 0 10px 20px -15px red;
    }
`;

export default Button;
