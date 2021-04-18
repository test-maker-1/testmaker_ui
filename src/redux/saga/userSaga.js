import { createAction, createReducer } from '@reduxjs/toolkit'

// action
const WRITE = 'INPUT/WRITE' // prevent to conflict aciton name

// init state
const initState = { value: '' }

// action generation function
export const changeInput = createAction(WRITE) // prevent to conflict aciton name

// reducer
const writeReducer = createReducer(initState, {
  [changeInput]: (state, action) => {
    state.value = action.payload
  }
})

export default writeReducer
