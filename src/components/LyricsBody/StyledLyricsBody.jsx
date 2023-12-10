import { styled } from '@mui/material/styles';
import LyricsBody from './LyricsBody';

const StyledLyricsBody = styled(LyricsBody)`
  background-color: ${props => props.theme.palette.secondary.light};
  color: ${props => props.theme.palette.secondary.dark};
 
  font-family: 'Assistant','Roboto', 'sans-serif';
  font-weight: 600;
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

  .trans-by-chip{
    padding: 3px;
    margin-inline-start: 30px;
  }

  h3{
      text-align: center;
      padding-top: 5px;
      padding-bottom: 30px;
    }

  .single-lyric, .single-trans{
    display: inline;
    padding: 0px 1px;
    text-transform: none;
  }

  .en-line{
    margin-top: 0px;
    direction: rtl;
    text-align: left;
  }

  .he-line{
    margin-top: -4px;
  }
`;

export default StyledLyricsBody;