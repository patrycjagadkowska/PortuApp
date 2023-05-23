export function reducer(state, action) {
    switch (action.type) {
        case "set_arrays": {
            return {
                ...state,
                ptShuffled: action.pt,
                engShuffled: action.eng
            }
        }
        case "first_clicked": {
            return {
                ...state,
                firstClicked: action.id,
                firstLang: action.lang
            }
        }
        case "click_the_same": {
            return {
                ...state,
                firstClicked: undefined, 
                firstLang: undefined
            }
        }
        case "click_another": {
            return {
                ...state,
                firstClicked: action.id
            }
        }
        case "found_pair": {
            const copiedArray = [...state.foundPairs];
            copiedArray.push(action.id);
            return {
                ...state,
                foundPairs: copiedArray,
                firstLang: undefined,
                firstClicked: undefined
            }
        }
        case "wrong_answer": {
            return {
                ...state,
                wrongAnswer: {
                    lang: action.lang,
                    id: action.id
                }
            }
        }
        case "clear_wrong_answer": {
            return {
                ...state,
                wrongAnswer: undefined
            }
        }
        default: {
            return state;
        }
    }
}