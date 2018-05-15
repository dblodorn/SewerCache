import { h } from "hyperapp"
import picostyle from "picostyle"
const styled = picostyle(h) 

import { colors, y } from './theme.json'

// STYLE COMPONENTS
export const Main = styled('main')({
  height: '100vh',
  width: '100vw',
  background: colors.beige,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '3rem'
})

export const H1 = styled('h1')({
  fontFamily: 'authentic-sans',
  letterSpacing: '.25rem',
  fontWeight: 600,
  color: colors.white,
  fontSize: '3rem',
  display: 'flex',
  lineHeight: 1.15
})
