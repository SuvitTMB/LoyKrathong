var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var cleararray = 0;
var CheckPage = 0;
var Select1 = 99;
var Select2 = 99; 
var Select3 = 99;
var Select4 = 99;
var Select5 = 99;
var FriendName = "";
var MemotoFriend = "";
var MemotoFriend1 = "";
var MapLoyKrathong = "";


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Moon2023")==null) { location.href = "index.html"; }
  Connect_DB();
  //dbGiftRewards = firebase.firestore().collection("Gift2023Rewards");
  dbLoyKrathong = firebase.firestore().collection("LoyKrathong");
  if(MapLoyKrathong=="") { MapLoyKrathong = "map-0.jpg"; }
  StartGame();
  CheckSelect();
  StartKrathong();
});


function StartKrathong() {
  //alert("Click");
  document.getElementById('OpenKrathong').style.display='none';
  document.getElementById('DisplayKrathong').style.display='block';
}


function StartGame() {
  var str = "";
  var str1 = "";
  if(Select1==99) {
    str += '<div class="img-bottom"><img src="./map/'+ MapLoyKrathong +'" style="width:100%;">';
    str += '<div class="img-over-img" style="z-ingde:100;margin-top:150px;"><img src="./img/person.png" style="width:100%; max-width: 80%;margin:auto;"></div>';
    str += '<div style="height:140px;margin:-130px auto 10px auto;"><center><img src="./img/wood-bridge.png" style="width:100%;max-width:80%;"></center></div>';
    str += '<div class="img-over-icon" style="height:66px; opacity:.9; background:#fff;padding-top:16px;"><b>LINE Retail Society</b><br>ชวนคุณมาร่วมสร้างกระทงออนไลน์กัน ...<br>4 ขั้นตอนสำหรับการสร้างกระทง คลิก..</div>';
    str += '</div>';
  } else {
    if(Select1!=99) {
      str += '<div class="img-bottom"><img src="./map/'+ MapLoyKrathong +'" style="width:100%;">';
      str += '<div style="height:140px;margin:-130px auto 10px auto;"><center><img src="./img/wood-bridge.png" style="width:100%;max-width:80%;"></center></div>';
      str += '<div class="img-over-img1"><img src="./img/loy-'+Select1+'.png" style="width:100%; max-width: 80%;margin:auto;"></div></div>';
    }
    if(Select2!=99) {
      str += '<div class="img-over-icon">คำอธิฐาน<br>'+ MemotoFriend +'</div>';
    }
    if(Select3==88) {
      str += '<div class="img-over-person"><div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="img-over-person" style="left:100%;"></div></div>';
    } else if(Select3!=99) {
      str += '<div class="img-over-person"><div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="img-over-person"></div><div><img src="./img/person-'+ Select3 +'.png" class="img-over-person1"></div></div>';
    } 
  }
  $("#ShowDisplay").html(str);
}


function Krathong(x) {
  if(x==1) {
    SelectKrathong();
  } else if(x==2) {
    SelectTextMemo();
  } else if(x==3) {
    SelectPerson();
  } else if(x==4) {
    SelectMap();
  }
}


