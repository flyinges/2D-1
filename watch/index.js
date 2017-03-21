    var clock=document.querySelector(".box");
    function create(){
        var times=new Date();
        var hours=times.getHours();
        var sec=times.getSeconds();
        var min=times.getMinutes();
        var h=pointer(6,40,"#000",hours*30+min*6/12);
        var m=pointer(4,50,"#000",min*6);
        var s=pointer(2,60,"#000",sec*6);
        setInterval(function(){
            var times=new Date();
            var hours=times.getHours();
            var sec=times.getSeconds();
            var min=times.getMinutes();
            h.style.transform="rotate("+(hours*30+min*6/12)+"deg)";
            s.style.transform="rotate("+sec*6+"deg)";
            m.style.transform="rotate("+min*6+"deg)";
        },1000)
        for(var i=0;i<60;i++){
            var widths,heights;
            if(i%5==0){
                widths=6;
                heights=10;
            }else{
                widths=4;
                heights=8;
            }
            var div=document.createElement("div");
            div.style.cssText="width:"+widths+"px;height:"+heights+"px;background:#000;position:absolute;left:"+(200-widths)/2+"px;top:0";
            div.style.transform="rotate("+i*6+"deg)";
            div.style.transformOrigin="center 100px";
            clock.appendChild(div);
        }
    }
    function pointer(w,h,c,a){
        var lefts=(200-w)/2;
        var tops=200/2-h;
        var div=document.createElement("div");
        div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";position:absolute;left:"+lefts+"px;top:"+tops+"px";
        div.style.transformOrigin="center bottom";
        div.style.transform="rotate("+a+"deg)";
        clock.appendChild(div);
        return div;
    }


    create()