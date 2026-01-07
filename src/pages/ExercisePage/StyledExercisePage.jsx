import { styled } from '@mui/material/styles';
import ExercisePage from './ExercisePage';

const StyledExercisePage = styled(ExercisePage)`
   min-height: 80vh;

   .muirtl-a5rdam-MuiGrid-root>.MuiGrid-item {
      @media (max-width: 600px) {
         padding-top: 0 !important;
      }
   }

   .gifts-component {
      margin: 80px 15px 0px 15px;
      
      @media (max-width: 600px) {
         margin: 60px 10px 0px 10px;
      }
   }
`;

export default StyledExercisePage;