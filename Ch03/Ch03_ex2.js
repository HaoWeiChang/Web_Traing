function getID(id){
    return document.getElementById(id);
}
window.onload = function(){
    
    getID('send').addEventListener('click',function(){        
        var gendercheck = document.querySelector('input[name=gender]:checked');
        var namevalue = getID('name').value;
        var agevalue =getID('age').value;
        var phonevalue =getID('phone').value
        
        if (gendercheck===null || namevalue ==="" || agevalue ==="" || phonevalue ==="")
        {
           alert("請輸入完整資料")         
        }   
        else{           
            getID('dataname').innerHTML= namevalue
            getID('datagender').innerHTML= gendercheck.value
            getID('dataage').innerHTML= agevalue
            getID('dataphone').innerHTML= phonevalue
        }       
    });
}