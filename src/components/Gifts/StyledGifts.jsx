import { styled } from '@mui/material/styles';
import Gifts from './Gifts';

const StyledGifts = styled(Gifts)`
    /* box-shadow: 0 9px 12px rgb(255 0 38 / 14%); */
    animation: float 3s ease-in-out infinite, gradientMove 6s ease-in-out infinite;

  .gift-card {
      background: #f1f1f1d9;
        
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

  .MuiCardHeader-root{
    background-color: #e5e5e5;
    margin: 0px;
    padding: 10px 0px 10px 0px;

    span{
        margin-inline-start: 30px;
        font-size: smaller;
    }
  }

  .gift-card-content{
    padding-bottom: 25px;

    .muirtl-d315i0-MuiTypography-root, .gift-card-title{
       font-weight: 800;
       line-height: unset;
       color: #264e8a;
    }
    
    @media (min-width: 600px) {
      padding: 35px;
    }

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  .gift-card-line, .gift-card-footer {
    color: #555555;
    font-weight: 600;
    margin-top: 20px;
  }

  .gift-card-footer {
    font-size: smaller;
  }
`;

export default StyledGifts;
