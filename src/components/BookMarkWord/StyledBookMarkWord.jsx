import { styled } from '@mui/material/styles';
import BookMarkWord from './BookMarkWord';

const StyledBookMarkWord = styled(BookMarkWord)`

    .book-mark-bottom-icon-wrapper{
        margin-bottom: -10px;
        margin-top: 10px;
        height: 15px;
        text-align: center;
        padding: 0.6em;
        background-color: #df808ea8;
        border-radius: 0 0 5px 3px;
        box-shadow: 0 10px 10px -8px rgba(0, 0, 0,.7);

        @media (max-width: 600px){
            padding: 0.4em;
        }

        .book-mark-bottom-icon{
            margin-top: -2px
        }

        :hover{
            background-color: ${props => props.theme.palette.primary.main};
        }
    }

    .book-mark-top-icon{
        position: absolute;
        top: -10px;

        font-size: 12px;

        :hover{
            background-color: ${props => props.theme.palette.primary.dark};
        }
    }

    .bm-disabled{
        pointer-events: none;
        background-color: ${props => props.theme.palette.primary.main};
    }
`;

export default StyledBookMarkWord;