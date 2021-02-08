import React from 'react'

import ChipsSection from '../components/ui/ChipsSection'

import './../components/ui/styles.css'

const getSkillsContent = (content) => {

        return (
            <>
            {content.map(
                ({name, icon, bgColor}) => {
                    return <React.Fragment key={name}>
                        <ChipsSection icon={icon} label={name} bgColor={bgColor} />
                    </React.Fragment>
                }
            )}
            </>
        )
}

export default getSkillsContent


