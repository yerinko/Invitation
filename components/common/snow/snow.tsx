import React from 'react';
import useSnowData from "./useSnowData";

// 눈의 색상은 props로 받음, useSnowData 훅으로 눈들의 데이터를 가져오고 적용

const Snows = ({color}:{color:string})=>{
    const [snows] = useSnowData(30);
    return <>{snows.map((data,idx)=>(<div key={idx} style={{
        position:"absolute",
        fontSize:"5px",
        color:`${color}`,
        left:`${data.x}px`,
        top:`${data.y}px`
    }} >●️</div>))}</>
}

export default React.memo(Snows)