function CheckSelect() {
  var str = "";
  if(Select1!=99 && Select2!=99 && Select3!=99 && FriendName!="" && Select4!=99) {
    document.getElementById('DisplaySelect').style.display='none';
    document.getElementById('GoKathong').style.display='block';
  } 
  str += '<div class="container" style="line-height: 1.3; color:#fff;"><br>4 ขั้นตอนในการเตรียมกระทงออนไลน์</div>';
  str += '<div style="width:95%; max-width: 500px; margin:5px auto 15px auto;">';
  if(Select1!=99) {
    str += '<div class="box_gift11" onclick="Krathong(1)"><img src="./img/icon-krathong.png" class="img-width"><br>1. เลือกกระทง</div>';
  } else {
    //str += '<a href="javascript:playSound("'"RandomSound);">';
    str += '<a href=javascript:playSound("RandomSound");>';
    str += '<div class="box_gift1" onclick="Krathong(1)"><img src="./img/icon-krathong.png" class="img-width"><br>1. เลือกกระทง</div>';
    str += '</a>';

    //str += '</a>';
  }
  if(Select2!=99) {
    str += '<div class="box_gift11" onclick="Krathong(2)"><img src="./img/icon-pray.png" class="img-width"><br>2. คำอธิฐาน</div>';
  } else {
    str += '<div class="box_gift1" onclick="Krathong(2)"><img src="./img/icon-pray.png" class="img-width"><br>2. คำอธิฐาน</div>';
  }
  if(Select3!=99) {
    str += '<div class="box_gift11" onclick="Krathong(3)"><img src="./img/icon-partner.png" class="img-width"><br>3. เลือกคู่ลอย</div>';
  } else {
    str += '<div class="box_gift1" onclick="Krathong(3)"><img src="./img/icon-partner.png" class="img-width"><br>3. เลือกคู่ลอย</div>';
  }
  if(Select4!=99) {
    str += '<div class="box_gift11" onclick="Krathong(4)"><img src="./img/icon-map.png" class="img-width"><br>4. ไปลอยที่ไหน</div>';
  } else {
    str += '<div class="box_gift1" onclick="Krathong(4)"><img src="./img/icon-map.png" class="img-width"><br>4. ไปลอยที่ไหน</div>';
  }
  str += '</div>';
  $("#DisplaySelect").html(str);
}



function SelectKrathong() {
  var str = "";
  str += '<div class="checkbox-group" style="margin-top:5px;"><div class="radio-buttons">';
  for (var i = 0, length = arrKrathong.length; i < length; i++) {
    if(arrKrathong[i][0]==Select1) {
    //console.log("arr="+arrKrathong[i][0]);
      str += '<label class="custom-radio" style="margin-bottom:0;"><input type="radio" id="a'+ i +'" name="SelectPlace" value="'+ arrKrathong[i] +'" checked>';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./img/loy-'+ i +'.png"></div><div class="radio-label">'+ arrKrathong[i][1] +'</div></div></span></label>';
    } else {
    //console.log("arr="+arrKrathong[i][0]);
      str += '<label class="custom-radio" onclick="SelectItem1('+i+')" style="margin-bottom:0;"><input type="radio" id="a'+ i +'" name="SelectPlace" value="'+ arrKrathong[i] +'">';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./img/loy-'+ i +'.png"></div><div class="radio-label">'+ arrKrathong[i][1] +'</div></div></span></label>';
    }
  } 
  str += '</div>';
  $("#DisplaySelect1").html(str);
  document.getElementById('id01').style.display='block';
}


function SelectTextMemo() {
  var str = "";
  str += '<div class="checkbox-group" style="margin-top:5px;"><div class="radio-buttons">';
  for (var i = 0, length = arrTextMemo.length; i < length; i++) {
    if(arrTextMemo[i][0]==Select2) {
      str += '<label class="custom-radio" style="margin-bottom:0;"><input type="radio" id="b'+ i +'" name="SelectUser" value="'+ arrTextMemo[i] +'" checked>';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./img/flower-'+ i +'.png" style="width:140%;"></div><div class="radio-label">'+ arrTextMemo[i][1] +'</div></div></span></label>';
    } else {
      str += '<label class="custom-radio"style="margin-bottom:0;"><input type="radio" id="b'+ i +'" name="SelectUser" value="'+ arrTextMemo[i] +'">';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div onclick="SelectItem2('+i+')" ><img src="./img/flower-'+ i +'.png" style="width:140%;"></div><div class="radio-label">'+ arrTextMemo[i][1] +'</div></div></span></label>';
    }
  } 
  if(MemotoFriend!="") {
    str += '<div style="margin:20px auto; color:#fff;"><textarea onmouseout="CheckNewMemo()" name="text" id="txttextmemo" style="margin:12px auto 3px auto; height:90px; width:80%; padding:7px; background:#c9ebd1;border-radius: 10px; color:#000;">'+ MemotoFriend +'</textarea><div style="margin-top:8px;">ใส่คำอธิฐานของคุณได้ที่นี่</div></div>';  
  } else {
    str += '<div style="margin:20px auto; color:#fff;"><textarea onmouseout="CheckNewMemo()" name="text" id="txttextmemo" style="margin:12px auto 3px auto; height:90px; width:80%; padding:7px; background:#c9ebd1;border-radius: 10px; color:#000;"></textarea><div style="margin-top:8px;">ใส่คำอธิฐานของคุณได้ที่นี่</div></div>';  
  }
  str += '</div>';
  $("#DisplaySelect2").html(str);
  document.getElementById('id02').style.display='block';
}


