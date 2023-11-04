import * as React from 'react';
import { DataGrid, GridActionsCellItem, } from '@mui/x-data-grid';

function MyDataGrid({ className, ...props }) {

  return (
    <div className={className} style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
}

export default MyDataGrid;
