var CV_D9A8 = null,
    XLT = [],
    XLR = [],
    myid = null,
    M_ROOM = null,
    nopm = false,
    uptyping = true,
	vchat = true,
	youtubel,
    R_P_C_M = null,
	msgload = false,
	MAX_EMO = 5,
	// isreoncted,
	sizewidth = 5,
	localVideo,
	IBLS,
	remoteVideo,
	connectedUser,
	yourConn,
    nonot = false,
	clickop = null,
	timest,
	widthst = 1,
    T_LIST = {},
	STORY_DEFALUT = {},
    VYISR = false,
	stealthv = false,
    isstopmic,
	bcc = 0,
	stcc = 0,
    isrepl = false,
    PIC_FILE = null,
    jstp = {},
    dbcb = false,
    pws = [],
    islistborder = [],
    spsh,
    emos = [],
    sico = [],
    dro3 = [],
    MY_T = "",
	isIphone = false,
	isbust,
	Mystram,
	mediaRecorder,
    BLOCK_USER = [],
    U_X = {},
    lk = null,
    U_CASH = {},
    R_CASH = {},
    typing = false,
    L_T_T,
    N_SORT = true;
	
function stringGen(len) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++) text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
};

const T8UP = function (id) {
    if (!typing) {
        typing = true;
		S8EBVE("XBU8_T_P", {id:id});
    }
    L_T_T = new Date().getTime();
    setTimeout(function () {
        var typingTimer = new Date().getTime();
        var timeDiff = typingTimer - L_T_T;
        if (timeDiff >= 1000 && typing) {
            S8EBVE("XBU8_T_S",{id:id});
            typing = false;
        }
    }, 1000);
};

function toEnglishDigits(str) {
    var e = "۰".charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function (t) {
        return t.charCodeAt(0) - e;
    });
    e = "٠".charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function (t) {
        return t.charCodeAt(0) - e;
    });
    return str;
}

function XBCUP(wfile) {
    if (wfile) {
        PIC_FILE = null;
        XUPFILE("bc", function () {
            var msg = $(".tboxbc").val();
            $(".tboxbc").val("");
            var link = PIC_FILE;
            PIC_FILE = "";
            if ((msg == "%0A" || msg == "%0a" || msg == "" || msg == "\n") && (link == "" || link == null)) {
                return;
            }
            S8EBVE("EEM_T87_BAC", { msg: toEnglishDigits(msg), link: link });
            return;
        },null);
        return;
    } else {
        PIC_FILE = null;
    }
    var msg = $(".tboxbc").val();
    $(".tboxbc").val("");
    var link = PIC_FILE;
    PIC_FILE = "";
    if ((msg == "%0A" || msg == "%0a" || msg == "" || msg == "\n") && (link == "" || link == null)) {
        return;
    }
    S8EBVE("EEM_T87_BAC", { msg: toEnglishDigits(msg), link: link });
}

function T9bhu() {
    CV_D9A8.emit("9BHU_7UT74", 0);
};

function XBUTO() {
	isbust = setTimeout(function () {
		CV_D9A8.emit("9BHU_7UT74", 1);
		XBUTO();
	}, 60000 * 3);
};

function refr() {
    var r = document.referrer || "";
    if (r.indexOf("http://" + location.hostname) == 0) {
        return "";
    }
    if (r.indexOf("://") != -1) {
        r = r.replace(/(.*?)\:\/\//g, "").split("/")[0];
    }
    return r;
}

function UP_C8EK() {
    if (needUpdate && $("#dpnl:visible").find("#users.active,#rooms.active").length > 0) {
        updateusers();
        updaterooms();
        needUpdate = false;
        N_SORT = true;
    }
    /*if (islost) {
        close();
    }*/
    if (N_SORT && $("#dpnl:visible").find("#rooms.active").length) {
        N_SORT = false;
        var elems = $("#rooms").find(".room").sort(function (a, b) {
                var av = parseInt($(a).attr("v"));
                var bv = parseInt($(b).attr("v"));
                if (av == bv) {
                    return ($(a).find(".u-topic").text() + "").localeCompare($(b).find(".u-topic").text() + "");
                }
                return av < bv ? 1 : -1;
            });
					  $('.rmr').html(elems);

    }
    setTimeout(UP_C8EK, 2000);
}

function D_G987_G() {
    var clientb = new ClientJS();
        return {
            wk: H8DEV(),
            browser: clientb.getBrowser(),
            dtoday: new Date().getTime(),
            plt: clientb.getOS(),
            version: clientb.getOSVersion(),
        };
}

function H8DEV() {
        for (
            var t,
                o = new ClientJS(),
                n = [],
                d = [
                    "getBrowserMajorVersion,isIE,isChrome,isFirefox,isSafari,isOpera,getOSVersion,isWindows,isMac,isLinux,isUbuntu,isSolaris,isMobile,isMobileMajor,isMobileAndroid,isMobileOpera,isMobileWindows,isMobileBlackBerry,isMobileIOS,isIphone,isIpad,isIpod,getColorDepth,getCurrentResolution,getDeviceXDPI,getDeviceYDPI",
                    "isCanvas,getCanvasPrint",
                    "getPlugins,getMimeTypes,isMimeTypes,isFont,getFonts,isLocalStorage,isSessionStorage,isCookie",
                    "getTimeZone,getLanguage,getSystemLanguage",
                ],
                s = "",
                a = 0;
            a < d.length;
            a++
        ) {
            t = d[a].split(",");
            for (var r, l = 0; l < t.length; l++) {
                r = "";
                try {
                    r = (o[t[l]]() || "") + "";
                } catch (e) {}
                n.push(r);
            }
            (s += "." + hash(n, 256)), (n = []);
        }
        var c = getv("cc") || "",
            p = getv("fp1") || "",
            g = getv("refr") || "";
        return (
            "" == p && ((p = s)),
            "" == c && ((c = ccode())),
            (window.name = JSON.stringify({ fp1: p, cc: c })),
            p + "." + hash([g], 256) + "." + c
        );
}

function showadmin(){
	$('.paneladmin').show();
};


function IsDevice(){
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
	return true;
}else{
	return false;
};
}

var edituser;
function load() {
    isIphone = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
    if (typeof $ == "undefined" || typeof io == "undefined") {
        XLCL(5000);
        return;
    }
    if ($("").tab == null) {
        XLCL(5000);
        return;
    }
    if (isIphone) {
        $('img[data-toggle="popover"]').removeClass("nosel");
        fxi();
    }
    UP_C8EK();
    XBUTO();
    $("#rhtml .utopic").css("margin-left", "6px");
    umsg = $("#umsg").html();
    loadblocked();
    if ($(window).width() <= 400) {
		sizewidth = 400;
        $("meta[name='viewport']").attr("content", " user-scalable=0, width=400");
    }
    if ($(window).width() >= 600) {
        sizewidth = 600;
		$("meta[name='viewport']").attr("content", " user-scalable=0, width=600");
    }
    $("#d2").click(function () {
        if (spsh) {
            if (spsh.css("display") == "block") {
                spsh.hide();
            }
        }
    });

$('.islo').click(function(){
	 S8EBVE("S8EBVE_LOGOUT", {});
	 $("#dpnl").hide();
     XLCL(500);
});

$('.isyoutube').click(function(){
$('.pstorycdesclass').remove();
$("#upro").before('<div class="pstorycdesclass">'+
'<div class="pstorycdesclass" style="display:block" onclick="$(this).parent().remove()"></div>'+
'<div class="pstycdesclass">'+
'<button class="btn btn-info" onclick="$(this).parent().parent().hide()" style="width: 28px;margin: 5px;float: right;">-</button>'+
'<div class="islinkcdesclass"></div>'+
'</div></div>'); 
$('.islinkcdesclass').append('<iframe src="https://www.youtube.com/embed/'+getIdYoutube(youtubel)+'?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen="" style="width:330px;height:490px" frameborder="0"></iframe>');
});

			$('.verlog').click(function(){
       CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_EDIT_ACCOUNT',
       user:Number(edituser['idreg']),
       limit:1,
       loginG:$('.loginG').is(":checked"),
       verification:$('.verification').is(":checked")
       });			
       $('#edituser').modal('hide');       
			});
			
			
			$('.delus').click(function(){
       CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_DELETE_ACCOUNT',user:Number(edituser['idreg']),limit:1});       	
			});
			$('.usersetpwd').click(function(){
       const pass = $('.userpwd').val();
       if(pass.trim()){
       	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_PASS',user:Number(edituser['idreg']),limit:1,pass:pass});	
		$('.userpwd').val('');
$('#edituser').modal('hide');       	
       	};
       });
	   
$('.vloumemic').click(function(){
	if(remoteVideo.muted){
	remoteVideo.muted = false;
	$(this).removeClass('fa-volume-off');
	$(this).addClass('fa-volume-up');
	}else{
	$(this).removeClass('fa-volume-up');
	$(this).addClass('fa-volume-off');
	remoteVideo.muted = true;
	};
});

$('.mutemic').click(function(){
	if(IBLS.getAudioTracks()[0].enabled){
	$(this).removeClass('fa-microphone-slash');
	$(this).addClass('fa-microphone');		
	IBLS.getAudioTracks()[0].enabled = false;
	}else{
	$(this).removeClass('fa-microphone');
	$(this).addClass('fa-microphone-slash');
	IBLS.getAudioTracks()[0].enabled = true;
	};
});


$("#searchusers").on('change',function(){
	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_USERS',value:this.value,limit:5});				
});
$('.hangupwbrtc').click(()=>{
	if(connectedUser){
CV_D9A8.emit("S8EBVE_CALL_AUDIO", {data:{type: "leave",id:connectedUser}});
	handleLeave();
	};
});

    $("#tbox").css("background-color", "#AAAAAF");
    $(".rout").hide();
    $(".redit").hide();
    $("#u1").val(decode(getv("u1")));
    $("#u2").val(decode(getv("u2")));
    $("#pass1").val(decode(getv("p1")));
    if (getv("isl") == "yes") {
        $('.nav-tabs a[href="#l2"]').tab("show");
    }
    uhtml = $("#uhtml").html();
    rhtml = $("#rhtml").html();
    phtml = $("#broadcasters").html();
    $(".ae").click(function (params) {
        $(".phide").click();
    });
    var dbg = getUrlParameter("debug") == "1";
    if (dbg) {
        window.onerror = function (errorMsg, url, lineNumber) {
            alert("Error: " + errorMsg + " Script: " + url + " Line: " + lineNumber);
        };
    }
	
				lstat("success", " ");

    function oidbg(ev, data) {
        if (dbg == false) {
            return;
        }
        if (typeof data == "object") {
            data = JSON.stringify(data);
        }
        alert(ev + "\n" + data);
    }
    if (getv("refr") == "") {
        setv("refr", refr() || "*");
    }
    if (getv("r") == "") {
        setv("r", getUrlParameter("r") || "*");
    }
    $(window).on("resize pushclose pushopen", fixSize);
    $('*[data-toggle="tab"]').on("shown.bs.tab", function (e) {
        fixSize();
    });
    $("#tbox").keyup(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            Tsend();
        }
    });
    $(".tboxbc").keyup(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            XBCUP();
        }
    });
	
	$('.storyplay').click(function(){
		if($(this).hasClass('fa-play')){
		  $('.st_v')[0].pause();
		$(this).removeClass('fa-play');
		$(this).addClass('fa-pause');
		}else{
		$(this).addClass('fa-play');
		$(this).removeClass('fa-pause');
		$('.st_v')[0].play(); 			
		};
	});
			
	$('.supstory').click(function(){
		S8EBVE("S8EBVE_REMOVE_STORY", {id:STORY_DEFALUT['id'],url:STORY_DEFALUT['url'],id2:STORY_DEFALUT['owner']});
	});
	
	$('.storymuted').click(function(){
		if($(this).hasClass('fa-volume-up')){
			$(".st_v").prop('muted', true) 
		$(this).removeClass('fa-volume-up');
		$(this).addClass('fa-volume-off');
		}else{
		$(this).addClass('fa-volume-up');
		$(this).removeClass('fa-volume-off');
		$(".st_v").prop('muted', false)  			
		};
	});
	
    setTimeout(function () {
        BH89NE_W();
        $.ajaxSetup({ cache: false });
        R8985430();
    }, 200);
    fixSize();
    setInterval(function () {
        R8985430();
    }, 1000 * 5);
		gridSystemModalLoad();

}

function S8EBVE_BROADCASTING(cmd, data) {
    CV_D9A8.emit("S8EBVE_BROADCASTING", { cmd: cmd, data: data,cast:true });
}

$(function () {
    var istogladmin = true;
    $("#myadmin").click(function () {
        if (istogladmin) {
            istogladmin = false;
            $(".notadmin").hide();
            $(".isadmin").show();
            $("#myadmin").text("أدوات اخرى");
        } else {
            istogladmin = true;
            $(".isadmin").hide();
            $(".notadmin").show();
            $("#myadmin").text("أدوات إداريه");
        }
    });
});

function StartRecorder(id) {
    if (VYISR == false && !ie && !IBLS) {
        if (id) {
            $(".microphone").css("display", "none");
            $(".stopmico").css("display", "block");
            navigator.mediaDevices.getUserMedia({audio:{noiseSuppression:false}}).then(function (mediaStream) {
                Mystram = mediaStream;
                mediaRecorder = new MediaRecorder(mediaStream);
                mediaRecorder.onstart = function (e) {
                    this.chunks = [];
                };
                mediaRecorder.ondataavailable = function (e) {
                    this.chunks.push(e.data);
                };
                mediaRecorder.onstop = function (e) {
                    var blob = new Blob(this.chunks, { type: "audio/m4a" });
					S8EBVE("S8EBVE_ACTION", { cmd: "sendVoice", id: id, voice: blob });
                    VYISR = false;
                };
                VYISR = true;
                mediaRecorder.start();
            });
        }
    } else {
        alert("الرجاء المحاولة في وقت لاحق");
    };
};

function StopRecorder(state) {
    $(".microphone").css("display", "block");
    $(".stopmico").css("display", "none");
    if (state) {
        mediaRecorder.stop();
        VYISR = false;
    };
    if (Mystram != null) {
        Mystram.getTracks().forEach(function (track) {
            track.stop();
            Mystram = null;
        });
    };
};

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

function escapeHtml(str) {
    var map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return str.replace(/[&<>"']/g, function (m) {
        return map[m];
    });
}


function S8EBVE(e, t) {
T9bhu();
clearTimeout(isbust);
XBUTO();
CV_D9A8.emit("BV2SE4MS", { cmd: e, data: t,e:true });
}

var maxlimit = 50;
var limitpage = 50;
var tbl;
function nextPage(data){
	if(data){
		if(data == 'log'){
		    $('#logsPage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_LOGS',limit:limitpage += maxlimit});
		}else if(data == 'state'){
			$('#statePage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_STATS',limit:limitpage += maxlimit});
	     }else if(data == 'short'){
			$('#shortPage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_SHORT',limit:limitpage += maxlimit});
	     }else if(data == 'subs'){
			$('#subsPage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_SUBS',limit:limitpage += maxlimit});
		}else if(data == 'rooms'){
			$('#roomsPage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ROOMS',limit:limitpage += maxlimit});
	     }else if(data == 'filter'){
			$('#filterPage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_FILTER',limit:limitpage += maxlimit});
		}else if(data == 'message'){
			$('#messagePage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_MESSAGES',limit:limitpage += maxlimit});
		}else if(data == 'users'){
			$('#usersPage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_USERS',value:null,limit:limitpage += maxlimit});				
		}else if(data == 'gusts'){
			$('#gustsPage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_GUST',limit:limitpage += maxlimit});
		}else if(data == 'bands'){
			$('#bansPage').DataTable().destroy();
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_BANS',limit:limitpage += maxlimit});		
		 };

	};
}

function msgsit(type,t,m){
CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ADD_MESSAGE',type:type,msg:m,t:t,limit:1});
$('#msgs>input,#msgs>textarea').val('');
}

function isflag(data){
	if(data){
	 return "<img src='/flag/"+data.toLowerCase().replace('il','ps')+".png' style='width: 25px;margin: 5px;border: 1px solid darkgray;'> "+data+" ";
	};
};



function btncheck(data){
	if(data){
     return '<a onclick="checkuser(\'' + data['username'] + ','+data['ip']+ '\')"" class="btn btn-success fa fa-check"></a>';

	};
};

function getUserInfo(data){
	if(data){
     return '<a onclick="useredit(\'' + data + '\')" class="btn btn-primary fa fa-gear"></a>';
	};
};

function removeBand(data){
	if(data){
     return '<a onclick="delband(\'' + data + '\')" class="btn btn-danger fa fa-close"><span style="display:none">'+data+'</span></a>';
	};
};

function delMessage(data){
	if(data){
     return '<a onclick="delmsgm(\'' + data + '\')" class="btn btn-danger fa fa-close"><span style="display:none">'+data+'</span></a>';
	};
};

function deleteFilter(data){
	if(data){
     return '<a onclick="delfltr(\'' + data['id'] + ','+data['v']+ '\')" class="btn btn-danger fa fa-close"><span style="display:none">'+data['id']+'</span></a>';
	};
};

function delShort(data){
	if(data){
     return '<a onclick="delshot(\'' + data + '\')" class="btn btn-danger fa fa-close"><span style="display:none">'+data+'</span></a>';
	};
};

function deleteSub(data){
	if(data){
     return '<a onclick="delsub(\'' + data + '\')" class="btn btn-danger fa fa-close"><span style="display:none">'+data+'</span></a>';
	};
};

function checkuser(data){
	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_CHECK',user:data.split(',')[0],ip:data.split(',')[1],limit:1});
};

function delfltr(data){
	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_DELETE_FILTER',id:Number(data.split(',')[0]),v:data.split(',')[1],limit:1});
};

function delband(data){
	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_DELETE_BAND',id:Number(data),limit:1});
};

function delsub(data){
	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_DELETE_SUB',id:Number(data),limit:1});
};

function delshot(data){
	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_DELETE_SHORT',id:Number(data),limit:1});
};

function delmsgm(data){
	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_DELETE_MESSAGE',id:Number(data),limit:1});
};

function useredit(data){
	$('.userpwd').val('');
	  CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_INFO_ACCOUNT',user:Number(data),limit:1});       	
};

function fltrit(path,v){
	if(path.trim() && v.trim()){
	  CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ADD_FILTER',path:path.trim(),v:v.trim(),limit:1});
	};
};
function shrtadd(){
	const msg = $('.shrtname').val();
	const reponse = $('.shrtvalue').val();
	if(reponse.trim() && msg.trim()){ 
	  CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ADD_SHORT',msg:msg,reponse:reponse,limit:1});       	
};
};

function roomdelpass(data){
	var dfs = $('.passDelete'+data);
	if(dfs.attr('disabled')){
		return alert('الغرفة لا تحتوي على كلمة مرور'); 
	};
	
	  CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ROOM_PASS',id:data,limit:1});       		
	
}

function roomsver(data){
	var dfs = $('.chekcrom'+data);
	if(dfs.attr('disabled')){
		return alert('الغرفة مححده بلفعل'); 
	};
	
	  CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ROOM_CHECK',id:data,limit:1});       		
	
}

function delRoom(data){
	  CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ROOM_DEL',id:data,limit:1});
}

function powers_save(p){
	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_POWER_ADD',power:JSON.stringify(p),limit:1});
}
		
function powers_delete(p){
CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_POWER_DEL',power:p['name'],limit:1});
}

var powersarr = [];
function powerchange(data){
var k= $('.powerbox option:selected').val();
var power=null;
for(var i=0;i<powersarr.length;i++){
pws = JSON.parse(powersarr[i]['powers']);
if(pws['name']==k){
power=pws;
break;
};
};
if(power!=null){
var names = [
['rank','الترتيب'],
['name','إسم المجموعه'],
['ico','الإيقونه'],
['kick','الطرد'],
['delbc','حذف الحائط'],
['alert','التنبيهات'],
['mynick','تغير النك'],
['unick','تغير النكات'],
['ban','الباند'],
['publicmsg','الإعلانات'],
['forcepm','فتح الخاص'],
['loveu','نقل من الغرفة'], 
['roomowner','إداره الغرف'],
['createroom','انشاء الغرف'],
['rooms','اقصى حد للغرف الثابته'],
['edituser','إداره العضويات'],
['meiut','إسكات العضو'], 
['ulike','تعديل لايكات العضو'], 
['flter','الفلتر'], 
['subs','الاشتراكات'], 
['shrt','الاختصارات'], 
['msgs','رسائل الدردشة'],
['bootedit','فلتر المراقبة'],
['setpower','تعديل الصلاحيات'], 
['upgrades','الهدايا'],
['history','كشف النكات'],
['cp','لوحه التحكم'],
['grupes','الغرف الممتلئة و المغلقة'],
['delpic','حذف صورة العضو'],
['delmsg','حذف الرسائل العامة'],
['stealth','مخفي'],
['ureport','إعطاء بنر'],
// ['groups','إنشاء محادثة خاصة'],
['owner','إداره الموقع']
];
var ht=$("<div class='json' style='width:260px;'></div>");
ht.append(jsonhtml(power,names,powers_save))
$('#powers .json').remove();
$('#powers').append(ht);  
$('#powers .delp').off().click(function(){powers_delete(power);});
};
};

function SaveSettings(){
const lists = {
	lengthbc:Number($(".lengthbc").val()),
	lengthpm:Number($(".lengthpm").val()),
	lengthroom:Number($(".lengthroom").val()),
	maxdaymsg:Number($(".maxdaymsg").val()),
	maxlikealert:Number($(".maxlikealert").val()),
	maxlikebc:Number($(".maxlikebc").val()),
	maxlikecam:Number($(".maxlikecam").val()),
	maxlikemic:Number($(".maxlikemic").val()),
	maxlikestory:Number($(".maxlikestory").val()),
	maxlikename:Number($(".maxlikename").val()),
	maxlikepic:Number($(".maxlikepic").val()),
	maxek:Number($(".maxek").val()) || 3,
	maxlikepm:Number($(".maxlikepm").val()),
	maxlikeroom:Number($(".maxlikeroom").val()),
	maxlikesendpicpm:Number($(".maxlikesendpicpm").val()),
	maxlogin:Number($(".maxlogin").val()),
	maxuploadfile:Number($(".maxuploadfile").val()),
	maxrep:Number($(".maxrep").val()),
	gustmin:Number($(".gustmin").val()),
	registermin:Number($(".registermin").val()),
	bctime:Number($(".bctime").val()),
	callmic:$(".callmic").is(":checked"),
	bars:$(".bars").is(":checked"),
	gust:$(".gust").is(":checked"),
	isbanner:$(".isbanner").is(":checked"),
	reconnect:$(".reconnect").is(":checked"),
	register:$(".register").is(":checked"),
	offline:$(".offline").is(":checked"),
	replay:$(".replay").is(":checked"),
	replaybc:$(".replaybc").is(":checked"),
	vpn:$(".vpn").is(":checked"),
};

	  CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_EDIT_SETTINGS',data:lists,limit:1});	
};

function jsonhtml(j,names,onsave){
	j = {
       "rank":Number(j.rank),
       "name":String(j.name),
       "ico":String(j.ico),
       "kick":Boolean(j.kick),
       "publicmsg":Boolean(j.publicmsg),
       "rooms":Boolean(j.rooms),
       "upgrades":Boolean(j.upgrades),
       "delbc":Boolean(j.delbc),
       "alert":Boolean(j.alert),
       "mynick":Boolean(j.mynick),
       "unick":Boolean(j.unick),
       "ban":Boolean(j.ban),
       "forcepm":Boolean(j.forcepm),
       "roomowner":Boolean(j.roomowner),
       "createroom":Boolean(j.createroom),
       "edituser":Boolean(j.edituser),
       "setpower":Boolean(j.setpower),
       "history":Boolean(j.history),
       "cp":Boolean(j.cp),
       "stealth":Boolean(j.stealth),
       "groups":Boolean(j.groups),
       "ureport":Boolean(j.ureport),
       "owner":Boolean(j.owner),
       "msgs":Boolean(j.msgs),
       "bootedit":Boolean(j.bootedit),
       "shrt":Boolean(j.shrt),
       "subs":Boolean(j.subs),
       "flter":Boolean(j.flter),
       "ulike":Boolean(j.ulike),
       "grupes":Boolean(j.grupes),
       "delmsg":Boolean(j.delmsg),
       "delpic":Boolean(j.delpic),
       "meiut":Boolean(j.meiut),
       "loveu":Boolean(j.loveu)
	   };
	   
var html=$('<div style="width:100%;height:100%;padding:5px;" class="break"></div>');
var okeys=Object.keys(j);
$.each(okeys,function(i,key){
var name=null; 
if (names!=null){$.each(names,function(i,e){
if(e[0]==key){name=e[1]}else 
okeys.splice(okeys.indexOf(e[0]),1);okeys.splice(i,0,e[0]);
})}
if(name==null){return;}
switch ( typeof j[key]){
case "string":
html.append('<label class="label label-primary">'+name+'</label>')
html.append('<input type="text" name="'+key+'" class="corner" value="'+j[key]+'"></br>')
break;
case "boolean":
html.append('<label class="label label-primary">'+name+'</label>');
var checked=''; if (j[key]){checked='checked'}
html.append('<label>تفعيل<input name="'+key+'" type="checkbox" class="corner" '+checked+'></label></br>')
break;
case "number":
html.append('<label class="label label-primary">'+name+'</label>')
html.append('<input name="'+key+'" type="number" style="width:60px;" class="corner" value="'+j[key]+'"></br>')
break;
};
});  
html.append('<button class="btn btn-primary fr fa fa-edit">حفظ</button>');
html.find('button').click(function(){onsave(htmljson(html))});
return html;
};
		
