import { styled } from '@mui/material/styles';
import Gifts from './Gifts';

const StyledGifts = styled(Gifts)`
    box-shadow: 0 9px 12px rgb(255 0 38 / 14%);
    animation: float 3s ease-in-out infinite, gradientMove 6s ease-in-out infinite;
  .gift-card {
    /* color: white; */
    
    /* Light pink background with animated gradient */
    /* background: linear-gradient(
      135deg,
      #ff859d 0%,
      hsla(338.75, 100%, 90.58823529411765%, 0.9) 25%,
      rgba(223, 128, 142, 0.2) 50%,
      rgba(255, 194, 214, 0.9) 75%,
      #ff6d8a 100%
    );
    background-size: 200% 200%; */
    
    /* Pink-ish shiny shadow */
    /* box-shadow: 0 9px 12px rgb(255 0 38 / 32%); */

    /* box-shadow: 0 9px 15px rgb(37 37 37 / 35%); */

    /* animation: float 3s ease-in-out infinite, gradientMove 6s ease-in-out infinite; */
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  @keyframes gradientMove {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .gift-card-image {
    width: 100%;
    height: auto;
    /* display: block; */
  }

  .gift-card-content{
    padding-bottom: 25px;

    .muirtl-d315i0-MuiTypography-root{
       line-height: unset;
    }
    
    @media (min-width: 600px) {
      padding: 35px;
    }
  }

  .gift-card-line, .gift-card-footer {
    margin-top: 10px;
  }

  .gift-card-footer {
    font-size: smaller;
  }
`;

export default StyledGifts;
