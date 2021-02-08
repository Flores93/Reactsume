import WorkIcon from '@material-ui/icons/Work'
import DescriptionIcon from '@material-ui/icons/Description'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

export const BUTTONS = [
    {
        text: "About me",
        to: "/",
        icon: <AccountCircleIcon></AccountCircleIcon>
    },
    {
        text: "Resume/CV",
        to: "/resume",
        icon: <DescriptionIcon></DescriptionIcon>
    },
    {
        text: "Portfolio",
        to: "/portfolio",
        icon: <WorkIcon></WorkIcon>
    },
]