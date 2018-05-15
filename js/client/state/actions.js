import { state } from './state'

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

module.exports = {
  actions
}