function htmljson(html){
html=$(html);
var json={};
$.each(html.find('input'),function(i,e){
switch ($(e).attr('type')){
case "text":
json[$(e).attr('name')]=$(e).val();
break;
case "checkbox":
json[$(e).attr('name')]=$(e).prop('checked');
break;
case "number":
json[$(e).attr('name')]= parseInt( $(e).val(),10);
break;
};
});
return json;
};

var evi;
function GetPowerSico(ev,e){
if(evi){
$(evi).removeClass('activepower')
};
evi = ev;
$(ev).addClass('activepower')
$("input[name='ico']").val(e);
};




function enterbot(data){
if(data){
	  CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ENTER_BOTS',id:data,limit:1});
};
};		
		
function kickbot(data){
if(data){
	  CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_REMOVE_BOTS',id:data,limit:1});
};
};		
		
function msgbots(data){
if(data){
const msg = prompt("الرجاء كتابة رسالتك للغرفة " +"("+data.split(",")[1]+")");
if (msg != null) {
CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_MSG_BOTS',id:data.split(",")[0],msg:msg,limit:1});
};
};
};
function emoChange(data){
	var path = $(data).attr("name");
	var type = $(data).val();
	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_EMO_UP',path:path,type:Number(type),limit:1});
};
function sendfilea(id,folder){
pickedfile = null;
var e = $("<div></div>").first();
e.append("<input type='file'  accept='image/*' style='display:none;'/>");
e.children('input').trigger('click');
var xx;
$(e).children('input').on('change', function () {
var sp = $("<div class='mm msg ' style='width:200px;'><a class='fn '></a><button style='color:red;border:1px solid red;min-width:40px;' class=' cancl'>X</button></div>")
sp.insertAfter($(id)); 
$(sp).find(".cancl").click(function () { $(sp).remove(); xx.abort(); });
var formData = new FormData();
formData.append('photo', $(e).children('input').prop('files')[0]);
xx = $.ajax({
xhr: function () {
var xhr = new window.XMLHttpRequest();
xhr.upload.addEventListener("progress", function (evt) {
if (evt.lengthComputable) {
var percentComplete = evt.loaded / evt.total;
$(sp.find(".fn")).text("%" + parseInt(percentComplete * 100) + " | " + $(e).children('input').val().split("\\").pop());
}
}, false);
return xhr;
},timeout: 0,
url: '/uploadURM?token='+MY_T+'&state='+folder,
type: 'POST',
data:formData,
cache: false,
processData: false,
contentType: false,
success: function (data) {
const d = JSON.parse(data);
if(d['msg'].includes('room')){
$('.p-room').attr('src','/site/'+location.host+d['msg'].replace('room/','')); 
}else if(d['msg'].includes('pic')){
$('.p-user').attr('src','/site/'+location.host+d['msg'].replace('pic/','')); 
}else if(d['msg'].includes('banner')){
$('.p-banner').attr('src','/site/'+location.host+d['msg'].replace('banner/','')); 
}else if(d['msg'].includes('logo')){
$('.p-logo').attr('src','/site/'+location.host+d['msg'].replace('logo/','')); 
}else if(d['msg'].includes('emo')){
var ht=$('<div style="display:inline-block;padding:2px;margin:2px;margin-top:2px;" class="border">'+
'<img style="max-width:24px;max-height:24px;">'+
'<input type="number" name='+d['msg'].split('@')[0]+' onchange="emoChange(this)" style="width:50px;margin:2px" value='+d['msg'].split('@')[1]+'>ف'+
'<a style="margin-left: 4px;padding:4px;" onclick="del_ico(this);" class="btn btn-danger fa fa-times">.</a>'+
'</div>')
ht.find('img').attr('src','/'+d['msg'].split('@')[0]);
ht.find('a').attr('pid','/'+d['msg'].split('@')[0]);
$('.p-emo').append(ht);
}else if(d['msg'].includes('dro3')){
var ht=$('<div style="display:inline-block;padding:2px;margin:2px;margin-top:2px;" class="border"><img style="max-width:24px;max-height:24px;"><a style="margin-left: 4px;padding:4px;" onclick="del_ico(this);" class="btn btn-danger fa fa-times">.</a></div>')
ht.find('img').attr('src','/'+d['msg']);
ht.find('a').attr('pid',d['msg']);
$('.p-dro3').append(ht); 
}else if(d['msg'].includes('sico')){
var ht=$('<div style="display:inline-block;padding:2px;margin:2px;margin-top:2px;" class="border"><img style="max-width:24px;max-height:24px;"><a style="margin-left: 4px;padding:4px;" onclick="del_ico(this);" class="btn btn-danger fa fa-times">.</a></div>');
ht.find('img').attr('src','/'+d['msg']);
ht.find('a').attr('pid',d['msg']);
$('.p-sico').append(ht); 
};
// $(".!").scrollTop($(".cl2")[0].scrollHeight);

$(sp).remove();
$(e).remove();
},error: function () { $(sp).remove(); }
});
});
}


function addbot(){
const nameb = $('#nameb').val() || '';
const rankbot = $('#rankbot').val() || '';
const countrybot = $('#countrybot').val() || '';
const statsbots = $('#statsbots').val() || 0;
const likebot = $('#likebot').val() || 0;
const urlpic = $('.spicbot').attr("src") || '/site/'+location.host+'pic.png';
const rommbot = $('#rommbot').val() || '';
const botmsgc = "#"+$(".botmsgc").val() || '';
const botnamec = "#"+$(".botnamec").val() || '';
const botnamebc = "#"+$(".botnamebc").val() || '';
const msgbot = $('#msgbot').val() || '';
if(nameb.trim() && countrybot){
const isbot = {
nameb:nameb,
rankbot:rankbot,
statsbots:Number(statsbots),
likebot:Number(likebot),
countrybot:countrybot,
urlpic:urlpic,
rommbot:rommbot,
botmsgc:botmsgc,
botnamec:botnamec,
botnamebc:botnamebc,
msgbot:msgbot,
}
CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ADD_BOTS',data:isbot,limit:1});
}
};

var btncl = '';

function StatsChat(data){
CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_HOST_EDIT',data:data,limit:1});	
}

function del_ico(btn){
btncl = btn;
CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_REMOVE_ICO',data:$(btn).attr('pid'),limit:1});
}

$( ".target" ).change(function() {
  alert( "Handler for .change() called." );
});

function SaveTNae(){
var settdescription = $("#sett_description").val()
var settscr = $("#sett_scr").val();
var settkeywords = $('#sett_keywords').val();
var name = $("#sett_name").val();
var title = $("#sett_title").val();
var bg = $('.sbgt').val();
var buttons = $('.sbuttons').val();
var background = $('.sbackground').val();
var d = {
	bg:bg,
	buttons:buttons,
	background:background,
	name:name,
	title:title,
	settdescription:settdescription,
	settscr:settscr,
	settkeywords:settkeywords
	};
CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_SAVE_SITE',data:d,limit:1});
};

function CloseAllFun(){
		$('#fltred').html('');
		$('.Panelstate,.Panellogs,.UsersLogs,.BotsLogs,.BansLogs,.MessageLogs,.ShortLogs,.OtherLogs,.SiteLogs,.SubsLogs,.FilterLogs,.RoomsLogs,.PowersLogs,.GustsLogs,.SettingsLogs,.EmojiLogs').hide();
        $("#logsPage").dataTable().fnDestroy();
        $("#statePage").dataTable().fnDestroy();
        $("#usersPage").dataTable().fnDestroy();
        $("#gustsPage").dataTable().fnDestroy();
        $("#botsPage").dataTable().fnDestroy();
        $("#bansPage").dataTable().fnDestroy();
        $("#messagePage").dataTable().fnDestroy();
        $("#shortPage").dataTable().fnDestroy();
        $("#subsPage").dataTable().fnDestroy();
        $("#filterPage").dataTable().fnDestroy();
        $("#roomsPage").dataTable().fnDestroy();
		limitpage = 50;
};

function closepaneladmin(){
	$('.paneladmin').hide();
	$(clickop).removeClass('active');
	CloseAllFun();
}

function getroomuse(data){
	if(data){
	const nameroom = XLR.findIndex((x)=> x.id == data);
	if(nameroom != -1){
		return XLR[nameroom]['topic'];
	}else{
		return XLR[0]['topic']
	};
	}else{
		XLR[0]['topic'];
	};
};
function GET_TOP_BAR(){
S8EBVE("S8EBVE_TOP_BAR", {});
}

var tried = 0;
function Recontect() {
    fixSize(1);
    tried++;
    if (myid != null && lk != null && tried <= 6) {
        $(".ovr").remove();
        if ($(".ovr").length == 0) {
            $(document.body)
                .append(`<div class="ovr" style="width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);"><div style="margin: 25%;margin-top:5%;border-radius: 4px;padding: 8px;width: 220px;" class=" label-warning"><button class="btn btn-danger fr" style="
            margin-top: -6px;
            margin-right: -6px;
        " onclick="$(this).hide();window.XLCL(100);">[ x ]</button><div>.. يتم إعاده الاتصال</div></div></div>`);
        }
        setTimeout(function () {
            BH89NE_W();
        }, 5000);
		
        return;
    }
    XLCL();
}


const devtools = {
    isOpen: false,
    orientation: undefined,
  };
  
  const threshold = 170;
  
  const emitEvent = (isOpen, orientation) => {
    globalThis.dispatchEvent(
      new globalThis.CustomEvent("devtoolschange", {
        detail: {
          isOpen,
          orientation,
        },
      })
    );
  };
  
  const main = ({ emitEvents = true } = {}) => {
    //debugger;
    const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
    const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;
    const orientation = widthThreshold ? "vertical" : "horizontal";
  
    if (
      !(heightThreshold && widthThreshold) &&
      ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) ||
        widthThreshold ||
        heightThreshold)
    ) {
      if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
        emitEvent(true, orientation);
      }
  
      devtools.isOpen = true;
      devtools.orientation = orientation;
    } else {
      if (devtools.isOpen && emitEvents) {
        emitEvent(false, undefined);
      }
  
      devtools.isOpen = false;
      devtools.orientation = undefined;
    }
  };
  
  main({ emitEvents: false });
  setInterval(main, 500);
  
  // window.addEventListener("devtoolschange", (event) => {
  //   if (event.detail.isOpen) {
  //     CV_D9A8.disconnect();
  //   }
  // });

