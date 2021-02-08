import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'
import { Fab } from '@material-ui/core'

import { useResumeStateContext } from '../../hooks/useResume'

import { uiFabFirstVisit } from '../../actions/uiActions'
import { targetHandler } from '../../helpers/targetHandler'

const FAButton = () => {

    const { state: { currentPath }, dispatch } = useResumeStateContext()

    const target = document.querySelector(targetHandler(currentPath));

    const handleScroll = () => {

        dispatch(uiFabFirstVisit())

        // @ts-ignore
        localStorage.setItem('visited', new Date().getTime())

        scrollIntoViewIfNeeded(target, {behavior: "smooth"})

    }

    return (
        <Fab className='animate__animated animate__shakeY noLinkDeco faButton' color="primary" aria-label="expand" onClick={handleScroll}>
            <ExpandMoreIcon />
        </Fab>
    )
}

export default FAButton
