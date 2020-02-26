import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Container, Box, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'

import JobsData from '~data/jobs'

const FrontJobs = () => {
  const classes = useStyles()

  return (
    <Box py={{ xs: 4, md: 8 }} component="section">
      <Container maxWidth="sm">
        <Typography color="textSecondary" variant="h6" component="h2">
          Experiencia laboral
        </Typography>

        <List className={classes.root}>

          {JobsData.slice(0, 3).map((job, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar className={classes.avatar} alt={job.company.name} />
              </ListItemAvatar>
              <ListItemText
                primary={job.position}
                secondary={
                  <React.Fragment>
                    <Typography
                      className={classes.block}
                      variant="body2"
                      color="textPrimary"
                      component="span"
                    >
                      {job.company.name}, {job.location}
                    </Typography>
                    <Typography variant="caption">
                      {job.startDate} - {job.endDate}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>

      </Container>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 600,
    },
    block: {
      display: 'block',
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
  }),
)

export default FrontJobs