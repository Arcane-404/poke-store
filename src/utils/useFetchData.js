import { useState,useEffect,useReducer } from 'react'
import { reducer,INIT_STATE,STATUS } from './FetchReducer'
const { LOADING,RESOLVED,ERROR } = STATUS
const print = console.log

/*  
  base_url, 
  option {
    paths: [] || "" || null
    name: "/[name]" || "name"
  } = {}

- url/path
- url + [ /paths[0] ]
- url * [ /paths ]
*/

export const useFetchData = (url, { paths=[],name="" }={ }) => {
  const [ query,setQuery ] = useState(name)
  const [ state,dispatch ] = useReducer(reducer,INIT_STATE)
  const { loading,result,error } = state

  const getFetch = async (path="") => {
    const URL = url + path + `/${ query }`
    const response = await fetch(URL)
    if (response.ok) return await response.json()
    else throw new Error(`${response.status} Error`) 
  }

  const fetchData = async (isCurrent) => {
    dispatch({ type:LOADING })
    try {
      const response = await (Array.isArray(paths) && paths.length)
      ? Promise.all(paths.map(getFetch)) : getFetch(paths)
      if (isCurrent) dispatch({ type:RESOLVED , response: await response })
    } catch (error) {
      print(error)
      dispatch({ type:ERROR , error })
    }
    // .finally(() => {})
  }

  useEffect(() => {
    if (!query) return
    let isCurrent = true
    fetchData(isCurrent)
    return () => {
      isCurrent = false
    }
  }, [ query ])

  return { loading,result,error,setQuery }
}