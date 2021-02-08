import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

//components
import Description from '../ui/Description'
import TitleHeader from '../ui/TitleHeader'
import SuperDivider from '../ui/SuperDivider'
import SplittedSection from '../ui/SplittedSection'
import Socials from '../ui/Socials'

import { useResumeStateContext } from '../../hooks/useResume'

import { getHobbies } from '../../helpers/getHobbies'

const AboutMe = () => {

    const { state: {about_me} } = useResumeStateContext()
    const { userHobbies, userInfo } = about_me

    return (
        <div className='centerContent-V'>
            <Paper elevation={5} className='SectionBoxBg'>
                <Grid>
                    <Grid item xs={12}>
                        <TitleHeader />
                    </Grid>

                    <SuperDivider />

                    <Grid item xs={12}>
                        <Description />
                    </Grid>

                    <SuperDivider />

                    <Grid item xs={12}>
                        <SplittedSection data={userInfo}/>
                    </Grid>

                    <Grid item xs={12} className='centerContent'>
                        <Socials />
                    </Grid>

                    <SuperDivider />

                    <Grid item xs={12}>
                        <Typography variant="h6" align='center' className='textWhite'>Hobbies</Typography>
                        <div className='centerContent' id='hobbiesDiv'>
                            {getHobbies(userHobbies)}
                        </div>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}

export default AboutMe
