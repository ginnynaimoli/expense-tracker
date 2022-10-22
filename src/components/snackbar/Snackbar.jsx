import React from 'react'
import { Snackbar } from '@material-ui/core'
import useStyle from './snackbarstyles'
import { Alert } from '@material-ui/lab'

const CustomSnackBar = ({ open, setOpen }) => {
  const classes = useStyle()

  const handleClose = (event, reason) => {
    if(reason === 'clickaway') {return}
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}>
                  <Alert onClose={handleClose} severity='success'
                            elevation={6} variant='filled'>
                              Transaction successfully created!
                  </Alert>
      </Snackbar>
    </div>
  )
}

export default CustomSnackBar