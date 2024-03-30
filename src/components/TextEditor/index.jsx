import { useState } from 'react'

// Importing core components
import QuillEditor from 'react-quill'

// Importing styles
import styles from './styles.module.css'
import 'react-quill/dist/quill.snow.css'

const TextEditor = ({ onChnageHandler, value }) => {
  // Editor state
  // const [value, setValue] = useState('')

  return (
    <div className={`${styles.wrapper} relative`}>
      <QuillEditor
        className={styles.editor}
        theme="snow"
        value={value}
        onChange={(value) => onChnageHandler(value)}
      />
    </div>
  )
}

export default TextEditor
