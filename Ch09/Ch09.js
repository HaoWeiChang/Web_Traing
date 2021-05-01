/*練習1 未加Data，主畫面與清單影片切換*/
var getVBoxContent = function getVBoxContent(vBox){
    return{
        img:vBox.find('img').attr('src'),
        title:vBox.find('h4').html(),
        auth:vBox.find('.auth').html(),
        viewNum: vBox.find('.viewNum span').html(),
    };
};
/*建立主畫面資訊的內容清單+*/
const maintemp={
    img:$('.playercol img'),
    title:$('.infocol h2'),
    auth:$('.authInfo h5:first-Child'),
    viewNum:$('.viewcount h5 span'),        
};
console.log(maintemp);
/*當選擇清單影片時動作*/  
$('.vBox').click(function(e){               
    var vBox = $(e.currentTarget);/*Catch點擊影片的currentTarget*/
    var vBoxInfo =getVBoxContent(vBox);                
    var maininfo={
        img: maintemp.img.attr('src'),
        title:maintemp.title.html(),
        auth:maintemp.auth.html(),
        viewNum:maintemp.viewNum.html(),                    
    };
    /*將主畫面資訊放置點擊的影片目前位置*/                
    vBox.find('img').attr('src',maininfo.img);
    vBox.find('h4').html(maininfo.title);
    vBox.find('.auth').html(maininfo.auth);
    vBox.find('.viewNum span').html(maininfo.viewNum);
    /*將影片清單擺放至主畫面*/
    $('.playercol img').attr('src',vBoxInfo.img);
    $('.infocol h2').html(vBoxInfo.title);
    $('.authInfo h5:first-child').html(vBoxInfo.auth);
    $('.viewcount h5 span').html(vBoxInfo.viewNum);
    console.log(vBoxInfo);                
});         

/*練習2*/
var getVBoxContent = function getVBoxContent(vBox){
    return{
        img:vBox.find('img').attr('src'),
        title:vBox.find('h4').html(),
        auth:vBox.find('.auth').html(),
        viewNum:vBox.find('.viewNum span').html(),
        remark:vBox.data('remark'),
        commentnum:vBox.data('commentnum'),
    };
};
/*建立主畫面資訊的內容清單*/
const maintemp={
    info:$('.playercol'),
    img:$('.playercol img'),
    title:$('.infocol h2'),
    auth:$('.authInfo h5:first-Child'),
    viewNum:$('.viewcount h5 span'),
    commentnum:$('.Commentcol span')        
};
/*轉換為data-*能閱讀的function*/
var setDataonMainEle = function setDataonMainEle(maininfo){
    for(var attr in maininfo){                
        var lowercase = attr.toLowerCase();
        maintemp.info.data(lowercase,maininfo[attr]);
    }
};            
/*當選擇清單影片時動作*/  
$('.vBox').click(function(e){               
    var vBox = $(e.currentTarget);/*Catch點擊影片的currentTarget*/
    var vBoxInfo =getVBoxContent(vBox);  
    /*將主畫面資料佔存至此*/    
    var maininfo={
        img: maintemp.info.data('img'),
        title:maintemp.info.data('title'),
        auth:maintemp.info.data('auth'),
        viewNum:maintemp.info.data('viewnum'),
        remark:maintemp.info.data('remark'),
        commentnum:maintemp.info.data('commentnum'),
    };            
    /*將點擊的影片放置主畫面*/                        
    maintemp.img.attr('src',vBoxInfo.img);
    maintemp.title.html(vBoxInfo.title);
    maintemp.auth.html(vBoxInfo.auth);
    maintemp.viewNum.html(vBoxInfo.viewNum);                
    $('.infoseccol').empty().append('<p>'+ vBoxInfo.remark.replace(/\n/g,'</p><p>') +'</p>');
    $('.Commentcol span').empty().append(vBoxInfo.commentnum);                   
    setDataonMainEle(vBoxInfo); 
    /*將主畫面資訊放置影片清單*/
    vBox.find('img').attr('src',maininfo.img);
    vBox.find('h4').html(maininfo.title);
    vBox.find('.auth').html(maininfo.auth);
    vBox.find('.viewNum span').html(maininfo.viewNum);
    vBox.data('remark',maininfo.remark);
    vBox.data('viewnum',maininfo.viewNum);
    vBox.data('commentnum',maininfo.commentnum);                                 
});         