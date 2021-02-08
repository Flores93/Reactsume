import React from 'react'

import { socialsColors } from '../../helpers/socialColors'

import { useResumeStateContext } from '../../hooks/useResume'

const Socials = () => {

    const { state: {about_me} } = useResumeStateContext()
    const { userSocials } = about_me

    const mapSocials = (net) => {
        return net.map(({net, link}) => (
            <div className="inlineBlock" key={link}>
                <a target="_blank" rel="noreferrer" href={link}>
                    <i className={`fab fa-${net} ${socialsColors(net)} fa-1x`}></i>
                </a>
            </div>
        ))
    }

    return (
        <>
            {
                mapSocials(userSocials)
            }
        </>
    )
}

export default React.memo(Socials)