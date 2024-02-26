import { styled } from '@mui/material/styles';
import HomePage from './HomePage';

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
            width: 73%;
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
            min-height: unset;
       }
       
       .home-t-container{
            padding: 30px 0;
            text-shadow: 0px 1px 2px rgb(159, 159, 159);

            label{
                text-shadow: 0 0 black;
            }

            @media (max-width: 600px) {
                text-align: center;

            }

            .page-h2{
                display: none;
                @media (max-width: 600px) {
                    margin: auto;
                    display: block;
                    font-size: 15vw;
                    letter-spacing: 3px;
                }
            }
    
        }
    }

    .h3-start-top{
        margin: 40px 0px 0px 0px;
        font-size: 2.7vw;
        @media (max-width: 600px) {
            margin: 3px 0px 0px 0px;
            font-size: 5.5vw;
        }
    }

    .page-h3{
        margin: 0px 0px 15px 0px;
        font-size: 3.5vw;
        font-weight: 400;
        color: ${props => props.theme.palette.primary.contrastText};

        span{
            display: block;
        }

        @media (max-width: 600px) {
            margin: 0px 0px 35px  0px;
            font-size: 7.4vw;
        }

        .h3-start-one{

        }

        .h3-start-two{
            @media (min-width: 600px) {
                font-size: 4.4vw;
            }
    
        }

        .h3-middle{
            color: ${props => props.theme.palette.primary.dark};
            @media (min-width: 600px) {
                font-size: 3.78vw;
            }
        }

        .h3-bottom{
            @media (min-width: 600px) {
                font-size: 4.2vw;
            }
        }
    }
    
`;

export default StyledHomePage;