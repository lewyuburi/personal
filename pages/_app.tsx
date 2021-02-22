import React from 'react'
import { GlobalStyles } from 'twin.macro'

const App = ({ Component, pageProps }) => (
  <React.Fragment>
    <GlobalStyles />
    <Component {...pageProps} />
  </React.Fragment>
)

export default App
