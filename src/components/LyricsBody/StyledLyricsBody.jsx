import { styled } from '@mui/material/styles';
import LyricsBody from './LyricsBody';

const StyledLyricsBody = styled(LyricsBody)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  font-weight: 500;
  border-radius: 10px;
  margin: 15px 0px 25px 10px;
  padding: 15px 50px 40px 50px;
  width: auto;

  @media (max-width: 600px) {
    margin: 15px 3px 25px 3px;
    padding: 15px;
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
    margin-top: 8px;
    direction: rtl;
    text-align: left;
  }
`;

export default StyledLyricsBody;