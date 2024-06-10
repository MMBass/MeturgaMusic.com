import { styled } from '@mui/material/styles';
import LyricsBody from './LyricsBody';

const StyledLyricsBody = styled(LyricsBody)`
  background-color: ${props => props.theme.palette.secondary.light};
  color: ${props => props.theme.palette.secondary.dark};
 
  font-family: 'Assistant','Roboto', 'sans-serif';
  font-weight: 400;
  border-radius: 10px;
  margin: 15px 0px 25px 10px;
  padding: 15px 50px 40px 50px;
  width: auto;

  @media (max-width: 600px) {
    margin: 15px 3px 25px 3px;
    padding: 15px;
    padding-bottom: 40px;
  }
  
  .l-body-top *{
    color: ${props => props.theme.palette.secondary.dark};
  }

  .full-screen-toggle svg{
    font-size: 20px;
  }

  .trans-by-chip{
    padding: 3px;
    /* margin-inline-start: 30px; */
  }

  h3{
    font-family: 'Poppins','Roboto', 'sans-serif';
    font-weight: 400;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 30px;
  }

  .single-lyric, .single-trans{
    display: inline;
    text-transform: none;
  }

  .en-line{
    font-family: 'Poppins','Roboto', 'sans-serif';
    direction: rtl;
    text-align: left;
  }

  .he-line{
    font-weight: 600;
  }
`;

export default StyledLyricsBody;