import {UserType} from '../HW8';

type ActionsType = {
    type: 'sort',
    payload: 'up' | 'down'
} | { type: 'check', payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state];
            newState.sort(function (a, b) {
                if (action.payload === 'up') {
                    return a.name < b.name ? 1 : -1
                } else if (action.payload === 'down') {
                    return a.name > b.name ? 1 : -1
                } else return 0
            })
            return newState;
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}

// const newState = [...state]
// if (action.payload === 'up') {
//    newState.sort((a, b) => a.name < b.name ? -1 : 1)
// }
// if (action.payload === 'down') {
//  newState.sort((a, b) => a.name > b.name ? 1 : -1)
// }
// return  newState