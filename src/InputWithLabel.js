import { useEffect, useRef } from "react"

export default function InputWithLabel({children, todoTitle, handleTitleChange}) {
    const inputFocus = useRef();
    
    useEffect(() => {
      inputFocus.current.focus();
    })
    
  return (
    <div className="form-input">
          <label htmlFor='todoTitle'>{children}</label>
          <input ref={inputFocus} name='title' type="text" id="todoTitle" value={todoTitle} onChange={handleTitleChange} />
    </div>
  )
}
