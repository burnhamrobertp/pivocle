import { createAction } from 'redux-actions'

const B = 'NODES'

export const setState = createAction(`${B}/SET_STATE`)
export const setNode = createAction(`${B}/SET`)
export const setNodeTitle = createAction(`${B}/SET_TITLE`)
export const setNodeDescription = createAction(`${B}/SET_DESCRIPTION`)
export const moveNode = createAction(`${B}/MOVE`)
export const removeNode = createAction(`${B}/REMOVE`)
