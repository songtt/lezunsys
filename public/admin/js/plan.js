function acity(){
    var province = [];
    province[0] =["A-G","安徽","北京","重庆","福建","贵州","广东","广西","甘肃","澳门","国外"];
    province[1] =["H-J","湖北","湖南","河北","河南","海南","江苏","吉林","江西","黑龙江"];
    province[2] =["L-S","辽宁","宁夏","青海","山东","上海","山西","陕西","四川","内蒙古"];
    province[3] =["T-Z","天津","新疆","西藏","云南","浙江","台湾","香港"];
    var city = [];
    city["北京"] = ("北京");
    city["上海"] = ("上海");
    city["重庆"] = ("重庆");
    city["天津"] = ("天津");
    city["香港"] = ("香港");
    city["台湾"] = ("台湾");
    city["澳门"] = ("澳门");
    city["河北"] = ("石家庄,唐山,秦皇岛,邯郸,邢台,保定,张家口,承德,沧州,廊坊,衡水");
    city["山西"] = ("太原,大同,阳泉,长治,晋城,朔州,晋中,运城,忻州,临汾,吕梁地");
    city["内蒙古"] = ("呼和浩特,包头,乌海,赤峰,通辽,鄂尔多斯,呼伦贝尔,乌兰察布,锡林郭勒,巴彦淖尔,阿拉善,兴安盟");
    city["辽宁"] = ("沈阳,大连,鞍山,抚顺,本溪,丹东,锦州,葫芦岛,营口,盘锦,阜新,辽阳,铁岭,朝阳");
    city["吉林"] = ("长春,吉林,四平,辽源,通化,白山,松原,白城,延边");
    city["黑龙江"] = ("哈尔滨,齐齐哈尔,鹤岗,双鸭山,鸡西,大庆,伊春,牡丹江,佳木斯,七台河,黑河,绥化,大兴安岭");
    city["江苏"] = ("南京,徐州,连云港,淮安,宿迁,盐城,扬州,泰州,南通,镇江,常州,无锡,苏州");
    city["浙江"] = ("杭州,宁波,温州,嘉兴,湖州,绍兴,金华,衢州,舟山,台州,丽水");
    city["安徽"] = ("合肥,芜湖,蚌埠,淮南,马鞍山,淮北,铜陵,安庆,黄山,滁州,阜阳,宿州,巢湖,六安,亳州,池州,宣城");
    city["福建"] = ("福州,厦门,三明,莆田,泉州,漳州,南平,龙岩,宁德");
    city["江西"] = ("南昌,景德镇,萍乡,九江,新余,鹰潭,赣州,吉安,宜春,抚州,上饶");
    city["山东"] = ("济南,青岛,淄博,枣庄,东营,潍坊,烟台,威海,济宁,泰安,日照,莱芜,临沂,德州,聊城,滨州,菏泽");
    city["河南"] = ("郑州,开封,洛阳,平顶山,焦作,鹤壁,新乡,安阳,濮阳,许昌,漯河,三门峡,南阳,商丘,信阳,周口,驻马店");
    city["湖北"] = ("武汉,黄石,襄樊,十堰,荆州,宜昌,荆门,鄂州,孝感,黄冈,咸宁,随州,恩施");
    city["湖南"] = ("长沙,株洲,湘潭,衡阳,邵阳,岳阳,常德,张家界,益阳,郴州,永州,怀化,娄底,湘西");
    city["广东"] = ("广州,深圳,珠海,汕头,韶关,河源,梅州,惠州,汕尾,东莞,中山,江门,佛山,阳江,湛江,茂名,肇庆,清远,潮州,揭阳,云浮");
    city["广西"] = ("南宁,柳州,桂林,梧州,北海,防城港,钦州,贵港,玉林,百色,贺州,河池,来宾,崇左");
    city["海南"] = ("海口,三亚");
    city["四川"] = ("成都,自贡,攀枝花,泸州,德阳,绵阳,广元,遂宁,内江,乐山,南充,宜宾,广安,达州,眉山,雅安,巴中,资阳,阿坝,甘孜,凉山");
    city["贵州"] = ("贵阳,六盘水,遵义,安顺,铜仁地,毕节地,黔西南,黔东南,黔南");
    city["云南"] = ("昆明,曲靖,玉溪,保山,昭通,思茅,临沧,丽江,文山,红河,西双版纳,楚雄,大理,德宏,怒江,迪庆");
    city["西藏"] = ("拉萨,那曲,昌都,山南,日喀则,阿里,林芝");
    city["陕西"] = ("西安,铜川,宝鸡,咸阳,渭南,延安,汉中,榆林,安康,商洛");
    city["甘肃"] = ("兰州,金昌,白银,天水,嘉峪关,武威,张掖,平凉,酒泉,庆阳,定西,陇南,甘南,临夏");
    city["青海"] = ("西宁,海东,海北,黄南,海南,果洛,玉树,海西");
    city["宁夏"] = ("银川,石嘴山,吴忠,固原");
    city["新疆"] = ("乌鲁木齐,克拉玛依,吐鲁番,哈密,和田,阿克苏,喀什,克孜勒苏,巴音郭楞,昌吉,博尔塔拉,伊犁,塔城,阿勒泰");
    city["国外"] = ("国外");


    var h  = '<ol class="area" style="display: block;">';
    for(k=0;k<province.length;k++) {
        var p = province[k][0];
        h += "<li ><span>"+p+"</span><div class='region'>";
        for(g=1;g<province[k].length;g++) {
            var ck = "";
            if(_province.indexOf(province[k][g]) > -1 ){
                ck = "checked";
            }
            h += '<div><input name="city_province[]" id="province_'+k+g+'" type="checkbox" value="'+province[k][g]+'" '+ck+'/><label for="province_'+k+g+'">'+province[k][g]+'</label></div><ol  style=" display:none" class="p_city">';
            aa = city[province[k][g]].split(",");
            for(ak=0;ak<aa.length;ak++) {
                var cks = "";
                if(_city.indexOf(aa[ak]) > -1 ){
                    cks = "checked";
                }
                h += '<li><input name="city_data[]" id="city_'+k+g+'_'+ak+'" type="checkbox" value="'+aa[ak]+'" class="city_in city_in'+k+g+'"  '+cks+'/><label for="city_'+k+g+'_'+ak+'">'+aa[ak]+'</label></li>';

            }
            h += ' </ol>';

        }
        h += "</div></li>";
    }
    return h+"</ol>";
}