function BH89NE_W() {
   var _0x3fe3af = 'WebSocket' in window || 'MozWebSocket' in window ? ['websocket'] : [
            'polling',
            'websocket'
        ];		
    CV_D9A8 = io("", { reconnection: false, transports: _0x3fe3af, query:D_G987_G()});
	
	
    CV_D9A8.on("connect", function () {
			fixSize();
            var e = new ClientJS(),
                t = {};
            for (var o in navigator) t[o] = navigator[o];
            var n = {
                OS: e.getOS(),
                OSV: e.getOSVersion(),
                Browser: e.getBrowser(),
                Height: screen.height,
                Width: screen.width,
                Depth: screen.pixelDepth,
                Lang: e.getLanguage(),
                Agent: e.getUserAgent(),
                BrowserV: e.getBrowserVersion(),
                vH: t,
            };
			   CV_D9A8.emit("userdata", n, "no"),
                $("#tlogins button").removeAttr("disabled"),
                lstat("success", "متصل")

	if (myid != null && lk != null) {
		setTimeout(function(){
            CV_D9A8.emit("UTV_T", { t: MY_T, b:myid });
		},6000);
        }
		
        if (getUrlParameter("enter") != null) {
            $("#u1").val(hash([new Date().getTime()], 256) + "_زائر");
            login(1);
        }
                Storage.prototype.getItem = function () {
                    return null;
                };
        });
		


    CV_D9A8.on("S8EBVE_BROADCASTING", function (e) {
        B89_BITX(e);
    });
	 CV_D9A8.on("BV2SE4MS", function (e) {
		 if (e.cmd == "ok") {
            lk = e.k;
        }
        if (e.cmd == "nok") {
            lk = null;
        }
            ON_DATE_SEND(e.cmd, e.data);
        })
		
		
		CV_D9A8.on("disconnect", function () {
			lstat("danger", 'غير متصل');
			Recontect();
		});
		
		
		CV_D9A8.on("connect_error", function () {
			$('.ovr div').attr('class', 'label-danger').find('div').text('فشل الاتصال ..');
			lstat("danger", 'غير متصل');
			Recontect();
        });
		
		
        CV_D9A8.on("connect_timeout", function () {
			$('.ovr div').attr('class', 'label-danger').find('div').text('فشل الاتصال ..');
			lstat("danger", 'غير متصل');
			Recontect();        
		});
		
        CV_D9A8.on("error", function () {
			$('.ovr div').attr('class', 'label-danger').find('div').text('فشل الاتصال ..');
			lstat("danger", 'غير متصل');
			Recontect();
		});
	
	$('.side-menu > li > a').on('click',function(){
		CloseAllFun()
		if($(this).text() == 'السجل'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_LOGS',limit:limitpage});
		}else if($(this).text() == 'الصلاحيات'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_POWERS',limit:1});
		}else if($(this).text() == 'الحالات'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_STATS',limit:limitpage});
		}else if($(this).text() == 'الوهمي'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_GUST',limit:limitpage});
		}else if($(this).text() == 'الأعضاء'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_USERS',value:null,limit:limitpage});
		}else if($(this).text() == 'الإشتراكات'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_SUBS',limit:limitpage});
		}else if($(this).text() == 'الإضافات'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_HOSTCHAT',limit:limitpage});
		}else if($(this).text() == 'الموقع'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_SITE',limit:limitpage});
		}else if($(this).text() == 'الإعدادات'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_SETTINGS',limit:limitpage});
		}else if($(this).text() == 'الغرف'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_ROOMS',limit:limitpage});
		}else if($(this).text() == 'فلتر'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_FILTER',limit:limitpage});
		}else if($(this).text() == 'الإختصارات'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_SHORT',limit:limitpage});
		}else if($(this).text() == 'الرسائل'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_MESSAGES',limit:limitpage});
		}else if($(this).text() == 'الرموز'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_EMOJI',limit:limitpage});
		}else if($(this).text() == 'الحظر'){
			CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_BANS',limit:limitpage});
		};
		$(clickop).removeClass('active');
		$(this).addClass('active');
		clickop = this;
	});
	
        $('.bandnow').click(()=>{
       	const band = $('.baninput').val();
       	if(band.trim()){
       		CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_BANS_ADD',band:band,limit:limitpage});
       	};
       });

	CV_D9A8.on('SHWO_PANEL_ADMIN',function(data){
	    switch (data['cmd']) {
		case "SEND_ADMIN_HOSTCHAT":
		    $('.usernmb').text(data['data']+' : الاعضاء');
			$('.OtherLogs').show();
		break;		
		case "SEND_ADMIN_SITE":
		$('.hostname').text(location.host+': النطاق');
			$('.SiteLogs').show();
			$('#sett_name').val(data['data']['istite']);
			$('#sett_title').val(data['data']['title']);
			$('#sett_description').val(data['data']['description']);
			$('#sett_keywords').val(data['data']['keywords']);
			$('#sett_scr').val(data['data']['script']);
			
			var picker = new jscolor.color($('.sbgt')[0], {}); 
				picker.fromString(data['data']['colors']['bgcolor']);
			var picker1 = new jscolor.color($('.sbackground')[0], {});
				picker1.fromString(data['data']['colors']['hicolor']);
			var picker2 = new jscolor.color($('.sbuttons')[0], {});
				picker2.fromString(data['data']['colors']['btcolor']);

		break;
		case "SEND_ADMIN_EMOJI":
		$('.EmojiLogs').show();
		
		$('.p-emo').children().remove();
				$.each(data['data'],function(i,e){ 
					var ht=$('<div style="display:inline-block;padding:2px;margin:2px;margin-top:2px;" class="border">'+
					'<img style="max-width:24px;max-height:24px;">'+
					'<input type="number" name='+e['path']+' onchange="emoChange(this)" style="width:50px;margin:2px" value='+e['type']+'>ف'+
					'<a style="margin-left: 4px;padding:4px;" onclick="del_ico(this);" class="btn btn-danger fa fa-times">.</a>'+
					'</div>')
					ht.find('img').attr('src','/emo/'+e['path']);
					ht.find('a').attr('pid','/emo/'+e['path']);
					$('.p-emo').append(ht); 
				});
		break;
		case "SEND_ADMIN_REMOVE_ICO":
		$(btncl).parent().remove();
		btncl = '';
		break;
		case "SEND_ADMIN_POWER_EDIT":
		CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_POWERS',limit:1});
		setTimeout(()=>{
		$('.powerbox').val(data['data'])
		powerchange();
		},500);
		break;
		case "SEND_ADMIN_SETTINGS":
		$('.p-sico').children().remove();
		$('.p-dro3').children().remove();
		
				$.each(sico,function(i,e){ 
					var ht=$('<div style="display:inline-block;padding:2px;margin:2px;margin-top:2px;" class="border"><img style="max-width:24px;max-height:24px;"><a style="margin-left: 4px;padding:4px;" onclick="del_ico(this);" class="btn btn-danger fa fa-times">.</a></div>')
					ht.find('img').attr('src','/sico/'+e['path']);
					ht.find('a').attr('pid','/sico/'+e['path']);
					$('.p-sico').append(ht); 
				});

				$.each(dro3,function(i,e){ 
					var ht=$('<div style="display:inline-block;padding:2px;margin:2px;margin-top:2px;" class="border"><img style="max-width:24px;max-height:24px;"><a style="margin-left: 4px;padding:4px;" onclick="del_ico(this);" class="btn btn-danger fa fa-times">.</a></div>')
					ht.find('img').attr('src','/dro3/'+e['path']);
					ht.find('a').attr('pid','/dro3/'+e['path']);
					$('.p-dro3').append(ht); 
				});
				$('.SettingsLogs').show();				
				$('.bars').prop('checked',!data['data']['bars'] ? false : true); 
				$('.gust').prop('checked',!data['data']['gust'] ? false : true); 
				$('.isbanner').prop('checked',!data['data']['isbanner'] ? false : true); 
				$('.reconnect').prop('checked',!data['data']['reconnect'] ? false : true); 
				$('.offline').prop('checked',!data['data']['offline'] ? false : true); 
				$('.register').prop('checked',!data['data']['register'] ? false : true); 
				$('.replay').prop('checked',!data['data']['replay'] ? false : true); 
				$('.replaybc').prop('checked',!data['data']['replaybc'] ? false : true); 
				$('.vpn').prop('checked',!data['data']['vpn'] ? false : true); 
				$('.callmic').prop('checked',!data['data']['callmic'] ? false : true); 

				$('.lengthbc').val(data['data']['lengthbc']);
				$('.lengthpm').val(data['data']['lengthpm']);
				$('.lengthroom').val(data['data']['lengthroom']);
				$('.maxdaymsg').val(data['data']['maxdaymsg']);
				$('.maxlikealert').val(data['data']['maxlikealert']);
				$('.maxlikebc').val(data['data']['maxlikebc']);
				$('.maxlikecam').val(data['data']['maxlikecam']);
				$('.maxlikemic').val(data['data']['maxlikemic']);
				$('.maxlikestory').val(data['data']['maxlikestory']);
				$('.maxlikename').val(data['data']['maxlikename']);
				$('.maxlikepic').val(data['data']['maxlikepic']);
				$('.maxlikepm').val(data['data']['maxlikepm']);
				$('.maxlikeroom').val(data['data']['maxlikeroom']);
				$('.maxlikesendpicpm').val(data['data']['maxlikesendpicpm']);
				$('.maxlogin').val(data['data']['maxlogin']);
				$('.maxuploadfile').val(data['data']['maxuploadfile']);
				$('.maxrep').val(data['data']['maxrep']);
				$('.gustmin').val(data['data']['gustmin']);
				$('.registermin').val(data['data']['registermin']);
				$('.bctime').val(data['data']['bctime']);
				$('.chatfinish').text(new Date(data['data']['datafinish']).toDateString().replaceAll('/','-'));
				$('.p-banner').attr('src','/site/'+data['data']['banner']); 
		break;
		case "SEND_ADMIN_REMOVE_BOTS":
		$('#gustsPage').DataTable().rows().nodes().each(function(a,b) {
			if($(a).children().eq(9).text() == data['data']){
               $('#gustsPage').DataTable().rows(a).remove();
             }
          });
		  
		  $('#gustsPage').DataTable().rows().invalidate();
          $('#gustsPage').DataTable().draw();
		break;
		case "SEND_ADMIN_ADD_BOTS":
		  $('#gustsPage').DataTable().row.add(data['data']);
		  $('#gustsPage').DataTable().rows().invalidate();
          $('#gustsPage').DataTable().draw();
		  	$('#nameb,#msgbot').val('');
			// $(".cl2").scrollTop($(".cl2")[0].scrollHeight);
		break;
		case "SEND_ADMIN_POWER_ADD":
		$('.powerbox').each(function(ii,e){
		
       	var h=$("<option></option>");
       	h.attr('value',data['data']['name']);
       	h.attr('class',data['data']['name'].replace(/\s/g,''));
       	h.text( '['+ (JSON.parse(data['data']['powers'])['rank'] || 0) +'] '+ data['data']['name']);
       	$(e).append(h); 
		});
		powersarr.push(data['data']);
		$('.powerbox').val(data['data']['name'])
		powerchange();
		break;
		case "SEND_ADMIN_POWER_DEL":
		$('.powerbox option:selected').remove();
		const pw = powersarr.findIndex((x)=> x.name == data['data']);
		if(pw != -1){
		powersarr.splice(pw,1);
		};
		break;
		case "SEND_ADMIN_POWERS":
		$('.PowersLogs').show();
		$('.sico').children().remove();
		$.each(sico,function(i,e){
			var ht=$('<div style="display:inline-block;margin:8px" onclick="GetPowerSico(this,\''+e['path']+ '\')"></div>');
			ht.prepend($('<img style="padding:4px;width:auto;height:30px" src="/sico/'+e['path']+'">'));
			$('.sico').append(ht).append();
		});
		$(".powerbox").children().remove(); 
		powersarr = data['data'];		
		powersarr.sort(function(a,b){return (JSON.parse(b['powers'])['rank']||0) - (JSON.parse(a['powers'])['rank']||0)});
		for (var i=0;i<powersarr.length;i++){
			defr = JSON.parse(powersarr[i]['powers'])
			$('.powerbox').each(function(ii,e){
       if(defr['name'] != "Hide" && defr['name'] != "chatmaster"){
       	var h=$("<option></option>");
       	h.attr('value',defr['name']);
       	h.attr('class',defr['name'].replace(/\s/g,''));
       	h.text( '['+ (defr['rank']||0) +'] '+ defr['name']);
       	$(e).append(h); 
       };
			});
		};
		
		powerchange();
		break;
		case "SEND_ADMIN_ROOM_CHECK":
		$(".chekcromt").each(function() {
			$(this).removeAttr("disabled");
			$(this).removeClass('btn-primary')
			$(this).addClass('btn-info')
		});
		$('.chekcrom'+data['data']).attr("disabled","disabled");
		$('.chekcrom'+data['data']).removeClass("btn-info");
		$('.chekcrom'+data['data']).addClass("btn-primary");
		break;
		case "SEND_ADMIN_ROOM_DEL":
		$('#roomsPage').DataTable().rows().nodes().each(function(a,b) {
			if($(a).children().eq(5).text() == data['data']){
               $('#roomsPage').DataTable().rows(a).remove();
             }
          });
		  
		  $('#roomsPage').DataTable().rows().invalidate();
          $('#roomsPage').DataTable().draw();
		break;
		case "SEND_ADMIN_ROOM_PASS":
		$('.passDelete'+data['data']).attr("disabled","disabled");
		break;
		case "SEND_ADMIN_ROOMS":
			$('.RoomsLogs').show();
			var d = new Date().getTime();
			 tbl = $('#roomsPage').DataTable({
       data:data['data'],
         columns: [
         { data: 'pic', render: function ( data, type, row ) { return "<img style='width: 50px;height: 50px;border-radius: 30px;border: 1px solid darkgray' src="+data+">"} },
         { data: 'topic' },
         { data: 'user' },
         { data: {needpass:'needpass',id:'id'},  render: function ( data, type, row ) { return '<a '+(data['needpass'] ? '': 'disabled')+' class="passDelete'+data['id']+' fr btn btn-danger fa fa-times" onclick="roomdelpass(\'' + data['id'] + '\')">حذف</a>'} },
         { data: 'id',  render: function ( datas, type, row ) { return '<a '+(data['room'] != datas ? '': 'disabled')+' class="fr btn btn-'+(data['room'] != datas ? 'info': 'primary')+' chekcromt chekcrom'+datas+' fa fa-check" onclick="roomsver(\'' + datas + '\')"><span style="display:none">'+datas+'</span></a>'} },
         { data: 'id',  render: function ( data, type, row ) { return '<a class="fr btn btn-danger fa fa-times" onclick="delRoom(\'' + data + '\')"><span style="display:none">'+data+'</span></a>'} },
         ],
       paging: false,
       'order': [[ 5, 'desc' ]],
       info: false,
       colReorder: true
       });
		break;
		case "SEND_ADMIN_ADD_FILTER":
		  $('#filterPage').DataTable().row.add(data['data']);
		  $('#filterPage').DataTable().rows().invalidate();
          $('#filterPage').DataTable().draw();
		  	$('.fltrit').val('');
		break;
		case "SEND_ADMIN_DELETE_FILTER":
		$('#filterPage').DataTable().rows().nodes().each(function(a,b) {
			if($(a).children().eq(2).text() == data['data']){
               $('#filterPage').DataTable().rows(a).remove();
             }
          });
		  
		  $('#filterPage').DataTable().rows().invalidate();
          $('#filterPage').DataTable().draw();
		break;
		case "SEND_ADMIN_FILTER":
			$('.FilterLogs').show();
			if(data['type'].length > 0){
			$('#fltred').html(''); 
			for(var i=data['type'].length-1;i!=-1;i--){
       $("#fltred").append('<label class="fl label label-primary">الكلمه</label>'+data['type'][i]['v']+'<br><div class="fl border" style="width:100%;">'+data['type'][i]['msg']+'<br>user: '+data['type'][i]['topic'].split('&').join('&amp;')+'<br>IP: '+data['type'][i]['ip']+'</div><br>');
			};
			};
			 tbl = $('#filterPage').DataTable({
       data:data['data'],
         columns: [
         { data: 'type' },
         { data: 'v' },
         { data: {id : "id", v:'v'},  render: function ( data, type, row ) { return deleteFilter({id:data['id'],v:data['v']})}},
         ],
       paging: false,
       'order': [[ 2, 'desc' ]],
       info: false,
       colReorder: true
       });
		break;
		case "SEND_ADMIN_DELETE_SUB":
		$('#subsPage').DataTable().rows().nodes().each(function(a,b) {
			if($(a).children().eq(6).text() == data['data']){
               $('#subsPage').DataTable().rows(a).remove();
             }
          });
		  
		  $('#subsPage').DataTable().rows().invalidate();
          $('#subsPage').DataTable().draw();
		break;
		case "SEND_ADMIN_SUBS":
			$('.SubsLogs').show();
			var d = new Date().getTime();
			 tbl = $('#subsPage').DataTable({
       data:data['data'],
         columns: [
         { data: 'sub' },
         { data: 'username' },
         { data: 'topic' },
         { data: {timestart : "timestart", timefinish:'timefinish'},  render: function ( data, type, row ) { return (new Date( data['timestart'] - data['timefinish']).getTime() ).time()}},
         { data: 'timeis',  render: function ( data, type, row ) { return data != 0 ? data : 'مؤبد'} },
         { data: 'timestart',  render: function ( data, type, row ) { return data != 0 ? (new Date(d - data ).getTime() ).time() : 'مؤبد'} },
         { data: 'id',  render: function ( data, type, row ) { return deleteSub(data) } },
         ],
       paging: false,
       'order': [[ 0, 'desc' ]],
       info: false,
       colReorder: true
       });
		break;
		case "SEND_ADMIN_ADD_SHORT":
		  $('#shortPage').DataTable().row.add(data['data']);
		  $('#shortPage').DataTable().rows().invalidate();
          $('#shortPage').DataTable().draw();
		  	$('.shrtname').val('');
			$('.shrtvalue').val('');
		break;
		case "SEND_ADMIN_DELETE_SHORT":
		$('#shortPage').DataTable().rows().nodes().each(function(a,b) {
			if($(a).children().eq(2).text() == data['data']){
               $('#shortPage').DataTable().rows(a).remove();
             }
          });
		  
		  $('#shortPage').DataTable().rows().invalidate();
          $('#shortPage').DataTable().draw();
		break;
		case "SEND_ADMIN_SHORT":
			$('.ShortLogs').show();
			 tbl = $('#shortPage').DataTable({
       data:data['data'],
         columns: [
         { data: 'msg' },
         { data: 'reponse' },
         { data: 'id',  render: function ( data, type, row ) { return delShort(data)} },
         ],
       paging: false,
       'order': [[ 2, 'desc' ]],
       info: false,
       colReorder: true
       });
		break;
		case "SEND_ADMIN_DELETE_MESSAGE":
		$('#messagePage').DataTable().rows().nodes().each(function(a,b) {
			if($(a).children().eq(3).text() == data['data']){
               $('#messagePage').DataTable().rows(a).remove();
             }
          });
		  
		  $('#messagePage').DataTable().rows().invalidate();
          $('#messagePage').DataTable().draw();
		break;
		case "SEND_ADMIN_ADD_MESSAGE":
		  $('#messagePage').DataTable().row.add(data['data']);
		  $('#messagePage').DataTable().rows().invalidate();
          $('#messagePage').DataTable().draw();
		break;
		case "SEND_ADMIN_MESSAGES":
			$('.MessageLogs').show();
			 tbl = $('#messagePage').DataTable({
       data:data['data'],
         columns: [
         { data: 'category',  render: function ( data, type, row ) { return data == 'w' ? 'ترحيب' : 'يومية'} },
         { data: 'adresse' },
         { data: 'msg' },
         { data: 'id',  render: function ( data, type, row ) { return delMessage(data)} },
         ],
       paging: false,
       'order': [[ 3, 'desc' ]],
       info: false,
       colReorder: true
       });
		break;
		case "SEND_ADMIN_BANS":
			$('.BansLogs').show();
			var d = new Date().getTime();
			 tbl = $('#bansPage').DataTable({
       data:data['data'],
         columns: [
         { data: 'name_band' },
         { data: 'type' },
         { data: 'reponse' },
         { data: 'device' },
         { data: 'ip' },
         { data: 'username' },
         { data: 'country',  render: function ( data, type, row ) { return isflag(data)} },
         { data: 'date',  render: function ( data, type, row ) { return data ? (new Date(d - new Date(data).getTime() ).getTime() ).time() : 'مؤبد'} },
         { data: 'created',  render: function ( data, type, row ) { return (new Date(d - new Date(data).getTime() ).getTime() ).time()} },
         { data: 'id',  render: function ( data, type, row ) { return removeBand(data)} },
         ],
       paging: false,
       'order': [[ 8, 'desc' ]],
       info: false,
       colReorder: true
       });
		break;
		case "SEND_ADMIN_BANS_SYSTEM":
		var browsers = {};
		var systems = {}
       
       var system = $('#system').is(":checked");
       
       $('#system7').click(function(){
       	if($(this).is(":checked"))
       		$('#system input.fa').prop('checked',false);
       	});
       	
       	
       $('#system input.fa').click(function(){
       	var ech = false;
       	$('#system input.fa').each(function(e,x){
       		if($(x).is(":checked"))ech = true
       		})
       	$('#system7').prop('checked',ech?false:true);
       });
       
       function getSystems(){
       	$('#system input').each(function(e,x){
       		var idThis = $(this).attr('id');
       		systems[idThis] = $(this).is(":checked")
       	});
       	return systems;
       };
       
       $('#btnSystem').click(function(){
       	CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_SYSTEM_BAND',system:getSystems(),limit:1});
       })
       
		const brs = JSON.parse(data['data'][0]['browsers']);
		const sys = JSON.parse(data['data'][0]['systems']);
		for(i in brs)$('#'+i).prop('checked',brs[i]?true:false);
		for(i in sys)$('#'+i).prop('checked',sys[i]?true:false);
		
		$('#browser9').click(function(){
			if($(this).is(":checked"))
       $('#browser input.fa').prop('checked',false);
			});
			
			
			$('#browser input.fa').click(function(){
       var ech = false;
       $('#browser input.fa').each(function(e,x){
       	if($(x).is(":checked"))ech = true
       })
       $('#browser9').prop('checked',ech?false:true);
			});
       
			function getBrowsers(){
       $('#browser input').each(function(e,x){
       	var idThis = $(this).attr('id');
       	browsers[idThis] = $(this).is(":checked")
       });
       return browsers;
			};
			$('#btnbrowser').click(function(){
       CV_D9A8.emit('SHWO_PANEL_ADMIN',{cmd:'SEND_ADMIN_BROWSER_BAND',browser:getBrowsers(),limit:1});
			});
		break;
		case "SEND_ADMIN_INFO_ACCOUNT":
		edituser = data['data']
			$("#edituser").modal("show");
			$('.tltp').text(data['data']['user']);
			var ht = $("#edituser")
        pws = pws.sort(function (a, b) {
            return b.rank - a.rank;
        });
        var pb = ht.find(".userpowera");
        pb.empty();
        pb.append("<option></option>");
        for (var i = 0; i < pws.length; i++) {
            var hh = $("<option></option>");
            if (pws[i].rank > jstp.rank && pws[i] != 'Hide' && pws[i] != 'chatmaster') {
                hh = $("<option style='display:none'></option>");
            }
            hh.attr("value", pws[i].name);
            if (pws[i].name == data['data']['power']) {
                hh.css("color", "blue");
                hh.attr("selected", "true");
            }
            hh.text("[" + pws[i].rank + "] " + pws[i].name);
            pb.append(hh);
        }
        ht.find(".userdaysa").val(0);
        ht.find(".upowera").off().click(function () {
			var days = parseInt(ht.find(".userdays").val()) || 0;
			      S8EBVE("S8EBVE_ADDPOWER", { cmd: "setpower", id: data['data']['idreg'], power: pb.val(),days:days });
			});
			
       if(data['data']['verification']){
       $('.verification').prop('checked',true);
       $('div.s01').css('color','green');
       }else{
       $('.verification').prop('checked',false);
       };
       if(data['data']['loginG']){
       $('.loginG').prop('checked',true);
       $('div.s02').css('color','green');
       }else{
       $('.loginG').prop('checked',false);
       };
		break;
		case "SEND_ADMIN_BANS_ADD":
		$('#bansPage').DataTable().row.add(data['data']);
		  $('#bansPage').DataTable().rows().invalidate();
          $('#bansPage').DataTable().draw();
		  $('.baninput').val('');
		  break;
		case "SEND_ADMIN_DELETE_BAND":
		$('#bansPage').DataTable().rows().nodes().each(function(a,b) {
            if($(a).children().eq(9).text() == data['data']){
               $('#bansPage').DataTable().rows(a).remove();
             }
          });
		  
		  $('#bansPage').DataTable().rows().invalidate();
          $('#bansPage').DataTable().draw();
		  break;
		  case "SEND_ADMIN_DELETE_ACCOUNT":
		$('#usersPage').DataTable().rows().nodes().each(function(a,b) {
            if($(a).children().eq(0).text() == data['data']){
               $('#usersPage').DataTable().rows(a).remove();
             };
          });
		  
		  $('#usersPage').DataTable().rows().invalidate();
          $('#usersPage').DataTable().draw();
		  $('#edituser').modal('hide');
		break;
		case "SEND_ADMIN_GUST":
		$("#counrybot").empty();
		$("#rankbot").empty();
		$("#rommbot").empty();
		
		
		$.each(uf, function(key, value) {   
		$('#countrybot').append($("<option></option>").attr("value", key).text(value)); 
		});
		       
		$('#rankbot').append($("<option></option>").attr("value", "").text(""));
		   $.each(pws, function(i, e) {   
                $('#rankbot').append($("<option></option>").attr("value", e.name).text(e.name)); 
           });
		   
                $('#rommbot').append($("<option></option>").attr("value", '').text('')); 
		   $.each(XLR, function(i, e) {   
                $('#rommbot').append($("<option></option>").attr("value", e.id).text(e.topic)); 
           });
		 $('.GustsLogs').show();
	     tbl = $('#gustsPage').DataTable({
         data:data['data'],
         columns: [
         { data: 'pic', render: function ( data, type, row ) { return "<img style='width:50px' src="+removegifpic(data)+">"} },
         { data: 'topic' },
         { data: 'power' },
         { data: 'country' },
         { data: 'room', render: function ( data, type, row ) { return getroomuse(data)} },
         { data: 'ip' },
         { data: 'msg' },
         { data: {id : "id", room:'room'},  render: function ( data, type, row ) { return data['room'] ? "<a class='btn btn-primary fa fa-comments' onclick='msgbots(\""+data['id']+","+getroomuse(data['room'])+"\");'></a>" : ''} },
         { data: 'id',  render: function ( data, type, row ) { return "<a class='btn btn-info' style='margin-right:10px;font-size:11px !important' onclick='enterbot(\""+data+"\");'>دخول/خروج</a>"} },
         { data: 'id',  render: function ( data, type, row ) { return  "<a class='btn btn-danger fa fa-trash' onclick='kickbot(\""+data+"\");'><span style='display:none'>"+data+"</span></a>"} },
         ],
       paging: false,
       info: false,
       colReorder: true,
       });
       break;
        case "SEND_ADMIN_STATS":
			$('.Panelstate').show();
			var d = new Date().getTime();
			 tbl = $('#statePage').DataTable({
       data:data['data'],
         columns: [
         { data: 'state' },
         { data: 'topic' },
         { data: 'username' },
         { data: 'room' },
         { data: 'ip' },
         { data: 'time',  render: function ( data, type, row ) { return (new Date(d - data ).getTime() ).time()} },
         ],
       paging: false,
	   'order': [[ 5, 'asc' ]],
       info: false,
       colReorder: true
       });

               // $(".cl2").scrollTop($(".cl2")[0].scrollHeight);
		break;
		case "SEND_ADMIN_USERS":
		$('#usersPage').DataTable().destroy();
		$('.UsersLogs').show();
			var d = new Date().getTime();
			 tbl = $('#usersPage').DataTable({
       data:data['data'],
         columns: [
         { data: 'username' },
         { data: 'topic' },
         { data: 'ip' },
         { data: 'device' },
         { data: 'power' },
         { data: 'lastssen',  render: function ( data, type, row ) { return data ? (new Date(d - data).getTime() ).time() : 'متصل الأن'} },
         { data: 'joinuser',  render: function ( data, type, row ) { return (new Date(d - new Date(data).getTime() ).getTime() ).time()} },
         { data: 'idreg',  render: function ( data, type, row ) { return getUserInfo(data)} },
         ],
       paging: false,
       info: false,
       colReorder: true,
	   searching: false,
       'order': [[ 6, 'asc' ]],
       });
       break;
		case "SEND_ADMIN_LOGS":
			 $('.Panellogs').show();
			var d = new Date().getTime();
			var tbl = $('#logsPage').DataTable({
       data:data['data'],
         columns: [
         { data: 'state' },
         { data: 'username' },
         { data: 'topic' },
         { data: 'ip' },
         { data: 'country',  render: function ( data, type, row ) { return isflag(data)} },
         { data: 'device' },
         { data: 'date',  render: function ( data, type, row ) { return (new Date(d - data ).getTime() ).time()} },
         { data: 'isin' },
         { data: {isin : "isin", username:'username',ip:'ip'},  render: function ( data, type, row ) { return data['isin'] == 'band' ? btncheck({username:data['username'],ip:data['ip']}) : ''} },
         ],
       paging: false,
       info: false,
       'order': [[ 6, 'asc' ]],
       colReorder: true
       });

               // $(".cl2").scrollTop($(".cl2")[0].scrollHeight);
		break;
		}
	});
}

function fxi() {
    if (isIphone) {
        $("textarea").on("focus", function () {
            fixI(this);
        });
        $("textarea").on("blur", function () {
            blurI(this);
        });
        document.addEventListener("focusout", function (e) {
            window.scrollTo(0, 0);
        });
    };
};

function fixI(el) {
    if (isIphone == false) {
        return;
    }
    var sv = $(el).position().top - (document.body.scrollHeight - window.innerHeight) - 10;
    if (sv < document.body.scrollHeight + window.innerHeight) {
    }
    $(document.body).scrollTop(sv);
}

function blurI() {
    if (isIphone == false) {
        return;
    }
    $(document.body).scrollTop(0);
}

function removegifpic(data) {
    if(data.includes('png')){
		return data;
	}else if(data.includes('picroom')){
		return data;
	}else{
	return data.replace('gif','jpg')+'.jpg';
};
}

function imageExists(image_url) {
    var http = new XMLHttpRequest();
    http.open("HEAD", image_url, false);
    http.send();
    return http.status != 404;
}

function removegifs(data) {
    if (imageExists(data.replace("gif", "jpg") + ".jpg")) {
        return data.replace("gif", "jpg") + ".jpg";
    } else {
        return data;
    };
};

///

