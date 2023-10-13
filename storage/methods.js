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

  export const getAll = async ({endPoint}) => {
    config.method = methods.get;
    let res = await (await fetch(`${url}${endPoint}`, config)).json();
    return res;
  };

  export const deleteOne = async ({endPoint, id}) => {
    config.method = methods.del;
    let res = await (await fetch(`${url}${endPoint}${id}`, config)).json();
    return "Eliminado.";
  };

  export const postAll = async ({endPoint, obj}) => {
      config.method = methods.post;
      config.body = JSON.stringify(obj);
      let res = await (await fetch(`${url}${endPoint}`, config)).json();
      if(res.ok) return "Registrado.";    
  };

  export const getRelations = async ({endPoint}) => { 

    config.method = methods.get;
    let resOne = await (await fetch(`${url}${endPoint}`, config)).json();
  
    let newUrl = url + "/" + endPoint.split("/")[1];
  
    for(const key in resOne[0]) { 
      if(arrayIds.includes(key)) {
        if(newUrl.includes("?")){
          newUrl += `&_expand=${key.split("I")[0]}`;
        } else {
          newUrl += `?_expand=${key.split("I")[0]}`;
        };
      };
    };
  
    config.method = methods.get;
    let res = await (await fetch(`${newUrl}`, config)).json();
    return res;
  };