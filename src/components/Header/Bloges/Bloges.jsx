import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Bloges = () => {

    const [bloges , setBloges] = useState([]);

    useEffect(() =>{
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data => setBloges(data))
    },[])

    console.log(bloges)
    return (
        <div className="md:w-2/3">
            <h4>Bloges : {bloges.length}</h4>
            {
                bloges.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Bloges;