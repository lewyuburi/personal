import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'

const Pattern = () => {
  const classes = useStyles()

  return (
    <div className={classes.frontPattern}>
      <div className={clsx(classes.block, classes.borderTop, classes.colorSecondaryLight)} />
      <div className={clsx(classes.block, classes.borderBottom, classes.colorSecondary)} />
      <div className={clsx(classes.block, classes.borderTopLeft, classes.colorPrimary)} />

      <div className={clsx(classes.block, classes.borderBottom, classes.colorSecondaryLight)} />
      <div className={clsx(classes.block, classes.circle)} />
      <div className={clsx(classes.block, classes.borderBottomLeft, classes.colorPrimary)} />

      <div className={clsx(classes.block, classes.circle, classes.colorPrimary)} />
      <div className={clsx(classes.block, classes.borderTopLeft, classes.colorSecondary)} />
      <div className={clsx(classes.block, classes.borderTopRight, classes.colorSecondary)} />

      <div className={clsx(classes.block, classes.borderTopRight, classes.colorSecondary)} />
      <div className={clsx(classes.block, classes.circle, classes.colorSecondaryLight)} />
      <div className={clsx(classes.block, classes.borderLeft)} />

      <div className={clsx(classes.block, classes.borderBottomRight, classes.colorSecondary)} />
      <div className={clsx(classes.block, classes.borderTop, classes.colorPrimary)} />
      <div className={clsx(classes.block, classes.transparent)} />
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    frontPattern: {
      width: '384px',
      display: 'flex',
      flexWrap: 'wrap'
    },
    block: {
      display: 'inline-block',
      width: '128px',
      height: '128px',
      backgroundColor: 'white',
      // boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
    },
    circle: {
      borderRadius: '50%',
      // boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
    },
    transparent: {
      backgroundColor: 'transparent'
    },
    borderTop: {
      borderTopRightRadius: '64px',
      borderTopLeftRadius: '64px',
    },
    borderBottom: {
      borderBottomRightRadius: '64px',
      borderBottomLeftRadius: '64px',
    },
    borderLeft: {
      borderTopLeftRadius: '64px',
      borderBottomLeftRadius: '64px',
    },
    borderTopRight: {
      borderTopRightRadius: '128px'
    },
    borderTopLeft: {
      borderTopLeftRadius: '128px'
    },
    borderBottomRight: {
      borderBottomRightRadius: '128px'
    },
    borderBottomLeft: {
      borderBottomLeftRadius: '128px'
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.dark
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.dark
    },
    colorSecondaryLight: {
      backgroundColor: theme.palette.secondary.light
    }
  })
)

export default Pattern