
function createShop(ele,data,isCar){
    var $shop = document.createElement("div");
    $shop.className = "shop";
    var $img = document.createElement("img");
    $img.src = data.img;
    var $id = document.createElement("div");
    $id.innerText = "id: " + data.id;
    $id.className = "id";
    var $name = document.createElement("div");
    $name.innerText = "名字: " + data.name;
    var $price = document.createElement("div");
    $price.innerText = "价格: " + data.price;
    var $color = document.createElement("div");
    $color.innerText = "颜色: " + data.color;
    var $ps = document.createElement("div");
    $ps.innerText = "备注: " + data.ps;
    $shop.appendChild($img);
    $shop.appendChild($id);
    $shop.appendChild($name);
    $shop.appendChild($price);
    $shop.appendChild($color);
    $shop.appendChild($ps);
    if(!isCar){
        var $add = document.createElement("div");
        var $addCarBtn = document.createElement("button");
        $addCarBtn.innerText = "添加到购物车";
        var $inp = document.createElement("input");
        $inp.className = "inp";
        $inp.type = "number";
        $inp.value = 1;
        $add.appendChild($inp);
        $add.appendChild($addCarBtn);
        $shop.appendChild($add);
    }else{
        var $count = document.createElement("div");
        $count.innerHTML = "数量: <span class = 'count'>" + data.count + "</span>";
        $shop.appendChild($count);
    }
    ele.appendChild($shop);
}