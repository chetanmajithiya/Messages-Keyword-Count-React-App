import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useState } from 'react'
import AddIcon from '@material-ui/icons/AddRounded'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

export const AddMessageModel = (props) => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setText('')
  }

  const addMessage = () => {
    if (text !== '' && text !== ' ') {
      props.handleAddMessage(text)
    }

    handleClose()
  }

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add Message
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add Message</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextareaAutosize
              rows={7}
              cols={40}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addMessage} color="primary" autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
