import axios from "axios";

const TOKEN = "cgpjq81r01qo64fgmhm0cgpjq81r01qo64fgmhmg"
export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})