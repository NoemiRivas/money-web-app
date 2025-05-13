import React from 'react'
import { Button } from '@mui/material'
import {Typography } from '@mui/material'


function OpenModal({ handleOpen }) {
  return (
    <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        size="large"
        className="flex items-center justify-center"
        sx={{
        bgcolor: "#00598a",
        borderRadius: 3,
        "&:hover": {
          bgcolor: "#004578",
        },
      }}
      >
       
        <Typography sx={{ ml: 2, fontSize: 14 }}>nueva Transacción</Typography>
      </Button>

  )
}

export default OpenModal
