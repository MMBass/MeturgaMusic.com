import Draggable from 'react-draggable';

function FavicoGen({ className }) {
  return (
    <div className={className + " mm-con"}>
      <Draggable>
        <h2 className="mm-1 ">מ</h2>
      </Draggable>

      <h2 className="mm-2">M</h2>
    </div>
  );
}

import { styled } from '@mui/material/styles';

const StyledFavicoGen = styled(FavicoGen)`
        margin: 300px;
        position: relative;

        *{
          display: inline;
        }

        .mm-1{
          position: absolute;
          font-family: 'Assistant','Roboto', 'sans-serif';
          font-size: 248px;
          color: #dc7887;
          cursor: move;
          user-select: none;
        }

        .mm-2{
          font-size: 200px;
          font-family: 'Poppins','Roboto', 'sans-serif';
        }
`;

export default StyledFavicoGen;

// use: 
// import StyledFavicoGen from '@components/FavicoGen/FavicoGen';
