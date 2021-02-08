import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import AboutMe from '../components/sections/AboutMe'
import FAButton from '../components/ui/FAButton'
import Resume from '../components/sections/Resume'
import Menu from '../components/menu'
import Portfolio from '../components/sections/Portfolio'

import { useResumeStateContext } from '../hooks/useResume'
import { uiFabFirstVisit } from '../actions/uiActions'

const AppRouter = () => {

    const { state: { firstVisit }, dispatch } = useResumeStateContext()

    const handleScrollCapture = () => {
        if (firstVisit) {

            dispatch(uiFabFirstVisit())

            // @ts-ignore
            localStorage.setItem('visited', new Date().getTime())
        }
    }

    return (

        <div className='container'>

            <div className='row'>
                <Router>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <Menu />
                    </div>

                    <div className='col-sm-12 col-md-8 col-lg-8' onScrollCapture={handleScrollCapture}>
                        <div className='centerContent-H'>
                            {firstVisit &&
                                <FAButton />
                            }

                            <Switch>
                                <Route exact path='/portfolio' component={Portfolio} />
                                <Route exact path='/resume' component={Resume} />
                                <Route exact path='/' component={AboutMe} />

                                <Redirect to='/' />

                            </Switch>

                        </div>
                    </div>
                </Router>
            </div>

        </div>
    )
}

export default React.memo(AppRouter)
