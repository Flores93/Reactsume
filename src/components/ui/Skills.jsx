import React, { useState } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Typography } from '@material-ui/core'

import getSkillsContent from '../../helpers/getSkillsContent'

import { useResumeStateContext } from '../../hooks/useResume'

import { summaryBgColor, detailsBgColor } from './../../constants/accordionBgColors'

const Skills = () => {
    const [expanded, setExpanded] = useState(false)

    const { state: {resume} } = useResumeStateContext()
    const { skills } = resume

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    const mapSkills = (skills) => (
        skills.map(({name, content}) => (
            <Accordion key={name} expanded={expanded === name} onChange={handleChange(name)} >
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: 'white'}} />} aria-controls={`${name}bh-content`} id={`${name}bh-header`} style={summaryBgColor}>
                    <Typography>{name}</Typography>
                </AccordionSummary>
                {expanded &&
                    <AccordionDetails style={detailsBgColor}>
                        {getSkillsContent(content)}
                    </AccordionDetails>
                }
            </Accordion>
        ))
    )

    return (
        <>
            {mapSkills(skills)}
        </>
    )
}

export default React.memo(Skills)
