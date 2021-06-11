import React from 'react'
import Hero from './heroCard'
import Table from './tableApi'
import './css/table.css'
function TableF() {
  return (
    <>
      <div className="container dynTable">
          <Hero />
          <br/>
          <Table />
      </div>
    </>
  )
}


export default TableF
