export const ADD_LINK = (state, link) => {
    state.links.push(link)
}

export const REMOVE_LINK = (state, link) => {
    state.links.splice(link, 1)
}

export const REMOVE_ALL = (state) => {
    state.links = []
}