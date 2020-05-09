function ajax(src, callback){
    var req = new XMLHttpRequest();
    req.open('GET', src);
    req.onload = function(){
        var response = JSON.parse(req.responseText);
        callback(response);
    };
    req.send();
}

function render(data){
    const newDiv = document.createElement('div');
    var text = '';
    for(var i =0; i<data.length; i++){
        var name = `名稱: ${data[i].name} `;
        var price = `價格: ${data[i].price} `;
        var description = `特色: ${data[i].description} `;

        text += `${name}${price}${description}`;
    }
    const newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    const oldDiv = document.querySelector('#div');
    document.body.insertBefore(newDiv, oldDiv);
}


ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
});