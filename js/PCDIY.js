window.onload = function(){
    var pc = document.getElementById("pc_container");

    /* 获取主机中各个配件的容器 */
    var power = document.getElementById("power_container");
    var cpu = document.getElementById("cpu_container")
    var fan = document.getElementById("fan_container")
    var videdo_card = document.getElementById("video_card_container")
    var ssd = document.getElementById("SSD_container")
    var hhd = document.getElementById("HHD_container")
    var cd = document.getElementById("CD_container")
    var panel = document.getElementById("panel_container")

    var dom_obj = {
        "power":power,
        "cpu":cpu,
        "fan":fan,
        "video_card":videdo_card,
        "ssd":ssd,
        "hhd":hhd,
        "cd":cd,
        "panel":panel
    }





    var btn_arr  = document.getElementsByTagName("button");

    for(var i=0;i<btn_arr.length;i++){
        btn_arr[i].addEventListener("click",add)
    }

    function insert(args){
        if(args[0] != null && args[0] != ""){
            return `<div><img draggable="false" style="width: 100%;height: 100%;" src="`+args[0]+`" alt=""></div>
                <div><img draggable="false" style="width: 100%;height: 100%;" src="`+args[0]+`" alt=""></div>
                <div><img draggable="false" style="width: 100%;height: 100%;" src="`+args[0]+`" alt=""></div>
                <div><img draggable="false" style="width: 100%;height: 100%;" src="`+args[0]+`" alt=""></div>
                <div><img draggable="false" style="width: 100%;height: 100%;" src="`+args[0]+`" alt=""></div>
                <div><img draggable="false" style="width: 100%;height: 100%;" src="`+args[0]+`" alt=""></div>`;
        }else if(args[1] != null && args[1] != ""){
            return `<div>`+args[1]+`</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>`;
        }
        return `<div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>`;
    }

    var t = 1;
    function lightning(obj){
        var a = 0
        var v = setInterval(function(){
            if(obj.style.visibility == "visible")
                obj.style.visibility = "hidden";
            else
                obj.style.visibility = "visible";
            a = a + 1;
            if(a > 10){
                clearInterval(v);
                obj.style.visibility = "visible";
            }
        },100);
    }

    function add(){
        var str = this.parentNode.childNodes[1].value;
        switch (str){
            case "CPU":
                dom_obj.cpu.innerHTML =insert([null,"CPU"]);
                lightning(dom_obj.cpu)
                break;
            case "POWER":
                dom_obj.power.innerHTML = insert([null,"POWER"])
                lightning(dom_obj.power)
                break;
            case "FAN":
                dom_obj.fan.innerHTML = insert([null,"FAN"])
                lightning(dom_obj.fan)
                break;
            case "Video_CARD":
                dom_obj.video_card.innerHTML = insert([null,"Video_CARD"])
                lightning(dom_obj.video_card)
                break;
            case "SSD":
                dom_obj.ssd.innerHTML = insert([null,"SSD"])
                lightning(dom_obj.ssd)
                break;
            case "HHD":
                dom_obj.hhd.innerHTML = insert([null,"HHD"])
                lightning(dom_obj.hhd)
                break;
            case "CD":
                dom_obj.cd.innerHTML = insert([null,"CD"])
                lightning(dom_obj.cd)
                break;
            case "PANEL":
                dom_obj.panel.innerHTML = insert([null,"PANEL"])
                lightning(dom_obj.panel)
                break;
        }


    }

}