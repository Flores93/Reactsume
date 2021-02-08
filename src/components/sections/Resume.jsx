import React from 'react'
import { Grid, Paper } from '@material-ui/core'

//components
import SuperDivider from '../ui/SuperDivider'
import SplittedSection from '../ui/SplittedSection'
import Subtitle from '../ui/Subtitle'
import Skills from '../ui/Skills'
import TitleHeader from '../ui/TitleHeader'

import { useResumeStateContext } from '../../hooks/useResume'

import { getExperiences } from '../../helpers/getExperiences'

const Resume = () => {

    const { state: {resume} } = useResumeStateContext()
    const { experiences, education, downloadResume} = resume

    return (
        <div className='centerContent-V'>
            <Paper elevation={5} className='SectionBoxBg'>
                <Grid>
                    <Grid item xs={12}>
                        <TitleHeader />
                    </Grid>

                    <SuperDivider />

                    <Subtitle>
                        Experience
                    </Subtitle>

                    <SuperDivider w='40%' />

                    {getExperiences(experiences)}

                    <SuperDivider />

                    <Grid item xs={12}>
                        <Subtitle>
                            Education
                        </Subtitle>

                        <SplittedSection data={education} />
                    </Grid>

                    <SuperDivider />

                    <Grid item xs={12}>
                        <Subtitle>
                            Skills
                        </Subtitle>

                        <Skills />
                    </Grid>

                    <SuperDivider />

                    <Grid id='skillsGrid' item xs={12}>
                        <Subtitle>
                            <a href={downloadResume} className='educationUrl' target='_blank' rel='noreferrer'>Download my Resume <i className="fas fa-file-download"></i></a>
                        </Subtitle>
                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}

export default Resume
