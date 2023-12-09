import { styled } from '@mui/material/styles';
import SidePagesList from './SidePagesList';

const StyledSidePagesList = styled(SidePagesList)`

  hr{
    border-width: 1px;
    margin: 5px 3px;
  }

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

  .MuiSwitch-root{
    background-color: white;
    border-radius: 10px;
    margin-inline-end: 3px;
  }
`;

export default StyledSidePagesList;