function phoneModle(modle){
    var province = [];
    province[0] =["","高端机","中端机","低端机"];

    var h  = '<ol class="area" style="display: block;">';
    for(k=0;k<province.length;k++) {
        var p = province[k][0];
        h += "<li ><span>"+p+"</span><div class='region'>";
        for(g=1;g<province[k].length;g++) {
            var ck = "";
            if(_type.indexOf(province[k][g]) > -1 ){
                ck = "checked";
            }
            h += '<div><input name="modle_type[]" id="type_'+k+g+'" type="checkbox" value="'+province[k][g]+'" '+ck+'/><label for="type_'+k+g+'">'+province[k][g]+'</label></div><ol  style=" display:none" class="p_city">';
            aa = modle[province[k][g]].split(",");
            for(ak=0;ak<aa.length;ak++) {
                var cks = "";
                if(_modle.indexOf(aa[ak]) > -1 ){
                    cks = "checked";
                }
                h += '<li><input name="modle_data[]" id="modle_'+k+g+'_'+ak+'" type="checkbox" value="'+aa[ak]+'" class="modle_in"  '+cks+'/><label for="modle_'+k+g+'_'+ak+'">'+aa[ak]+'</label></li>';

            }
            h += ' </ol>';

        }
        h += "</div></li>";
    }
    return h+"</ol>";

}

