import React, { SetStateAction, useEffect, useState } from "react"
import {Map, MapMarker, ZoomControl} from "react-kakao-maps-sdk"


interface IPrev{
  center: {lat: number; lng: number}
  errMsg?: null | string
  isLoading?: boolean
  isPanto?: boolean
}

const KakaoMap: React.FC = () => {
  // 지도 확대
  const [ level, setLevel ] = useState<SetStateAction<number>>()
  // 다른 위치
  const [ position, setPosition ] = useState<IPrev>({
    center: {
       lat: 33.452613,
       lng: 126.570888 },
    isPanto: false,
  })  
  // 현재 위치
  const [ state, setState ] = useState<IPrev>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    isPanto: true,
    errMsg: null,
    isLoading: true,
  })
  // 현재 위치를 받아오는 지오로케이션 함수
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])

  return(
  <>
  {/* 지도 */}
    <Map
      center={state.center}
      isPanto={state.isPanto}
      style={{ width: '100%', height: '380px' }}
      level={3}
      onZoomChanged={(map) => setLevel(map.getLevel())} >
        {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "내 위치"}
            </div>
          </MapMarker>
      )}
      
      <div style={{display: "flex", gap: "10px",}}>
        <button
          onClick={() => 
            setState({
              center: { lat: state.center.lat, lng: state.center.lng },
              isPanto: false,
          })}>내 위치</button>
        <button
          onClick={() => 
            setPosition({
              center:{lat: 33.450701, lng: 126.570667},
              isPanto: true,
            })}>
            다른 위치
        </button>
      </div>
      <ZoomControl />
    </Map>
  </>
  )
}
export default KakaoMap