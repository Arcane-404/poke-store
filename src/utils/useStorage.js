import { useState, useEffect } from 'react'
import localforage from 'localforage'
// const print = console.log

export const useStorage = (key,init=null) => {
  const [ state , setState ] = useState(init)

  const removeState = async () => {
    await localforage.removeItem(key)
  }

  useEffect(() => {
    (async () => {
      try { setState((await localforage.getItem(key)) || init)
      } catch (error) { console.error(error) }
    })()
  }, [ key , init ])

  useEffect(() => {
    (async () => {
      try { await localforage.setItem(key, state)
      } catch (error) { console.error(error) }
    })()
  }, [ key , state ])

  return [ state , setState , removeState ]
}