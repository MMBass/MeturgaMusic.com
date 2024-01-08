import { styled } from '@mui/material/styles';
import HomePage from './HomePage';

const StyledHomePage = styled(HomePage)`
    min-height: 700px;
    
    .mainPics-container{
        position: relative;

        img{
            position: absolute;
        }

        .wide-pic{
        width: 500px;
        height: auto;
        }
        .mobile-pic{
            width: 300px;
            height: auto;
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