import { styled } from '@mui/material/styles';
import HomePage from './HomePage';
import utils from '@/utils';

const StyledHomePage = styled(HomePage)`
    .mainPics-container{
        width: 610px;
        height: 400px;
        padding-top: 10px;

        @media (max-width: 600px) {
            display: none;
        }

        img{
            z-index: 9999;
            border-radius: 15px;
        }

        .wide-pic{
            width: 90%;
            height: auto;

            @media (max-width: 600px) {
               display: none;
            }
        }

        .wide-pic-dark{
            margin-top: 25px;
            width: 73%;
            ${!utils.isApple() && `transform: perspective(1000px) rotateY(9deg);`}
            box-shadow: 9px 9px 4px #4949494a;
        }

        .mobile-pic{
            padding-top: 35px;
            width: 100%;
            height: auto;

            @media (min-width: 600px) {
               display: none;
            }
        }

    }
    
    .home-top{
       min-height: 85vh;
       padding: 0 35px;
       
        @media (max-width: 600px) {
            padding: 0 25px;
            align-content: center;
            min-height: 80vh;
        }
        
        .home-t-container{
            padding: 30px 0;
            @media (max-width: 600px) {
               padding-top: 0px;
            }
        }

        .home-top-p2{
            margin-top: 50px;
            @media (min-width: 600px) {
                margin-top: 80px;
                padding-inline-start: 30px;
            }
        }
    }

    .h3-start-top{
        line-height: 0.96;
        font-size: 5.7vw;
        font-weight: 700;
        /* max-width: 535px; */
        
        span{
            color: ${props => props.theme.palette.primary.main};
            margin-inline-start: -17px;
        }

        @media (max-width: 600px) {
            margin: 0px 0px 0px 0px;
            /* font-size: 82.5px; */
            font-size: 20.6vw;
        }
    }

    .page-h3{
        max-width: 740px;
        margin: 0px 0px 15px 0px;
        /* font-size: 24px; */
        font-size: 1.88vw;
        font-weight: 600;
        color: ${props => props.theme.palette.primary.contrastText};
 
        span{
            display: inline;
        }

        @media (max-width: 600px) {
            margin: 0px 0px 10px  0px;
            max-width: 320px;
            /* font-size: 23.2px; */
            font-size: 5.4vw;
            font-weight: 600;

            .page-h3-break{
                display: none;
            }
        }

        .h3-middle{
            color: ${props => props.theme.palette.primary.dark};
        }

    }
    
`;

export default StyledHomePage;