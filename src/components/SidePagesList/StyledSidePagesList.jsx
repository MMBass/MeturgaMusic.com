import { styled } from '@mui/material/styles';
import SidePagesList from './SidePagesList';

const StyledSidePagesList = styled(SidePagesList)`

  .MuiTypography-root {
    color: ${props => props.theme.palette.secondary.dark};

  }

  .side-icons{
    color: ${props => props.theme.palette.secondary.dark};
    font-size: '14px';
  }

  .pages-list-chip{
    margin-inline-start: 20px;
    padding: 3px;
    padding-bottom: 5px;
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.light};
  }

  .extension-chip{
    background-color: white;
    color: black;
  }
`;

export default StyledSidePagesList;