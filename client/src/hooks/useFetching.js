import { useEffect, useState } from "react";
import axios from "axios";

const useFetching = (url) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/request')
      .then(res => {
        setPosts(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  
  }, [url]);

  return { posts }
}

export default useFetching