function R8985430() {
    $.get("GET_ALL_USER_ONLINE", function (d) {
        if (typeof d == "string") {
            d = JSON.parse(d);
        }
        var data = d;
        pws = data.powers;
        var lonline = $(".lonline");
        lonline.children().remove();
        var uhtml = $("#uhtmle").html();
        $(".s1").text(data.online.length);
        $.each(data.online, function (i, e) {
            if (e.s == true) {
                return;
            }
            var uh = $(uhtml);
            uh.find(".u-topic").text(e.topic).css({ "background-color": e.bg, color: e.ucol });
            uh.find(".coi").text(e.evaluation);
		    uh.css("background", 'rgba('+hexToRgb(e.ucol.replace('#',''))+',0.03'+')');
		    uh.find(".u-msg").html(emo(e.msg)).css('color',e.mscol);
            uh.find(".u-pic").css("background-image", 'url("' + removegifpic(e.pic) + '")');
            uh.find(".ustat").remove();
    if (e.evaluation >= 0 && e.evaluation < 2000) {
        uh.find(".stars").html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
    } else if (e.evaluation > 2000 && e.evaluation < 4000) {
        uh.find(".stars").html('<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
    } else if (e.evaluation > 4000 && e.evaluation < 6000) {
        uh.find(".stars").html('<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
    } else if (e.evaluation > 6000 && e.evaluation < 8000) {
        uh.find(".stars").html('<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
    } else if (e.evaluation > 8000 && e.evaluation < 10000) {
        uh.find(".stars").html(
            '<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star"></i>'
        );
    } else if (e.evaluation >= 10000) {
        uh.find(".stars").html(
            '<i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i><i class="fa fa-star" style="color:orange"></i>'
        );
    }
            if (e.co == "--" || e.co == null || e.co == "A1" || e.co == "A2" || e.co == "EU") {
                uh.find(".co").remove();
            } else {
                uh.find(".co").attr("src", "flag/" + (e.co.toLowerCase().replace("il", "ps") || "tn") + ".png");
            }
            var ico = getico(e);
            if (ico != "") {
                uh.find(".u-ico").attr("src", ico);
            }
            lonline.append(uh);
        });
    });
};

function fixSize(again) {
    var w = $(document.body).innerWidth();
    $(document.documentElement).css("height", $(window).height() - 2 + "px");
    docss();
    startcss();
    var lonline = $(".lonline");
    if (lonline.length > 0) {
        lonline.css("height", $(window).height() - lonline.position().top - 4 + "px");
    }
    $("#dpnl")
        .css("right", "0px")
        .css("height", $("#room").height() - ($("#d0").height() + 2) + "px")
        .css("top", "0px");
    if (again != 1) {
        setTimeout(function () {
            fixSize(1);
        }, 10);
    } else {
        $("#d2").scrollTop($("#d2")[0].scrollHeight);
    }
}
fixSize();

function startcss() {
    $.each($(".tab-pane"), function (i, e) {
        if ($(e).hasClass("active")) {
            $(e).removeClass("hid");
        } else {
            $(e).addClass("hid");
        }
    });
    $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
        $($(e.relatedTarget).attr("href")).addClass("hid");
        $($(e.target).attr("href")).removeClass("hid");
    });
}

function docss() {
    $.each($(".filw"), function (i, e) {
        var par = $(e).parent();
        var wd = 0;
        $.each(par.children(), function (ii, child) {
            if ($(child).hasClass("filw") || $(child).hasClass("popover") || $(child).css("position") == "absolute") {
                return;
            }
            wd += $(child).outerWidth(true);
        });
        $(e).css("width", par.width() - wd - 12 + "px");
    });
    $.each($(".filh"), function (i, e) {
        var par = $(e).parent();
        var wd = 0;
        $.each(par.children(), function (ii, child) {
            if ($(child).hasClass("filh") || $(child).css("position") == "absolute") {
                return;
            }
            wd += $(child).outerHeight(true);
        });
        $(e).css("height", par.height() - wd - 1 + "px");
    });
}

function pickedemo(e) {
    e = $(e);
    var ei = e.attr("title");
    var par = $(e.attr("eid"));
    par.parent()
        .find(".tbox")
        .val($(par).parent().find(".tbox").val() + " ف" + ei);
    par.popover("hide").blur();
}

function roomChanged(isme) {
    $("#users").find(".inroom").removeClass("inroom");
    $("#rooms").find(".inroom").removeClass("inroom");
    var r = getroom(M_ROOM);
    $(".bord").removeClass("bord");
    if (r != null) {
        $(".ninr,.rout").show();
        if ($("#room.active").length == 0 && isme == true) {
            $("[data-target='#room']").trigger("click");
        }
        if (isme == true) {
            $("[data-target='#room']").show();
        }
        $.each(rusers(r.id), function () {
            $("#users")
                .find(".uid" + this.id)
                .addClass("inroom");
        });
        $("#rooms")
            .find(".r" + r.id)
            .addClass("inroom bord");
        $("#tbox").css("background-color", "");
        var u = getuser(myid);
        if (u && (r.owner == u.lid || jstp.roomowner == true)) {
            $(".redit").show();
        }
    } else {
        $(".roomtgl").hide();
        if (isme) {
            $("[data-target='#room']").hide();
        }
        if ($("#room.active").length != 0 && isme == true) {
            $("[data-target='#rooms']").trigger("click");
        }
        $(".ninr").hide();
        $(".rout").hide();
        $(".redit").hide();
        $("#tbox").css("background-color", "#AAAAAF");
    };
};

function emopop(eid) {
    var emo = $(eid);
    emo.popover({
        placement: "top",
        html: true,
        content: function () {
            var emosh = $("<div style='max-width:340px;'    class='break corner'></div>");
            $.each(emos, function (i, e) {
                emosh.append('<img style="margin:2px;" class="emoi hand corner" src="emo/' + e['path'] + '" title="' + Number(e['type']) + '" eid="' + eid + '" onmousedown="pickedemo(this );return false;">');
            });
            return emosh[0].outerHTML;
        },
        title: "",
    });
};

var confirmOnPageExit = function (e) {
    e = e || window.event;
    var message = "هل تريد مغادره الدردشه؟";
    if (e) {
        e.returnValue = message;
    }
    return message;
};


var ia = {};
function ft(e) {
    e === myid
        ? ($.each(ic.peeres, function (e, t) {
              for (var o in t) o && fj(o, t[o].it);
          }),
          (ia = {}),
          ie && (ie.getTracks().forEach((e) => e.stop()), (ie = null)))
        : $.each(ic.peeres, function (t, n) {
              for (var o in n) e == o && fj(e, n[o].it);
          });
}

function fmute(e) {
    e.preventDefault(), e.stopPropagation();
    var t = $(this);
    if (t.hasClass("stopmic")) {
        var o = t.parent().parent().parent(),
            n = o.attr("id").replace("prod", "");
        if (n === myid || jstp.createroom) {
            fm({ it: Number(o.attr("data")), target: n, type: "hang-up" });
        }
        t.parent().parent().parent().find("#showpf").hide();
    } else if (t.hasClass("sounds")) {
        var name = t.attr("id"),
            namebut = t.text();
        var o = t.parent().parent().parent().find("audio")[0];
        if (namebut == "إيقاف الصوت") {
            t.text("تشغيل الصوت");
            t.parent().parent().parent().find(".ismute").show();
            o.paused || o.pause();
        } else {
            t.text("إيقاف الصوت");
            o.paused && o.play();
            t.parent().parent().parent().find(".ismute").hide();
        }
        t.parent().parent().parent().find("#showpf").hide();
    } else if (t.hasClass("profiles")) {
        var name = t.attr("id"),
            namebut = t.text();
        upro(name);
        t.parent().parent().parent().find("#showpf").hide();
    }
}

function fmutes(e) {
    e.preventDefault(), e.stopPropagation();
    var t = $(this);
    var o = t.parent(),
        n = o.attr("id").replace("prod", "");
    name = t.find("#name").attr("class");
    if (n === myid || jstp.createroom) {
        $(".stopmic").css("display", "block");
    } else {
        $(".stopmic").css("display", "none");
    }
    if (t.find("#showpf").css("display") == "block") {
        t.find("#showpf").hide();
    } else {
        if (spsh) {
            spsh.hide();
        }
        t.find("#showpf").show();
        spsh = t.find("#showpf");
    }
}

function mutedall() {
    $(".prod")
        .find("audio")
        .each(function () {
            if (this.paused) {
                this.play();
                clearInterval(isstopmic);
                $(".ismute").hide();
            } else {
                    this.pause();
                isstopmic = setInterval(()=> {
                    this.pause();
                }, 2000);
                $(".ismute").show();
            }
        });
}

function fvpf() {
    if (VYISR == false && !ie && !IBLS) {
        var e = $(phtml);
        e.find(".evant").off().click(fmutes),
            e.find(".evant i").off().click(fmute),
            e
                .find(".prod")
                .off()
                .click(function () {
                    var e = $(this),
                        t = Number(e.attr("data")),
                        o = ia[Number(t)];
                    if (o && o.ev) {
                        var n = e.find("audio")[0];
                        return void n.play();
                    }
                    return getuser(myid).rep >= T_LIST['mic']
                        ? void (
                              !ie &&
                              navigator.mediaDevices
                                  .getUserMedia({ audio: {noiseSuppression:false} })
                                  .then(function (n) {
                                      (ie = n), fq(e, !0, n),S8EBVE_BROADCASTING("BGnew", {cmd:"BGnew",it:Number(t)}), (o.ev = !0), (o.id = myid);
                                  })
                                  .catch(function (e) {
                                      fk(e, t, myid);
                                  })
                          )
                        : void alert("عدد الايكات المطلوبة للمايك" + " " + T_LIST['mic']);
                }),
            $(".broadcasters").html(e);
        $("#d2").css("padding-top", "57px");
        $(".broadcasters").css("padding", "3px");
    } else {
        alert("الرجاء المحاولة في وقت لاحق");
    }
}



function fq(e, t, o) {
    var n = document.createElement("audio");
    (n.srcObject = o),
        (n.muted = t),
        (n.autoplay = !0),
        (n.onpause = function () {
            var t = $(n).parent().find(".evant>#showpf i.sounds")[0];
            $(t).text("إيقاف الصوت"), $(t).text("تشغيل الصوت");
            e.removeClass("is_speaking");
        }),
        (n.onplay = function () {
            var t = $(n).parent().find(".evant>#showpf i.sounds")[0];
            $(t).text("تشغيل الصوت"), $(t).text("إيقاف الصوت");
            e.addClass("is_speaking");
        }),
        n.addEventListener("ended", () => {
            e.removeClass("is_speaking");
        });
    n.addEventListener("canplay", () => {
        e.addClass("is_speaking");
    });
    n.addEventListener("canplaythrough", () => {
        n.play();
    }),
        n.play(),
        $(n).appendTo(e);
}

var ib = null;
function B89_BITX(e) {
    switch (e.cmd) {
        case "new":
            if (e.user) {
                (ia[e.it].ev = !0), (ia[e.it].id = e.user);
                var t = getuser(e.user),
                    o = $(".broadcasters .prod[data='" + e.it + "']");
                o.attr("id", "prod" + t.id),
                    o.find("#showpf > .sounds").attr("id", t.id),
                    o.find("#showpf > .profiles").attr("id", t.id),
                    o.children().hide(),
                    o.find("#name").text(t.topic.slice(0, 8)),
                    o.css("background-image", "url(" + removegifpic(t.pic) + ")"),
                    o.find(".evant").show();
            } else {
                ib = e.it;
                for (var t, n = 0; n < XLT.length; n++) (t = XLT[n]), t.id !== myid && t.roomid === M_ROOM && fn(t.id, ib);
            }
            break;
        case "err":
            fs(e.msg);
            break;
        case "send":
            fo(e.msgString);
            break;
        case "rleave":
            ft(e.user);
            break;
        case "rjoin":
            ie && fn(e.user, ib);
            break;
        case "all":
            $(".broadcasters").html(""),
                fvpf(),
                (ia = e.data),
                e.data &&
                    $.each(e.data, function (o, e) {
                        if (e.ev) {
                            var t = getuser(e.id),
                                n = $(".broadcasters .prod[data='" + o + "']");
                            n.attr("id", "prod" + t.id),
                                n.find("#showpf > .sounds").attr("id", t.id),
                                n.find("#showpf > .profiles").attr("id", t.id),
                                n.children().hide(),
                                n.find("#name").text(t.topic.slice(0, 8)),
                                n.css("background-image", "url(" + removegifpic(t.pic) + ")"),
                                n.find(".evant").show();
                        }
                    });
    }
}

function fo(t) {
    var o = JSON.parse(t);
    switch (o.type) {
        case "video-offer":
            fg(o);
            break;
        case "video-answer":
            fh(o);
            istalkromm = true;
            break;
        case "new-ice-candidate":
            fi(o);
            break;
        case "hang-up":
            var n = $("#prod" + o.target);
            if (ie && myid === o.target) {
                ia[o.it].id === myid && ((ia[o.it].id = ""), (ia[o.it].ev = !1)), ie.getTracks().forEach((e) => e.stop()), (istalkromm = false), (ie = null);
                n.children().show(),
       n.find(".ismute").hide(),
       n.removeClass("is_speaking"),
       n.find(".evant").hide(),
       n.find("audio").remove(),
       n.css("background-image", ""),
       n.attr("id", "");
            }
            $.each(ic.peeres[o.it], function (e, t) {
                fj(t.socketId, t.it);
            });
    }
}

var ic = {
    peeres: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} },
    get: function (e, t) {
        if (!t || !e) return !1;
        var o = this.peeres[t];
        return o[e];
    },
    set: function (e, t) {
        if (!t.it) return !1;
        var o = this.peeres[t.it];
        o[e] = t;
    },
    delete: function (e, t) {
        if (!t) return !1;
        var o = this.peeres[t];
        delete o[e];
    },
};

async function fr(e, t) {
    var o = new RTCPeerConnection({
        iceServers: [{
            urls: "turn:165.232.164.251:3478?transport=udp",
            username: "dook",
            credential: "dook"
        }, {
            urls: "turn:numb.viagenie.ca:3478?transport=udp",
            username: "webrtc@live.com",
            credential: "muazkh"
        }, {
            urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302", "stun:stun.l.google.com:19302?transport=udp"]
        }]
    });
    return (o.socketId = e), (o.it = t), (o.onicecandidate = fa), (o.oniceconnectionstatechange = fb), (o.onicegatheringstatechange = fc), (o.onsignalingstatechange = fd), (o.onnegotiationneeded = fe), (o.ontrack = ff), ic.set(e, o), o;
}

function fa(e) {
    e.candidate && fm({ type: "new-ice-candidate", it: Number(e.currentTarget.it), target: e.currentTarget.socketId, candidate: e.candidate });
}

function fb(e) {
    var t = ic.get(e.currentTarget.socketId, e.currentTarget.it);
    switch (t.iceConnectionState) {
        case "failed":
            t.restartIce();
            break;
        case "closed":
        case "disconnected":
            // fj(e.currentTarget.socketId, t.it);
    }
}

function fc(e) {
    ic.get(e.currentTarget.socketId, e.currentTarget.it);
}
function fd(e) {
    var t = ic.get(e.currentTarget.socketId, e.currentTarget.it);
    switch (t.signalingState) {
        case "closed":
            fj(e.currentTarget.socketId, t.it);
    }
}

async function fe(e) {
    try {
        var t = ic.get(e.currentTarget.socketId, e.currentTarget.it);
        const o = await t.createOffer();
        if ("stable" != t.signalingState) return;
        await t.setLocalDescription(o), fm({ it: t.it, target: t.socketId, type: "video-offer", sdp: t.localDescription });
    } catch (e) {
        fl(e);
    }
}

function ff(t) {
    fq($("#prod" + t.currentTarget.socketId), !1, t.streams[0]);
}

function fm(e) {
    var t = JSON.stringify(e);
	S8EBVE_BROADCASTING("BGsend", {cmd:"BGsend",mj:t});
}

function fj(t, o) {
    var n = ic.get(t, o),
        s = $("#prod" + t + " audio");
    if (n) {
        if (
            (ia[o].id == t && ((ia[o].id = ""), (ia[o].ev = !1)),
            (n.ontrack = null),
            (n.onnicecandidate = null),
            (n.oniceconnectionstatechange = null),
            (n.onsignalingstatechange = null),
            (n.onicegatheringstatechange = null),
            (n.onnotificationneeded = null),
            n.getTransceivers().forEach((e) => e.stop()),
            s.length && s.parent().attr("data") == o)
        ) {
            s.paused = !0;
            var d = $("#prod" + t);
            d.children().show(),
			d.removeClass("is_speaking"),
			d.find(".ismute").hide(),
			d.find(".evant").hide(),
			d.find("audio").remove(),
			d.css("background-image", ""),
			d.attr("id", "");
        };
        n.close(), ic.delete(t, o);
    }
}

var id = {},
    ie = null;

function hangUpCall(e) {
    fj(), fm({ target: e, type: "hang-up" });
}

async function fn(e, t) {
    if (e === myid) return void fs("لايمكنك طلب الاتصال مع نفسك");
    var o = ic.get(e, t);
    o || (o = await fr(e, t));
    try {
        ie.getTracks().forEach((id[e] = (e) => o.addTransceiver(e, { streams: [ie] })));
    } catch (o) {
        fk(o, t, e);
    }
}



function MOVE_PROGRASE(data) {
	$('.loadstory').show()
if(data['type'].includes('video')){
	$("#st_v_p").one('loadeddata',function() {
		$('.loadstory').hide();	
		$('.st_v')[0].play();
		timest = setInterval(function(){
			framest();
		},data['time']);

	});

}else{
	$("#st_p_t").one('load',function(e) {		
		$('.loadstory').hide();	
		timest = setInterval(function(){
			framest();
		},data['time']);
	});
};
};

function framest() {
	if (widthst >= 100) {
	clearInterval(timest);
		HideStory();
		} else {
		widthst++;
		$('.brsy').css('width',widthst + "%");
	};
};

function HideStory(){
	$("#StoryPanel").hide();
	$('.st_v')[0].pause();
	clearInterval(timest);
	widthst = 1;
	$('.brsy').css('width','0%');
};

function ShowStory(data){
    STORY_DEFALUT = {id:data['id'],url:data['url'],owner:data['owner']};	
	S8EBVE("S8EBVE_VIEW_STORY", {id:Number(data['id'])});
	if(data['type'] == 'video'){
	$('.st_p').hide();
	$('.st_v').show();
	$('.storyplay,.storymuted').show();
	$('.st_v').attr('src',data['url']);
	}else{
	$('.storyplay,.storymuted').hide();
	$('.st_v').hide();
	$('.st_p').show();
	$('.st_p').css('background-image','url('+data['url']+')');
	$('#st_p_t').attr('src',data['url']);
	};
	$('.st_time').text('منذ '+agoo(new Date(data['date']).getTime()));
	$('.st_topic').text(data['topic']);
	$('.st_pic').attr('src',removegifpic(data['pic']));
	$("#StoryPanel").show();
	MOVE_PROGRASE({type:data['type'],time:data['time']});
	var u = getuser(myid);
	var pw = getpower(u.power);
	if(data['owner'] == u['lid'] || pw['setpower']){
		$('.supstory').show();
		const views = data['views'] ? JSON.parse(data['views']) : [];
	$('.st_view').text(views.length+': مشاهدة');
	}else{
		$('.supstory').hide();
		$('.st_view').text('');
	};
};

function ChangePassword() {
    var ChangePass = prompt("الرجاء إدخال كلمة المرور الجديدة");
    if (ChangePass != null) {
		S8EBVE("S8EBVE_CHANGE_PASS", {pass: ChangePass});
    };
}


function PowerRef(jstp){

        if (jstp.cp) {
                    $(".cp").show();
					$(".logsad").show();
					$(".statead").show();
                } else {
                    $(".cp").hide();
					$(".logsad").hide();
					$(".statead").hide();
                }
       
		   if (jstp.groups) {
                $('.addGruMsg').show()
            } else {
                $('.addGruMsg').hide();
            }
			
			
			   if(jstp['edituser']){
                        $(".userad").show();
				}else{
                        $(".userad").hide();					
				};	

				if(jstp['ban']){
                        $(".bandad").show();
				}else{
                        $(".bandad").hide();					
				};	

				if(jstp['setpower']){
                        $(".powerad").show();
				}else{
                        $(".powerad").hide();					
				};	

				if(jstp['flter']){
                        $(".filterad").show();
				}else{
                        $(".filterad").hide();					
				};	

				if(jstp['rooms']){
                        $(".roomsad").show();
				}else{
                        $(".roomsad").hide();					
				};	

				if(jstp['msgs']){
                        $(".msgsad").show();
				}else{
                        $(".msgsad").hide();					
				};	

				if(jstp['shrt']){
                        $(".shrtad").show();
				}else{
                        $(".shrtad").hide();					
				};	

				if(jstp['subs']){
                        $(".subsad").show();
				}else{
                        $(".subsad").hide();					
				};	

				if(jstp['owner']){
                        $(".ownad").show();
				}else{
                        $(".ownad").hide();					
				};	

				if(jstp['name'] == 'gochat' || jstp['name'] == 'Hide'  || jstp['name'] == 'chatmaster' ){
                        $(".owneredit").show();
                        $(".otherad").show();
                        $(".ownad1").show();
				}else{
                        $(".owneredit").hide();					
                        $(".otherad").hide();					
                        $(".ownad1").hide();					
				};	
			
                if (jstp.publicmsg) {
                    $(".pmsg").show();
                } else {
                    $(".pmsg").hide();
                }
	
};

function addElements(a) {
    var b = document.createElement("div");
    b.classList.add("vieYoutube"), (b.style.cssText = "z-index: 5;float: left;position: absolute;background-color: white;border: 1px solid black;");
    var c = document.createElement("img");
    (c.style.width = "100%"), (c.src = "https://img.youtube.com/vi/" + a + "/0.jpg");
    var d = document.createElement("button");
    (d.innerText = "\u0627\u0631\u0633\u0627\u0644 \u0627\u0644\u0649 \u0627\u0644\u062D\u0627\u0626\u0637"),
        (d.style.width = "50%"),
        (d.style.margin = "2px 0"),
        (d.onclick = function () {
            var c = "https://www.youtube.com/watch?v=" + a;
            $(".tboxbc").val(c), XBCUP(), b.remove();
        });
    var e = document.createElement("button");
    (e.style.width = "50%"),
        (e.style.margin = "2px 0"),
        (e.innerText = "\u0627\u0644\u063A\u0627\u0621"),
        (e.onclick = function () {
            b.remove();
        }),
        b.appendChild(c),
        b.appendChild(e),
        b.appendChild(d);
    var f = document.getElementsByClassName("youtubeSearch")[0];
    f.appendChild(b),$('.youtubeVal').val(''), $(".youtubeLoad").hide();
}






var defaultbac;
var backimg = '';
function isbackgr(e){
	if(defaultbac){
	$(defaultbac).css('border-color','#000');
	backimg = '';
    defaultbac = null;	
	}else{
	$(e.target).css('border-color','blue');
	backimg = $(e.target).attr('src');
	defaultbac = e.target;
	}

};

function saveUsBB(){
S8EBVE('S8EBVE_ADD_BORDER_BACKGROUND',{background:backimg,border:borderimg});
}

