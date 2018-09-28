
var $shopBox = document.querySelector(".shopBox");
sendAjax("json/shop.json",{callBack:initCar});
function initCar(data){
    var lsData = localStorage;
    for(var i = 0; i < data.length; i++){
        if(lsData["id: " + data[i].id]){
            data[i].count = lsData["id: " + data[i].id];
            createShop($shopBox,data[i],true);
        }
    }
}