function phoneModlePay(modle_pay){
    var province = [];
    province[3] =["","高付费机"];

    var h  = '<ol class="area" style="display: block;">';
    for(k=3;k<province.length;k++) {
        var p = province[k][0];
        h += "<li ><span>"+p+"</span><div class='region'>";
        for(g=1;g<province[k].length;g++) {
            var ck = "";
            if(_type_pay.indexOf(province[k][g]) > -1 ){
                ck = "checked";
            }
            h += '<div><input name="modle_type_pay[]" id="type_'+k+g+'" type="checkbox" value="'+province[k][g]+'" '+ck+'/><label for="type_'+k+g+'">'+province[k][g]+'</label></div><ol  style=" display:none" class="p_city">';
            aa = modle_pay[province[k][g]].split(",");
            for(ak=0;ak<aa.length;ak++) {
                var cks = "";
                if(_modle_pay.indexOf(aa[ak]) > -1 ){
                    cks = "checked";
                }
                h += '<li><input name="modle_data_pay[]" id="modle_'+k+g+'_'+ak+'" type="checkbox" value="'+aa[ak]+'" class="modle_in"  '+cks+'/><label for="modle_'+k+g+'_'+ak+'">'+aa[ak]+'</label></li>';

            }
            h += ' </ol>';

        }
        h += "</div></li>";
    }
    return h+"</ol>";

}