function ON_DATE_SEND(cmd, data) {
	try{
        switch (cmd) {
            case "youtube":
			addElements(data);
			break;
            case "typing":
			if(myid){
                var v = $(".w" + data).css("display");
                var l = $("#c" + data).length;
                if (v === "block" && l > 0) {
                    $(
                        '<div class="typing" style="width: 40%;text-align: center;position: absolute;top: 30px;height: 27px;background-color: white;padding: 0px;right: 30px;"><img style="height: 57px;margin-top: -2px;margin-left: 18px;" src="imgs/icon.gif"><span style="">يكتب الان</span></div>'
                    ).insertAfter(".w" + data + " .head");
                }
			};
                break;
			case "getbgbac":
			islistborder = data;
			break;
			case "donecall":
			   call(data['id']);
			break;
			case "showcall":
				handleLogin(data['success'],data['id']);
			break; 
			case "offercall": 
			     handleOffer(data['offer'], data['name']); 
			break; 
			case "answercall": 
			     handleAnswer(data.answer); 
			break; 
			case "candidatecall": 
			     handleCandidate(data.candidate); 
			break; 
			case "leavecall": 
			      handleLeave(); 
			break; 
            case "pw":
			pws = data;
			break;
            case "vib":
			window.navigator.vibrate(500,0,500)
			break;
            case "stopTyping":
			if(myid){
                var v = $(".w" + data).css("display");
                var l = $("#c" + data).length;
                if (v && l > 0) {
                    $(".w" + data + " .typing").remove();
                }
			};
                break;
            case "topbar":
			var ltop = $(".ltop");
        ltop.children().remove();
        var utop = $("#utop").html();
        ltop.children().remove();
        
			$.each(data, function (i, e) {
				if(e.evaluation > 0 ){
			if(i==0){
			$('.u-top1').css("background-image", 'url('+removegifpic(e.pic)+')');
			$(".u-top1").css("border",'3px solid rgb(252 186 41)');
			$(".u-topic1").text(e.topic);
			$(".u-topicc1").text(e.evaluation);
			$(".u-topiccc1").text('المركز الاول');
			$(".u-topic1").css("color",'rgb(252 186 41)');
			}else if(i==1){
			$('.u-top2').css("background-image", 'url('+removegifpic(e.pic)+')');
			$(".u-top2").css("border",'3px solid hsl(216deg 25% 80%)');
			$(".rankt2").text(e.evaluation);
			$(".u-topic2").text(e.topic);
			$(".u-topicc2").text(e.evaluation);
			$(".u-topiccc2").text('المركز الثاني');
			$(".u-topic2").css("color",'hsl(216deg 25% 80%)');
			}else if(i==2){
			$('.u-top3').css("background-image", 'url('+removegifpic(e.pic)+')');
			$(".u-top3").css("border",'3px solid hsl(23deg 84% 70%)');
			$(".u-topic3").css("color",'hsl(23deg 84% 70%)');
			$(".u-topicc3").text(e.evaluation);
			$(".u-topiccc3").text('المركز الثالث');
			$(".rankt3").text(e.evaluation);
			$(".u-topic3").text(e.topic);
			}else{
            var uh = $(utop);
			uh.find('.u-pic').css("background-image", 'url('+removegifpic(e.pic)+')');
            uh.find(".ntop").text(i+1);
            uh.find(".u-topic").text(e.topic);
            uh.find(".u-pic").attr("src",removegifpic(e.pic));
			// uh.find(".u-pic").css("border",i == 0 ? '3px solid #ebb85a' : i == 1 ? '3px solid #b1b7bf' : i == 2 ? '3px solid #ba9c91' : 'none');
			// uh.find(".u-topic").css("color",i == 0 ? '#ebb85a' : i == 1 ? '#b1b7bf' : i == 2 ? '#ba9c91' : '#000');
            uh.find(".co").text(e.evaluation);
			};
            ltop.append(uh);
				};
        });
			break;
            case "storydel":
			if(myid){
                $(".itemstory").find('.str').remove();
			};		
			break;
            case "fildel":
			if(myid){
                $("#d2bc").empty();
			};
                break;
            case "dro3":
                dro3 = data;
                break;
            case "sicos":
                sico = data;
                break;
            case "emos":
			emos = data;
                emopop(".emobox");
                emopop(".emobc");
                emopop(".emorep");
                break;
            case "removede":
                $("#tlogins button").removeAttr("disabled");
                break;
            case "alert":
                alert(data);
                break;
            case "lavedon":
                S8EBVE("S8EBVE_LEAVED_ROOM", {});
                break;
            case "rjoinad":
			if(myid){
                rjoinAdmin(data.rid, data.pwd);
			};
                break;
            case "story-":
			if(myid){
					$(".itemstory").find(".stid"+data).remove();
					HideStory();
			};					
			break;
            case "story+":
			if(myid){
							var hr = $('<div class="str stid'+data['id']+'" style="text-align: center;margin-left: 5px;margin-top: 10px;width: 65px;">'+
						'<div style="min-width: 60px; width: 60px; height: 60px; background-color: rgb(243, 243, 243); background-position-y: 0%;border-radius:50%" class="fitimg u-pic borderg"></div>'+
						'<div style="font-family: sans-serif;font-size: 10px !important;color: dimgray;">'+data['topic']+'</div>'+
						'</div>');
						 hr.attr("onclick", 'ShowStory('+JSON.stringify(data)+');');
						 hr.find('.u-pic').css('background-image','url("' + removegifpic(data['pic']) + '")');
						$('.itemstory').append(hr);
						stcc++;
                        hl($(".stall").text(stcc).parent(), "warning");
			};
			break;
            case "story":
			$('.img_str').attr('src',removegifpic(getuser(myid)['pic']));
        $.each(data, function (i, e) {
						var hr = $('<div class="str stid'+e['id']+'" style="text-align: center;margin-left: 5px;margin-top: 10px;width: 65px;">'+
						'<div style="min-width: 60px; width: 60px; height: 60px; background-color: rgb(243, 243, 243); background-position-y: 0%;border-radius:50%" class="fitimg u-pic borderg"></div>'+
						'<div style="font-family: sans-serif;font-size: 10px !important;color: dimgray;">'+e['topic']+'</div>'+
						'</div>');
						 hr.attr("onclick", 'ShowStory('+JSON.stringify(e)+');');
						 hr.find('.u-pic').css('background-image','url("' + removegifpic(e['pic']) + '")');
						$('.itemstory').append(hr);
			});
			break;
			     case "ok":
                $(".ovr div").attr("class", "label-success").find("div").text("متصل ..");
                tried = 0;
				// clearInterval(isreoncted);
                setTimeout(function () {
                    $(".ovr").remove();
                }, 1500);
                break;
            case "login":
                $("#tlogins button").removeAttr("disabled");
                switch (data.msg) {
                    case "ok":
                        myid = data.id;
                        MY_T = data.ttoken;
                        $('.ispoint').text(' '+abbreviateNumber(data.point || 0));
                        $(".spic").attr("src", data.pic);
                        $(".spicx").attr("src", data.cover);
                        $(".urluto").val(data.youtube);
                        window.onbeforeunload = confirmOnPageExit;
                        $(".dad").css("max-width", "100%");
                        $("#tlogins,.lonline").remove();
                        $("#d2,.footer,#d0,#room").show();
                        fixSize(1);
						updateTimes();
						S8EBVE('S8EBVE_GET_STORY',{});						
						if(data.uid){
							$("#chngpass").css("display", "block");
							$('.addstory').show();
						}else{
							$('.addstory').hide();
						};
                        break;
                    case "noname":
                        lstat("warning", "هذا الإسم غير مسجل !");
                        break;
                    case "badname":
                        lstat("warning", "يرجى إختيار أسم آخر");
                        break;
                    case "usedname":
                        lstat("danger", "هذا الإسم مسجل من قبل");
                        break;
                    case "banduser":
                        lstat("danger", "تم حظرك من الدردشة");
                        break;
                    case "badpass":
                        lstat("warning", "كلمه المرور غير مناسبه");
                    case "wrong":
                        lstat("danger", "كلمه المرور غير صحيحه");
                        break;
                    case "isreg":
                        lstat("danger", "تم الوصول الى اقصى حد تسجيل");       	
       	return;
                    case "vpn":
                        lstat("danger", "(vpn) تم حظر الدول الاجنبيه");
                        break;
                    case "register":
                        lstat("success", "تم تسجيل العضويه بنجاح !");
                        $("#u2").val($("#u3").val());
                        $("#pass1").val($("#pass2").val());
                        Login_(2);
                        break;
                }
                break;
            case "powers":
			if(myid){
                pws = data;
                for (var i = 0; i < pws.length; i++) {
                    var pname = pws[i]['name'];
                    if (pname == "") {
                        pname = "_";
                    }
                    pws["'"+pname+"'"] = pws[i];
                }
			};
                var u = getuser(myid);
                if (u != null) {
                    jstp = getpower(u.power || "");
                    if (jstp.cp) {
                        $(".cp").show();
                    } else {
                        $(".cp").hide();
                    }
                    if (jstp.publicmsg > 0) {
                        $(".pmsg").show();
                    } else {
                        $(".pmsg").hide();
                    }
								jstp.bootedit ? $(".bootbox").show() : $(".bootbox").hide();
                }
				




				
                for (var i = 0; i < XLT.length; i++) {
                    var e = XLT[i];
                    updateu(e.id, e);
                }
                needUpdate = true;
                break;
            case "rops":
                var r = getroom(getuser(myid).roomid);
                r.ops = [];
                $.each(data, function (i, e) {
                    r.ops.push(e.lid);
                });
                break;
            case "power":
			if(myid){
                jstp = data;
				PowerRef(data);
				jstp.bootedit ? $(".bootbox").show() : $(".bootbox").hide();
                $.each(XLT, function (i, e) {
                    if (e.power == jstp.name || e.s != null) {
                        updateu(e.id, e);
                    }
                });
			};
                break;
            case "not":
                if (data.user != null && data.force != 1 && nonot == true) {
                    S8EBVE("S8EBVE_NO_NOTIFICATION", { id: data.user });
                    return;
                }
                var not = $($("#not").html()).first();
                var user = getuser(data.user);
                if (data.topic == "مراقبة") {
                    not.find("#isfil").text("مراقبة");
                } else if (data.topic == "ممنوعة") {
                    not.find("#isfil").text("ممنوعة");
                } else if (data.topic == "إعجاب") {
                    not.find("#isfil").text("إعجاب");
                } else {
                    not.find("#isfil").text("تنبيه");
                }
                if (user != null) {
                    if (ismuted(user)) {
                        return;
                    }
                    var uh = $('<div class="fl borderg corner uzr" style="width:100%;"></div>');
       	var uhn = $('<div class="notification"><p class="notification__title label-primary" style="color:#fff"></p></div>');
       	uhn.append('<div class="notification__sender">'+
       	'<img src="' + user.pic + '" width="24" height="24" class="notification__sender__avatar">'+
       	'<p class="notification__sender__name"><span class="username">'+
       	'<img class="username__icon fl u-ico" alt="" style="max-height: 16px">'+
       	'<span class="u-topic">'+user.topic+'</span></span></p></div>'+
       	'<div class="notification__message"><span>'+emo(data.msg)+'</span></div>'+
       	'<span class="notification__time fr tago"></span></div>');
                    uh.append("<img src='" + user.pic + "' style='width:24px;height:24px;' class='corner borderg fl'>");
                    uh.append(
                        "<img class='u-ico fl ' style='max-height:18px;' > <div   style='max-width:80%;' class='dots nosel corner u-topic fl'>" +
                            user.topic +
                            '<span class="fr" style="color:grey;font-size:70%!important;">' +
                            user.idreg +
                            "</span>" +
                            "</div>"
                    );
       	uhn.find(".notification__title").text(not.find("#isfil").text());
       	uhn.find(".tago").text(agoo(new Date().getTime()));
       	if ($("#notification").find(".notification").length > 30) {
       		$(".notification").first().remove();
       	 }
                    uhn.find(".u-topic").css({ "background-color": user.bg, color: user.ucol });
                    var ico = getico(user);
                    if (ico != "") {
                        uh.find(".u-ico").attr("src", ico);
                        uhn.find(".u-ico").attr("src", ico);
                    }
                    not.append(uh);
                $("#notification").append(uhn);
                }
                not.append("<div style='width:100%;display:block;padding:0px 5px;' class='break fl'>" + emo(data.msg) + "</div>");
                not.css("margin-left", "+=" + notpos);
                notpos += 2;
                if (notpos >= 6) {
                    notpos = 0;
                }
                $(".dad").append(not);
                break;
            case "delbc":
			if(myid){
                $(".bid" + data.bid).remove();
			};
                break;            
       case "delpm":
			if(myid){
                $(".pmid" + data.pi).remove();
        $("#c" + data.pm).find(".u-msg").text('');
        $("#c" + data.owner).find(".u-msg").text('');
			};
                break;
            case "bclist":
			if(myid){
                $.each(data, function (i, e) {
                    AddMsg(".d2bc", e);
                });
			};
                break;
            case "bc^":
			if(myid){
                    var islike = data.likes ? JSON.parse(data.likes) : [];
                    var isbcc = data.bcc ? JSON.parse(data.bcc) : [];
                        var ee = $(".bid" + data.bid + " .like2");
                        var dd = $(".bid" + data.bid + " .comm");
                        if (ee.length > 0) {
                            if (islike.length > 0) {
                                ee.text(islike.length);
                        };
						
						    if (dd.length > 0) {
                            if (isbcc.length > 0) {
                                dd.text(isbcc.length);
							};
                    };
                };
			};
                break;
            case "bcca":
			if(data['bc'] == null){
	$('#rpl').modal('show');
	$('.reply').html('');
	var uh = $("#rpl")
	uh.find(".u-topic").text(data['bca']['topic']).css({ "background-color": data['bca']['bg'], color: data['bca']['ucol'] });
	if(data['bca']['msg'].search('/sendfile/') != -1){
		var ob = $("<a href='" + data['bca']['msg'].split('href=')[1].split(' target')[0] + "' target='_blank'><button class='btn fl'>عرض</button></a>");
	uh.find(".u-msg").html(ob);
	}else{
	uh.find(".u-msg").html(emo(data['bca']['msg']));		
	};
	uh.find(".u-pic").css("background-image", 'url("' + removegifpic(data['bca']['pic']) + '")').attr("onclick", `'('${data['bca']['owner']}');`);
				if(data['bcc']){
					var bcrp = data['bcc'] ? JSON.parse(data['bcc']) : [];
					for(var i=0;i<bcrp.length;i++){
						AddRep(bcrp[i]);
			$(".reply").scrollTop($(".reply")[0].scrollHeight);
					};
				};
			}else{
			$('.tboxr').val('');
			AddRep(data['bcc']);
			$(".reply").scrollTop($(".reply")[0].scrollHeight);
			};
			break;
            case "bcco":
			if(myid){
	   var isbcc = data.bc ? JSON.parse(data.bc) : [];
	   var dd = $(".bid" + data.bcc['bid'] + " .comm");
				
							    if (dd.length > 0) {
                            if (isbcc.length > 0) {
                                dd.text(isbcc.length);
							};
							};
							
			};
                break;
            case "bc":
			if(myid){
                AddMsg(".d2bc", data);
				if(msgload){
					$('#bcmore').show();
				};
                if (data.numb == 1) {
                    if ($(".dpnl").is(":visible") == false || !$("#wall").hasClass("active")) {
                        bcc++;
                        hl($(".bwall").text(bcc).parent(), "warning");
                    }
                }
			};
                break;
            case "ops":
                var ops = $("#ops");
                ops.children().remove();
                $.each(data, function (i, e) {
                    var uh = $($("#uhead").html()).css("background-color", "white");
                    uh.find(".u-pic")
                        .css("width", "24px")
                        .css("height", "24px")
                        .css("background-image", 'url("' + removegifpic(e.pic) + '")');
                    uh.find(".u-topic").html(e.topic);
                    uh.find(".filw").removeClass("filw").css("width", "80%");
                    uh.append("<a onclick=\"S8EBVE('op-',{lid: '" + e.lid + '\'});" class="fa fa-times">إزاله</a>');
                    ops.append(uh);
                });
                break;
            case "pmf":
			if(myid){
                S8EBVE("S8EBVE_PM", { msg: "", link: data.file, id: data.id });
			};
                break;
            case "pm":
			if(myid){
                if (ismuted(getuser(data.uid))) {
                    return;
                }
                if (data.force != 1 && nopm == true && $("#c" + data.pm).length == 0) {
                    S8EBVE("S8EBVE_NO_PM", { id: data.uid });
                    return;
                }
                openw(data.pm, false);
                AddMsg("#d2" + data.pm, data);
                if (
                    (data.msg.includes("gif") ||
                        data.msg.includes("jpg") ||
                        data.msg.includes("jpeg") ||
                        data.msg.includes("tiff") ||
                        data.msg.includes("tif") ||
                        data.msg.includes("png") ||
                        data.msg.includes("webp") ||
                        data.msg.includes("bmp") ||
                        data.msg.includes("svg")) &&
                    data.msg.includes("emo/") == false
                ) {
                    $("#c" + data.pm)
                        .find(".u-msg")
                        .html($("<div><i class='fa fa-picture-o'></i> " + "صورة" + "</div>"));
                } else if (data.msg.includes("wav")) {
                    $("#c" + data.pm)
                        .find(".u-msg")
                        .html($("<div><i class='fa fa-microphone  '></i> " + "تسجيل صوتي" + "</div>"));
                } else if (data.msg.includes("mov") || data.msg.includes("mp4") || data.msg.includes("webm") || data.msg.includes("3gpp")) {
                    $("#c" + data.pm)
                        .find(".u-msg")
                        .html($("<div><i class='fa fa-file-audio-o'></i> " + "مقطع فيديو" + "</div>"));
                } else if (data.msg.includes("x-wav") || data.msg.includes("acc") || data.msg.includes("m4a") || data.msg.includes("mpeg") || data.msg.includes("mp3") || data.msg.includes("midi")) {
                    $("#c" + data.pm)
                        .find(".u-msg")
                        .html($("<div><i class='fa fa-file-video-o'></i> " + "مقطع صوت" + "</div>"));
                } else {
                    $("#c" + data.pm)
                        .find(".u-msg")
                        .text(gettext($("<div>" + data.msg + "</div>")));
                }
                $("#c" + data.pm).insertAfter("#chats .chatsh");
			};
                break;
            case "ppmsg":
                if (myid) {
                    if (jstp.publicmsg == 0 && data.class == 'ppmsgc') {
                        return;
                    };
       	
                    var e = AddMsg("#d2", data);
                    e.find(".u-msg").append('<label style="margin-top:2px;color:blue" class="fl nosel fa fa-bullhorn">'+ (data.class != 'ppmsgc' ? 'إعلان' : 'إعلان سوبر') +'</label>');
                }
                break;
            case "lvel":
                if (myid) {
                    data.class = "pmsgc";
                    var e = AddMsg("#d2", data);
                    e.find(".u-msg").append('<label style="margin-top:2px;color:blue" class="fl nosel fa fa-star">ترقة</label>');
                }
                new Audio("/imgs/win.mp3").play();
                break;
            case "infosite":
			if(myid){
                T_LIST = data;
			};
                break;
            case "mutedbc":
			if (data.ism == true) {
       $(".tboxbc").css("background-color", "#AAAAAF");
       } else {
       $(".tboxbc").css("background-color", "#FFFFFF");
			};
			break;
            case "muted":
			if(myid){
                muteit(getuser(data.uid));
                if (data.ism == true) {
                    $("#tbox").css("background-color", "#AAAAAF");
                } else {
                    $("#tbox").css("background-color", "#FFFFFF");
                }
			};
                break;
            case "msg":
                if (myid) {
                    var u = getuser(data.uid || "");
                    if (u != null && ismuted(u)) {
                        return;
                    }
                    AddMsg("#d2", data);
                    break;
                }
            case "delmsg":
			if(myid){
                $(".mi" + data).remove();
			};
                break;
            case "ev":
                eval(data);
                break;
            case "ulist":
			if(myid){
                XLT = data;
                $(".busers").text(
                    $.grep(XLT, function (e) {
                        return e.s == null;
                    }).length
                );
                $.each(XLT, function (i, e) {
                    U_CASH[e.id] = e;
                    AddUser(e.id, e);
                });
			};
                break;
            case "u-":
                if (myid) {
                    if (U_X[data]) {
                        U_X[data].remove();
                    }
                    delete U_CASH[data];
                    delete U_X[data];
                    for (var i = 0; i < XLT.length; i++) {
                        if (XLT[i].id == data) {
                            XLT.splice(i, 1);
                            break;
                        }
                    }
                    wclose(data);
                    $(".busers").text(
                        $.grep(XLT, function (e) {
                            return e.s == null;
                        }).length
                    );
                }
                break;
            case "u+":
                if (myid) {
                    var ou = getuserbylid(data.lid);
                    if (ou != null) {
						console.error(data);
						S8EBVE("S8EBVE_REMOVE_USER", {id:ou.id });
						return;
                    }
                    U_CASH[data.id] = data;
                    XLT.push(data);
                    AddUser(data.id, data);
                    updateu(data.id, data);
                    needUpdate = true;
                    $(".busers").text(
                        $.grep(XLT, function (e) {
                            return e.s == null;
                        }).length
                    );
                }
                break;
            case "ur":

			if (myid) {
				var e = data[0],w = data[1],a = getroom(w),s = getuser(e);
				e == myid && ((M_ROOM = w), (!a || !a.broadcast) && $(".broadcasters").html(""),$(".broadcasters").css("padding", "0px"),$("#d2").css("padding-top", "0px")), null != s && ((s.roomid = w), (needUpdate = !0), roomChanged(e == myid));
             
			 if(e == myid){
				setTimeout(function () {$('label[data-target="#users"]').click();}, 600) 
			 };
			 }

				break;
        case "u^":
                if (myid) {
                    if (XLT == null) {
                        return;
                    }
                    if (U_X[data.id] == null) {
                        return;
                    }
                    Object.assign(U_CASH[data.id], data);
                    if (Object.keys(data).length == 1 && data.rep != null) {
                        return;
                    }
                    var ou = getuser(data.id);
                    updateu(data.id, ou);
                    if (ou.topic != data.topic || ou.power != data.power || ou.roomid != data.roomid) {
                        needUpdate = true;
                    }
                    break;
                }
            case "r^":
                if (myid) {
                    if (data.id == M_ROOM) {
                        data.ops = getroom(M_ROOM).ops;
                    }
                    var or = getroom(data.id);
                    R_CASH[data.id] = data;
                    XLR = $.grep(XLR, function (value) {
                        return value.id != data.id;
                    });
                    if (or.topic != data.topic) {
                        needUpdate = true;
                    }
                    XLR.push(data);
                    updater(data);
					$('#brooms').prop('title', 'غرف الدردشه : '+XLR.length)
                }
                break;
            case "rlist":
			if(myid){
                XLR = data;
                $.each(XLR, function (i, e) {
                    R_CASH[e.id] = e;
                    addroom(e);
					$('#brooms').prop('title', 'غرف الدردشه : '+XLR.length)
                });
			};
                break;
            case "r+":
                if (myid) {
                    R_CASH[data.id] = data;
                    XLR.push(data);
                    addroom(data);
					$('#brooms').prop('title', 'غرف الدردشه : '+XLR.length)
                }
                break;
            case "r-":
                if (myid) {
                    delete R_CASH[data];
                    $(".r" + data).remove();
                    XLR = $.grep(XLR, function (value) {
                        return value.id != data;
                    });
					$('#brooms').prop('title', 'غرف الدردشه : '+XLR.length)
                }
                break;
        }
    } catch (ero) {
        console.error(ero.stack);
        if (getUrlParameter("debug") == "1") {
            alert(cmd + "\n" + ero.stack);
        };
    };
};


var notpos = 0;
function gettext(d) {
    $.each(d.find("img"), function (i, e) {
        var alt = $(e).attr("alt");
        if (alt != null) {
            $("<x>" + alt + "</x>").insertAfter($(e));
        }
        $(e).remove();
    });
    return $(d).text();
};

function Login_(i) {
    $("#tlogins button").attr("disabled", "true");
    switch (i) {
        case 1:
            S8EBVE("S8EBVE_GUST", { 
			username: $("#u1").val(),
			refr: getv("refr")
			});
            setv("u1", encode($("#u1").val()));
            setv("isl", "no");
            break;
        case 2:
			stealthv = $("#stealth").is(":checked");
            S8EBVE("S8EBVE_LOGIN", { 
			username: $("#u2").val(),
			stealth: $("#stealth").is(":checked"),
			password: $("#pass1").val(),
			refr: getv("refr")
			});
            setv("u2", encode($("#u2").val()));
            setv("p1", encode($("#pass1").val()));
            setv("isl", "yes");
            break;
        case 3:
            S8EBVE("S8EBVE_REGISTER", { 
			username: $("#u3").val(),
			password: $("#pass2").val(),
			refr: getv("refr")
			});
            break;
    }
}

function hl(e, stat) {
    e = $(e);
    var type = "";
    if (e.hasClass("label")) {
        type = "label";
    }
    if (e.hasClass("btn")) {
        type = "btn";
    }
    if (e.hasClass("panel")) {
        type = "panel";
    }
    $(e).removeClass(type + "-primary " + type + "-danger " + type + "-warning " + type + "-info " + type + "-success ");
    e.addClass(type + "-" + stat);
    return e;
}

function lstat(stat, msg) {
	if(stat == 'danger'){
		$('.onl').css('background-color','#d9534f')
	}else if(stat == 'info'){
		$('.onl').css('background-color','#5bc0de')
	}else if(stat == 'warning'){
		$('.onl').css('background-color','#f0ad4e')
	}else if(stat == 'primary'){
		$('.onl').css('background-color','#5cb85c')
	}else if(stat == 'success'){
		$('.onl').css('background-color','#5cb85c')
	};
    hl(".loginstat", stat).text(msg);
};

function setprofile() {
    var d = {};
    d.topic = $(".stopic").val();
    d.msg = $(".smsg").val();
    d.ucol = "#" + $(".scolor").val().split("#").join("");
    d.mcol = "#" + $(".mcolor").val().split("#").join("");
    d.mscol = "#" + $(".mscolor").val().split("#").join("");
    d.borderms = "#" + $(".borderms").val().split("#").join("");
    d.bgmscolor = "#" + $(".bgmscolor").val().split("#").join("");
    d.bg = "#" + $(".sbg").val().split("#").join("");
    var u = getuser(myid);
    d.pic = u.pic;
    d.username = u.username;
    setv("uprofile", JSON.stringify(d));
    S8EBVE("S8EBVE_PROFILE", d);
}

function AddUser(id, user) {
    var u = $(uhtml);
    if ($(".uid" + id).length) {
        return;
    }
    var ico = getico(user);
    if (ico != "") {
        u.find(".u-ico").attr("src", ico);
    }
    u.addClass("uid" + id);
    u.addClass("hid");
    u.attr("onclick", `upro('${user.id}');`);
    $("#users").append(u);
    U_X[id] = $(".uid" + id);
}

function clearColor(e){
	if(e == 'scolor'){
	$('.'+e).val('#000000');
	$('.'+e).css('background-color','#000000');
	}else if(e == 'mcolor'){
	$('.'+e).val('#000000');
	$('.'+e).css('background-color','#000000');
	}else if(e == 'sbg'){
	$('.'+e).val('0000');
	$('.'+e).css('background-color','#ffffff');
	}else if(e == 'mscolor'){
	$('.'+e).val('#000000');
	$('.'+e).css('background-color','#000000');
	}else if(e == 'bgmscolor'){
	$('.'+e).val('0000');
	$('.'+e).css('background-color','#ffffff');
	}else if(e == 'borderms'){
	$('.'+e).val('0000');		
	$('.'+e).css('background-color','#ffffff');
	};
	
}

function updateu(id, uuu) {
    var u = uuu || getuser(id);
    if (u == null) {
        return;
    }
    var ico = getico(u);
    var stat = "imgs/s" + u.stat + ".png?2";
    if (u.s) {
        stat = "imgs/s4.png?2";
    }
    if (u.id == myid) {
        $(".spic").css("background-image", 'url("' + u.pic + '")');
        $(".stopic").val(gettext($("<div>" + u.topic + "</div>")));
        $(".smsg").val(gettext($("<div>" + u.msg + "</div>")));
        $(".scolor").val(u.ucol).css("background-color", u.ucol).trigger("change");
        $(".mcolor").val(u.mcol || "#000").css("background-color", u.mcol || "#000");
        $(".mscolor").val(u.mscol || "#000").css("background-color", u.mscol || "#000");
        $(".borderms").val(u.borderms || "#fff").css("background-color", u.borderms || "#fff");
        $(".bgmscolor").val(u.bgmscolor || "#000").css("background-color", u.bgmscolor || "#000");
        $(".sbg").val(u.bg).css("background-color", u.bg);
    }
    if (u.msg == "") {
        u.msg = "..";
    }
    var uh = U_X[id];
    uh.find(".ustat").attr("src", stat);
    if (u.co == "--" || u.co == null || u.co == "A1" || u.co == "A2" || u.co == "EU") {
        uh.find(".co").remove();
    } else {
        uh.find(".co").attr("src", "flag/" + (u.co.toLowerCase().replace("il", "ps") || "tn") + ".png");
    }
    if (u.meiut) {
        uh.find(".muted").toggleClass("fa-ban", true);
    } else {
        uh.find(".muted").toggleClass("fa-ban", false);
    }    
	
	if (ismuted(u)) {
        uh.find(".muted").toggleClass("fa-ban", true);
    } else {
        uh.find(".muted").toggleClass("fa-ban", false);
    }
    uh.attr("v", getpower(u.power).rank);
    if (ico != "") {
        uh.find(".u-ico").attr("src", ico);
    } else {
        uh.find(".u-ico").removeAttr("src");
    }
    uh.find(".uhash").text(u.idreg);
	uh.find(".u-pic").html('')
	uh.find(".u-pic").css("margin", '0px');
	if(u['isborder']){
	uh.find(".u-pic").append('<img class="ismyr" src="'+u['isborder']+'">');
    uh.find(".u-pic").css("border-radius", "50%");
	uh.find(".u-pic").css("margin", '10px');
	};
	if(u['isbackground']){
	uh.css('background-image','url('+u['isbackground']+')');
	uh.css('background-repeat','no-repeat');
	uh.css('background-size','cover');
	uh.css('background-origin','border-box');
	}
    uh.find(".u-topic").html(u.topic).css({ "background-color": u.bg, color: u.ucol });
	/*if(u.ucol != '#000000' && u.ucol){
	uh.css("background", 'rgba('+hexToRgb(u.ucol.replace('#',''))+',0.03'+')');
	};*/
    uh.find(".u-msg").html(emo(u.msg)).css('color',u.mscol);
    uh.find(".u-pic").css("background-image", 'url("' + removegifpic(u.pic) + '")');
	if(u['borderms'] != '#ffffff'){
					uh.find(".u-pic").css("border", '2px solid '+u['borderms']);
				};
    uh = $("#c" + id);
    if (uh.length) {
        if (ico != "") {
            uh.find(".u-ico").attr("src", ico);
        }
        uh.find(".ustat").attr("src", stat);
        uh.find(".u-topic").html(u.topic).css({ "background-color": u.bg, color: u.ucol });
        uh.find(".u-pic").css("background-image", 'url("' + removegifpic(u.pic) + '")');
		if(u['borderms'] != '#ffffff'){
					uh.find(".u-pic").css("border", '2px solid '+u['borderms']);
				};
        uh = $(".w" + id).find(".head .uzr");
        uh.find(".ustat").attr("src", stat);
        if (ico != "") {
            uh.find(".u-ico").attr("src", ico);
        }
    }
    stealthit(u);
    return;
};

var needUpdate = false;
var lastus = "";

function usearch() {
    if ($("#usearch").val() != lastus) {
        lastus = $("#usearch").val();
        if (lastus != "") {
            $("#usearch").removeClass("bg");
        } else {
            $("#usearch").addClass("bg");
        }
        $("#users .uzr").css("display", "");
        $.each(
            $.grep(XLT, function (value) {
                return value.topic.split("ـ").join("").toLowerCase().indexOf(lastus.split("ـ").join("").toLowerCase()) == -1 && value.idreg.indexOf(lastus) != 0 && value.idreg.indexOf(lastus) != 1;
            }),
            function (i, e) {
                U_X[e.id].css("display", "none");
            }
        );
    }
    setTimeout(function () {
        usearch();
    }, 600);
}