function SelectPerson() {
  var str = "";
  str += '<div class="checkbox-group" style="margin-top:5px;"><div class="radio-buttons">';
  str += '<div style="margin:20px auto; color:#fff;"><input id="txtfriendname" onmouseout="CheckFriendName()" style="width:50%; padding:7px; text-align:center; background:#ff69d3;border-radius: 30px; color:#fff;" type="text" value="'+ FriendName +'"><div style="margin-top:8px;">ใส่ชื่อเพื่อนของคุณ</div></div>';
  for (var i = 0, length = arrPerson.length; i < length; i++) {
    if(arrPerson[i][0]==Select3) {
      str += '<label class="custom-radio" style="margin-bottom:0;"><input type="radio" id="c'+ i +'" name="SelectUser" value="'+ arrPerson[i] +'" checked>';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./img/person-'+ i +'.png"></div><div class="radio-label">'+ arrPerson[i][1] +'</div></div></span></label>';
    } else {
      str += '<label class="custom-radio"style="margin-bottom:0;"><input type="radio" id="c'+ i +'" name="SelectUser" value="'+ arrPerson[i] +'">';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div onclick="SelectItem3('+i+')" ><img src="./img/person-'+ i +'.png"></div><div class="radio-label">'+ arrPerson[i][1] +'</div></div></span></label>';
    }
  } 
  str += '</div>';
  $("#DisplaySelect3").html(str);
  document.getElementById('id03').style.display='block';
}


function SelectMap() {
  var str = "";
  str += '<div class="checkbox-group" style="margin-top:5px;"><div class="radio-buttons">';
  for (var i = 0, length = arrMap.length; i < length; i++) {
    if(arrMap[i][0]==Select4) {
      str += '<label class="custom-radio" style="margin-bottom:0;"><input type="radio" id="d'+ i +'" name="SelectPlace" value="'+ arrMap[i] +'" checked>';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./map/map-'+ i +'.jpg" style="margin-bottom:0px;"></div></div></span></label>';
    } else {
      str += '<label class="custom-radio" onclick="SelectItem4('+i+')" style="margin-bottom:0;"><input type="radio" id="d'+ i +'" name="SelectPlace" value="'+ arrMap[i] +'">';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./map/map-'+ i +'.jpg" style="margin-bottom:0px;"></div></div></span></label>';
    }
  } 
  str += '</div>';
  $("#DisplaySelect4").html(str);
  document.getElementById('id04').style.display='block';
}


function SelectItem1(x) {
  Select1 = x;
  document.getElementById('id01').style.display='none';
  StartGame();
  CheckSelect();
}


function SelectItem2(x) {
  Select2 = x;
  MemotoFriend = document.getElementById("txttextmemo").value;
  if(MemotoFriend != arrTextMemo[x][2]) {
    MemotoFriend = arrTextMemo[x][2];
  }
  $("#txttextmemo").html(MemotoFriend);
  console.log("MemotoFriend="+MemotoFriend);
  StartGame();
  CheckSelect();
}


function SelectItem3(x) {
  Select3 = x;
  FriendName = document.getElementById("txtfriendname").value;
  if(FriendName=="") {
    alert("ใส่ชื่อเพื่อนของคุณก่อนนะ");
    console.log("ใส่ชื่อเพื่อนของคุณก่อนนะ");
  } else {
    document.getElementById('id03').style.display='none';
    StartGame();
    CheckSelect();
  }
}


