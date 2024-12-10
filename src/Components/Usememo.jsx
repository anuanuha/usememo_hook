import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export const Usememo=()=>{
    const[data, setdata] = useState(null);
    const[toggle, settoggle]=useState(false);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
         setdata(response.data);
        })
    },[]);
    const findLongest=(comments)=>{
         if(!comments)
         return null;
        let longestName="";
        for(let i = 0; i < comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName;
            }
        }
        console.log("this was computed");
        return longestName;
    }
    const getLongestNumber = useMemo(()=>findLongest(data),[data]);
    return(
        <div>
            {/* normal way of calling findLongest without is using useMemo hook */}
            {/* <div>{findLongest(data)}</div> */}
            {/* using useMemo hook */}
            <div>
            {getLongestNumber}
            </div>
              <button onClick={()=>{
                settoggle(!toggle)
              }}>toggle</button> 
             {toggle && <h1>toggle</h1>}
        </div>
    )
}