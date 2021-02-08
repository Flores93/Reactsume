import React from 'react'

//helpers
import { getSplitterData } from '../../helpers/getSplitterData'

const SplitedSection = ({data}) => {

    return (
        <div>
            {getSplitterData(data)}
        </div>
    )
}

export default React.memo(SplitedSection)
