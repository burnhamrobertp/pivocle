import { createAction } from 'redux-actions'

const B = 'NODES'

export const setNode = createAction(`${B}/SET`)
export const moveNode = createAction(`${B}/MOVE`)
export const removeNode = createAction(`${B}/REMOVE`)
