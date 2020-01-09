
const fetchProducts = async () => {
  try {
      const response = await fetch('http://192.168.1.72:3000/api/v1/mobile/products')
      console.warn('response: ', response)
      const responseJson = await response.json()
      return responseJson
  } catch(error){
       console.error('Error trying to fecth products: ', error)
  }
}

export default fetchProducts
