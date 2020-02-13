import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  const classes = useStyles()

  return (
    <header className="header">
      <AppBar
        className={classes.appBar}
        position="static"
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="subtitle2">
            Lewis
            <span>
              Yuburi
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {

    },
    appBar: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 900,

      '& > span': {
        color: theme.palette.primary.light
      }
    },
  }),
)

export default React.memo(Header)