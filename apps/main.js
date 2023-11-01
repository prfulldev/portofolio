fetch("https://sheetdb.io/api/v1/534c4lmhzramx")
  .then(res => res.json())
  .then(data => {
    display(data)
    let value = data;
  })

function display(d) {

  let item = document.getElementById("item");
  for (var i = 0; i < d.length; i++) {


    item.innerHTML += `
    
    
    <li>
      <img src='${d[i].img}'>
      <h4>${d[i].apk_name}</h4>
      <div class='size'>

        <a class='download' href='${d[i].url}'>Download</a>
      </div>
    </li>`;
  }

}