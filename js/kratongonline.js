var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var cleararray = 0;
var Select1 = 99;
var Select2 = 99; 
var Select3 = 99;
var Select4 = "";
var FriendName = "";
var MemotoFriend = "";
var MemotoFriend1 = "";
var CheckPage = 0;


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Moon2023")==null) { location.href = "index.html"; }
  Connect_DB();
  dbGiftRewards = firebase.firestore().collection("Gift2023Rewards");
  StartGame();
  CheckSelect();
  //CountRewards();
  //CheckData();
});


function StartKrathong() {
  document.getElementById('OpenKrathong').style.display='none';
  document.getElementById('DisplayKrathong').style.display='block';
}


function StartGame() {
  var str = "";
  var str1 = "";
  if(Select1==99) {
    str += '<div class="img-bottom" style="height:350px;"><img src="./img/bg-mooncake3.png" style="width:100%;"></div>';
    str += '<div class="img-over-img" style="top:25%;"><img src="./img/person.png" style="width:100%; max-width: 80%;margin:auto;"></div></div>';
  } else {
    if(Select1!=99) {
      str += '<div class="img-bottom"><img src="./img/bg-mooncake3.png" style="width:100%;">';
      str += '<div class="img-over-img"><img src="./img/loy-'+Select1+'.png" class="hand" style="width:100%; max-width: 80%;margin:auto;"></div></div>';
    }
    if(Select2!=99) {
      str += '<div class="img-over-icon">คำอธิฐาน<br>'+ MemotoFriend +'</div>';
    }
    if(Select3!=99) {
      str += '<div class="img-over-person"><div><img src="https://profile.line-scdn.net/0hoLlg-mNNMGNRHiaTpMdPNG1bPg4mMDYrKX8qVnIYOgYpe3QwbCp2AXVKaVN_fnMzOC16V3NMagF8" class="img-over-person"></div><div><img src="./img/person-'+ Select3 +'.png" class="img-over-person1"></div></div>';
    }

    str1 += '<div class="img-bottom"><img src="./map/map-2.jpg" style="width:100%;">';
    str1 += '<div class="img-over-img" style="z-ingde:100;margin-top:150px;"><img src="./img/loy-'+Select1+'.png" style="width:100%; max-width: 80%;margin:auto;"></div>';
    str1 += '<div style="height:140px;margin:-130px auto 10px auto;"><center><img src="./img/wood-bridge.png" style="width:100%;max-width:80%;"></center></div></div>';
    //str1 += '<div class="img-over-icon">คำอธิฐาน<br>'+ MemotoFriend +'</div>';
    //str1 += '<div class="img-over-person"><div><img src="https://profile.line-scdn.net/0hoLlg-mNNMGNRHiaTpMdPNG1bPg4mMDYrKX8qVnIYOgYpe3QwbCp2AXVKaVN_fnMzOC16V3NMagF8" class="img-over-person"></div><div><img src="./img/person-'+ Select3 +'.png" class="img-over-person1"></div></div>';

  }
  $("#ShowDisplay").html(str);
  $("#ShowDisplay1").html(str1);
}



function Krathong(x) {
  console.log("Krathong==="+x);
  if(x==1) {
    SelectKrathong();
  } else if(x==2) {
    SelectTextMemo();
  } else if(x==3) {
    SelectPerson();
  }
}


function CheckSelect() {
  var str = "";
  if(Select1!=99 && Select2!=99 && Select3!=99 && FriendName!="") {
    document.getElementById('CreateKathong').style.display='none';
    document.getElementById('GoKathong').style.display='block';
    //str += '<div class="img-bottom" style="height:140px;"><img src="./img/wood-bridge.png" style="width:100%;max-width:80%;"></div>';
    str += '<div class="container" style="line-height: 1.3; color:#fff;margin-top:20px;"><br>เตรียมลอยกระทงของคุณ</div>';
    str += '<div style="width:95%; max-width: 500px; margin:5px auto 15px auto;">';
    str += '<div class="box_gift11" onclick="Krathong(1)"><img src="./img/icon-krathong.png" style="width:90%;padding:10px;"><br>ปรับแต่งอีกนิด</div>';
    str += '<div class="box_gift11" onclick="Krathong(5)"><img src="./img/icon-krathong.png" style="width:90%;padding:10px;"><br>ลอยที่ไหนดีนะ</div>';
    str += '<div class="box_gift11" onclick="Krathong(6)"><img src="./img/icon-krathong.png" style="width:90%;padding:10px;"><br>ปล่อยกระทง</div>';
    str += '</div>';

  } else {
    str += '<div class="container" style="line-height: 1.3; color:#fff;margin-top:20px;"><br>3 ขั้นตอนในการเตรียมกระทงออนไลน์</div>';
    str += '<div style="width:95%; max-width: 500px; margin:5px auto 15px auto;">';
    if(Select1!=99) {
      str += '<div class="box_gift11" onclick="Krathong(1)"><img src="./img/icon-krathong.png" style="width:90%;padding:10px;"><br>1. เลือกกระทง</div>';
    } else {
      str += '<div class="box_gift1" onclick="Krathong(1)"><img src="./img/icon-krathong.png" style="width:90%;padding:10px;"><br>1. เลือกกระทง</div>';
    }
    if(Select2!=99) {
      str += '<div class="box_gift11" onclick="Krathong(2)"><img src="./img/icon-pray.png" style="width:90%;padding:10px;"><br>2. คำอธิฐาน</div>';
    } else {
      str += '<div class="box_gift1" onclick="Krathong(2)"><img src="./img/icon-pray.png" style="width:90%;padding:10px;"><br>2. คำอธิฐาน</div>';
    }
    if(Select3!=99) {
      str += '<div class="box_gift11" onclick="Krathong(3)"><img src="./img/icon-partner.png" style="width:90%;padding:10px;"><br>3. เลือกคู่ลอย</div>';
    } else {
      str += '<div class="box_gift1" onclick="Krathong(3)"><img src="./img/icon-partner.png" style="width:90%;padding:10px;"><br>3. เลือกคู่ลอย</div>';
    }
    str += '</div>';
  }

  $("#DisplaySelect").html(str);
}



