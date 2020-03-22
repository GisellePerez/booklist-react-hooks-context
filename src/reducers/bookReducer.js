export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.title,
                id: Date.now()
            }]

        case 'REMOVE_BOOK':
            console.log(state, action)
            return state.filter(book => book.id !== action.id);

        default: 
            return state;
    }
}