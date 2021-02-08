import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import SuperDivider from '../ui/SuperDivider'
import TitleHeader from '../ui/TitleHeader'
import WorkThumbnail from '../ui/WorkThumbnail'

const Portfolio = () => {

    return (
        <div className='centerContent-V'>
            <Paper elevation={5} className='SectionBoxBg'>
                <Grid>
                    <Grid item xs={12}>
                        <TitleHeader />
                    </Grid>

                    <SuperDivider />

                    <Grid id='workThumbnailGrid' item xs={12}>
                        <WorkThumbnail />
                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}

export default Portfolio
