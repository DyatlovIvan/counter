export type InitialStateType = typeof initialState
const initialState = {
    value: 0,
    title: '',
    showCounter: true,
    maxValue: 5,
    minValue: 0
}
export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-COUNTER-VALUE": {
            return {...state, value: state.value + 1}
        }
        case "REST-COUNTER-VALUE": {
            return {...state, value: state.minValue}
        }
        case "SET-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.value,
                showCounter: false,
                title: state.minValue >= state.maxValue || state.minValue < 0 ? 'Error!!!' : 'Press"set"'
            }
        }
        case "SET-MIN-VALUE": {
            return {...state,
                minValue: action.value,
                showCounter: false,
                title: state.minValue >= state.maxValue || state.minValue < 0 ? 'Error!!!' : 'Press"set"'
            }
        }
        case "SET-VALUE": {
            return {...state, showCounter: true, value: state.minValue}
        }
        default:
            return state
    }
}
type ActionType = IncCounterValueACType | RestCounterValueACType | SetMaxValueACType | SetMinValueACType |
    SetValueACType


export type IncCounterValueACType = ReturnType<typeof incCounterValueAC>
export const incCounterValueAC = () => {
    return {type: 'INC-COUNTER-VALUE'} as const
}

export type RestCounterValueACType = ReturnType<typeof restCounterValueAC>
export const restCounterValueAC = () => {
    return {type: 'REST-COUNTER-VALUE'} as const
}

export type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value: number) => {
    return {type: 'SET-MAX-VALUE', value} as const
}

export type SetMinValueACType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (value: number) => {
    return {type: 'SET-MIN-VALUE', value} as const
}

export type SetValueACType = ReturnType<typeof setValueAC>
export const setValueAC = () => {
    return {type: 'SET-VALUE'} as const
}





