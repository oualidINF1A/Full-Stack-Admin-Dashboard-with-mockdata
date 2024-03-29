import React, {useEffect, useState} from 'react'
import Header from 'components/Header.jsx'
import DataGridCustomToolbar from 'components/DataGridCustomToolbar.jsx'
import { DataGrid } from '@mui/x-data-grid'
import { useGetTransactionsQuery } from 'state/api'
import { useTheme, Box } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'



const Transactions = () => {
    const theme = useTheme();

    //values to send to the back end
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");

    const [searchInput, setSearchInput] = useState("");



    const {data, isLoading} = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search
    });

    useEffect(() => {
      console.log('data', data)
    }, [data])

    const columns = [
        {
          field: "_id",
          headerName: "ID",
          flex: 1,
        },
        {
          field: "userId",
          headerName: "User ID",
          flex: 1,
        },
        {
          field: "createdAt",
          headerName: "CreatedAt",
          flex: 1,
        },
        {
          field: "products",
          headerName: "# of Products",
          flex: 0.5,
          sortable: false,
          renderCell: (params) => params.value.length,
        },
        {
          field: "cost",
          headerName: "Cost",
          flex: 1,
          renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
        },
      ];


  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Transactions" subtitle="List of your transactions"/>

        <Box height="80vh"
            sx={{
                    "& .MuiDataGrid-root" : {
                        border:"none",
                    },
                    "& .MuiDataGrid-cell" : {
                        borderBottom:"none",
                    },
                    "& .MuiDataGrid-columnHeaders" : {
                        backgroundColor:theme.palette.background.alt,
                        color:theme.palette.secondary[200],
                        borderBottom:"none",
                    },
                    "& .MuiDataGrid-virtualScroller" : {
                        backgroundColor:theme.palette.primary.light,
                    },
                    "& .MuiDataGrid-footerContainer" : {
                        backgroundColor:theme.palette.primary.light,
                        color:theme.palette.secondary[200],
                        borderTop:"none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text"  :{
                        color:`${theme.palette.secondary[200]} !important`,
                    }
                }}>
            {isLoading || !data ? (
              <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
                  <InfinitySpin color={theme.palette.secondary[100]} width='200' />
              </Box>
            ):(            
              <DataGrid 
                loading={isLoading || !data}
                getRowId={(row) => row._id}
                rows={(data && data.transactions) || []}
                columns={columns}
                rowCount={(data && data.total) || 0}
                rowsPerPageOoptions={[20, 50, 100]}
                pagination
                pageSize={pageSize}
                paginationMode="server"
                sortingMode='server'
                onPageChange={(newPage) => setPage(newPage)}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                onSortModelChange={(newSortModel) => setSort(...newSortModel)}
                components={{Toolbar:DataGridCustomToolbar}}
                componentsProps={{
                  toolbar:{searchInput, setSearchInput, setSearch},
                }}
                >
    
                </DataGrid>
            )}


        </Box>
    </Box>
  )
}

export default Transactions