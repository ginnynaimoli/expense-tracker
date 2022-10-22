import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import Form from './Form/Form'
import List from './List/List'
import useStyles from './mainstyles'
import { ExpenseTrackerContext } from '../../context/Context'
import InforCard from './Form/InforCard'

const Main = () => {
  const classes = useStyles()
  const { balance } = useContext(ExpenseTrackerContext)

  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
      
      <CardContent>
        <Typography align='center' variant='h5'>Total Balance ${balance}</Typography>
        <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InforCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>

      <CardContent classes={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>

  )
}

export default Main