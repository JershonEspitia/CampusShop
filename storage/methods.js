import url from "./config.js";

const config = {
    method: undefined,
    headers: { "Content-Type": "application/json" },
    body: undefined,
  };
  
  const methods = {
    get: "GET",
    del: "DELETE",
    post: "POST",
    put: "PUT",
  };

  export const getOne = async ({endPoint}) => { 
    config.method = methods.get;
    let res = await (await fetch(`${url}${endPoint}`, config)).json();
    return res;    
  };