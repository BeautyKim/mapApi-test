import React from 'react'

const LikePosition = () => {
    const mapDat = [ "비트캠프", "카카오본사","강남역" ]
    const mapDatList = mapDat.map((mapDat) => (<button key="idx">{mapDat}</button>))
  return (
    <>
      <h3>즐겨찾기</h3>
      <button
        onClick={() => {
          
        }}> </button>

      <div>
          {mapDatList}
      </div>
    </>
  )
}
export default LikePosition
