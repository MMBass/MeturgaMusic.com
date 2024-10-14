import { styled } from '@mui/material/styles';
import HomePage from './HomePage';
import utils from '@/utils';

const StyledHomePage = styled(HomePage)`

    .home-top{
       height: 90vh;
       padding: 0 35px;
       
        @media (max-width: 600px) {
            padding: 0 25px;
            align-content: center;
            height: 100vh;
        }
        
        .home-t-parent-grid{
            @media (max-width: 600px) {
               padding-top: 0px;
               padding-bottom: 30px;
            }

            @media (min-width: 600px) {
                height: 100%;
                max-height: 90vh;
            }
        }

        .home-top-p2{
            margin-top: 50px;
            @media (min-width: 600px) {
                /* margin-top: 80px; */
                margin: auto;
                padding-inline-start: 20px;
            }
        }

        .mainPics-container{
            width: 610px;
            height: 400px;
            padding-top: 10px;
            margin: auto;

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
    }

    .h3-start-top{
        line-height: 0.96;
        font-size: min(5.7vw, 80px);
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
        font-size: min(1.88vw, 26px);
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