import { createAction } from 'redux-actions'

const B = 'CANVAS'

export const setState = createAction(`${B}/SET_STATE`)
export const setCanvas = createAction(`${B}/SET`)
export const setCurrentCanvas = createAction(`${B}/SET_CURRENT`)
export const deleteCanvas = createAction(`${B}/DELETE`)