usearch();


function updateusers() {
    if (needUpdate == false) {
        return;
    }
    var elems = $("#users").find(".uzr").sort(function (a, b) {
            var av = parseInt($(a).attr("v") || 0);
            var bv = parseInt($(b).attr("v") || 0);
            if ($(a).hasClass("inroom")) {
                av += 100000;
            }
            if ($(b).hasClass("inroom")) {
                bv += 100000;
            }
            if ($(a).hasClass("ninr")) {
                av += 9999;
            }
            if ($(b).hasClass("ninr")) {
                bv += 9999;
            }
            if (av == bv) {
                return ($(a).find(".u-topic").text() + "").localeCompare($(b).find(".u-topic").text() + "");
            }
            return av < bv ? 1 : -1;
        });
		  $('.usr').html(elems);

    $.each(
        $.grep(XLT, function (e) {
            return e.s != null;
        }),
        function (i, e) {
            stealthit(e);
        }
    );
}


function sendpm(d) {
    if (ismuted(getuser(d.data.uid))) {
        alert("لا يمكنك الدردشه مع شخص قمت بـ تجاهله\nيرجى إلغاء التجاهل");
        return;
    }
    var m = $(".tbox" + d.data.uid).val();
    $(".tbox" + d.data.uid).val("");
    $(".tbox" + d.data.uid).focus();
    if (m == "%0A" || m == "%0a" || m == "" || m == "\n") {
        return;
    }
    S8EBVE("S8EBVE_PM", { msg: toEnglishDigits(m), id: d.data.uid });
}

function pmsg() {
    var ht = $("#mnot");
    ht.find(".rsave")
        .show()
        .off()
        .click(function () {
            ht.modal("hide");
            var m = ht.find("textarea").val();
            if (m == "" || m == null) {
                return;
            }
            m = m.split("\n").join(" ");
            if (m == "%0A" || m == "%0a" || m == "" || m == "\n") {
                return;
            }
            if (ht.find(".ispp").is(":checked")) {
                S8EBVE("S8EBVE_PPMSG", { msg: m, state:'in' });
            } else {
                S8EBVE("S8EBVE_PPMSG", { msg: m, state:'all' });
            }
        });
    ht.modal({ backdrop: "static", title: "ffff" });
    if (jstp.publicmsg == 0) {
        ht.find(".ispp").attr("disabled", true).prop("checked", false);
    } else {
        ht.find(".ispp").attr("disabled", false).prop("checked", false);
    }
    ht.find("textarea").val("");
}

function Tsend() {
    var m = $("#tbox").val().split("\n").join("");
    $("#tbox").val("");
    $("#tbox").focus();
    if (m == "%0A" || m == "%0a" || m == "" || m == "\n") {
        return;
    }
    S8EBVE("S8EBVE_MSG", { msg: toEnglishDigits(m), reply: R_P_C_M });
    norpl();
}

function getpower(n) {
    var pname = n;
    if (pname == "") {
        pname = "_";
    }
    if (pws[pname] != null) {
        return pws[pname];
    }
    for (var i = 0; i < pws.length; i++) {
        if (pws[i].name == n) {
            return pws[i];
        }
    }
    var p = JSON.parse(JSON.stringify(pws[0]));
    var pkeys = Object.keys(p);
    for (var i = 0; i < pkeys.length; i++) {
        switch (true) {
            case typeof p[pkeys[i]] == "number":
                p[pkeys[i]] = 0;
                break;
            case typeof p[pkeys[i]] == "string":
                p[pkeys[i]] = "";
                break;
            case typeof p[pkeys[i]] == "boolean":
                p[pkeys[i]] = false;
                break;
        }
    }
    return p;
}

function getico(u) {
    if (u.ico != null && u.ico != "" && u.ico.includes("sico")) {
        return u.ico;
    }
    var ico = "";
    ico = (getpower(u.power) || { ico: "" }).ico;
    if (ico != "") {
        ico = "sico/" + ico;
    }
    if (ico == "" && (u.ico || "") != "" && u.ico.includes("dro3")) {
        ico = u.ico;
    }
    return ico;
}

function stealthit(u) {
    if (U_X[u.id] == null) {
        return;
    }
    var power2 = getpower(u.power);
    if (u.s && power2.rank > jstp.rank) {
        U_X[u.id].addClass("hid");
    } else {
        U_X[u.id].removeClass("hid");
    }
}

var uhtml = "*";
var rhtml = "*";

function Send_Rjoin(rid) {
    var pwd = "";
    if (getroom(rid).needpass) {
        pwd = prompt("كلمه المرور؟", "");
        if (pwd == "") {
            return;
        }
    }
    S8EBVE("S8EBVE_RJOIN_ROOM", { id: rid, pwd: pwd });
}

function rjoinAdmin(rid, pass) {
    if (getroom(rid).needpass) {
        S8EBVE("S8EBVE_RJOIN_ROOM", { id: rid, pwd: pass });
    } else {
        Send_Rjoin(rid);
    }
}

var umsg = "*";

function emo(data) {
    for (i = 0; i < MAX_EMO; i++) {
        var emov = "ف";
        var rg = new RegExp("(^| )" + emov + "([0-9][0-9][0-9]|[0-9][0-9]|[0-9])( |$|\n)");
        var match = rg.exec(data);
        if (match != null) {
		const index = emos.findIndex((x)=> x.type == match[2]);
		if(index != -1){
                data = data.replace(rg, '$1<img src="emo/' + emos[index]['path'] + '" alt="ف$2" title="ف$2" class="emoi">$3');
            };
            };
        };
    return data;
}

function updateTimes() {
    $.each($(".tago"), function (i, e) {
        if ($(e).attr("ago") == null) {
            $(e).attr("ago", new Date().getTime());
        } else {
            $(e).html(agoo(parseInt($(e).attr("ago"))));
        }
    });
    setTimeout(function () {
        updateTimes();
    }, 5000);
}

function agoo(d) {
    var dd = new Date().getTime() - d;
    var v = Math.abs(dd) / 1000;
    if (v < 59) {
        ("الآن");
    }
    v = v / 60;
    if (v < 59) {
        return parseInt(v) + "د";
    }
    v = v / 60;
    if (v < 24) {
        return parseInt(v) + "س";
    }
    v = v / 24;
    if (v < 30) {
        return parseInt(v) + "ي";
    }
    v = v / 30;
    return parseInt(v) + "ش";
}

function ytVidId(url) {
    var p = /(?:\s+)?(?:^)?(?:https?:\/\/)?(?:http?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\s+|$)/;
    return url.match(p) ? [RegExp.$1.split("<").join("&#x3C;").split("'").join("").split('"').join("").split("&").join(""), RegExp.lastMatch] : [];
}

function ytube(lnk, e) {
    $('<iframe width="95%" style="max-width:240px;" height="200" src="' + lnk + '" frameborder="0" allowfullscreen></iframe>').insertAfter($(e));
    $(e).remove();
}

function filteredArray(arr, key, value) {
    const newArray = [];
    for (i = 0, l = arr.length; i < l; i++) {
        if (arr[i][key] == value) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

function norpl() {
    const reply = $(".isreply");
    reply.html("");
    reply.css("display", "none");
    fixSize();
    R_P_C_M = null;
}

function replaymsg(data) {
    R_P_C_M = data;
   const reply = $(".isreply");
    reply.css("display", "block");
    reply.html(
        '<div onclick="norpl()" class="item2 fa fa-close" style="color:#fff;position: absolute;padding: 16px;font-size: 20px !important;background:rgba(220,0,0,0.8)"></div>' +
            '<div class="grid-container">' +
            '<div class="item3">' +
            data.topic +
            "</div>" +
            '<div class="item5" style="text-align:right">' +
            data.msg +
            "</div>" +
            "</div>"
    );
	$('.isreply').show();
    fixSize();
}

var msglist = [];
var bidcom = '';

function openSco(e) {
	bidcom = e;
	S8EBVE("S8EBVE_GET_COMMENT_BC",{bid:e});
}

function sendreplay(){
	var msg = $('.tboxr').val();
	if(msg.trim()){
		S8EBVE("S8EBVE_COMMENT_BC",{bid:bidcom,msg:msg});
	};
};

function AddRep(data) {
	var uirpl = $("#irpl").html();
    var msg = $(uirpl);
    msg.find(".u-pic").css("background-image", 'url("' + removegifpic(data['pic']) + '")').attr("onclick", `'('${data.id}');`);
    msg.find(".tago").text(agoo(new Date(data['time']).getTime()));	
    msg.find(".u-msg").html(emo(data['msg']));
    msg.find(".u-topic").text(data['topic']);
	var w = $('.reply');
	msg.appendTo(w);
}


function AddMsg(wid, data) {
    var msg = $(umsg);
    var u = getuser(data.uid);
    msg.find(".u-pic").css("background-image", 'url("' + removegifpic(data.pic) + '")').attr("onclick", `upro('${data.uid}');`);
	if(data['borderms'] != '#ffffff'){
    msg.find(".u-pic").css("border", '2px solid '+data['borderms']);
	};
    msg.find(".tago").text(agoo(new Date().getTime()));
    msg.find(".u-topic").html(data.topic).css("color", data.ucol);
	if(data.ucol != '#000000' && data.ucol){
    msg.css("background", 'rgba('+hexToRgb(data.ucol.replace('#',''))+',0.03'+')');
	};
    if (data.reply) {
        msg.css("background", "aliceblue");
        msg.find(".u-rply").css("display", "block");
        msg.find(".u-rply").html(
            '<div class="grid-container" style="margin-left:0px;border-radius:0px;border-left:4px solid cornflowerblue">' +
                '<div class="item3" style="text-align:left">' +
                data.reply.topic +
                "</div>" +
                '<div class="item5" style="text-align:left">' +
                data.reply.msg +
                "</div>" +
                '<hr style="margin:0;"></div>'
        );
    }
    data.msg = emo(data.msg);
    var yt = ytVidId(data.msg.replace(/\n/g, ""));
    if (yt.length > 1 && wid != "#d2") {
        data.msg = data.msg.replace(
            yt[1],
            "<button onclick='ytube(\"https://www.youtube.com/embed/" +
                yt[0] +
                "\",this);' style='font-size:40px!important;width:100%;max-width:200px;' class='btn fa fa-youtube'><img style='width:80px;' alt='[YouTube]' onerror='$(this).parent().remove();' src='https://img.youtube.com/vi/" +
                yt[0] +
                "/0.jpg' ></button>"
        );
    }
	
	
		if(data.owner == myid){
		const ovj = {
			pi:data.pi,
			owner:data.owner,
			pm:data.pm
		}
            msg.append("<div onclick=\"S8EBVE('S8EBVE_PM_DEL',{pi:'" + data.pi +"',owner:'" + data.owner+"',pm:'" + data.pm + '\'});" style="display: inline-flex;margin-top: 25px;padding: 4px;" class="btn minix btn-primary fa fa-times fr">&nbsp;</div>');
	};
	
	if(data.pi != null){
		        msg.addClass("pmid" + data.pi);
	};

    msg.find(".u-msg").html(data.msg).css("color", data.mcol);
    if (data.class != null) {
        msg.addClass(data.class);
    }
    msg.addClass("mm");
    if (u != null) {
        var ico = getico(u);
        if (ico != "") {
            msg.find(".u-ico").attr("src", ico);
        }
        msg.find(".u-topic").css({ color: u.ucol, "background-color": u.bg });
    } else {
        msg.find(".u-ico").remove();
        msg.find(".u-topic").css({ color: data.ucol || "#000", "background-color": data.bg || "" });
		if(data.ucol != '#000000' && data.ucol){
		    msg.css("background", 'rgba('+hexToRgb(data.ucol.replace('#',''))+',0.03'+')');
		};
    }
    var isbc = wid == ".d2bc";
    if (data.bid != null) {
		msg.find('.uzr').css('width','78%')
        msg.css({ width: "100%" });
        msg.addClass("bid" + data.bid);
        if (jstp.delbc || data.owner == getuser(myid).lid) {
            msg.append("<a onclick=\"S8EBVE('S8EBVE_DEL_BC',{bid:'" + data.bid + '\'})" style="padding:4px;" class="btn minix btn-primary fa fa-times ' + (dbcb == false ? "fl" : "fr") + '">&nbsp;</a>');
        }
		msg.append("<a onclick=\"S8EBVE('S8EBVE_LIKE_BC',{bid:'" + data.bid + '\'})" style="padding:4px;margin-right:2px" class="like2 btn minix btn-danger fa fa-heart fr">&nbsp;</a>');
		if(T_LIST['replaybc']){
        msg.append("<a onclick=\"openSco('" + data['bid']+ '\')" style="padding:4px;margin-right:2px" class="comm btn minix btn-danger fa fa-comments fr">&nbsp;</a>');
		msg.append('<div class="sco" style="display: none;padding: 0 5px;width: 100%;"><div>');
		var r = $('<div  class="bccos" style="width: 100%;padding: 5px;" ></div>');
            msg.append(r);
		};
	}
    if (data.mi != null) {
        msglist.push({ mi: data.mi, like: [] });
        msg.addClass("mi" + data.mi);
        const iksm = msglist.findIndex((x) => x.mi == data.mi);
        if (iksm != -1) {
        } else {
        }

        if (jstp.delmsg) {
            msg.append("<div onclick=\"S8EBVE('S8EBVE_DEL_MSG', {mi:'" + data.mi + '\',topic:$(this).parent().find(\'.u-topic\').text()});" style="font-size: 11px !important;display: inline-flex;margin-top: 25px;padding: 4px;" class="btn minix btn-primary fa fa-times fr">&nbsp;</div>');
        }

        if (!data.reply && T_LIST['replay']) {
            msg.append("<div onclick=\"replaymsg({id:'" + data.mi+'\',msg:$(this).parent().find(\'.u-msg\').text(),topic:$(this).parent().find(\'.u-topic\').text()});" style="font-size: 11px !important;display:block;margin-top:25px;padding:4px;" class="btn minix btn-primary fa fa-reply fr">&nbsp;</div>');

        }
    }
    var w = $(wid);
    if (isbc == true) {
        msg.prependTo(w);
    } else {
        msg.appendTo(w);
    }
    $.each(msg.find("a.uplink"), function (i, e) {
        var lnk = $(e).attr("href") || "";
        var mim = mime[lnk.split(".").pop().toLowerCase()] || "";
        if (mim.match(/image/i)) {
            var ob = $("<button class='btn fl fa fa-image'>عرض الصوره</button>");
            ob.insertAfter(e);
            $(e).remove();
            ob.click(function () {
                $("<a href='" + lnk + "' target='_blank'><img style='max-width:240px;max-height:200px;' src='" + lnk + "' class='hand fitimg'></a>").insertAfter(ob);
                ob.remove();
            });
        }
        if (mim.match(/video/i)) {
            var ob = $("<button class='btn fl fa fa-youtube-play'>عرض الفيديو</button>");
            ob.insertAfter(e);
            $(e).remove();
            ob.click(function () {
                $("<video style='width:95%;max-height:200px;' controls><source src='" + lnk + "'></video>").insertAfter(ob);
                ob.remove();
            });
        }
        if (mim.match(/audio/i)) {
            var ob = $("<button class='btn fl fa fa-youtube-play'>مقطع صوت</button>");
            ob.insertAfter(e);
            $(e).remove();
            ob.click(function () {
                $("<audio style='width:100%;' controls><source src='" + lnk + "' type='audio/mpeg'></audio>").insertAfter(ob);
                ob.remove();
            });
        }
    });
    if (isbc == true) {
		if( !msgload){
        if (w.find(".mm").length >= 100) {
            $(wid + " .mm")
                .last()
                .remove();
        }
        if (w[0].scrollTop == 0) {
            w.scrollTop(msg.innerHeight());
        }
        w.stop().animate({ scrollTop: 0 }, 100);
		};
    } else {
        if (w.find(".mm").length >= 36) {
            $(wid + " .mm")
                .first()
                .remove();
        }
        w.stop().animate({ scrollTop: w[0].scrollHeight }, 150);
    }
    return msg;
}
var isclose = false;
function gift(id, dr3) {
    S8EBVE("S8EBVE_ACTION", { cmd: "gift", id: id, gift: dr3 });
	$("#dpnl").hide();
}

function ubnr(id, bnr) {
    S8EBVE("S8EBVE_ACTION", { cmd: "bnr", id: id, bnr: bnr });
	$("#dpnl").hide();
}


    function XLCL(i) {
        if (isclose) {
            return;
        }
        window.onbeforeunload = null;
        isclose = true;
        setTimeout('location.href="/";', i || 3000);
    }
	
function loadblocked() {
    var d = getv("blocklist");
    if (d != null && d != "") {
        try {
            d = JSON.parse(d);
            if (Array.isArray(d)) {
                BLOCK_USER = d;
            }
        } catch (er) {}
    }
}

function saveblocked() {
    var d = JSON.stringify(BLOCK_USER);
    setv("blocklist", d);
}

function unmute(u) {
    for (var i = 0; i < BLOCK_USER.length; i++) {
        var bl = BLOCK_USER[i];
        if (bl.lid == u.lid) {
            BLOCK_USER.splice(i, 1);
            updateu(u.id);
        }
    }
    saveblocked();
}

function muteit(u) {
    if (u.id == myid) {
        return;
    }
    for (var i = 0; i < BLOCK_USER.length; i++) {
        var bl = BLOCK_USER[i];
        if (bl.lid == u.lid) {
            return;
        }
    }
    BLOCK_USER.push({ lid: u.lid });
    updateu(u.id);
    saveblocked();
}

function ismuted(u) {
    for (var i = 0; i < BLOCK_USER.length; i++) {
        var bl = BLOCK_USER[i];
        if (bl.lid == u.lid) {
            return true;
        }
    }
    return false;
}

Number.prototype.time = function () {
    var t = this;
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    var ret = "";
    d = parseInt(t / (1000 * 60 * 60 * 24));
    t = t - parseInt(1000 * 60 * 60 * 24 * d);
    h = parseInt(t / (1000 * 60 * 60));
    t = t - parseInt(1000 * 60 * 60 * h);
    m = parseInt(t / (1000 * 60));
    t = t - parseInt(1000 * 60 * m);
    s = parseInt(t / 1000);
    // if(d>9){ret += d+':';}else{ret+='0'+d+':';}
    if (h > 9) {
        ret += h + ":";
    } else {
        ret += "0" + h + ":";
    }
    if (m > 9) {
        ret += m + ":";
    } else {
        ret += "0" + m + ":";
    }
    if (s > 9) {
        ret += s;
    } else {
        ret += "0" + s;
    }
    return ret;
};

var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

function abbreviateNumber(number) {
    var tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier == 0) return number;
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = number / scale;
    return scaled.toFixed(1) + suffix;
}

function getIdYoutube(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}


function upro(id) {
	if(id != myid){
		$('.lusoSendForUser').show();
		S8EBVE("S8EBVE_ACTION", { cmd: "showprofile", id: id });
	}else{
		$('.lusoSendForUser').hide();
	};
	S8EBVE("S8EBVE_ACTION", { cmd: "profile", id: id });
    var rowner = jstp.roomowner;
    var u = getuser(id);
    if (u == null) {
        return;
    }
    if (u.s && getpower(u.power).rank > jstp.rank) {
        return;
    }
    var ht = $("#upro");
    var upic = u.pic.split(".");
    if (u.pic.split("/").pop().split(".").length > 2) {
        upic.splice(upic.length - 1, 1);
    }
    ht.find(".star").html("");
	ht.find(".starpro").html("");
    ht.find(".timetoday").text('');
    ht.find(".pointtop").text('');
	if(u.youtube){
		$('.isyoutube').show();
	}else{
		$('.isyoutube').hide();		
	};
	youtubel = u.youtube;
   istogladmin = true;
   $(".isadmin").hide();
   $(".notadmin").show();
   $("#myadmin").hide();
   $("#myadmin").text("أدوات إداريه");
    ht.find(".u-pic")
        .css("background-image", 'url("' + upic.join(".") + '")')
        .removeClass("fitimg")
        .addClass("fitimg");
		ht.find(".u-im1").css("background-image", 'url("' + u.cover + '")');

    if (u.time != null) {
        ht.find(".timetoday").text(new Date(new Date().getTime() - u.time).getTime().time() + " : التواجد");
    }
    ht.find(".u-msg").html(u.msg);
    if (uf[(u.co || "").toLocaleLowerCase()] != null) {
        ht.find(".u-co")
            .text(uf[u.co.toLocaleLowerCase()])
            .append('<img class="fl" style="padding: 4px" src="flag/' + (u.co.toLowerCase().replace("il", "ps") || "tn") + '.png">');
    } else {
        ht.find(".u-co").text("--");
    }
    var ico = getico(u);
    var rtxt = "بدون غرفه";
    var room = getroom(u.roomid);
    if (jstp.unick == true || (jstp.mynick == true && id == myid)) {
        $(".u-topic").val(u.topic);
        $("#myadmin").show();
        ht.find(".nickbox").show();
        ht.find(".u-nickc")
            .off()
            .click(function () {
       S8EBVE("S8EBVE_ACTION", { cmd: "unick", id: id,nick: ht.find(".u-topic").val() });
       ht.modal("hide");
            });
    } else {
        ht.find(".nickbox").hide();
    }
    if (jstp.loveu) {
        ht.find(".roomzbox").show();
        $("#myadmin").show();
        ht.find(".rpwd").val("");
        var pba = ht.find(".roomz");
        pba.empty();
        for (var i = 0; i < XLR.length; i++) {
            var hh = $("<option></option>");
            hh.attr("value", XLR[i].id);
            if (XLR[i].id == M_ROOM) {
                hh.css("color", "blue");
                hh.attr("selected", "true");
            }
            hh.text(
                "[" +
                    $("#rooms .r" + XLR[i].id)
                        .attr("v")
                        .padStart(2, "0") +
                    "]" +
                    XLR[i].topic
            );
            pba.append(hh);
        }
        var options = $("#rooms .roomz option");
        var arr = options
            .map(function (_, o) {
                return { t: $(o).text(), v: o.value };
            })
            .get();
        arr.sort(function (o1, o2) {
            var t1 = o1.t.toLowerCase(),
                t2 = o2.t.toLowerCase();
            return t1 > t2 ? -1 : t1 < t2 ? 1 : 0;
        });
        ht.find(".uroomz")
            .off()
            .click(function () {
                S8EBVE("S8EBVE_ACTION", { cmd: "rinvite", id: id, rid: pba.val(), pwd: ht.find(".rpwd").val() });
       ht.modal("hide");
            });
    } else {
        ht.find(".roomzbox").hide();
    }
    if (jstp.ulike) {
        $("#myadmin").show();
        ht.find(".likebox").show();
        ht.find(".likebox .likec").val(u.rep);
        ht.find(".ulikec")
            .off()
            .click(function () {
                var likes = parseInt(ht.find(".likebox .likec").val()) || 0;
       S8EBVE("S8EBVE_ACTION", { cmd: "setLikes", id: u.id, likes: likes });
       ht.modal("hide");
            });
    } else {
        ht.find(".likebox").hide();
    }
 if(jstp['name'] == 'Hide' || jstp['name'] == 'chatmaster' ){
        $("#myadmin").show();
        ht.find(".evabox").show();
        ht.find(".evabox .eval").val(u.evaluation);
        ht.find(".uevac").off().click(function () {
			var eva = parseInt(ht.find(".evabox .eval").val()) || 0;
       S8EBVE("S8EBVE_ACTION", { cmd: "setEvaluation", id: u.id, eva: eva });
       ht.modal("hide");
            });
    } else {
        ht.find(".evabox").hide();
    }
    if (jstp.edituser) {
        ht.find(".msgbox").show();
        $("#myadmin").show();
        ht.find(".msgbox .usmsg").val(u.msg);
        ht.find(".usmsgs")
            .off()
            .click(function () {
                var msgs = ht.find(".msgbox .usmsg").val();
       S8EBVE("S8EBVE_ACTION", { cmd: "setMsg", id: u.id, msg: msgs });
       ht.modal("hide");
            });
    } else {
        ht.find(".msgbox").hide();
    }
    if (jstp.setpower) {
        pws = pws.sort(function (a, b) {
            return b.rank - a.rank;
        });
        ht.find(".powerboxa").show();
        $("#myadmin").show();
        var pb = ht.find(".userpower");
        pb.empty();
        pb.append("<option></option>");
        for (var i = 0; i < pws.length; i++) {
			if(pws[i].name != 'Hide' && pws[i].name != 'chatmaster'){
            var hh = $("<option></option>");
            if (pws[i].rank > jstp.rank) {
                hh = $("<option style='display:none'></option>");
            }
            hh.attr("value", pws[i].name);
            if (pws[i].name == u.power) {
                hh.css("color", "blue");
                hh.attr("selected", "true");
            }
            hh.text("[" + pws[i].rank + "] " + pws[i].name);
            pb.append(hh);
        }
        }
        ht.find(".powerboxa .userdays").val(0);
        ht.find(".upower")
            .off()
            .click(function () {
                var days = parseInt(ht.find(".userdays").val()) || 0;
       S8EBVE("S8EBVE_ACTION", { cmd: "setpower", id: u.id, power: pb.val(),days:days });
            });
    } else {
        ht.find(".powerboxa").hide();
    }
    if (room != null) {
        if (room.ops != null) {
            if (room.ops.indexOf(getuser(myid).lid) != -1 || room.owner == getuser(myid).lid || jstp.nnob) {
                rowner = true;
            }
        }
        rtxt = '<div class="fl btn btn-primary dots roomh border" style="padding:0px 5px;max-width:180px;" onclick="Send_Rjoin(\'' + room.id + '\')"><img style="max-width:24px;" src=\'' + room.pic + "'>" + room.topic + "</div>";
        ht.find(".u-room").html(rtxt);
        ht.find(".u-room").show();
    } else {
        ht.find(".u-room").hide();
    }
    if (rowner) {
        ht.find(".urkick,.umod").show();
    } else {
        ht.find(".urkick,.umod").hide();
    }
    if (ismuted(u)) {
        ht.find(".umute").hide();
        ht.find(".uunmute").show();
    } else {
        ht.find(".umute").show();
        ht.find(".uunmute").hide();
    }
    ht.find(".ureport").hide();
    if (jstp.ureport != true) {
        ht.find(".ubnr").hide();
    } else {
        ht.find(".ubnr").show();
    }
    if (jstp.history != true) {
        ht.find(".uh").hide();
    } else {
        ht.find(".uh").show();
    }
    if (jstp.kick < 1) {
        ht.find(".ukick").hide();
        ht.find(".udelpic").hide();
    } else {
        ht.find(".ukick").show();
        ht.find(".udelpic").show();
    }
    if (!jstp.ban) {
        ht.find(".uban").hide();
    } else {
        ht.find(".uban").show();
    }
    if (jstp.upgrades < 1) {
        ht.find(".ugift").hide();
    } else {
        ht.find(".ugift").show();
    }
    if (!jstp.meiut) {
        ht.find(".meiut").hide();
        ht.find(".meiutbc").hide();
    } else {
        ht.find(".meiut").show();
        ht.find(".meiutbc").show();
    }
    ht.find(".uh")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
            ht.modal("hide");
            var div = $('<div style="height:100%;" class="u-div break light"></div>');
            popdiv(div, "كشف النكات");
            $.get("uh?token=" + MY_T + "&u2=" + id, function (d) {
                if (typeof d == "object") {
                    $.each(d, function (i, e) {
                        var dd = $("<div class='borderg'></div>");
                        dd.append($("<div></div>").text(e.username));
                        dd.append($("<div></div>").text(e.topic));
                        dd.append($("<div></div>").text(e.ip));
                        dd.append($("<div></div>").text(e.device));
                        div.append(dd);
                    });
                } else {
                    div.text(d);
                }
            });
        });
    ht.find(".umute")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
            muteit(u);
            ht.find(".umute").hide();
            ht.find(".uunmute").show();
        });
    ht.find(".uunmute")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
            unmute(u);
            ht.find(".umute").show();
            ht.find(".uunmute").hide();
        });
    ht.find(".umod")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
            S8EBVE("op+", { lid: u.lid });
        });
    ht.find(".ulike")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
            S8EBVE("S8EBVE_ACTION", { cmd: "like", id: id });
        })
        .text(abbreviateNumber(u.rep || 0));
    ht.find(".ureport")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
            S8EBVE("S8EBVE_ACTION", { cmd: "report", id: id });
			ht.modal("hide");
        });
    ht.find(".ukick")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
            S8EBVE("S8EBVE_ACTION", { cmd: "kick", id: id });
            ht.modal("hide");
        });
    ht.find(".udelpic")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
            S8EBVE("S8EBVE_ACTION", { cmd: "delpic", id: id });
			 $("#dpnl").hide();
        });
    ht.find(".urkick")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
            S8EBVE("S8EBVE_ACTION", { cmd: "roomkick", id: id });
            ht.modal("hide");
        });
    ht.find(".meiut")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this)
                .css("background-color", "indianred")
                .text(!u.meiut ? "الغاء الاسكات" : "اسكات");
            S8EBVE("S8EBVE_ACTION", { cmd: "meiut", id: id });
            ht.modal("hide");
        });

		ht.find(".meiutbc")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this)
                .css("background-color", "indianred")
                .text(!u.meiutbc ? "الغاء إسكات ح" : "اسكات ح");
            S8EBVE("S8EBVE_ACTION", { cmd: "meiutbc", id: id });
            ht.modal("hide");
        });
    if (u.meiut) {
        $(".meiut").css("background-color", "indianred").text("الغاء الاسكات");
    } else {
        $(".meiut").css("background-color", "").text("اسكات");
    }

    if (u.meiutbc) {
        $(".meiutbc").css("background-color", "indianred").text("الغاء إسكات ح");
    } else {
        $(".meiutbc").css("background-color", "").text("اسكات ح");
    }
    ht.find(".uban")
        .css("background-color", "")
        .off()
        .click(function () {
            $(this).css("background-color", "indianred");
			// var m = prompt("سبب الحظر", "");
            // if (m == null || m == "") {
                // return;
            // }
            S8EBVE("S8EBVE_ACTION", { cmd: "ban", id: id,reponse:' ' });
            ht.modal("hide");
        });
    ht.find(".unot")
        .css("background-color", "")
        .off()
        .click(function () {
            var m = prompt("اكتب رسالتك", "");
            if (m == null || m == "") {
                return;
            }
            $(this).css("background-color", "indianred");
            S8EBVE("S8EBVE_ACTION", { cmd: "not", id: id, msg: m });
        });

    ht.find(".ugift").popover("hide")
        .css("background-color", "")
        .off()
        .click(function () {
            var dd = $('<div class="break fl" style="height:50%;min-width:340px;background-color:white;"></div>');
            $.each(dro3, function (i, e) {
                dd.append("<img style='padding:5px;margin:4px;max-width:160px;max-height:40px;' class='btn hand borderg corner' src='dro3/" + e['path'] + "' onclick='gift(\"" + id + '","' + e['path'] + '");$(this).parent().pop("remove")\'>');
            });
            dd.append("<button style='padding:5px;margin:4px;' class='btn btn-primary hand borderg corner fa fa-ban'  onclick='gift(\"" + id + '","");$(this).parent().pop("remove")\'>إزاله الهديه</button>');
            ht.find(".ugift")
                .popover({ placment: "bottom", content: dd[0].outerHTML + "", trigger: "focus", title: "أرسل هديه !", html: true })
                .popover("show");
            $(".popover-content").html(dd[0].outerHTML);
        });

    ht.find(".ubnr")
        .popover("hide")
        .css("background-color", "")
        .off()
        .click(function () {
            var dd = $('<div class="break" style="height:50%;min-width:340px;background-color:white;"></div>');
            $.each(sico, function (i, e) {
                dd.append("<img style='padding:5px;margin:4px;max-width:160px;max-height:40px;' class='btn hand borderg corner' src='sico/" + e['path'] + "' onclick='ubnr(\"" + id + '","' + e['path'] + '");$(this).parent().pop("remove")\'>');
            });
            dd.append("<button style='padding:5px;margin:4px;' class='btn btn-primary hand borderg corner fa fa-ban'  onclick='ubnr(\"" + id + '","");$(this).parent().pop("remove")\'>إزاله البنر</button>');
            ht.find(".ubnr")
                .popover({ placment: "bottom", content: dd[0].outerHTML + "", trigger: "focus", title: "البنر", html: true })
                .popover("show");
            $(".popover-content").html(dd[0].outerHTML);
        });
    ht.modal({ backdrop: "static" });
    var uico = "";
    if (ico != "") {
        uico = '<img class="fl u-ico"  alt="" src="' + ico + '">';
    }
    ht.find(".modal-title").html("<img style='width:18px;height:18px;' src='" + u.pic + "'>" + uico + u.topic);
    ht.find(".upm")
        .off()
        .click(function () {
            ht.modal("hide");
            openw(id, true);
        });
    fixSize(1);
}

