const fakeJSON = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts')
  	.then(response => response.json())
  	.then(json => {
  		return json
  	})
  return res
}

export default fakeJSON;