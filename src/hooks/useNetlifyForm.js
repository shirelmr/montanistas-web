import { useState } from 'react'

// Sends a form to Netlify Forms, which saves each submission and emails it to
// the addresses set up in Netlify. Every form also needs to be listed in
// public/netlify-forms.html, or Netlify ignores it.
//
// `status` is 'idle', 'sending', 'sent' or 'error'.
export default function useNetlifyForm(name) {
  const [status, setStatus] = useState('idle')

  // `addFields` can add values the inputs don't hold, like attached files.
  const submit = async (event, addFields) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    data.set('form-name', name)
    addFields?.(data)

    // Netlify wants files sent as multipart and everything else URL-encoded.
    const hasFiles = [...data.values()].some((value) => value instanceof File)
    const request = hasFiles
      ? { body: data }
      : {
          body: new URLSearchParams(data).toString(),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }

    setStatus('sending')
    try {
      const response = await fetch('/', { method: 'POST', ...request })
      if (!response.ok) throw new Error(`Netlify answered ${response.status}`)
      form.reset()
      setStatus('sent')
      return true
    } catch {
      setStatus('error')
      return false
    }
  }

  return { status, submit }
}
