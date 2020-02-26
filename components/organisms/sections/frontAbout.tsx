import { Typography, Grid, Container, Box } from '@material-ui/core'

const FrontAbout = () => {
  return (
    <Box py={{ xs: 2, md: 8 }} mt={{ xs: 8, md: 16 }} component="section">
      <Container>
        <Grid container>
          <Grid xs={12} md={2} item>
            <Typography color="textSecondary" variant="h3">
              tl;dr
            </Typography>
          </Grid>
          <Grid xs={12} md={6} item>
            <Typography variant="h5" gutterBottom>
              Soy un hombre simple: si se trata de crear aplicaciones web o móviles, <em>I'm sold</em>.
            </Typography>
            <Typography variant="body2" paragraph>
              Me llamo Lewis Yuburi🙋‍♂️, de Santa Ana de Coro, (VE🇻🇪) pero viviendo actualmente en Bogota, (CO🇨🇴).
            </Typography>
            <Typography variant="body2" paragraph>
              Utilizo un PC portátil para crear productos digitales que simplifican la vida de las personas👨‍💻, o eso intento.
            </Typography>
            <Typography variant="caption" paragraph>
              No se arreglar impresoras ni puedo hackear el Facebook de tu crush 👾.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default FrontAbout