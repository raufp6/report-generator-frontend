import React, { useState } from 'react'


// Import the Slate editor factory.
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

function Editor() {
    const [editor] = useState(() => withReact(createEditor()))
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(event) => {
          if (event.key === '`' && event.ctrlKey) {
            event.preventDefault()
            // Determine whether any of the currently selected blocks are code blocks.
            const [match] = Editor.nodes(editor, {
              match: (n) => n.type === 'code',
            })
            // Toggle the block type depending on whether there's already a match.
            Transforms.setNodes(
              editor,
              { type: match ? 'paragraph' : 'code' },
              {
                match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
              }
            )
          }
        }}
      />
    </Slate>
  )
}

export default Editor
