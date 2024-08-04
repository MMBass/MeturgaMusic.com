import { styled } from '@mui/material/styles';
import HomePage from './HomePage';

const StyledHomePage = styled(HomePage)`
    .mainPics-container{
        display: inline;
        width: 100vw !important;
        height: 90vh;
        padding-top: 10px;
        margin-top: -40px;
        margin-inline-start: -80px;
        margin-inline-end: 80px;


        /* TODO: pink container to 90 or 100 VH, inside just 2 rows with vertical imgs, imgs width by VH, and spacing.  */
        background-color: #df808e27;
        background-color: #f9f4f5;
        /* background-color: #edcbcb; */
        border-radius: 25px;

        @media (max-width: 600px) {
            display: none;
        }

        img{
            z-index: 9999;
            border-radius: 15px;
        }

        .top-pics{
            border-radius: 11px;
            /* box-shadow: 0 1px 2px 0 #7c7c7c; */
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1);
            width: 45vh;
        }

        .shot6-pic{
            border-radius: 8px;
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
        }
    }

    .h3-start-top{
        line-height: 0.96;
        font-size: 5.7vw;
        font-weight: 700;
        /* max-width: 535px; */
        
        span{
            color: ${props => props.theme.palette.primary.main};
            margin-inline-start: -12px;
        }

        @media (max-width: 600px) {
            margin: 0px 0px 0px 0px;
            font-size: 78px;
        }
    }

    .page-h3{
        max-width: 740px;
        margin: 0px 0px 15px 0px;
        /* font-size: 24px; */
        font-size: 1.9vw;
        font-weight: 600;
        color: ${props => props.theme.palette.primary.contrastText};
 
        span{
            display: inline;
        }

        @media (max-width: 600px) {
            margin: 0px 0px 10px  0px;
            max-width: 320px;
            font-size: 20px;
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