function SelectMeOnly() {
  Select3 = 88;
  FriendName = "ลอยคนเดียว";
  console.log("ME Only");
  document.getElementById('id03').style.display='none';
  StartGame();
  CheckSelect();
}



function SelectItem4(x) {
  Select4 = x;
  MapLoyKrathong = arrMap[x][1];
  document.getElementById('id04').style.display='none';
  StartGame();
  CheckSelect();
}


function CheckFriendName() {
  FriendName = document.getElementById("txtfriendname").value;
  console.log(FriendName);
  if(Select3!=99 && FriendName!="") {
    document.getElementById('id03').style.display='none';
    StartGame();
    CheckSelect();
  } else {
    console.log("ใส่ข้อมูลยังไม่ครบถ้วน");
  }
}


function EndKrathong() {
  NewDate();
  var TimeStampDate = Math.round(Date.now() / 1000);
  var str = "";
  dbLoyKrathong.add({
    LineID : sessionStorage.getItem("LineID"),
    LineName : sessionStorage.getItem("LineName"),
    LinePicture : sessionStorage.getItem("LinePicture"),
    EmpID : sessionStorage.getItem("EmpID_Moon2023"),
    EmpName : sessionStorage.getItem("EmpName_Moon2023"),
    LoySelect1 : Select1,
    LoySelect2 : Select2,
    LoyMemotoFriend : MemotoFriend,
    LoySelect3 : Select3,
    LoyFriendName : FriendName,
    LoyMapLoyKrathong : MapLoyKrathong,
    DateRegister : dateString,
    LoyViewPage : 0,
    TimeStampDate : TimeStampDate
  });
  str += '<div class="img-bottom"><img src="./map/'+ MapLoyKrathong +'" style="width:100%; height:80vh; z-index:100;">';
  if(Select1!=99) {
    str += '<div class="img-over-img1"><img src="./img/loy-'+Select1+'.png" class="hand" style="width:100%; max-width: 80%;margin:auto;"></div></div>';
  }
  if(Select2!=99) {
    str += '<div class="img-over-icon" style="top:50%;padding-top:18px;">';
    if(Select3==88) {
      str += '<div class="img-over-person2"><img src="'+ sessionStorage.getItem("LinePicture") +'" class="img-over-person2" style="left:100%;"></div>';
    } else if(Select3!=99) {
      str += '<div class="img-over-person2"><div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="img-over-person2"></div><div><img src="./img/person-'+ Select3 +'.png" class="img-over-person1"></div></div>';
      //str += '<div class="img-over-person2"><img src="'+ ssessionStorage.getItem("LinePicture") +'" class="img-over-person2"><div><img src="./img/person-'+ Select3 +'.png" class="img-over-person1"></div></div>';
    } 
    str += 'คำอธิฐาน<br>'+ MemotoFriend +'</div>';
  }
  str += '</div>';
  str += '<center><div class="btn-t2" onClick="gotoOnline()" style="margin:20px auto 80px auto;">ดูข้อมูลผู้ร่วมกิจกรรม</div></center>';
  $("#SentKrathong").html(str);
  document.getElementById('StartKrathong').style.display='none';
  document.getElementById('PlayKrathong').style.display='block';
}


function ChangeMap() {
  console.log("Change Map");
  document.getElementById('DisplaySelect').style.display='block';
  document.getElementById('GoKathong').style.display='none';
}


function CheckNewMemo() {
  MemotoFriend = document.getElementById("txttextmemo").value;
  console.log(MemotoFriend);
  $("#txttextmemo").html(MemotoFriend);
  StartGame();
}


function play() {
  var audio = new Audio('./mp3/loykrathong_remix.mp3');
  audio.play();
}

function playSound(animal) {
  document.getElementById(animal).play();
};


function gotoOnline() {
  location.href = "loykrathong.html";
}


function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
}

function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
  document.getElementById('id03').style.display='none';
  document.getElementById('id04').style.display='none';
}
