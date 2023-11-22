import { styled } from '@mui/material/styles';
import LyricToolTip from './LyricToolTip';

const StyledLyricToolTip = styled(LyricToolTip)`
   /* can't style the <Tooltip> and it's childs because they are absolute, and placed in the body outside the component*/
   
   .single-lyric{
      cursor: pointer;
      :hover{
         background-color: rgb(244, 244, 244);
         border: 0.3px solid rgb(162, 162, 162);
         border-radius: 5px;
      } 
   }
`;

export default StyledLyricToolTip;