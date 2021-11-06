let BASE_URL = "http://localhost:3000"

if (process.env.REACT_APP_ENV === "prod") {
    BASE_URL = "https://j2ysckzfn2.execute-api.us-east-1.amazonaws.com"
}

export { BASE_URL }