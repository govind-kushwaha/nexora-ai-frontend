import {useState} from 'react'
import {transformProject} from '../services/api.js'
export function useTransformation(){
 const [processing,setProcessing]=useState(false); const [error,setError]=useState('')
 const generate=async(payload)=>{setProcessing(true);setError('');try{return await transformProject(payload)}catch(e){setError(e?.response?.data?.detail||'Backend unavailable. Showing the local preview instead.');return null}finally{setProcessing(false)}}
 return {processing,error,generate}
}
