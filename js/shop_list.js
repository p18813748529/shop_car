var $shopBox = document.querySelector(".shopBox");
sendAjax("json/shop.json", { callBack: initShop });
function initShop(data) {
    for (var i = 0; i < data.length; i++) {
        createShop($shopBox, data[i]);
    }
}
$shopBox.onclick = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.nodeName === "BUTTON") {
        var val = target.previousElementSibling.value;
        var id = target.parentNode.parentNode.querySelector(".id").innerText;
        val = localStorage.getItem(id) ? Number(localStorage.getItem(id)) + Number(val) : Number(val);
        localStorage.setItem(id, val);
    }
};

var $toCar = document.getElementById("toCar");