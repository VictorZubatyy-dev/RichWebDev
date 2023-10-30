function test(){
    // post title with more than 6 words
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => json.flatMap(({title}) => (title.split(' ').length > 6 ? title : null)))
      .then(json_list => json_list.filter((title) => title !== null))
      .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json.map(({body}) => body))
    .then(json => json.reduce((acc, e) => acc.set(e, (acc.get(e)), new Map())))
    .then(json => console.log(json))
}