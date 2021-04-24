window.onload  =function(){
    var getEle = function getEle(id){
        return document.getElementById(id);
    }
    getEle('demo').addEventListener('click',function (event){
        event.currentTarget.innerHTML="你點擊這個元素"
    });
}