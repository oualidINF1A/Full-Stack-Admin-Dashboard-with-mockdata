import React from 'react'
import { useGetUserPerformanceQuery } from 'state/api'
import { useSelector } from 'react-redux'
import {Box, useTheme} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import Header from 'components/Header'
import { InfinitySpin } from 'react-loader-spinner'

const Performance = () => {

    const userId = useSelector((state) => state.global.userId)
    const {data, isLoading} = useGetUserPerformanceQuery(userId)
    const theme = useTheme()
    console.log(data)

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

    if(isLoading || !data) return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <InfinitySpin color='white' width='200' />
        </Box>
    )

  return (
        <Box m="1.5rem 2.5rem">
            <Header title="Performance" subtitle="Track your affiliate sales performance."/>

            <Box mt="40px" height="75vph" 
            
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
            }}
        >
            {isLoading || !data ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vph">
                    <InfinitySpin color={theme.palette.secondary[100]} width='200' />
                </Box>
            ): (
                <DataGrid
                loading={isLoading || !data}
                getRowId={(row) => row._id}
                rows={(data && data.sales)|| []}
                columns={columns}
                />
            )}
        </Box>
    </Box>
  )
}

export default Performance