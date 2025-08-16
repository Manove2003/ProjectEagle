import { useState } from 'react'
import Header from './component/Header'
import DebtReductionForm from './component/DebtReductionForm'
import Allpage from './component/Allpage'


function App() {

  return (
    <div>
      <Header/>
      <DebtReductionForm/>
      <Allpage/>
    </div>  )
}

export default App
