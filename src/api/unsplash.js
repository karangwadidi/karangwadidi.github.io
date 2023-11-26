import axios from "axios";

// const searchImages=(term)=>{
 // this is also a possibility,but we dont want it,we will be using axios.create

// }
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID VOk4WSrK6IYO_cS53FNYdvlpbrAgXlSWOaIrpKoLr2I'
    }
})