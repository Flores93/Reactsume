import React from 'react'
import { Typography } from '@material-ui/core'

const Subtitle = ({children}) => {

    return (
        <Typography variant='subtitle1' align='center' className='textWhite mb-3'>
            {children}
        </Typography>
    )
}

export default React.memo(Subtitle)