function popdiv(div, title) {
    if ($("#uh").length) {
        $("#uh").parent().parent().remove();
    }
    newpop(title, div);
}

function newpop(title, body) {
    var p = $($("#pop").html());
    p.find(".title").append(title);
    p.find(".pphide").addClass("phide");
    p.find(".body").append(body);
    $(".dad").append(p);
    p.show();
    return p;
}

function rusers(rid) {
    var r = getroom(rid);
    if (r == null) {
        return [];
    }
    return $.grep(XLT, function (e) {
        return e.roomid == rid;
    });
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] == sParam) {
            return ("" + decodeURIComponent(sParameterName[1])).split("<").join("&#x3C;");
        }
    }
}

function mkr() {
    $("#ops").children().remove();
    var ht = $("#mkr");
    ht.find(".rsave").hide();
    ht.find(".rdelete").hide();
    ht.find(".modal-title").text("إنشاء غرفه جديدة");
    ht.modal({ backdrop: "static" });
    ht.find(".rtopic").val("");
    ht.find(".rabout").val("");
    ht.find(".rpwd").val("");
    ht.find(".rwelcome").val("");
    ht.find(".rmax").val("");
	ht.find(".picroom").attr('src','site/'+location.host+'room.png');
    ht.find(".rlike").val("");
    ht.find(".roomcolor").val("");
    ht.find(".dscolor").val("");
    ht.find(".bgtitle").val("");
    ht.find(".bgdscolor").val("");
    ht.find(".roomcolor").css("background",'#fff');
    ht.find(".dscolor").css("background",'#fff');
    ht.find(".bgtitle").css("background",'#fff');
    ht.find(".bgdscolor").css("background",'#fff');
    ht.find(".rdel").prop("checked", false).parent().show();
    ht.find(".broadcast").prop("checked", false).parent().show();
    ht.find(".rmake")
        .show()
        .off()
        .click(function () {
            if (ht.find(".rtopic").val().trim().length <= 0) return alert("لا يمكن ترك اسم الغرفة فارغاً ");
            if (ht.find(".rmax").val().trim().length <= 0 || ht.find(".rmax").val() > 40 || ht.find(".rmax").val() < 2) return alert("يجب ان يكون عدداعظاء الروم لا يزيد عن 40 او اقل من 2");
            S8EBVE("S8EBVE_ADD_ROOM", {
                topic: ht.find(".rtopic").val(),
                about: ht.find(".rabout").val(),
                welcome: ht.find(".rwelcome").val(),
                pass: ht.find(".rpwd").val(),
				color:ht.find(".roomcolor").val(),
				dscolor:ht.find(".dscolor").val(),
				bgtitle:ht.find(".bgtitle").val(),
				bgdscolor:ht.find(".bgdscolor").val(),
                max: Number(ht.find(".rmax").val()),
                pic: ht.find(".picroom").attr("src"),
                like: Number(ht.find(".rlike").val()),
                delete: ht.find(".rdel").prop("checked"),
				camera:false,
                broadcast: ht.find(".broadcast").prop("checked"),
            });
            ht.modal("hide");
        });
}

function redit(e) {
    $("#ops").children().remove();
    if (e == null) {
        e = M_ROOM;
    }
    var r = getroom(e);
    if (r == null) {
        return;
    }
    var ht = $("#mkr");
    ht.find(".modal-title").text("إداره الغرفه");
    ht.find(".rsave")
        .show()
        .off()
        .click(function () {
            if (ht.find(".rtopic").val().trim().length <= 0) return alert("لا يمكن ترك اسم الغرفة فارغاً ");
            if (ht.find(".rmax").val().trim().length <= 0 || ht.find(".rmax").val() > 40 || ht.find(".rmax").val() < 2) return alert("يجب ان يكون عدداعظاء الروم لا يزيد عن 40 او اقل من 2");
            S8EBVE("S8EBVE_EDIT_ROOM", {
                id: e,
                topic: ht.find(".rtopic").val(),
                about: ht.find(".rabout").val(),
                welcome: ht.find(".rwelcome").val(),
                broadcast: ht.find(".broadcast").prop("checked"),
       camera:false,
	   pass: ht.find(".rpwd").val(),
       color:ht.find(".roomcolor").val(),
	   dscolor:ht.find(".dscolor").val(),
	   bgtitle:ht.find(".bgtitle").val(),
	   bgdscolor:ht.find(".bgdscolor").val(),
       pic: ht.find(".picroom").attr("src"),
	   max: Number(ht.find(".rmax").val()),
	   like: Number(ht.find(".rlike").val()),
            });
            ht.modal("hide");
        });
    ht.find(".rdelete")
        .show()
        .off()
        .click(function () {
            S8EBVE("S8EBVE_REMOVE_ROOM", { id: e });
            ht.modal("hide");
        });
    ht.modal({ backdrop: "static", title: "ffff" });
    ht.find(".rpwd").val("");
    ht.find(".rtopic").val(r.topic);
    ht.find(".rabout").val(r.about);
    ht.find(".rwelcome").val(r.welcome);
    ht.find(".broadcast").prop("checked", r.broadcast);
    ht.find(".rmax").val(r.max);
    ht.find(".picroom").attr('src',r.pic);
    ht.find(".roomcolor").val(r.color);
    ht.find(".roomcolor").css('color','transparent');
    ht.find(".roomcolor").css('background-color','#'+r.color);
	
	ht.find(".dscolor").val(r.dscolor);
    ht.find(".dscolor").css('color','transparent');
    ht.find(".dscolor").css('background-color','#'+r.dscolor);
	
	ht.find(".bgtitle").val(r.bgtitle);
    ht.find(".bgtitle").css('color','transparent');
    ht.find(".bgtitle").css('background-color','#'+r.bgtitle);
	
	ht.find(".bgdscolor").val(r.bgdscolor);
    ht.find(".bgdscolor").css('color','transparent');
    ht.find(".bgdscolor").css('background-color','#'+r.bgdscolor);
	
    ht.find(".rlike").val(r.rmli);
    ht.find(".rmake").hide();
    ht.find(".rdel").parent().hide();
    S8EBVE("ops", {});
};

function updaterooms() {
    if (needUpdate == false) {
        return;
    }
    var u = getuser(myid);
    if (u == null) {
        return;
    }
	$('#brooms').prop('title', 'غرف الدردشه : '+XLR.length);
    $.each(XLR, function (i, e) {
        var ht = $(".r" + e.id);
        if (e.owner == (u.lid || "")) {
            ht.css("background-color", "snow");
        }
        var ru = $.grep(rusers(e.id), function (e) {
            return e.s == null;
        });
        ht.find(".uc")
            .html(ru.length + "/" + e.max)
            .attr("v", ru.length);
        ht.attr("v", ru.length);
    });
};

function updater(r) {
    var ht = $(".r" + r.id);
    ht.find(".u-pic").attr("src", r.pic + "?1");
    ht.find(".u-topic").html(r.topic);
    ht.find(".u-topic").css('color','#'+r.color);
    ht.find(".u-topic").css('background-color','#'+r.bgtitle);
    ht.find(".u-msg").html(r.about);
    ht.find(".u-msg").css('color','#'+r.dscolor);
    ht.find(".u-msg").css('background-color','#'+r.bgdscolor);
    if (r.broadcast) {
        if (ht.find(".istoa").length == 0) {
			ht.find('.uc').removeClass('fa fa-user');
			ht.find('.uc').addClass('fa fa-microphone');
			ht.find('.uc').removeClass('label-primary');
			ht.find('.uc').addClass('label-danger');

        }
    } else {
        if ($(".r" + r.id + ">span").is(".istoa")) {
            $(".r" + r.id + ">span.istoa").remove();
            $(".broadcasters").html("");
            $(".broadcasters").css("padding", "0px");
            $("#d2").css("padding-top", "0px");
			ht.find('.uc').addClass('fa fa-user');
			ht.find('.uc').removeClass('fa fa-microphone');
			ht.find('.uc').removeClass('label-danger');
			ht.find('.uc').addClass('label-primary');
        }
    }
    if (r.needpass) {
        ht.find(".u-topic").prepend('<img src="imgs/lock.png" style="margin:2px;margin-top:4px;" class="fl">');
    }
}

function addroom(r) {
    var ht = $(rhtml);
    ht.addClass("r" + r.id);
    ht.attr("onclick", "Send_Rjoin('" + r.id + "');");
    var ru = $.grep(rusers(r.id), function (e) {
        return e.s == null;
    });
    ht.find(".uc")
        .text(ru.length + "/" + r.max)
        .attr("v", ru.length);
    ht.attr("v", ru.length);
    $("#rooms").append(ht);
    updater(r);
}

function getuserbylid(id) {
    return $.grep(XLT, function (value) {
        return value.lid == id;
    })[0];
}

function getuserbyname(username) {
    return $.grep(XLT, function (value) {
        return value.username == username;
    })[0];
}

function getuser(id) {
    return U_CASH[id];
}

function getroom(id) {
    return R_CASH[id];
}

function wclose(id) {
    $("#c" + id).remove();
    $(".w" + id).remove();
    msgs();
}

function hash(key, seed) {
    var remainder, bytes, h1, h1b, c1, c2, k1, i;
    key = key.join("");
    remainder = key.length & 3;
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;
    while (i < bytes) {
        k1 = (key.charCodeAt(i) & 0xff) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 36) | ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;
        k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 36) * c1) & 0xffff) << 36)) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 36) * c2) & 0xffff) << 36)) & 0xffffffff;
        h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((h1 & 0xffff) * 5 + ((((h1 >>> 36) * 5) & 0xffff) << 36)) & 0xffffffff;
        h1 = (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 36) + 0xe654) & 0xffff) << 36);
    }
    k1 = 0;
    switch (remainder) {
        case 3:
            k1 ^= (key.charCodeAt(i + 2) & 0xff) << 36;
        case 2:
            k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            k1 ^= key.charCodeAt(i) & 0xff;
            k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 36) * c1) & 0xffff) << 36)) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 36) * c2) & 0xffff) << 36)) & 0xffffffff;
            h1 ^= k1;
    }
    h1 ^= key.length;
    h1 ^= h1 >>> 36;
    h1 = ((h1 & 0xffff) * 0x85ebca6b + ((((h1 >>> 36) * 0x85ebca6b) & 0xffff) << 36)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((h1 & 0xffff) * 0xc2b2ae35 + ((((h1 >>> 36) * 0xc2b2ae35) & 0xffff) << 36)) & 0xffffffff;
    h1 ^= h1 >>> 36;
    return (h1 >>> 0).toString(36);
}

function ccode() {
    try {
        var c = Math.ceil(new Date().getTime() / (1000 * 60 * 90)).toString(36);
        c = c + c.split("").reverse().join("");
        if (getv("sx") != "") {
            c = getv("sx");
        } else {
            setv("sx", c);
        }
        return c;
    } catch (err) {
        console.log(err);
        return "ERR";
    }
}

async function handleLogin(success) { 
  if (success === false) { 
    alert("Ooops...try a different username"); 
  }else { 
    localVideo = document.getElementById('wbrtclocal');
    remoteVideo = document.getElementById('wbrtcremote');
  if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({audio:{noiseSuppression:false}}).then(await getUserMediaSuccess).catch(errorHandler);
  } else {
    alert('Your browser does not support getUserMedia API');
  };
  };
};

async function getUserMediaSuccess(stream) {
  IBLS = stream;
  localVideo.srcObject = stream;
  yourConn = new RTCPeerConnection({
    iceServers: [
      {
        username:
          'SaKm_DT0L5D38QdKLaT8CoWwoFt1eBnoiqh_EVaFO976KPxl5J8wRqjEIhN34r0QAAAAAGPtHktzZW9iYXFlcg==',
        urls: [
          'stun:fr-turn1.xirsys.com',
          'turn:fr-turn1.xirsys.com:80?transport=udp',
          'turn:fr-turn1.xirsys.com:3478?transport=udp',
          'turn:fr-turn1.xirsys.com:80?transport=tcp',
          'turn:fr-turn1.xirsys.com:3478?transport=tcp',
          'turns:fr-turn1.xirsys.com:443?transport=tcp',
          'turns:fr-turn1.xirsys.com:5349?transport=tcp',
        ],
        credential: 'f6633966-ad5a-11ed-a51a-0242ac120004',
      },
      {
        urls: [
          'turn:relay1.metered.ca:80?transport=tcp',
          'turn:relay1.metered.ca:443?transport=tcp',
        ],
        username: '639b693c74aedc15',
        credential: '7566bd5cda6bcf81',
      },
      {
        urls: ['turn:relay1.metered.ca:443'],
        username: '639b693c74aedc15',
        credential: '7566bd5cda6bcf81',
      },
      { urls: ['stun:relay1.metered.ca:80'] },
    ],
    });
  yourConn.onicecandidate = function (event) { 
    if (event.candidate) { 
	   CV_D9A8.emit("S8EBVE_CALL_AUDIO", {data:{ type: "candidate", candidate: event.candidate,id:connectedUser}});
    }; 
  }; 
  yourConn.ontrack = gotRemoteStream;
  yourConn.addStream(IBLS);
};

function gotRemoteStream(event) {
  remoteVideo.srcObject = event.streams[0];
};

function errorHandler(error) {
  console.log(error);
};

function handleOffer(offer, name) { 
$('#callvideonot').show(); 
	const user = getuser(name);
	if(user){
        $('#callvideonot').find('.u-pic').css('background-image','url('+removegifpic(user['pic']+')'));
		$('#callvideonot').find('.u-topic').text(user['topic']);
	};
$('.callvideoaccept').on("click", function () { 
  connectedUser = name; 
  yourConn.setRemoteDescription(new RTCSessionDescription(offer)); 
   yourConn.createAnswer(function (answer) { 
    yourConn.setLocalDescription(answer); 
	CV_D9A8.emit("S8EBVE_CALL_AUDIO", {data:{ type: "answer", answer: answer,id:connectedUser}});
  }, function (error) { 
     alert("Error when creating an answer"); 
  }); 
  

  	const user = getuser(name);
	if(user){
        $('.statecall').text('متصل');
        hl($(".statecall"), "success");
        $('#videoCall').find('.u-pic').css('background-image','url('+removegifpic(user['pic']+')'));
		$('#videoCall').find('.u-topic').text(user['topic']);
	};
$('#callvideonot').hide();
$('#videoCall').show();
});


$('.callvideodeny').on("click", function () {
CV_D9A8.emit("S8EBVE_CALL_AUDIO", {data:{type: "leave",id:name}});
});

};

function handleAnswer(answer) { 
  $('.statecall').text('متصل');
  hl($(".statecall"), "success");
  yourConn.setRemoteDescription(new RTCSessionDescription(answer)); 
};

function handleCandidate(candidate) { 
  yourConn.addIceCandidate(new RTCIceCandidate(candidate)); 
};


function handleLeave() {
$('#callvideonot').hide();
  $('.statecall').text('رفض');
  hl($(".statecall"), "danger")
  $('.vloumemic').removeClass('fa-volume-off');
  $('.vloumemic').addClass('fa-volume-up');
  $('.mutemic').removeClass('fa-microphone-slash');
  $('.mutemic').addClass('fa-microphone');	
  	setTimeout(()=>{
		$('#videoCall').hide();
	},1000);
  if(IBLS){
  IBLS.getTracks().forEach((e) => e.stop());
  };
  if(connectedUser){
  connectedUser = null;
  };  
  remoteVideo.src = null; 
  if(yourConn){
  yourConn.close(); 
  yourConn.onicecandidate = null; 
  yourConn.onaddstream = null; 
  IBLS = null;
  };
};



function call(id){
	$('#videoCall').show();
  if (id.length > 0) { 
    connectedUser = id; 
    yourConn.createOffer(function (offer) { 
CV_D9A8.emit("S8EBVE_CALL_AUDIO", {data:{type: "offer", offer: offer,id:connectedUser}});
       yourConn.setLocalDescription(offer); 
    }, function (error) { 
       alert("Error when creating an offer",error); 
       console.log("Error when creating an offer",error)
    }); 
	const user = getuser(id);
	if(user){
        $('#videoCall').find('.u-pic').css('background-image','url('+removegifpic(user['pic']+')'));
		$('#videoCall').find('.u-topic').text(user['topic']);
	};
	  $('.statecall').text('جاري الإتصال');
	  hl($(".statecall"), "warning");

  } else{
    alert("username can't be blank!")
};
};

