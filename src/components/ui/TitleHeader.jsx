import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { uiFabCurrentPath } from '../../actions/uiActions'

import { useResumeStateContext } from '../../hooks/useResume'

import { getTitleSubtitle } from '../../helpers/getTitleSubtitle'

const TitleHeader = () => {

    const { state: {about_me}, dispatch } = useResumeStateContext()

    const { userName, occupation } = about_me

    const { location: { pathname } } = useHistory()

    useEffect(() => {

        dispatch(uiFabCurrentPath(pathname))

    }, [dispatch, pathname]);


    return (
        <div className="text-center textWhite">
            {getTitleSubtitle(pathname, userName, occupation)}
        </div>
    )
}

export default TitleHeader
