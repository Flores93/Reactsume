import { Grid } from '@material-ui/core'

import Subtitle from '../components/ui/Subtitle'
import SuperDivider from '../components/ui/SuperDivider'
import SplittedSection from '../components/ui/SplittedSection'

export const getExperiences = (exp) => {
    return exp.map(({id, title, date, description}, i) => (
        <Grid key={id} item xs={12}>
            {i > 0 && <SuperDivider w='85%' />}
            <Subtitle>
                {`${title} (${date})`}
            </Subtitle>

            <SplittedSection data={description} />
        </Grid>
    ))
}