import React from 'react'
import Box from '@mui/material/Box';
import { Button, Divider, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from '@mui/material';

const ProductDeleteForm = ({ id }) => {

  const handleSubmit = () =>{
    console.log("handleSubmit")
  }

  return (
    <Box
    component="form"
    noValidate
    autoComplete="off"
    onSubmit={ handleSubmit }
    sx={{ 
      padding: '24px', 
      boxSizing: 'border-box',
      boxShadow: '0 0 6px #ccc',
      borderRadius: '8px', 
    }}
  >
    <Typography variant="h6">
      ¿Desea eliminar este producto?
    </Typography>
    
    <Button 
          type="submit"
          variant="contained"
        >
          Eliminar
    </Button>
    
  </Box>
  )
}

export default ProductDeleteForm
