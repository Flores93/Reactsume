import React, { useCallback, useReducer } from 'react'
import { types } from '../types'
import { resumeContext } from './ResumeContext'

const wasVisited = localStorage.getItem('visited')

export const RootContext = ({ children }) => {

    const initState = {
        loading: false,
        firstVisit: wasVisited ? false : true,
        currentPath: '/',
        about_me: {
          userName: 'Jose Luis Flores Fuentes',
          occupation: 'Web Developer',
          description: 'Enthusiast of Web Development technologies, searching for new challenges, always wanting to learn from new experiences and participate in high impact project.',
          userAvatar: 'https://joseluisfloresfuentes-1993.web.app/static/media/avatar.c161a576.png',
          userInfo: [
            {
              type: 'Name',
              value: 'José Luis Flores Fuentes'
            },
            {
              type: 'Nationality',
              value: 'Mexican'
            },
            {
              type: 'Place of birth',
              value: 'San Andrés Tuxtla, Ver.'
            },
            {
              type: 'Birthday',
              value: 'December 10, 1993'
            }
          ],
          userSocials: [
            {
              net: 'facebook',
              link: 'https://www.facebook.com/joseluis.floresfuentes.7'
            },
            {
                net: 'twitter',
                link: 'https://twitter.com/joflowers93'
            },
            {
                net: 'github',
                link: 'https://github.com/Flores93'
            },
            {
                net: 'linkedin',
                link: 'https://www.linkedin.com/in/jose-luis-flores-fuentes-145465161/'
            }
          ],
          userHobbies: [
            {
              icon: <i className="fas fa-biking chipIcon"></i>,
              label: 'Cycling',
              color: 'primary',
              id: 1231231
            },
            {
              icon: <i className="fas fa-guitar chipIcon"></i>,
              label: 'Playing Guitar',
              color: 'secondary',
              id: 123129999
            },
            {
              icon: <i className="fas fa-code chipIcon"></i>,
              label: 'Coding',
              color: 'primary',
              id: 12312312311
            },
            {
              icon: <i className="fas fa-gamepad chipIcon"></i>,
              label: 'Video Games',
              color: 'secondary',
              id: 1231223312311
            },
            {
              icon: <i className="fas fa-running chipIcon"></i>,
              label: 'Running',
              color: 'primary',
              id: 3332312312311
            },
            {
              icon: <i className="fab fa-leanpub chipIcon"></i>,
              label: 'Learning',
              color: 'secondary',
              id: 1231999212311
            }
          ]
        },
        resume: {
          downloadResume: 'https://drive.google.com/file/d/1k7wdZ3KDqL-A67djWMx6c4jUHlfIzKWz/view?usp=sharing',
          experiences: [
            {
              id: 123123123,
              title: '[PHP] Independent Web Developer',
              date: '05/2017 - 09/2020',
              description: [
                  {
                      type: 'AG Noticias',
                      value: "Work collaboratively with the client to provide fast and client-acclaimed web development and reducing operating costs by 50%.",
                  },
                  {
                      type: 'PCare San Andres Tuxtla',
                      value: "Development of several web pages, mainly landing page. Optimized sites for usability.",
                  },
                  {
                      type: 'WiLife Coms.',
                      value: "Development of the website to attract potential customers, as well as maintenance of LAN / WLAN networks for the use of customers."
                  }
              ]
            },
          ],
          education: [
            {
              type: 'Udemy',
              value: 'React: De cero a experto ( Hooks y MERN )',
              url: 'https://www.udemy.com/certificate/UC-274fa690-da58-4c26-8f6c-b5e6970986b8/',
            },
            {
              type: 'Udemy',
              value: 'React + Redux course',
              url: 'https://www.sololearn.com/Certificate/1097-20563023/pdf/',
            },
            {
              type: 'Udemy',
              value: 'React JS + Redux + ES6. Completo ¡De 0 a experto!',
              url: 'https://www.udemy.com/certificate/UC-0254739c-a7f0-4792-a081-08e43c9775b5/',
            },
            {
              type: 'Udemy',
              value: 'React JS - Curso de introducción desde cero y primeros pasos',
              url: 'https://www.udemy.com/certificate/UC-1bdf08db-d2a8-495e-999e-1e31bee91ed1/',
            },
            {
              type: 'Udemy',
              value: 'Typescript/ES6 Course',
              url: 'https://www.udemy.com/certificate/UC-R4L9PHF7/',
            },
            {
              type: 'Computer Engineering Symposium',
              value: 'Bootstrap & AppInventor Courses (2014)'
            },
            {
              type: 'Instituto Tecnológico Superior de San Andrés Tuxtla',
              value: 'Bachelor of Informatics Engineering (2012 - 2018)',
            }
          ],
          skills: [
            {
              name: 'Programming Languages',
              content: [
                  {
                      name: 'php',
                      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png',
                      bgColor: '#6466a5'
                  },
                  {
                    name: 'JavaScript',
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
                    bgColor: '#f7f7f7'
                  },
                  {
                    name: 'SQL',
                    icon: 'https://cloudblogs.microsoft.com/uploads/prod/sites/32/2020/05/SQL.png',
                    bgColor: '#f7f7f7'
                  }
              ]
            },
            {
              name: 'Web Development',
              content: [
                {
                  name: 'HTML',
                  icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
                  bgColor: '#f7f7f7'
                },
                {
                  name: 'CSS',
                  icon: 'https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png',
                  bgColor: '#f7f7f7'
                },
                {
                    name: 'React.js',
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
                    bgColor: '#f7f7f7'
                }
              ]
            },
            {
              name: 'Testing',
              content: [
                {
                    name: 'Jest',
                    icon: 'https://jestjs.io/img/jest.png',
                    bgColor: '#f7f7f7'
                },
                {
                    name: 'Enzyme',
                    icon: 'https://s.gravatar.com/avatar/a78ef807c3154e902c98d6c3834f0577?size=496&default=retro',
                    bgColor: '#f7f7f7'
                }
              ]
            },
            {
              name: 'Tools',
              content: [
                {
                    name: 'Visual Studio Code',
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png',
                    bgColor: '#f7f7f7'
                }
              ]
            }
          ]
        },
        portfolio: {
          works: [
            {
              company: '123Abc',
              wtype: 'CMS',
              img: 'https://joseluisfloresfuentes-1993.web.app/static/media/agnoticias.27714f6c.png',
              link: 'http://aglostuxtlas.mx/',
              techStack: 'PHP, MySQL, JavaScript',
              id: 1231213
            },
            {
                company: 'ABC123',
                wtype: 'Inventory System',
                img: 'https://joseluisfloresfuentes-1993.web.app/static/media/agnoticias.27714f6c.png',
                techStack: 'PHP, MySQL, JavaScript',
                id: 123123
            }
          ]
        }
    }

    const resumeReducer = useCallback((state = {}, action) => {
        switch (action.type) {
            case types.getData:
                return {
                    ...state,
                    ...action.payload
                }
            case types.updateFirstVisit:
              return {
                  ...state,
                  firstVisit: !state.firstVisit
              }
            case types.updateFabCurrentPath:
              return {
                ...state,
                currentPath: action.payload
              }
            default:
                return state
        }
    }, [])

    const [state, dispatch] = useReducer(resumeReducer, initState)

    return (
        <resumeContext.Provider value={{state, dispatch}}>
            { children }
        </resumeContext.Provider>
    )
}