import { styled } from '@mui/material/styles';
import LyricToolTip from './LyricToolTip';

const StyledLyricToolTip = styled(LyricToolTip)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;

      :hover{
         background-color: rgb(244, 244, 244);
         box-shadow: 0 0 0 0.5px rgb(162, 162, 162);
         color: black;
         border-radius: 5px;
      } 
   }
`;

export default StyledLyricToolTip;