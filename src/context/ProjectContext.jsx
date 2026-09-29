import { createContext,useContext,useMemo,useState } from 'react'
const ProjectContext=createContext(null)
const demoFacts=[
 {id:'F001',name:'Solar adoption',value:'35%',source:'report.pdf • Page 7',locked:true},
 {id:'F002',name:'Investment',value:'₹240 Cr',source:'report.pdf • Page 9',locked:true},
 {id:'F003',name:'Highest growth',value:'Rajasthan',source:'report.pdf • Page 10',locked:false},
]
export function ProjectProvider({children}){
 const [project,setProject]=useState({name:'Solar Adoption Transformation',source:null,topic:'Renewable energy adoption in India',facts:demoFacts,settings:{audience:'General',tone:'Informative',language:'English',detail:'Medium',objective:'Inform'},outputs:['summary','linkedin','x'],revision:3})
 const [projects,setProjects]=useState([
  {id:1,name:'Solar Adoption Report',type:'PDF',status:'Ready',updated:'Today',revision:3},
  {id:2,name:'Agri Investment Brief',type:'DOCX',status:'Ready',updated:'Yesterday',revision:2},
  {id:3,name:'Rural Innovation Notes',type:'TXT',status:'Draft',updated:'Sep 24',revision:1}
 ])
 const toggleFact=(id)=>setProject(p=>({...p,facts:p.facts.map(f=>f.id===id?{...f,locked:!f.locked}:f)}))
 const updateFact=(id,value)=>setProject(p=>({...p,facts:p.facts.map(f=>f.id===id?{...f,value}:f),revision:p.revision+1}))
 const updateSettings=(key,value)=>setProject(p=>({...p,settings:{...p.settings,[key]:value}}))
 const toggleOutput=(id)=>setProject(p=>({...p,outputs:p.outputs.includes(id)?p.outputs.filter(x=>x!==id):[...p.outputs,id]}))
 const saveProject=()=>setProjects(ps=>[{id:Date.now(),name:project.name,type:project.source?.type||'Project',status:'Ready',updated:'Just now',revision:project.revision},...ps])
 const value=useMemo(()=>({project,setProject,projects,setProjects,toggleFact,updateFact,updateSettings,toggleOutput,saveProject}),[project,projects])
 return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
}
export const useProject=()=>useContext(ProjectContext)
