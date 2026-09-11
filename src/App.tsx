
import { useState } from 'react';
import { Landing_page } from './Landing_page';
import './stylesheet/mainstylesheet.css'
import './stylesheet/textstylesheet.css'
function App() {
  const [diagramState, setDiagram] = useState("")
  
  return (
    <Landing_page diagram={diagramState} setDiagram={setDiagram} >
      
    </Landing_page>
  )
}

export default App