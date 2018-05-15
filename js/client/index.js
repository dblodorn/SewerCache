import { app, h } from "hyperapp"
import debug from 'hyperapp-debug'
import { state, actions } from './state'
import App from './App'

if (window.env === 'debug') {
  debug(app)(state, actions, App, document.body)
} else {
  app(state, actions, App, document.body)
}
