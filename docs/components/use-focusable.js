import { useEffect } from 'react'

const useFocusable = input => {
  const focusInput = e => {
    if (e.key === '/' && input) input.current.focus()
  }
  useEffect(() => {
    document.addEventListener('keyup', focusInput)
    return () => {
      document.removeEventListener('keyup', focusInput)
    }
  }, [])
  return null
}

export default useFocusable
