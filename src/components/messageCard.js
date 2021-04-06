import { Checkbox, Grid, IconButton, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

export const MessageCard = (props) => {
  const handleChange = (event) => {
    props.handleSelectChange(event.target.checked, props.index)
  }
  return (
    <Paper elevation={3} style={{ width: 300, marginTop: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Checkbox
            checked={props.selected}
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'secondary  checkbox' }}
          />
        </Grid>
        <Grid item xs={4}>
          <h4 style={{ marginTop: 10 }}>Message {props.index + 1}</h4>
        </Grid>
        <Grid item xs={4}>
          <IconButton aria-label="delete" onClick={() => props.handleDeleteMessage(props.index)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <p style={{ marginTop: 0, padding: 10 }}>{props.text}</p>
    </Paper>
  )
}
