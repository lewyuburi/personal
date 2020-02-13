import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Twitter, GitHub, Instagram, LinkedIn } from '@material-ui/icons'
import { Box, IconButton } from '@material-ui/core'

const SocialIcons = () => {
  const classes = useStyles()

  return (
    <Box
      className={classes.socialIcons}
      display="flex"
    >

      <a href="https://github.com/LewYuburi" target="_blank">
        <IconButton color="primary">
          <GitHub fontSize="small" color="action" />
        </IconButton>
      </a>

      <a href="https://www.linkedin.com/in/lewisyuburi" target="_blank">
        <IconButton color="primary">
          <LinkedIn fontSize="small" color="action" />
        </IconButton>
      </a>

      <a href="https://twitter.com/LewisYuburi" target="_blank">
        <IconButton color="primary">
          <Twitter fontSize="small" color="action" />
        </IconButton>
      </a>

      <a href="https://instagram.com/LewisYuburi" target="_blank">
        <IconButton color="primary">
          <Instagram fontSize="small" color="action" />
        </IconButton>
      </a>

    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socialIcons: {
    }
  })
)
export default SocialIcons