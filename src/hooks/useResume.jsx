import { useContext } from "react"

import { resumeContext } from "../context/ResumeContext"

export const useResumeStateContext = () => {
    const state = useContext(resumeContext)

    if (!state) {
        throw Error('Must Set State Provider')
    }
    return state
}