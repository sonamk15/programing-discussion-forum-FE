import axios from "axios";

export default async function forumFetch(
  url,
  method = "GET",
  options = {},
  useAuth = true
) {
  const opts = {
    url: url,
    method,
    ...options
  };
  if (useAuth) {
    const jwt = localStorage.getItem("jwt");
    if (opts.headers) {
      opts.headers["Authorization"] = jwt;
    } else {
      opts.headers = {
        Authorization: jwt
      };
    }
  }
  try {
    const resp = await axios(opts);
    console.log(resp);
    return {
      sucess: true,
      data: resp.data
    }
  } catch (err) {
    return {     sucess: false,
      error_message: err.message
    }
  }
}