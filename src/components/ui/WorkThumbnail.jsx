import React from 'react'

import { useResumeStateContext } from '../../hooks/useResume'

import './styles.css'

const WorkThumbnail = () => {

    const { state: { portfolio: { works } } } = useResumeStateContext()

    const mapWorks = (w) => {

        return w.map(({company, wtype, img, link, techStack, id}) => (
            <div className='col-xs-12 col-md-4' key={id}>
                <div className="itemCont">

                    <img className="itemPort" src={img} alt={company}/>

                    <div className="itemPortDescription">
                        {link ?
                        <a className="noLinkDeco" href={link} target="_blank" rel="noreferrer">
                            <div className="captionItem">
                                <p className="fontCaption">{company}</p>
                                <hr/>
                                <small className="subFontCaption">{wtype}</small>
                            </div>
                        </a>
                        :
                        <div className="captionItem">
                            <p className="fontCaption">{company}</p>
                            <hr/>
                            <small className="subFontCaption">{wtype}</small>
                        </div>
                        }
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className='text-center portDiv row'>
            {
                works.length > 0 ?
                mapWorks(works) : <h1>Cargando</h1>
            }
        </div>
    )
}

export default React.memo(WorkThumbnail)
