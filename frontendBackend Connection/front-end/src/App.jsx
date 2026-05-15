import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/jokes");
        setData(response.data);
        // console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Hello Every ones</h2>

      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
