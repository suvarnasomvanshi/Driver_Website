import axios from "axios";

const BASE_QUERY = process.env.REACT_APP_API_URL;

const OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '.concat(process.env.REACT_APP_API_KEY)
  },
}



const fetchData = async (method,apiRoutes,formData) => {
  console.log(method,apiRoutes,formData);
  try {
    if (method.toLowerCase() === "get") {
      if (!formData) {
        const response = await axios.get(BASE_QUERY.concat(apiRoutes),OPTIONS);
        console.log(response.data);
        return response.data;
      } else {
        const response = await axios.get(BASE_QUERY.concat(apiRoutes),formData,OPTIONS);
        console.log(response.data);
        return response.data;
      }
    } else if (method.toLowerCase() === "post") {
      if (formData) {
        const response = await axios.post(BASE_QUERY.concat(apiRoutes),formData,OPTIONS);
        return response.data;
      } else {
        const response = await axios.post(BASE_QUERY.concat(apiRoutes),OPTIONS);
        return response.data;
      }


    } else if (method.toLowerCase() === "put") {
      const response = await axios.put(BASE_QUERY.concat(apiRoutes),OPTIONS);
      console.log(response.data);
      return response.data;
    } else if (method.toLowerCase() === "delete") {
      const response = await axios.delete(BASE_QUERY.concat(apiRoutes),OPTIONS);
      console.log(response.data[0]);
      return response.data;
    }
  } catch (error) {
    console.error("Error: ",error);
  }
};

export default fetchData;
