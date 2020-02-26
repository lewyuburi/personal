import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import { motion } from "framer-motion"
import PatternBlock from '~components/molecules/blocks/pattern'

const Pattern = () => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.masonry)}>
      {[...Array(12)].map((e, i) => <PatternBlock key={i} />)}
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    masonry: {
      display: 'grid',
      gridAutoFlow: 'row dense',
      gridAutoRows: '200px',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    frontPattern: {
      width: '600px',
      display: 'flex',
      flexWrap: 'wrap'
    },
  })
)

export default Pattern