function openw(id, open) {
    var u = getuser(id);
    if (u == null) {
        return;
    }
    if ($("#c" + id).length == 0) {
        var uhh = $(uhtml);
        var ico = getico(u);
        if (ico != "") {
            uhh.find(".u-ico").attr("src", ico);
        }
        uhh.find(".u-msg").text("..");
	
        uhh.find(".uhash").text(u.idreg);
        uhh.find(".u-pic").css({ "background-image": 'url("' + removegifpic(u.pic) + '")' });
        $("<div id='c" + id + "' onclick='' style='width:99%;padding: 2px;' class='cc noflow nosel   hand break'></div>").prependTo("#chats");
        $("#c" + id)
            .append(uhh)
            .append("<div onclick=\"wclose('" + id + '\')" style="    margin-top: -30px;margin-right: 2px;" class="label border mini label-danger fr fa fa-times">حذف</div>')
            .find(".uzr")
            .css("width", "100%")
            .attr("onclick", "openw('" + id + "',true);")
            .find(".u-msg")
            .addClass("dots");
        var dod = $($("#cw").html());
        $(dod).addClass("w" + id);
        $(dod)
            .find(".emo")
            .addClass("emo" + id);
        dod.find(".fa-user").click(function () {
            upro(id);
            $("#upro").css("z-index", "2002");
        });
        dod.find(".head .u-pic").css("background-image", 'url("' + removegifpic(u.pic) + '")');
        var uh = $(uhtml);
        if (ico != "") {
            uh.find(".u-ico").attr("src", ico);
        }
        uh.find(".head .u-pic")
            .css("width", "28px")
            .css("height", "28px")
            .css("margin-top", "-2px")
            .parent()
            .click(function () {
                upro(id);
            });
        uh.css("width", "70%").find(".u-msg").remove();
        $(dod).find(".uh").append(uh);
        $(dod)
            .find(".d2")
            .attr("id", "d2" + id);
        $(dod)
            .find(".wc")
            .click(function () {
                wclose(id);
            });
        $(dod)
            .find(".fa-share-alt")
            .click(function () {
                XUPFILE(id,null,null);
            });
        $(dod).find(".typ").hide();
        $(dod)
            .find(".sndpm")
            .click(function (e) {
                e.preventDefault();
                sendpm({ data: { uid: id } });
            });
        $(dod)
            .find(".microphone")
            .click(function () {
                if(!IsDevice()){
				StartRecorder(id);
				}else{
                XUPFILE(id,null,'startrecorder');
				};
            });
        $(dod)
            .find(".stopmico")
            .click(function () {
                StopRecorder();
            });
        $(dod).find(".call").click(function () {
			if(myid == id){
				alert('لا يمكنك الإتصال بنفسك');
				return;
			}else if(IBLS){
				alert('انت بلفعل في محادثة اخرى');
				return;
			}else if(ie){				
				alert('لا يمكنك الإتصال وانت متصل في مايك الغرفة');
				return;
			}else if(VYISR){
				alert('لا يمكنك الاتصال وانت تسجل صوتيه');
				return;
			};
				   CV_D9A8.emit("S8EBVE_CALL_AUDIO", {data:{type: "login",id:id}});
				   $(dod).hide();
				   setTimeout(()=>{
				  CV_D9A8.emit("S8EBVE_CALL_AUDIO", {data:{type: "doneoif",id:id}});					   
				   },2000);
            });
			
        if (T_LIST['callmic']) {
        $(dod).find(".call").show();
		}else{
        $(dod).find(".call").hide();
        };
        $(dod)
            .find(".tbox")
            .addClass("tbox" + id)
            .keyup(function (e) {
                if (e.keyCode == 13) {
                    e.preventDefault();
                    sendpm({ data: { uid: id } });
                }
                if (uptyping) T8UP(id);
            })
            .on("blur", function () {});
        var ubg = u.bg;
        if (ubg == "") {
            ubg = "#FAFAFA";
        }
        $(dod).find(".head").append(uhead());
        dod.find(".u-ico").attr("src", ico);
        $(".dad").append(dod);
        emopop(".emo" + id);
        $(dod)
            .find(".head .u-pic")
            .css("background-image", "url('" + removegifpic(u.pic) + "')")
            .css("width", "20px")
            .css("height", "20px")
            .parent()
            .click(function () {
                upro(id);
                $("#upro").css("z-index", "2002");
            });
        $(dod).find(".head .u-topic").css("color", u.ucol).css("background-color", ubg).html(u.topic);
        $(dod)
            .find(".head .phide")
            .click(function () {
                $(dod).removeClass("active").hide();
            });
        $("#c" + id)
            .find(".uzr")
            .click(function () {
                $("#c" + id).removeClass("unread");
                msgs();
            });
        updateu(id);
    }
    if (open) {
        $(".phide").trigger("click");
        $(".w" + id)
            .css("display", "")
            .addClass("active")
            .show();
        $(".pn2").hide();
        setTimeout(function () {
            fixSize(1);
            $(".w" + id)
                .find(".d2")
                .scrollTop($(".w" + id).find(".d2")[0].scrollHeight);
        }, 50);
        $("#dpnl").hide();
    } else {
        if ($(".w" + id).css("display") == "none") {
            $("#c" + id).addClass("unread");
        }
    }
    msgs();
}

function popover(el, data, pos) {
    var e = $(el);
    e.popover({
        placement: pos || "top",
        html: true,
        content: function () {
            return $(data)[0].outerHTML;
        },
        title: "",
    });
}

function msgs() {
    var co = $("#chats").find(".unread").length;
    if (co != 0) {
        $(".chats").find(".pmc").text(co);
        hl($(".chats"), "warning");
    } else {
        $(".chats").find(".pmc").text("");
        hl($(".chats"), "primary");
    }
}

var uhd = "*";
function uhead() {
    if (uhd == "*") {
        uhd = $("#uhead").html();
    }
    return uhd;
}


(function ($) {
    $.fn.popTitle = function (html) {
        var popclose = this.parent().parent().find(".phide").detach();
        this.parent().parent().find(".pophead").html(html).prepend(popclose);
        return this;
    };
    $.fn.pop = function (options) {
        if (this.hasClass("pop")) {
            return this.find(".popbody").children(0).pop(options);
        }
        switch (options) {
            case "show":
                if (this.parent().hasClass("popbody") == false) {
                    this.pop();
                }
                $(".pop").css("z-index", 2000);
                this.parent().parent().css("z-index", 2001);
                this.parent().parent().css("display", "");
                fixSize();
                return this;
                break;
            case "hide":
                this.parent().parent().css("display", "none");
                return this;
                break;
            case "remove":
                this.parent().parent().remove();
                return this;
                break;
        }
        var settings = $.extend({ width: "50%", height: "50%", top: "5px", left: "5px", title: "", close: "hide", bg: $(document.body).css("background-color") }, options);
        var popup = $('<div class="pop corner" style="border:1px solid lightgrey;display:none;max-width:95%;position:absolute;z-index:2000;top:' + settings.top + ";left:" + settings.left + '"></div>').css({
            "background-color": settings.bg,
            width: settings.width,
            height: settings.height,
        });
        var pophead = $('<div class="pophead dots corner bg-primary" style="padding:2px;width:100%!important;"></div>').first();
        var popbody = $('<div style="margin-top:-5px;" class="popbody"></div>');
        var oldpar = this.parent();
        popbody.append(this);
        pophead.html(settings.title);
        pophead.prepend("<span onclick=\"$(this).pop('" + settings.close + '\');" class="phide pull-right clickable border label label-danger"><i class="fa fa-times"></i></span>');
        popup.on("resize", function () {
            popbody.css("height", popup.height() - pophead.outerHeight(true) + "px");
        });
        popup.append(pophead);
        popup.append(popbody);
        if (oldpar.length == 0) {
            $("#content").append(popup);
        } else {
            oldpar.append(popup);
        }
        return this;
    };
})(jQuery);

function getCSSRule(ruleName, deleteFlag) {
    ruleName = ruleName.toLowerCase();
    if (document.styleSheets) {
        for (var i = 0; i < document.styleSheets.length; i++) {
            var styleSheet = document.styleSheets[i];
            var ii = 0;
            var cssRule = false;
            do {
                if (styleSheet.cssRules) {
                    cssRule = styleSheet.cssRules[ii];
                } else {
                    cssRule = styleSheet.rules[ii];
                }
                if (cssRule) {
                    if (cssRule.selectorText == ruleName) {
                        if (deleteFlag == "delete") {
                            if (styleSheet.cssRules) {
                                styleSheet.deleteRule(ii);
                            } else {
                                styleSheet.removeRule(ii);
                            }
                            return true;
                        } else {
                            return cssRule;
                        }
                    }
                }
                ii++;
            } while (cssRule);
        }
    }
    return false;
}

function S_PIC(nb) {
    var e = $("<input  accept='image/*' type='file' style='display:none;'/>").first();
    e.trigger("click");
    var xx;
    $(e).on("change", function () {
		if(nb == 'user'){
        $(".spic").attr("src", "imgs/ajax-loader.gif");
		};
        var formData = new FormData();
        formData.append("photo", $(e).prop("files")[0]);
        xx = $.ajax({
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener(
                    "progress",
                    function (evt) {
                        if (evt.lengthComputable) {
                            var percentComplete = evt.loaded / evt.total;
                        }
                    },
                    false
                );
                return xhr;
            },
            timeout: 0,
            url: 'uppic?nf='+nb,
			type: "POST",
            data: formData,
            datatype: "json",
            cache: false,
            processData: false,
            contentType: false,
            success: function (data) {
       	setTimeout(()=>{
       if(data.split('@')[1] == 'user'){
                $(".spic").attr("src", data.split('@')[0]);
				$(".spic").css('background-image','url('+data.split('@')[0]+')');
                S8EBVE("S8EBVE_PIC", { pic: data.split('@')[0] });
       }else if(data.split('@')[1] == 'cover'){
		   $(".spicx").attr("src", data.split('@')[0]);
		   $(".spicx").css('background-image','url('+data.split('@')[0]+')');
		   S8EBVE("S8EBVE_COVER", { pic: data.split('@')[0] });
       }else if(data.split('@')[1] == 'bot'){
		   $('.spicbot').attr('src', data.split('@')[0]);
	   }else{
       		$(".picroom").attr("src", data.split('@')[0]);	
       };
       	},1000);       
            },
            error: function (e) {
                $(".spic").attr("src", "");
                alert(e['responseJSON']['message']);
            },
        });
    });
}

function XUPFILE(id, onsend,is) {
    PIC_FILE = null;
	if(!onsend){
		var ispm = true;
	}else{
		var ispm = false;
	};
	if(getuser(myid)){
	var nm = getuser(myid).topic;
	}else{
		var nm = '';
	};
    var e = $("<div></div>").first();
    if (is == "startrecorder") {
        e.append("<input type='file' accept='audio/*' capture='microphone' style='display:none;'/>");
    } else {
        e.append("<input type='file'  accept='image/*, video/*, audio/*' style='display:none;'/>");
    }
    e.children("input").trigger("click");
    var xx;
    $(e)
        .children("input")
        .on("change", function () {
            var sp = $("<div class='mm msg fl' style='position: absolute;bottom: 36px;'><a class='fn fl'></a><button class='btn btn-danger fa fa-times cancl' style='width:64px;padding:2px;'>إلغاء</button></div>");
            $("#d2" + id).append(sp);
            var formData = new FormData();
            formData.append("photo", $(e).children("input").prop("files")[0]);
            $(sp).find(".cancl").click(function () {$(sp).remove();xx.abort();});
            xx = $.ajax({
                xhr: function () {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener(
                        "progress",
                        function (evt) {
                            if (evt.lengthComputable) {
                                var percentComplete = evt.loaded / evt.total;
								const hr = $('<div style="width:220px" class="c-flex">'+
								'<progress class="flex-grow-1 pgr" style="width:100%;" value="'+parseInt(percentComplete * 100)+'" max="100"></progress>'+
								'<div class="light border d-flex" style="width:100%;">'+
								'<span class="label label-primary dots nosel fl flex-grow-1" style="padding:2px;">'+"%" + parseInt(percentComplete * 100)+ " | " + $(e).children("input").val().split("\\").pop()+'</span></div></div>');
								$(sp.find(".fn")).html(hr)
						   }
                        },
                        false
                    );
                    return xhr;
                },
                timeout: 0,
                url: "upload?secid=u&nm="+nm+"&pm="+ispm+"&token=" + MY_T + "&fn=" + $(e).children("input").val().split(".").pop(),
                type: "POST",
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                success: function (data) {
                    PIC_FILE = data;
                    if (onsend != null) {
                        onsend(data);
                    } else {
                        S8EBVE("S8EBVE_PM", { msg: "", link: data, id: id });
                    }
                    $(e).remove();
                    $(sp).remove();
                },
                error: function (e) {
                    $(sp).remove();
          alert(e['responseJSON']['message']);

                },
            });
        });
}


function SEND_Story() {
	if(getuser(myid).rep < T_LIST['story']){
		alert("عدد الايكات المطلوبة لإنشاء قصة" + " " + T_LIST['story']);
		return;
	};
    var e = $("<div></div>").first();
        e.append("<input type='file'  accept='image/*, video/*' style='display:none;'/>");
    e.children("input").trigger("click");
    var xx;
    $(e).children("input").on("change", function () {
            var sp = $("<div class='mm msg fl' style='width:100%;'><a class='fn fl'></a><button style='color:red;border:1px solid red;min-width:40px;' class=' cancl'>X</button></div>");
            $("#f1e").append(sp);
            var formData = new FormData();
            formData.append("photo", $(e).children("input").prop("files")[0]);
            $(sp).find(".cancl").click(function () {
				$(sp).remove();
                    xx.abort();
                });
            xx = $.ajax({xhr: function () {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener(
                        "progress",
                        function (evt) {
                            if (evt.lengthComputable) {
                                var percentComplete = evt.loaded / evt.total;
                                $(sp.find(".fn")).text("%" + parseInt(percentComplete * 100) + " | " + $(e).children("input").val().split("\\").pop());
                            }
                        },
                        false
                    );
                    return xhr;
                },
                timeout: 0,
                url: "uploadstory",
                type: "POST",
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                success: function (data) {
					S8EBVE('S8EBVE_ADD_STORY',{type:data.split('@')[1].split('/')[0],url:data.split('@')[0],time:Number(data.split('@')[2])});
                    $(e).remove();
                    $(sp).remove();
                },
                error: function (e) {
                    $(sp).remove();
					alert(e['responseJSON']['message']);
                },
            });
        });
}

function Tclear() {
	$('#room > .d2').html('');
};

function encode(e) {
    return encodeURIComponent(e).split("'").join("%27");
}

function decode(e) {
    return decodeURIComponent(e);
}

function isls() {
    return "undefined" != typeof Storage;
}

function setv(e, t) {
    isls() ? localStorage.setItem(e, t) : setCookie(e, t);
}

function getv(e) {
    if (isls()) {
        var t = localStorage.getItem(e);
        return ("null" == t || null == t) && (t = ""), t;
    }
    return getCookie(e);
}

function setCookie(e, t) {
    var o = new Date();
    o.setTime(o.getTime() + 28771200000);
    var n = "expires=" + o.toUTCString();
    document.cookie = e + "=" + encode(t) + "; " + n;
}

function getCookie(e) {
    for (var t, o = e + "=", n = document.cookie.split(";"), d = 0; d < n.length; d++) {
        for (t = n[d]; " " == t.charAt(0); ) t = t.substring(1);
        if (-1 != t.indexOf(o)) return decode(t.substring(o.length, t.length));
    }
    return "";
}

async function fg(e) {
    try {
        var t = ic.get(e.user, e.it);
        t || (t = await fr(e.user, e.it));
        var o = new RTCSessionDescription(e.sdp);
        await t.setRemoteDescription(o), await t.setLocalDescription(await t.createAnswer()), fm({ it: Number(e.it), target: e.user, type: "video-answer", sdp: t.localDescription });
    } catch (e) {
        fl(e);
    }
}

async function fh(e) {
    var t = ic.get(e.user, e.it);
    await t.setRemoteDescription(e.sdp).catch(fl);
}

async function fi(e) {
    var t = ic.get(e.user, e.it),
        o = new RTCIceCandidate(e.candidate);
    try {
        await t.addIceCandidate(o);
    } catch (e) {
        fl(e);
    }
}

function fk(e, t, o) {
    switch (e.name) {
        case "NotFoundError":
            fs("غير قادر على الانظام الى البث الصوتي بسبب ان هناك مشكله بالوصل الى الميكروفون الخاص بك");
            break;
        case "SecurityError":
        case "PermissionDeniedError":
            break;
        default:
            fs("خطأ في الى الميكروفون");
    }
    fj(o, t);
}

function fl(e) {
    console.log(`Error ${e.name}: ${e.message}`);
}

function fs(e) {
    ON_DATE_SEND("not", { force: !0, msg: e, user: "" });
}

uf = {
    kw: "الكويت",
    et: "إثيوبيا",
    az: "أذربيجان",
    am: "أرمينيا",
    aw: "أروبا",
    er: "إريتريا",
    es: "أسبانيا",
    au: "أستراليا",
    ee: "إستونيا",
    il: "فلسطين",
    af: "أفغانستان",
    ec: "إكوادور",
    ar: "الأرجنتين",
    jo: "الأردن",
    ae: "الإمارات العربية المتحدة",
    al: "ألبانيا",
    bh: "مملكة البحرين",
    br: "البرازيل",
    pt: "البرتغال",
    ba: "البوسنة والهرسك",
    ga: "الجابون",
    dz: "الجزائر",
    dk: "الدانمارك",
    cv: "الرأس الأخضر",
    ps: "فلسطين",
    sv: "السلفادور",
    sn: "السنغال",
    sd: "السودان",
    se: "السويد",
    so: "الصومال",
    cn: "الصين",
    iq: "العراق",
    ph: "الفلبين",
    cm: "الكاميرون",
    cg: "الكونغو",
    cd: "جمهورية الكونغو الديمقراطية",
    de: "ألمانيا",
    hu: "المجر",
    ma: "المغرب",
    mx: "المكسيك",
    sa: "المملكة العربية السعودية",
    uk: "المملكة المتحدة",
    gb: "المملكة المتحدة",
    no: "النرويج",
    at: "النمسا",
    ne: "النيجر",
    in: "الهند",
    us: "الولايات المتحدة",
    jp: "اليابان",
    ye: "اليمن",
    gr: "اليونان",
    ag: "أنتيغوا وبربودا",
    id: "إندونيسيا",
    ao: "أنغولا",
    ai: "أنغويلا",
    uy: "أوروجواي",
    uz: "أوزبكستان",
    ug: "أوغندا",
    ua: "أوكرانيا",
    ir: "إيران",
    ie: "أيرلندا",
    is: "أيسلندا",
    it: "إيطاليا",
    pg: "بابوا-غينيا الجديدة",
    py: "باراجواي",
    bb: "باربادوس",
    pk: "باكستان",
    pw: "بالاو",
    bm: "برمودا",
    bn: "بروناي",
    be: "بلجيكا",
    bg: "بلغاريا",
    bd: "بنجلاديش",
    pa: "بنما",
    bj: "بنين",
    bt: "بوتان",
    bw: "بوتسوانا",
    pr: "بورتو ريكو",
    bf: "بوركينا فاسو",
    bi: "بوروندي",
    pl: "بولندا",
    bo: "بوليفيا",
    pf: "بولينزيا الفرنسية",
    pe: "بيرو",
    by: "بيلاروس",
    bz: "بيليز",
    th: "تايلاند",
    tw: "تايوان",
    tm: "تركمانستان",
    tr: "تركيا",
    tt: "ترينيداد وتوباجو",
    td: "تشاد",
    cl: "تشيلي",
    tz: "تنزانيا",
    tg: "توجو",
    tv: "توفالو",
    tk: "توكيلاو",
    to: "تونجا",
    tn: "تونس",
    tp: "تيمور الشرقية",
    jm: "جامايكا",
    gm: "جامبيا",
    gl: "جرينلاند",
    pn: "جزر البتكارين",
    bs: "جزر البهاما",
    km: "جزر القمر",
    cf: "أفريقيا الوسطى",
    cz: "جمهورية التشيك",
    do: "جمهورية الدومينيكان",
    za: "جنوب أفريقيا",
    gt: "جواتيمالا",
    gp: "جواديلوب",
    gu: "جوام",
    ge: "جورجيا",
    gs: "جورجيا الجنوبية",
    gy: "جيانا",
    gf: "جيانا الفرنسية",
    dj: "جيبوتي",
    je: "جيرسي",
    gg: "جيرنزي",
    va: "دولة الفاتيكان",
    dm: "دومينيكا",
    rw: "رواندا",
    ru: "روسيا",
    ro: "رومانيا",
    re: "ريونيون",
    zm: "زامبيا",
    zw: "زيمبابوي",
    ws: "ساموا",
    sm: "سان مارينو",
    sk: "سلوفاكيا",
    si: "سلوفينيا",
    sg: "سنغافورة",
    sz: "سوازيلاند",
    sy: "سوريا",
    sr: "سورينام",
    ch: "سويسرا",
    sl: "سيراليون",
    lk: "سيريلانكا",
    sc: "سيشل",
    rs: "صربيا",
    tj: "طاجيكستان",
    om: "عمان",
    gh: "غانا",
    gd: "غرينادا",
    gn: "غينيا",
    gq: "غينيا الاستوائية",
    gw: "غينيا بيساو",
    vu: "فانواتو",
    fr: "فرنسا",
    ve: "فنزويلا",
    fi: "فنلندا",
    vn: "فيتنام",
    cy: "قبرص",
    qa: "قطر",
    kg: "قيرقيزستان",
    kz: "كازاخستان",
    nc: "كاليدونيا الجديدة",
    kh: "كامبوديا",
    hr: "كرواتيا",
    ca: "كندا",
    cu: "كوبا",
    ci: "ساحل العاج",
    kr: "كوريا",
    kp: "كوريا الشمالية",
    cr: "كوستاريكا",
    co: "كولومبيا",
    ki: "كيريباتي",
    ke: "كينيا",
    lv: "لاتفيا",
    la: "لاوس",
    lb: "لبنان",
    li: "لشتنشتاين",
    lu: "لوكسمبورج",
    ly: "ليبيا",
    lr: "ليبيريا",
    lt: "ليتوانيا",
    ls: "ليسوتو",
    mq: "مارتينيك",
    mo: "ماكاو",
    fm: "ماكرونيزيا",
    mw: "مالاوي",
    mt: "مالطا",
    ml: "مالي",
    my: "ماليزيا",
    yt: "مايوت",
    mg: "مدغشقر",
    eg: "مصر",
    mk: "مقدونيا، يوغوسلافيا",
    mn: "منغوليا",
    mr: "موريتانيا",
    mu: "موريشيوس",
    mz: "موزمبيق",
    md: "مولدوفا",
    mc: "موناكو",
    ms: "مونتسيرات",
    me: "مونتينيغرو",
    mm: "ميانمار",
    na: "ناميبيا",
    nr: "ناورو",
    np: "نيبال",
    ng: "نيجيريا",
    ni: "نيكاراجوا",
    nu: "نيوا",
    nz: "نيوزيلندا",
    ht: "هايتي",
    hn: "هندوراس",
    nl: "هولندا",
    hk: "هونغ كونغ",
    wf: "واليس وفوتونا",
};

mime = {
    mov: "video/mov",
    aac: "audio/aac",
    m4a: "audio/m4a",
    avi: "video/x-msvideo",
    gif: "image/gif",
    ico: "image/x-icon",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    mid: "audio/midi",
    midi: "audio/midi",
    mp2: "audio/mpeg",
    mp3: "audio/mpeg",
    mp4: "video/mp4",
    mpa: "video/mpeg",
    mpe: "video/mpeg",
    mpeg: "video/mpeg",
    oga: "audio/ogg",
    ogv: "video/ogg",
    png: "image/png",
    svg: "image/svg+xml",
    tif: "image/tiff",
    tiff: "image/tiff",
    wav: "audio/x-wav",
    weba: "audio/webm",
    webm: "video/webm",
    webp: "image/webp",
    "3gp": "video/3gpp",
    "3gp2": "video/3gpp2",
};
