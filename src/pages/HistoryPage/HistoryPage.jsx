import { useState, useEffect, useContext } from 'react';

import { BannersContext } from '@context/BannersContext';

import { GridActionsCellItem } from '@mui/x-data-grid';
// import  from '@mui/icons-material/DeleteIcon';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';

import {
  IconButton,
} from '@mui/material';

import { default as MyDataGrid } from '@components/MyDataGrid/StyledMyDataGrid';

function HistoryPage({ className }) {
  const [rows, setRows] = useState(JSON.parse(localStorage.getItem('meturgamm_songs')) || []);
  const bannersContext = useContext(BannersContext);

  const handleDeleteClick = (id) => () => {
    let newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
    localStorage.setItem("meturgamm_songs", JSON.stringify(newRows));
  };

  const handleDeleteAll = () => {
    setRows([]);
    localStorage.setItem("meturgamm_songs", JSON.stringify([]));
  };

  // [{ id: 1, song: 'weezer - records' },
  //  { id: 1, song: 'weezer - records records recordsrecords  records' }]

  const columns = [
    {
      field: "delete",
      type: 'actions',
      width: 75,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => { handleDeleteAll() }}
          >
            <DeleteSweepOutlinedIcon />
          </IconButton>
        );
      },
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
    { field: 'title', headerName: 'כותרת', width: 300, sortable: false },
  ];

  return (
    <div id="" className={className}>
      <MyDataGrid className={'my-data-grid'} rows={rows} columns={columns}></MyDataGrid>
    </div>
  );
}

export default HistoryPage;
