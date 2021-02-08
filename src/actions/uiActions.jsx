import { types } from "../types";

export const uiFabFirstVisit = () => ({
        type: types.updateFirstVisit,
})

export const uiFabCurrentPath = (path) => ({
        type: types.updateFabCurrentPath,
        payload: path
})