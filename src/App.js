import { Container, Grid } from '@material-ui/core'
import { TopHeader } from './components/header'
import { useState } from 'react'
import Divider from '@material-ui/core/Divider'
import { AddMessageModel } from './components/addMessageModel'
import { MessageCard } from './components/messageCard'
import { KeywordsInput } from './components/keywordsInput'
import { ResultTable } from './components/resultTable'
import { AllWordsAnalysis } from './components/allWordsAnalysis'

const initialMessage = {
  text:
    'Lorem Ipsum is simply dummy, text of, the printing and typesetting industry hello hi my text',
  selected: true,
}

const App = () => {
  const [messageList, setMessageList] = useState([initialMessage])
  const [keywords, setKeywords] = useState([])

  const handleSelectChange = (val, index) => {
    const newList = [...messageList]
    newList[index].selected = val
    setMessageList(newList)
  }

  const handleDeleteMessage = (indexNum) => {
    const newList = messageList.filter((data, index) => index !== indexNum)
    setMessageList(newList)
  }

  const handleAddMessage = (text) => {
    setMessageList([
      ...messageList,
      {
        text: text,
        selected: true,
      },
    ])
  }

  return (
    <div>
      <TopHeader />
      <Container>
        <div style={{ marginTop: 20 }}>
          <AddMessageModel handleAddMessage={handleAddMessage} />
          <br />
          <Grid container spacing={0}>
            {messageList.map((message, index) => (
              <Grid key={index} item lg={4} md={4} sm={12}>
                <MessageCard
                  text={message.text}
                  index={index}
                  selected={message.selected}
                  handleSelectChange={handleSelectChange}
                  handleDeleteMessage={handleDeleteMessage}
                />
              </Grid>
            ))}
          </Grid>
          <Divider /> <br />
          <KeywordsInput keywords={keywords} setKeywords={setKeywords} />
          <ResultTable keywords={keywords} messageList={messageList} />
          <Divider /> <br />
          <AllWordsAnalysis keywords={keywords} messageList={messageList} />
        </div>
      </Container>
    </div>
  )
}

export default App
