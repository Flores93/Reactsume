import { Grid } from "@material-ui/core"

//components
import Button from "../components/ui/Button"

export const mapButtons = botones => {
    return botones.map(({text, to, icon}) => (
        <Grid className='customRow' key={text} item xs={12}>
            <Button to={to} text={text} icon={icon}/>
        </Grid>
    ))
}