function acity_more(name){
    var province = [];
    province[0] =["A-G","安徽","北京","重庆","福建","贵州","广东","广西","甘肃","澳门","国外"];
    province[1] =["H-J","湖北","湖南","河北","河南","海南","江苏","吉林","江西","黑龙江"];
    province[2] =["L-S","辽宁","宁夏","青海","山东","上海","山西","陕西","四川","内蒙古"];
    province[3] =["T-Z","天津","新疆","西藏","云南","浙江","台湾","香港"];
    var city = [];
    city["北京"] = ("北京");
    city["上海"] = ("上海");
    city["重庆"] = ("重庆");
    city["天津"] = ("天津");
    city["香港"] = ("香港");
    city["台湾"] = ("台湾");
    city["澳门"] = ("澳门");
    city["河北"] = ("石家庄,唐山,秦皇岛,邯郸,邢台,保定,张家口,承德,沧州,廊坊,衡水");
    city["山西"] = ("太原,大同,阳泉,长治,晋城,朔州,晋中,运城,忻州,临汾,吕梁地");
    city["内蒙古"] = ("呼和浩特,包头,乌海,赤峰,通辽,鄂尔多斯,呼伦贝尔,乌兰察布,锡林郭勒,巴彦淖尔,阿拉善,兴安盟");
    city["辽宁"] = ("沈阳,大连,鞍山,抚顺,本溪,丹东,锦州,葫芦岛,营口,盘锦,阜新,辽阳,铁岭,朝阳");
    city["吉林"] = ("长春,吉林,四平,辽源,通化,白山,松原,白城,延边");
    city["黑龙江"] = ("哈尔滨,齐齐哈尔,鹤岗,双鸭山,鸡西,大庆,伊春,牡丹江,佳木斯,七台河,黑河,绥化,大兴安岭");
    city["江苏"] = ("南京,徐州,连云港,淮安,宿迁,盐城,扬州,泰州,南通,镇江,常州,无锡,苏州");
    city["浙江"] = ("杭州,宁波,温州,嘉兴,湖州,绍兴,金华,衢州,舟山,台州,丽水");
    city["安徽"] = ("合肥,芜湖,蚌埠,淮南,马鞍山,淮北,铜陵,安庆,黄山,滁州,阜阳,宿州,巢湖,六安,亳州,池州,宣城");
    city["福建"] = ("福州,厦门,三明,莆田,泉州,漳州,南平,龙岩,宁德");
    city["江西"] = ("南昌,景德镇,萍乡,九江,新余,鹰潭,赣州,吉安,宜春,抚州,上饶");
    city["山东"] = ("济南,青岛,淄博,枣庄,东营,潍坊,烟台,威海,济宁,泰安,日照,莱芜,临沂,德州,聊城,滨州,菏泽");
    city["河南"] = ("郑州,开封,洛阳,平顶山,焦作,鹤壁,新乡,安阳,濮阳,许昌,漯河,三门峡,南阳,商丘,信阳,周口,驻马店");
    city["湖北"] = ("武汉,黄石,襄樊,十堰,荆州,宜昌,荆门,鄂州,孝感,黄冈,咸宁,随州,恩施");
    city["湖南"] = ("长沙,株洲,湘潭,衡阳,邵阳,岳阳,常德,张家界,益阳,郴州,永州,怀化,娄底,湘西");
    city["广东"] = ("广州,深圳,珠海,汕头,韶关,河源,梅州,惠州,汕尾,东莞,中山,江门,佛山,阳江,湛江,茂名,肇庆,清远,潮州,揭阳,云浮");
    city["广西"] = ("南宁,柳州,桂林,梧州,北海,防城港,钦州,贵港,玉林,百色,贺州,河池,来宾,崇左");
    city["海南"] = ("海口,三亚");
    city["四川"] = ("成都,自贡,攀枝花,泸州,德阳,绵阳,广元,遂宁,内江,乐山,南充,宜宾,广安,达州,眉山,雅安,巴中,资阳,阿坝,甘孜,凉山");
    city["贵州"] = ("贵阳,六盘水,遵义,安顺,铜仁地,毕节地,黔西南,黔东南,黔南");
    city["云南"] = ("昆明,曲靖,玉溪,保山,昭通,思茅,临沧,丽江,文山,红河,西双版纳,楚雄,大理,德宏,怒江,迪庆");
    city["西藏"] = ("拉萨,那曲,昌都,山南,日喀则,阿里,林芝");
    city["陕西"] = ("西安,铜川,宝鸡,咸阳,渭南,延安,汉中,榆林,安康,商洛");
    city["甘肃"] = ("兰州,金昌,白银,天水,嘉峪关,武威,张掖,平凉,酒泉,庆阳,定西,陇南,甘南,临夏");
    city["青海"] = ("西宁,海东,海北,黄南,海南,果洛,玉树,海西");
    city["宁夏"] = ("银川,石嘴山,吴忠,固原");
    city["新疆"] = ("乌鲁木齐,克拉玛依,吐鲁番,哈密,和田,阿克苏,喀什,克孜勒苏,巴音郭楞,昌吉,博尔塔拉,伊犁,塔城,阿勒泰");
    city["国外"] = ("国外");
    var h  = '<ol class="area" style="display: block;">';
    for(k=0;k<province.length;k++) {
        var p = province[k][0];
        h += "<li ><span>"+p+"</span><div class='region'>";
        for(g=1;g<province[k].length;g++) {
            var ck = "";
            if(_province.indexOf(province[k][g]) > -1 ){
                ck = "checked";
            }
            h += '<div><input name="city_province'+[name]+'[]" id="province_'+k+g+[name]+'" type="checkbox" value="'+province[k][g]+'" '+ck+'/><label for="province_'+k+g+[name]+'">'+province[k][g]+'</label></div><ol  style=" display:none" class="p_city">';
            aa = city[province[k][g]].split(",");
            for(ak=0;ak<aa.length;ak++) {
                var cks = "";
                if(_city.indexOf(aa[ak]) > -1 ){
                    cks = "checked";
                }
                h += '<li><input name="city_data'+[name]+'[]" id="city_'+k+g+'_'+ak+[name]+'" type="checkbox" value="'+aa[ak]+'" class="city_in'+[name]+' city_in'+k+g+[name]+'"  '+cks+'/><label for="city_'+k+g+'_'+ak+[name]+'">'+aa[ak]+'</label></li>';

            }
            h += ' </ol>';

        }
        h += "</div></li>";
    }
    return h+"</ol>";
}

