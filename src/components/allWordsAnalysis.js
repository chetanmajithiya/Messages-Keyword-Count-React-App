import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { countWordsFromArray, splitAllWordsFromTextIntoArray } from '../helper/helperFunctions'

export const AllWordsAnalysis = (props) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const textList = []
    props.messageList.map((data) => {
      if (data.selected) {
        textList.push(data.text)
      }
      return true
    })

    const wordsArray = splitAllWordsFromTextIntoArray(textList)
    // getting unique array word list
    const uniqueList = wordsArray.filter((item, i, ar) => ar.indexOf(item) === i)

    // getting result of each keyword
    const resultList = []
    uniqueList.map((keyword) => {
      resultList.push({
        keyword: keyword,
        count: countWordsFromArray(wordsArray, keyword),
      })
      return true
    })
    // set final result
    setResults(resultList)
  }, [props.keywords, props.messageList])

  return (
    <>
      <h1>Each Words Analysis from Messages</h1>
      <TableContainer style={{ width: 300 }} component={Paper}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Word</TableCell>
              <TableCell align="right">Counts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((keyword, index) => (
              <TableRow key={index}>
                <TableCell align="left">{keyword.keyword}</TableCell>
                <TableCell align="right">
                  <span style={{ color: '#2ebf6d' }}>{keyword.count}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
    </>
  )
}
