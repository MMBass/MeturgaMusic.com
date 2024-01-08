import { styled } from '@mui/material/styles';
import HomePage from './HomePage';

const StyledHomePage = styled(HomePage)`
    min-height: 700px;

    @media (max-width: 600px) {
        .home-t-container{
          flex-direction: column-reverse;
        }
    }
    
    .mainPics-container{
        width: 610px;
        height: 400px;
        padding-top: 10px;

        @media (max-width: 600px) {
            height: fit-content;
        }

        img{
            z-index: 9999;
            border-radius: 15px;
        }

        .wide-pic{
            width: 580px;
            height: auto;

            @media (max-width: 600px) {
               display: none;
            }
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
       padding: 0 35px;
       @media (max-width: 600px) {
        padding: 0 25px;
       }

       /* text-align: center; */
       img{
        width: 298px;
        height: 606px;
       }
    }

    .home-t-container{
        padding-top: 30px;
        padding-bottom: 30px;
    
        @media (max-width: 600px) {
            text-align: center;
            padding-top: 65px;
        }
    }

    .page-h3{
        margin: 40px 0px 15px 0px;
        font-size: 3.5vw;
        font-weight: 400;
        color: ${props => props.theme.palette.primary.contrastText};

        span{
            display: block;
        }

        @media (max-width: 600px) {
            margin: 15px 0px 35px  0px;
            font-size: 7.4vw;
        }

        .h3-start-top{
            font-size: 2.6vw;
            @media (max-width: 600px) {
                font-size: 5.5vw;
            }

        }

        .h3-start-one{

            @media (max-width: 600px) {
        
            }
   
        }

        .h3-start-two{
 
            @media (max-width: 600px) {

            }
    
        }

        .h3-middle{
            color: ${props => props.theme.palette.primary.dark};
        }

        .h3-bottom{
        
        }
    }
    
`;

export default StyledHomePage;