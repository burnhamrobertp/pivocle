import { createAction } from 'redux-actions'

const B = 'NODE'

const addNode = createAction(`${B}/ADD`)
const removeNode = createAction(`${B}/REMOVE`)
const setNode = createAction(`${B}/SET`)
