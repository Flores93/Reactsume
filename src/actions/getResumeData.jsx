import { types } from "../types";

export const getResumeData = data => ({
        type: types.getData,
        payload: data
})