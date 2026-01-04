import React from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData();
        
    // const [data , setData] = React.useState([])
    // React.useEffect(() =>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then( data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // } , [] )

    return(
        <div className="text-center text-white p-4 text-3xl bg-gray-600">
            Github Followers: {data.followers}
        <img src={data.avatar_url}  alt="Git picture" width={300} />
        </div> 
    )   
}

export default Github

export const githubInfoLoader =async () =>{
    const  res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json
}