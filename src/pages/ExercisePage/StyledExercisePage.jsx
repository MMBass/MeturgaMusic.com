import { styled } from '@mui/material/styles';
import ExercisePage from './ExercisePage';

const StyledExercisePage = styled(ExercisePage)`
   min-height: 80vh;

   .muirtl-a5rdam-MuiGrid-root>.MuiGrid-item {
      @media (max-width: 600px) {
         padding-top: 0;
      }
   }
`;

export default StyledExercisePage;