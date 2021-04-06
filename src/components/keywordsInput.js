import Autocomplete from '@material-ui/lab/Autocomplete'
import { Chip, TextField } from '@material-ui/core'

export const KeywordsInput = (props) => {
  return (
    <>
      <Autocomplete
        multiple
        id="tags-filled"
        options={[]}
        defaultValue={[]}
        value={props.keywords}
        onChange={(event, newValue) => {
          props.setKeywords(newValue)
        }}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Keywords" placeholder="Keywords" />
        )}
      />
      <p style={{ color: 'silver' }}>(Note: Enter Keyword and Hit Enter to get Result)</p>
      <br />
    </>
  )
}
