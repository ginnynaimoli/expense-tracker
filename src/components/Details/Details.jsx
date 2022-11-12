import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import useTransactions from '../../useTransactions'
import useStyles from './detailstyles'
import 'chart.js/auto'
import { Doughnut } from "react-chartjs-2";

const Details = ({ title, subheader }) => {
  const classes = useStyles()
  const { total, chartData } = useTransactions(title)

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader}/>
      <CardContent>
        <Typography variant='h5'>${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  )
}

export default Details
