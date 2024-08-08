'use client'

import { useEffect, useState } from "react";

function Heading() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true),[])

    if(loaded){
       return <h1 className="pc">Expert Hair Transplant in Turkey</h1>
    }
    return null;
}

export default Heading