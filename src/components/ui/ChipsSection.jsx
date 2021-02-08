import React from 'react'
import { Avatar, Chip } from '@material-ui/core'

import './styles.css'

const ChipsSection = ({icon, label, color = 'default', bgColor}) => {

    const imgOrIcon = (avatar) => {
        if (bgColor) {
            return <Avatar alt={label} src={avatar} />
        } else {
            return <Avatar>{avatar}</Avatar>
        }
    }

    return (
        <Chip
            avatar={imgOrIcon(icon)}
            label={label}
            // @ts-ignore
            color={color}
            size="small"
            className='txtChip'
            style={bgColor ? { backgroundColor: bgColor, marginLeft: '15px', marginTop: '10px'} : { marginLeft: '15px', marginTop: '10px' } }
        />
    )
}

export default React.memo(ChipsSection)
