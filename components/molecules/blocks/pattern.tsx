import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { motion } from "framer-motion"
import clsx from 'clsx'

const PatternBlock = () => {
  const classes = useStyles()

  const styles = [
    clsx(classes.patternBlock, classes.transparent),
    clsx(classes.patternBlock, classes.colorPrimary, classes.circle),
    clsx(classes.patternBlock, classes.colorSecondary, classes.circle),
    clsx(classes.patternBlock, classes.colorSecondaryLight, classes.circle),
    clsx(classes.patternBlock, classes.colorPrimary, classes.borderTop),
    clsx(classes.patternBlock, classes.colorSecondary, classes.borderTop),
    clsx(classes.patternBlock, classes.colorSecondaryLight, classes.borderTop),
    clsx(classes.patternBlock, classes.colorPrimary, classes.borderBottom),
    clsx(classes.patternBlock, classes.colorSecondary, classes.borderBottom),
    clsx(classes.patternBlock, classes.colorSecondaryLight, classes.borderBottom),
    clsx(classes.patternBlock, classes.colorPrimary, classes.borderLeft),
    clsx(classes.patternBlock, classes.colorSecondary, classes.borderLeft),
    clsx(classes.patternBlock, classes.colorSecondaryLight, classes.borderLeft),
    clsx(classes.patternBlock, classes.colorPrimary, classes.borderTopRight),
    clsx(classes.patternBlock, classes.colorSecondary, classes.borderTopRight),
    clsx(classes.patternBlock, classes.colorSecondaryLight, classes.borderTopRight),
    clsx(classes.patternBlock, classes.colorPrimary, classes.borderTopLeft),
    clsx(classes.patternBlock, classes.colorSecondary, classes.borderTopLeft),
    clsx(classes.patternBlock, classes.colorSecondaryLight, classes.borderTopLeft),
  ]

  const randomStyle = styles[Math.floor(Math.random() * styles.length)]

  return (
    <motion.div transition={{ duration: 0.5 }} animate={{ scale: [0, 1] }}>
      <div className={randomStyle} />
    </motion.div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    patternBlock: {
      backgroundColor: theme.palette.primary.dark,
      gridColumn: 'span 1',
      width: '200px',
      height: '200px',
    },
    circle: {
      borderRadius: '50%',
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
      borderTopRightRadius: '128px',
      borderBottomLeftRadius: '128px'
    },
    borderTopLeft: {
      borderTopLeftRadius: '128px',
      borderBottomRightRadius: '128px'
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.dark
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.dark
    },
    colorSecondaryLight: {
      backgroundColor: theme.palette.secondary.light
    },
  })
)

export default PatternBlock