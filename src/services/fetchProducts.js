
const fetchProducts = async () => {
  try {
      const response = await fetch('http://www.mocky.io/v2/5bf3ce193100008900619966');
      const responseJson = await response.json();
      return responseJson
  } catch(error){
       console.error('Error trying to fecth products: ', error)
  }
}

export default fetchProducts
