import React from 'react'
import { useAsyncFn } from 'react-use'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Container, Typography, Grid, Box, Hidden } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import Avatar from '~components/atoms/images/avatar'
import TextRotator from '~components/atoms/text/rotator'
import Pattern from '~components/molecules/media/pattern'
import CircleLines from '~components/molecules/media/circleLines'
import SocialIcons from '~components/organisms/lists/socialIcons'

const FrontHero = () => {
  const classes = useStyles()

  const greetings: string[] = [
    'Hola', 'Hello', 'Ciao', 'Olá', 'Hallo', 'Namaste', 'Konnichiwa'
  ]

  const [githubData, getGithubData] = useAsyncFn(async () => {
    const response = await fetch('https://api.github.com/users/lewyuburi')
    const result = await response.json()
    return result
  }, [])

  React.useEffect(() => {
    getGithubData()
  }, [])

  return (
    <section
      className={classes.frontHero}
    >
      <Hidden smDown>
        <div className={classes.bgPattern}>
          <Pattern />
        </div>
      </Hidden>

      <div className={classes.bgCircle}>
        <CircleLines />
      </div>

      <Container>
        <Grid spacing={4} container>
          <Grid xs={12} md={6} lg={4} item>
            <Box py={8} mt={6}>

              <Typography variant="h1" className={classes.greeting}>
                <TextRotator strings={greetings} />!
              </Typography>

              <Typography className={classes.title} variant="h4" gutterBottom>
                Soy <span>Lewis Yuburi</span>,
                <br />
                Full-stack web & mobile developer.
              </Typography>

              <Typography color="textSecondary" className={classes.subtitle} variant="body2" gutterBottom>
                {githubData.loading && (<Skeleton variant="text" animation="wave" width="150px" />)}
                {!githubData.loading && (`📍 ${githubData.value?.location}`)}
              </Typography>

              <Box py={4}>
                <Box className={classes.quote} display="flex" mb={2} alignItems="center">
                  <Avatar src={githubData.value?.avatar_url} />
                  <Typography variant="body2">
                    <em>Easy code, easy life ~</em>
                  </Typography>
                </Box>

                <SocialIcons />
              </Box>

            </Box>
          </Grid>

          <Grid xs={12} md={6} lg={8} item>

          </Grid>

        </Grid>
      </Container>
    </section>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    frontHero: {
    },
    bgPattern: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: -1,
    },
    bgCircle: {
      position: 'absolute',
      zIndex: -2,
    },
    greeting: {
      color: '#12384C',
      fontWeight: 900,
      fontSize: '10rem',
      lineHeight: '4rem'
    },
    title: {
      fontWeight: 700,
      color: 'white',

      '& > span': {
        color: theme.palette.primary.main
      }
    },
    subtitle: {
    },
    quote: {
      '& > *': {
        marginRight: '1rem'
      }
    }
  })
)

export default FrontHero