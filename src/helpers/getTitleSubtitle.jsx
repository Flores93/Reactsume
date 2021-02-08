import React from 'react'

export const getTitleSubtitle = (path, name, profession) => {

    switch (path) {
        case '/resume':
            return <>
                <h2>Resume</h2>
                <h3>Curriculum Vitae</h3>
            </>
        case '/portfolio':
            return <>
                <h2>Portfolio</h2>
                <h3>My Works</h3>
            </>
        default:
            return <>
                <h2>{name}</h2>
                <h3>{profession}</h3>
            </>
    }
}