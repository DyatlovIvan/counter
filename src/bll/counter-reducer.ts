export type InitialStateType = typeof initialState
const initialState = {
    counter: 0,
    title: '',
    showCounter: true,
    maxValue: 5,
    minValue: 0
}
export const counterReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state
}