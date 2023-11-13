var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var cleararray = "";


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Moon2023")==null) { location.href = "index.html"; }
  Connect_DB();
  //dbGiftRewards = firebase.firestore().collection("Gift2023Rewards");
  dbLoyKrathong = firebase.firestore().collection("LoyKrathong");
  DisplayUser();
  CountKrathong();
});


function DisplayUser() {
  var str = "";
  dbLoyKrathong
  .orderBy('TimeStampDate','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      //str += '<abbr title="'+ doc.data().LoyMemotoFriend +'"><img src="'+ doc.data().LinePicture +'" class="Profile-img" onclick="ClickUser(\''+ doc.id+'\')"></abbr>';
      str += '<img src="'+ doc.data().LinePicture +'" class="Profile-img" onclick="ClickUser(\''+ doc.id+'\')">';
    });
    $("#ShowUser").html(str);
    document.getElementById('loading').style.display='none';
  }); 
}


function ClickUser(x) {
  $("#DisplayKrathong").html(cleararray);
  var str = "";
  dbLoyKrathong.where(firebase.firestore.FieldPath.documentId(), "==", x)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      xCheckView = doc.data().LoyViewPage + 1;
      str += '<div class="w3-container" style="background-image: url(./map/'+ doc.data().LoyMapLoyKrathong +'); background-position: center; background-repeat: no-repeat; background-size: cover; min-height: 500px; width: 100%; height: 90%; border-radius:10px;">';
      str += '<div class="img-over-img1"><img src="./img/loy-'+ doc.data().LoySelect1 +'.png" class="hand" style="width:100%; max-width: 80%;margin:auto;"></div></div>';
      str += '<div class="img-over-icon" style="top:50%;">';
      if(doc.data().LoySelect3==88) {
        str += '<div><img src="'+ doc.data().LinePicture +'" class="img-over-person3"></div>';
      } else if(doc.data().LoySelect3!=99) {
        str += '<div class="img-over-person2"><div><img src="'+ doc.data().LinePicture +'" class="img-over-person2"></div><div><img src="./img/person-'+ doc.data().LoySelect3 +'.png" class="img-over-person1"></div></div>';
      } 
      str += '';
      str += '<br>คำอธิฐาน<br>'+ doc.data().LoyMemotoFriend +'</div>';
      str += '</div><div style="margin-top:-24px; color:#fff; text-align:center;">(ดูแล้ว '+ xCheckView +' ครั้ง)</div>';
    });
    dbLoyKrathong.doc(x).update({
        LoyViewPage : xCheckView
    });
    document.getElementById('id01').style.display='block';
    $("#DisplayKrathong").html(str);
  });
}


function CountKrathong() { 
  var i = 0;
  dbLoyKrathong
  .get().then((snapshot)=> {
    snapshot.forEach(doc=>{
      i = i+1;
    });
    $("#CountUser").html("ขณะนี้มีผู้ลอยกระทงแล้ว <span class='font18'>"+ addCommas(i) +"</span> กระทง");
    console.log(i);
  });  
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}