function SelectKrathong() {
  var str = "";
  str += '<div class="checkbox-group" style="margin-top:5px;"><div class="radio-buttons">';
  for (var i = 0, length = arrKrathong.length; i < length; i++) {
    if(arrKrathong[i][0]==Select1) {
    //console.log("arr="+arrKrathong[i][0]);
      str += '<label class="custom-radio" style="margin-bottom:0;"><input type="radio" id="r'+ i +'" name="SelectPlace" value="'+ arrKrathong[i] +'" checked>';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./img/loy-'+ i +'.png"></div><div class="radio-label">'+ arrKrathong[i][1] +'</div></div></span></label>';
    } else {
    //console.log("arr="+arrKrathong[i][0]);
      str += '<label class="custom-radio" onclick="SelectItem1('+i+')" style="margin-bottom:0;"><input type="radio" id="r'+ i +'" name="SelectPlace" value="'+ arrKrathong[i] +'">';
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
      str += '<label class="custom-radio" style="margin-bottom:0;"><input type="radio" id="r'+ i +'" name="SelectUser" value="'+ arrTextMemo[i] +'" checked>';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./img/flower-'+ i +'.png" style="width:140%;"></div><div class="radio-label">'+ arrTextMemo[i][1] +'</div></div></span></label>';
    } else {
      str += '<label class="custom-radio"style="margin-bottom:0;"><input type="radio" id="r'+ i +'" name="SelectUser" value="'+ arrTextMemo[i] +'">';
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
      str += '<label class="custom-radio" style="margin-bottom:0;"><input type="radio" id="r'+ i +'" name="SelectUser" value="'+ arrPerson[i] +'" checked>';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div><img src="./img/person-'+ i +'.png"></div><div class="radio-label">'+ arrPerson[i][1] +'</div></div></span></label>';
    } else {
      str += '<label class="custom-radio"style="margin-bottom:0;"><input type="radio" id="r'+ i +'" name="SelectUser" value="'+ arrPerson[i] +'">';
      str += '<span class="radio-btn"><i class="las la-check"></i><div class="hobbies-icon">';
      str += '<div onclick="SelectItem3('+i+')" ><img src="./img/person-'+ i +'.png"></div><div class="radio-label">'+ arrPerson[i][1] +'</div></div></span></label>';
    }
  } 
  str += '</div>';
  $("#DisplaySelect3").html(str);
  document.getElementById('id03').style.display='block';
}


function SelectItem1(x) {
  //Select1 = arrKrathong[(x-1)][1];
  Select1 = x;
/*
  var xSelectPlace = document.getElementsByName('SelectPlace');

  for(var i = 0; i < xSelectPlace.length; i++){
      if(xSelectPlace[i].checked){
          Select1 = xSelectPlace[i].value;
      }
  }  
  console.log(Select1);

*/
  //StartKrathong();
  //console.log("Select1="+x);
  document.getElementById('id01').style.display='none';
  StartGame();
  CheckSelect();
}


function SelectItem2(x) {
  Select2 = x;
  MemotoFriend = document.getElementById("txttextmemo").value;
  //if(MemotoFriend=="") {
  //}
  if(MemotoFriend != arrTextMemo[x][2]) {
    //MemotoFriend = arrTextMemo[x][2];
  //} else {
    MemotoFriend = arrTextMemo[x][2];

  }
  $("#txttextmemo").html(MemotoFriend);
  console.log("MemotoFriend="+MemotoFriend);
  StartGame();
  CheckSelect();
}


function CheckNewMemo() {
  MemotoFriend = document.getElementById("txttextmemo").value;
  console.log(MemotoFriend);
  $("#txttextmemo").html(MemotoFriend);
  StartGame();
}


function SelectItem3(x) {
  Select3 = x;
  //iCheck++;
  //console.log(iCheck);
  //console.log(x);
  FriendName = document.getElementById("txtfriendname").value;
  //console.log("FriendName=="+FriendName+"===="+x);
  if(FriendName=="") {
    alert("ใส่ชื่อเพื่อนของคุณก่อนนะ");
    console.log("ใส่ชื่อเพื่อนของคุณก่อนนะ");
  } else {
    //console.log("Select3="+x);
    document.getElementById('id03').style.display='none';
    StartGame();
    CheckSelect();
  }
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


function CloseAll() {
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
  document.getElementById('id03').style.display='none';
}
