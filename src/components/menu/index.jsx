import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import { useResumeStateContext } from '../../hooks/useResume'

import { mapButtons } from '../../helpers/mapButtons'
import { BUTTONS } from '../../constants/Buttons'

import SuperDivider from '../ui/SuperDivider'

import './../ui/styles.css'

const Menu = () => {

    const { state: { about_me: { userAvatar, userName } } } = useResumeStateContext()

    return (
        <div className='centerContent-menu'>
            <Paper elevation={4} className='ProfileBoxBg'>
                <Grid>
                    <Grid className='customRow' item xs={4} md={12}>
                        <img src={userAvatar} alt={userName} className='AvatarMd' />
                    </Grid>

                    <SuperDivider hidde={true} />

                    {mapButtons(BUTTONS)}

                </Grid>
            </Paper>
        </div>
    )
}

export default Menu
