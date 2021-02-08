import React from 'react'
import { Typography } from '@material-ui/core'

import { getTextSize } from '../../helpers/getSplitterData'

import { useResumeStateContext } from '../../hooks/useResume'

const Description = () => {

    const { state: {about_me} } = useResumeStateContext()

    const { description } = about_me

    return (
        <Typography variant="h6" align='center' className={`textWhite ${getTextSize(description.length)}`}>
            {description}
        </Typography>
    )
}

export default React.memo(Description)
