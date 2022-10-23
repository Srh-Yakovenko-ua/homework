type loadingACType = ReturnType<typeof loadingAC>
export interface stateType {
    isLoading : boolean
}


const initState = {
    isLoading: false
}


export const loadingReducer = (state: stateType = initState, action: loadingACType): stateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading : action.payload.isLoading }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading : boolean) => {
        return {
            type : 'CHANGE_LOADING',
            payload : {
                isLoading : isLoading
            }
        }
} // fix any