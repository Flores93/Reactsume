import React from 'react'
import { Divider } from '@material-ui/core'

const SuperDivider = ({w = '100%', hidde = false}) => {
    return (
        <Divider className={`mt-3 mb-3 ${hidde && 'hiddeOnSm'}`} style={{backgroundColor: 'white', width: w, height: '2px', margin: 'auto'}} />
    )
}

export default SuperDivider
