import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'

const CircleLines = () => {
  const classes = useStyles()

  return (
    <div className={classes.circleLines}>

    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    circleLines: {
      border: `1px solid ${theme.palette.secondary.dark}`,
      width: '40rem',
      height: '40rem',
      borderRadius: '50%',
      position: 'absolute',
      opacity: 0.5,

      '&::before': {
        content: '""',
        display: 'block',
        border: `1px solid ${theme.palette.secondary.dark}`,
        width: '60rem',
        height: '60rem',
        borderRadius: '50%',
        position: 'absolute'
      },
      '&::after': {
        content: '""',
        display: 'block',
        border: `1px solid ${theme.palette.secondary.dark}`,
        width: '80rem',
        height: '80rem',
        borderRadius: '50%',
        position: 'absolute'
      }
    }
  })
)

export default CircleLines