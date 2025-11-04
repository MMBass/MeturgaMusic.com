import { styled, alpha } from '@mui/material/styles';
import LyricsBody from './LyricsBody';

const StyledLyricsBody = styled(LyricsBody)`
  background-color: ${props => props.theme.palette.secondary.light};
  color: ${props => props.theme.palette.secondary.dark};
 
  font-family: 'Assistant','Roboto', 'sans-serif';
  font-weight: 400;
  border-radius: 10px;
  margin: 15px 15px 25px 10px;
  padding: 15px 50px 80px 50px;
  width: auto;

  @media (max-width: 600px) {
    margin: 15px 3px 25px 3px;
    padding: 15px;
    padding-bottom: 40px;
  }
  
  .l-body-top *{
    color: ${props => props.theme.palette.secondary.dark};
  }

  .l-body-top-actions, .l-body-top-actions-left{
    justify-content: space-between;
    padding-inline-start: 10px;

    @media (max-width: 600px) {
      justify-content: center;
      padding-inline-start: 5px;
    }

    .song-checked{
      background-color: rgba(0, 0, 0, 0.08)
    }
  }

  .trans-by-chip{
    padding: 3px;
    margin-inline-start: 30px;
    @media (max-width: 600px) {
      margin-inline-start: 3px;
    }
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
    overflow-wrap: anywhere;
  }

  .en-line{
    font-family: 'Poppins','Roboto', 'sans-serif';
    white-space: 'pre-wrap'; // Make linebreaks visible
    direction: rtl;
    text-align: left;
  }

  .he-line{
    font-weight: 600;
  }

  .inLyrics-mui-alert{
    margin: 20px 0px;
    width: 100%;
    direction: ltr;
  }
  
  .partialLyrics-mui-alert{
    width: auto;
  }

  .l-body-buyMe-container{
    margin-top: 30px;
    text-align: center;
  }

`;

export default StyledLyricsBody;