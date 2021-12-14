export const addToReadingList = (payload) => {
    return {
        type: 'ADD_TO_READING_LIST',
        payload
    }
}

export const removeFromReadingList = (payload) => {
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload
    }
}

export const markedToFinishList = (payload) => {
    return {
        type: 'MARK_TO_FINISH_LIST',
        payload
    }
}