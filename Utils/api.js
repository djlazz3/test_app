import axios from "axios";
import FormData from "form-data";
import concat from "concat-stream";
const baseUrl = "http://a6a47e80.ngrok.io";

export newgraph = async (lat, lon, header, images) => {
  formData = new FormData();
  formData.append("lat" , lat)
  formData.append("lon" , lon)
  formData.append("header" , header)
  formData.append("images" , images[0])
  formData.append("images" , images[1])
  // axios.post
  formData.pipe(concat({encoding: "buffer"}, async (data) => {
    axios.post(`${baseUrl}/graffiti/new`, data)

  }))
}
