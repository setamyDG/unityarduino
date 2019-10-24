import styled from 'styled-components';
import { FacebookSquare, Instagram } from 'styled-icons/boxicons-logos/';
import { MailSend } from 'styled-icons/boxicons-regular';
import { StyledBackground } from '../background/Background';

export const StyledIconFb = styled(FacebookSquare)`
  width: 35px;
  height: 35px;
  color: black;
  opacity: 0;
  -webkit-transition: All 1s ease-in-out;
  
  ${StyledBackground}:hover & {
    opacity: 1;  
 };
 :hover{
 cursor: pointer;
 }
`;
export const StyledIconInsta = styled(Instagram)`
  width: 35px;
  height: 35px;
  color: black;
  opacity: 0;
  margin-left: 15px;
  margin-right: 15px;
  -webkit-transition: All 1s ease-in-out;
 :hover{
  cursor: pointer;;
 }
  ${StyledBackground}:hover & {
    opacity: 1;  
 };
`;

export const StyledIconMail = styled(MailSend)`
  width: 35px;
  height: 35px;
  color: black;
  opacity: 0;
  -webkit-transition: All 1s ease-in-out;
  ${StyledBackground}:hover & {
    opacity: 1;  
 };
  :hover{
  cursor: pointer;;
 }
`;
