function getID(id){
    return document.getElementById(id);
}
window.onload = function(){
    
    getID('send').addEventListener('click',function(){
        if (checkgende ===null)
            {
                console.log('請選擇性別')
            }
        var getallvalue = {    
            name:getID('name').value,
            gender:document.querySelector('input[name="gender"]:checked').value,
            age : getID('age').value,
            phone :getID('phone').value,
        }
        console.log(getallvalue);
    });
}