import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataList = () => {
  const [mydata, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = (id) => {
    console.log("item clicked =>" ,  id);
  }; 
  useEffect(() => {
    // Replace with your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setMyData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
        <li>
            <img src={mydata['message']}/>
            <p>{mydata['status']}</p>
        </li>
      {/* {mydata.map(item => (
        <li key={item.id}>
         <div onClick={() => handleClick(item.id)} style={{background: "red"}}>
         <h2>{item.title}</h2>
          <p>{item.api_model}</p>
          <p>{item.thumbnail.lqip}</p>
          <img src={{uri: `"${item.thumbnail.lqip}"`}} style={{height: "120px"}}/>
         </div>
        </li>
      ))} */}
    </ul>
  );
};

export default DataList;