export type InitialStateType = typeof initialState
const initialState = {
    counter: 0,
    title: '',
    showCounter: true,
    maxValue: 5,
    minValue: 0
}
export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type){
        case "INC-COUNTER-VALUE":{
            return {...state,counter: state.counter+1}
        }
        case "REST-COUNTER-VALUE":{
            return {...state,counter: state.minValue}
        }
        default: return state
    }
}
type ActionType = IncCounterValueACType|RestCounterValueACType


export type IncCounterValueACType = ReturnType<typeof incCounterValueAC>
export const incCounterValueAC = ()=>{
    return{type:'INC-COUNTER-VALUE'}as const
}

export type RestCounterValueACType = ReturnType<typeof restCounterValueAC>
export const restCounterValueAC = ()=>{
    return{type:'REST-COUNTER-VALUE'}as const
}



