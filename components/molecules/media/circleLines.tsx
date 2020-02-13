import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'

const CircleLines = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.circleLines} />
      <div className={classes.circleLinesTwo} />
    </React.Fragment>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    circleLines: {
      border: `1px solid ${theme.palette.secondary.dark}`,
      width: '20rem',
      height: '20rem',
      borderRadius: '50%',
      position: 'absolute',
      opacity: 0.5,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      '&::before': {
        content: '""',
        display: 'block',
        border: `1px solid ${theme.palette.secondary.dark}`,
        width: '40rem',
        height: '40rem',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      '&::after': {
        content: '""',
        display: 'block',
        border: `1px solid ${theme.palette.secondary.dark}`,
        width: '60rem',
        height: '60rem',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    },
    circleLinesTwo: {
      border: `1px solid ${theme.palette.secondary.dark}`,
      width: '80rem',
      height: '80rem',
      borderRadius: '50%',
      position: 'absolute',
      opacity: 0.5,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      '&::before': {
        content: '""',
        display: 'block',
        border: `1px solid ${theme.palette.secondary.dark}`,
        width: '100rem',
        height: '100rem',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      '&::after': {
        content: '""',
        display: 'block',
        border: `1px solid ${theme.palette.secondary.dark}`,
        width: '120rem',
        height: '120rem',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    }
  })
)

export default CircleLines