import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Global } from './styles/global'
import { light } from './styles/themes'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <h2>Wello world</h2>
      </div>
      <Global />
    </ThemeProvider>
  )
}
