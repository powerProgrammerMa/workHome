import React, { useEffect, useState } from 'react'
import "./index.less"

export default function LongTouch() {
    const [showStyle, setShowStyle] = useState(false)

    useEffect(() => {
        document.getElementById("eee").addEventListener("touchStart",()=>{
            console.log("jin")
            setShowStyle(false)
        })
        return () => {
            
        }
    }, [])
    let timeOutEvent = 0;
    return (
        <div id="eee">
            <div className="root">
                <div 
                    className="item"
                    onTouchStart={() => {
                        clearTimeout(timeOutEvent);
                        timeOutEvent = setTimeout(() => {
                            setShowStyle(true)
                        }, 700);
                      }}
                      onTouchMove={() => {
                        clearTimeout(timeOutEvent);
                      }}
                      onTouchEnd={() => {
                        clearTimeout(timeOutEvent);
                      }}
                ><span onClick={(e)=>{e.stopPropagation();e.nativeEvent.stopImmediatePropagation();console.log("头部点击了")}}>头部可点击</span>这是列表数据</div>
                <div className="hover_item" onClick={()=>{console.log("列表点击了")}} style={{display:showStyle?"block":"none"}}>这是列表数据</div>
               
                </div>
                        
                <div className="mask" onClick={(e)=>{e.stopPropagation();e.nativeEvent.stopImmediatePropagation();console.log("执行了隐藏");setShowStyle(false)}} style={{display:showStyle?"block":"none"}}> 

            </div>
        </div>
    )
}
