import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";


const initialState={
    myFavorites:[],
    allCharacters:[]
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return{
                ...state, myFavorites: action.payload, allCharacters: action.payload
            }
        case FILTER:
            const charFilter = [...state.allCharacters]
            const filtrador = action.payload == "All" ? charFilter : charFilter.filter(char => char.gender == action.payload)
            return{
                ...state, myFavorites: filtrador
            }
        case ORDER:
            const charOrden = [...state.myFavorites];
            action.payload == "A" ? charOrden.sort((a,b)=>{return a.id - b.id}):charOrden.sort((a,b)=>{return b.id - a.id}) 
            return{
                ...state, myFavorites: charOrden
            }
            
        default:
            return{...state}
    }
}

export default rootReducer