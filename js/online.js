var _0x23f5b2=_0x4033;(function(_0x3cf3d1,_0x3fa274){var _0x18199b=_0x4033,_0x4d38ee=_0x3cf3d1();while(!![]){try{var _0x1217f2=-parseInt(_0x18199b(0x113))/0x1*(parseInt(_0x18199b(0x17b))/0x2)+-parseInt(_0x18199b(0x12f))/0x3*(-parseInt(_0x18199b(0x16d))/0x4)+-parseInt(_0x18199b(0x15d))/0x5*(-parseInt(_0x18199b(0x15b))/0x6)+-parseInt(_0x18199b(0x175))/0x7*(-parseInt(_0x18199b(0x170))/0x8)+parseInt(_0x18199b(0x120))/0x9+parseInt(_0x18199b(0x153))/0xa*(-parseInt(_0x18199b(0x165))/0xb)+-parseInt(_0x18199b(0x13a))/0xc*(parseInt(_0x18199b(0x152))/0xd);if(_0x1217f2===_0x3fa274)break;else _0x4d38ee['push'](_0x4d38ee['shift']());}catch(_0x4f5767){_0x4d38ee['push'](_0x4d38ee['shift']());}}}(_0x5822,0x4b5ce));var dateString=new Date()[_0x23f5b2(0x10d)]('en-US',{'timeZone':_0x23f5b2(0x16c)}),today=new Date(),dd=String(today[_0x23f5b2(0x17a)]())[_0x23f5b2(0x147)](0x2,'0'),mm=String(today['getMonth']()+0x1)[_0x23f5b2(0x147)](0x2,'0'),yyyy=today[_0x23f5b2(0x12d)]()+0x21f;today=dd+'/'+mm+'/'+yyyy;var cleararray=0x0,CheckPage=0x0,Select1=0x63,Select2=0x63,Select3=0x63,Select4=0x63,Select5=0x63,FriendName='',MemotoFriend='',MemotoFriend1='',MapLoyKrathong='';$(document)[_0x23f5b2(0x129)](function(){var _0xd3a7b2=_0x23f5b2;sessionStorage[_0xd3a7b2(0x139)](_0xd3a7b2(0x12e))==null&&(location[_0xd3a7b2(0x127)]=_0xd3a7b2(0x133)),Connect_DB(),dbLoyKrathong=firebase[_0xd3a7b2(0x11d)]()[_0xd3a7b2(0x15c)](_0xd3a7b2(0x16a)),MapLoyKrathong==''&&(MapLoyKrathong='map-0.jpg'),StartGame(),CheckSelect(),StartKrathong();});function StartKrathong(){var _0x5778d2=_0x23f5b2;document[_0x5778d2(0x13f)](_0x5778d2(0x123))[_0x5778d2(0x179)][_0x5778d2(0x156)]='none',document[_0x5778d2(0x13f)](_0x5778d2(0x171))[_0x5778d2(0x179)]['display']=_0x5778d2(0x140);}function StartGame(){var _0x40e4b2=_0x23f5b2,_0x27f5f2='',_0x15492a='';if(Select1==0x63)_0x27f5f2+=_0x40e4b2(0x143)+MapLoyKrathong+'\x22\x20style=\x22width:100%;\x22>',_0x27f5f2+=_0x40e4b2(0x15e),_0x27f5f2+=_0x40e4b2(0x14c),_0x27f5f2+=_0x40e4b2(0x144),_0x27f5f2+='</div>';else{Select1!=0x63&&(_0x27f5f2+=_0x40e4b2(0x143)+MapLoyKrathong+'\x22\x20style=\x22width:100%;\x22>',_0x27f5f2+='<div\x20style=\x22height:140px;margin:-130px\x20auto\x2010px\x20auto;\x22><center><img\x20src=\x22./img/wood-bridge.png\x22\x20style=\x22width:100%;max-width:80%;\x22></center></div>',_0x27f5f2+=_0x40e4b2(0x180)+Select1+_0x40e4b2(0x14b));Select2!=0x63&&(_0x27f5f2+='<div\x20class=\x22img-over-icon\x22>คำอธิฐาน<br>'+MemotoFriend+_0x40e4b2(0x14d));if(Select3==0x58)_0x27f5f2+=_0x40e4b2(0x11a)+sessionStorage[_0x40e4b2(0x139)]('LinePicture')+_0x40e4b2(0x162);else Select3!=0x63&&(_0x27f5f2+=_0x40e4b2(0x11a)+sessionStorage[_0x40e4b2(0x139)](_0x40e4b2(0x145))+_0x40e4b2(0x150)+Select3+_0x40e4b2(0x11b));}$('#ShowDisplay')[_0x40e4b2(0x125)](_0x27f5f2);}function Krathong(_0x442203){if(_0x442203==0x1)SelectKrathong();else{if(_0x442203==0x2)SelectTextMemo();else{if(_0x442203==0x3)SelectPerson();else _0x442203==0x4&&SelectMap();}}}function CheckSelect(){var _0x3201f3=_0x23f5b2,_0x2238c2='';Select1!=0x63&&Select2!=0x63&&Select3!=0x63&&FriendName!=''&&Select4!=0x63&&(document[_0x3201f3(0x13f)](_0x3201f3(0x151))[_0x3201f3(0x179)][_0x3201f3(0x156)]=_0x3201f3(0x14a),document[_0x3201f3(0x13f)]('GoKathong')[_0x3201f3(0x179)][_0x3201f3(0x156)]=_0x3201f3(0x140)),_0x2238c2+=_0x3201f3(0x146),_0x2238c2+=_0x3201f3(0x134),Select1!=0x63?_0x2238c2+='<div\x20class=\x22box_gift11\x22\x20onclick=\x22Krathong(1)\x22><img\x20src=\x22./img/icon-krathong.png\x22\x20class=\x22img-width\x22><br>1.\x20เลือกกระทง</div>':(_0x2238c2+='<a\x20href=javascript:playSound(\x22RandomSound\x22);>',_0x2238c2+='<div\x20class=\x22box_gift1\x22\x20onclick=\x22Krathong(1)\x22><img\x20src=\x22./img/icon-krathong.png\x22\x20class=\x22img-width\x22><br>1.\x20เลือกกระทง</div>',_0x2238c2+=_0x3201f3(0x12c)),Select2!=0x63?_0x2238c2+=_0x3201f3(0x164):_0x2238c2+=_0x3201f3(0x176),Select3!=0x63?_0x2238c2+=_0x3201f3(0x131):_0x2238c2+=_0x3201f3(0x16f),Select4!=0x63?_0x2238c2+=_0x3201f3(0x159):_0x2238c2+=_0x3201f3(0x11f),_0x2238c2+='</div>',$(_0x3201f3(0x17e))[_0x3201f3(0x125)](_0x2238c2);}function SelectKrathong(){var _0x2fba36=_0x23f5b2,_0x5e25c6='';_0x5e25c6+=_0x2fba36(0x169);for(var _0x1d5820=0x0,_0x4a6f0f=arrKrathong[_0x2fba36(0x126)];_0x1d5820<_0x4a6f0f;_0x1d5820++){arrKrathong[_0x1d5820][0x0]==Select1?(_0x5e25c6+=_0x2fba36(0x163)+_0x1d5820+'\x22\x20name=\x22SelectPlace\x22\x20value=\x22'+arrKrathong[_0x1d5820]+_0x2fba36(0x14e),_0x5e25c6+=_0x2fba36(0x124),_0x5e25c6+='<div><img\x20src=\x22./img/loy-'+_0x1d5820+_0x2fba36(0x142)+arrKrathong[_0x1d5820][0x1]+_0x2fba36(0x177)):(_0x5e25c6+=_0x2fba36(0x122)+_0x1d5820+_0x2fba36(0x138)+_0x1d5820+'\x22\x20name=\x22SelectPlace\x22\x20value=\x22'+arrKrathong[_0x1d5820]+'\x22>',_0x5e25c6+=_0x2fba36(0x124),_0x5e25c6+='<div><img\x20src=\x22./img/loy-'+_0x1d5820+_0x2fba36(0x142)+arrKrathong[_0x1d5820][0x1]+'</div></div></span></label>');}_0x5e25c6+=_0x2fba36(0x14d),$(_0x2fba36(0x15a))['html'](_0x5e25c6),document[_0x2fba36(0x13f)](_0x2fba36(0x178))[_0x2fba36(0x179)][_0x2fba36(0x156)]=_0x2fba36(0x140);}function _0x4033(_0x57d7da,_0x5742a4){var _0x582257=_0x5822();return _0x4033=function(_0x4033e7,_0x1d8a06){_0x4033e7=_0x4033e7-0x10d;var _0xbeb8b3=_0x582257[_0x4033e7];return _0xbeb8b3;},_0x4033(_0x57d7da,_0x5742a4);}function SelectTextMemo(){var _0xf3274e=_0x23f5b2,_0x595a87='';_0x595a87+=_0xf3274e(0x169);for(var _0x3b984c=0x0,_0x20b51e=arrTextMemo[_0xf3274e(0x126)];_0x3b984c<_0x20b51e;_0x3b984c++){arrTextMemo[_0x3b984c][0x0]==Select2?(_0x595a87+='<label\x20class=\x22custom-radio\x22\x20style=\x22margin-bottom:0;\x22><input\x20type=\x22radio\x22\x20id=\x22b'+_0x3b984c+_0xf3274e(0x155)+arrTextMemo[_0x3b984c]+_0xf3274e(0x14e),_0x595a87+=_0xf3274e(0x124),_0x595a87+='<div><img\x20src=\x22./img/flower-'+_0x3b984c+_0xf3274e(0x168)+arrTextMemo[_0x3b984c][0x1]+'</div></div></span></label>'):(_0x595a87+=_0xf3274e(0x172)+_0x3b984c+'\x22\x20name=\x22SelectUser\x22\x20value=\x22'+arrTextMemo[_0x3b984c]+'\x22>',_0x595a87+=_0xf3274e(0x124),_0x595a87+=_0xf3274e(0x13d)+_0x3b984c+_0xf3274e(0x116)+_0x3b984c+'.png\x22\x20style=\x22width:140%;\x22></div><div\x20class=\x22radio-label\x22>'+arrTextMemo[_0x3b984c][0x1]+_0xf3274e(0x177));}MemotoFriend!=''?_0x595a87+=_0xf3274e(0x141)+MemotoFriend+_0xf3274e(0x173):_0x595a87+=_0xf3274e(0x111),_0x595a87+=_0xf3274e(0x14d),$(_0xf3274e(0x128))['html'](_0x595a87),document[_0xf3274e(0x13f)](_0xf3274e(0x148))[_0xf3274e(0x179)]['display']='block';}function SelectPerson(){var _0x302764=_0x23f5b2,_0x193513='';_0x193513+=_0x302764(0x169),_0x193513+=_0x302764(0x137)+FriendName+_0x302764(0x13b);for(var _0x1f30ec=0x0,_0x3d70e0=arrPerson[_0x302764(0x126)];_0x1f30ec<_0x3d70e0;_0x1f30ec++){arrPerson[_0x1f30ec][0x0]==Select3?(_0x193513+=_0x302764(0x16b)+_0x1f30ec+'\x22\x20name=\x22SelectUser\x22\x20value=\x22'+arrPerson[_0x1f30ec]+_0x302764(0x14e),_0x193513+='<span\x20class=\x22radio-btn\x22><i\x20class=\x22las\x20la-check\x22></i><div\x20class=\x22hobbies-icon\x22>',_0x193513+=_0x302764(0x110)+_0x1f30ec+_0x302764(0x142)+arrPerson[_0x1f30ec][0x1]+_0x302764(0x177)):(_0x193513+=_0x302764(0x136)+_0x1f30ec+_0x302764(0x155)+arrPerson[_0x1f30ec]+'\x22>',_0x193513+='<span\x20class=\x22radio-btn\x22><i\x20class=\x22las\x20la-check\x22></i><div\x20class=\x22hobbies-icon\x22>',_0x193513+='<div\x20onclick=\x22SelectItem3('+_0x1f30ec+_0x302764(0x11e)+_0x1f30ec+_0x302764(0x142)+arrPerson[_0x1f30ec][0x1]+_0x302764(0x177));}_0x193513+=_0x302764(0x14d),$(_0x302764(0x112))[_0x302764(0x125)](_0x193513),document[_0x302764(0x13f)](_0x302764(0x12a))[_0x302764(0x179)][_0x302764(0x156)]=_0x302764(0x140);}function SelectMap(){var _0x3d2d93=_0x23f5b2,_0x2053e5='';_0x2053e5+=_0x3d2d93(0x169);for(var _0x314f09=0x0,_0x142562=arrMap['length'];_0x314f09<_0x142562;_0x314f09++){arrMap[_0x314f09][0x0]==Select4?(_0x2053e5+=_0x3d2d93(0x10f)+_0x314f09+_0x3d2d93(0x17c)+arrMap[_0x314f09]+_0x3d2d93(0x14e),_0x2053e5+=_0x3d2d93(0x124),_0x2053e5+='<div><img\x20src=\x22./map/map-'+_0x314f09+_0x3d2d93(0x117)):(_0x2053e5+=_0x3d2d93(0x174)+_0x314f09+_0x3d2d93(0x154)+_0x314f09+_0x3d2d93(0x17c)+arrMap[_0x314f09]+'\x22>',_0x2053e5+=_0x3d2d93(0x124),_0x2053e5+='<div><img\x20src=\x22./map/map-'+_0x314f09+'.jpg\x22\x20style=\x22margin-bottom:0px;\x22></div></div></span></label>');}_0x2053e5+=_0x3d2d93(0x14d),$(_0x3d2d93(0x12b))[_0x3d2d93(0x125)](_0x2053e5),document[_0x3d2d93(0x13f)]('id04')[_0x3d2d93(0x179)]['display']=_0x3d2d93(0x140);}function SelectItem1(_0x5c8a45){var _0x2fcf1f=_0x23f5b2;Select1=_0x5c8a45,document['getElementById'](_0x2fcf1f(0x178))['style'][_0x2fcf1f(0x156)]=_0x2fcf1f(0x14a),StartGame(),CheckSelect();}function SelectItem2(_0x1c4d3b){var _0x57a73b=_0x23f5b2;Select2=_0x1c4d3b,MemotoFriend=document[_0x57a73b(0x13f)](_0x57a73b(0x166))['value'],MemotoFriend!=arrTextMemo[_0x1c4d3b][0x2]&&(MemotoFriend=arrTextMemo[_0x1c4d3b][0x2]),$(_0x57a73b(0x161))[_0x57a73b(0x125)](MemotoFriend),console['log'](_0x57a73b(0x10e)+MemotoFriend),StartGame(),CheckSelect();}function SelectItem3(_0x2b7f8c){var _0x152c3d=_0x23f5b2;Select3=_0x2b7f8c,FriendName=document[_0x152c3d(0x13f)](_0x152c3d(0x16e))['value'],FriendName==''?(alert('ใส่ชื่อเพื่อนของคุณก่อนนะ'),console[_0x152c3d(0x160)](_0x152c3d(0x130))):(document[_0x152c3d(0x13f)]('id03')[_0x152c3d(0x179)][_0x152c3d(0x156)]=_0x152c3d(0x14a),StartGame(),CheckSelect());}function SelectMeOnly(){var _0x33fa6c=_0x23f5b2;Select3=0x58,FriendName=_0x33fa6c(0x14f),console['log'](_0x33fa6c(0x158)),document[_0x33fa6c(0x13f)](_0x33fa6c(0x12a))[_0x33fa6c(0x179)][_0x33fa6c(0x156)]=_0x33fa6c(0x14a),StartGame(),CheckSelect();}function SelectItem4(_0x27d6e1){var _0x346323=_0x23f5b2;Select4=_0x27d6e1,MapLoyKrathong=arrMap[_0x27d6e1][0x1],document['getElementById'](_0x346323(0x121))[_0x346323(0x179)][_0x346323(0x156)]=_0x346323(0x14a),StartGame(),CheckSelect();}function CheckFriendName(){var _0x2f4244=_0x23f5b2;FriendName=document['getElementById'](_0x2f4244(0x16e))[_0x2f4244(0x13e)],console[_0x2f4244(0x160)](FriendName),Select3!=0x63&&FriendName!=''?(document[_0x2f4244(0x13f)]('id03')[_0x2f4244(0x179)][_0x2f4244(0x156)]=_0x2f4244(0x14a),StartGame(),CheckSelect()):console[_0x2f4244(0x160)](_0x2f4244(0x135));}function EndKrathong(){var _0x4b3674=_0x23f5b2;NewDate();var _0x41d5ed=Math['round'](Date[_0x4b3674(0x17d)]()/0x3e8),_0x5307c5='';dbLoyKrathong[_0x4b3674(0x182)]({'LineID':sessionStorage['getItem']('LineID'),'LineName':sessionStorage['getItem']('LineName'),'LinePicture':sessionStorage[_0x4b3674(0x139)](_0x4b3674(0x145)),'EmpID':sessionStorage['getItem']('EmpID_Moon2023'),'EmpName':sessionStorage[_0x4b3674(0x139)]('EmpName_Moon2023'),'LoySelect1':Select1,'LoySelect2':Select2,'LoyMemotoFriend':MemotoFriend,'LoySelect3':Select3,'LoyFriendName':FriendName,'LoyMapLoyKrathong':MapLoyKrathong,'DateRegister':dateString,'LoyViewPage':0x0,'TimeStampDate':_0x41d5ed}),_0x5307c5+='<div\x20class=\x22img-bottom\x22><img\x20src=\x22./map/'+MapLoyKrathong+_0x4b3674(0x183);Select1!=0x63&&(_0x5307c5+='<div\x20class=\x22img-over-img1\x22><img\x20src=\x22./img/loy-'+Select1+_0x4b3674(0x17f));if(Select2!=0x63){_0x5307c5+=_0x4b3674(0x157);if(Select3==0x58)_0x5307c5+='<div\x20class=\x22img-over-person2\x22><img\x20src=\x22'+sessionStorage[_0x4b3674(0x139)](_0x4b3674(0x145))+_0x4b3674(0x167);else Select3!=0x63&&(_0x5307c5+='<div\x20class=\x22img-over-person2\x22><div><img\x20src=\x22'+sessionStorage['getItem'](_0x4b3674(0x145))+_0x4b3674(0x13c)+Select3+'.png\x22\x20class=\x22img-over-person1\x22></div></div>');_0x5307c5+='คำอธิฐาน<br>'+MemotoFriend+_0x4b3674(0x14d);}_0x5307c5+=_0x4b3674(0x14d),_0x5307c5+='<center><div\x20class=\x22btn-t2\x22\x20onClick=\x22gotoOnline()\x22\x20style=\x22margin:20px\x20auto\x2080px\x20auto;\x22>ดูข้อมูลผู้ร่วมกิจกรรม</div></center>',$('#SentKrathong')[_0x4b3674(0x125)](_0x5307c5),document['getElementById'](_0x4b3674(0x114))['style']['display']=_0x4b3674(0x14a),document[_0x4b3674(0x13f)]('PlayKrathong')[_0x4b3674(0x179)][_0x4b3674(0x156)]=_0x4b3674(0x140);}function ChangeMap(){var _0x2abdb6=_0x23f5b2;console[_0x2abdb6(0x160)](_0x2abdb6(0x149)),document[_0x2abdb6(0x13f)](_0x2abdb6(0x151))[_0x2abdb6(0x179)][_0x2abdb6(0x156)]='block',document[_0x2abdb6(0x13f)]('GoKathong')[_0x2abdb6(0x179)][_0x2abdb6(0x156)]=_0x2abdb6(0x14a);}function CheckNewMemo(){var _0x3ebc95=_0x23f5b2;MemotoFriend=document[_0x3ebc95(0x13f)](_0x3ebc95(0x166))['value'],console[_0x3ebc95(0x160)](MemotoFriend),$(_0x3ebc95(0x161))[_0x3ebc95(0x125)](MemotoFriend),StartGame();}function play(){var _0x2fa954=_0x23f5b2,_0x409e0c=new Audio(_0x2fa954(0x118));_0x409e0c[_0x2fa954(0x132)]();}function playSound(_0x49123a){var _0x3f1e2f=_0x23f5b2;document[_0x3f1e2f(0x13f)](_0x49123a)[_0x3f1e2f(0x132)]();};function gotoOnline(){var _0x14c3cf=_0x23f5b2;location[_0x14c3cf(0x127)]=_0x14c3cf(0x115);}function NewDate(){var _0x28b9c3=_0x23f5b2,_0x7ada54=new Date(),_0x421c97=_0x7ada54[_0x28b9c3(0x17a)]()+'',_0x28226e=_0x7ada54[_0x28b9c3(0x181)]()+0x1+'',_0x5ef81b=_0x7ada54[_0x28b9c3(0x12d)]()+'',_0x17ea86=_0x7ada54[_0x28b9c3(0x15f)]()+'',_0x32a159=_0x7ada54[_0x28b9c3(0x119)]()+'',_0x5e2a9a=_0x7ada54[_0x28b9c3(0x11c)]()+'',_0x3c43a5=_0x17ea86>=0xc?'PM':'AM';_0x421c97=checkZero(_0x421c97),_0x28226e=checkZero(_0x28226e),_0x5ef81b=checkZero(_0x5ef81b),_0x17ea86=checkZero(_0x17ea86),_0x32a159=checkZero(_0x32a159),_0x5e2a9a=checkZero(_0x5e2a9a),dateString=_0x421c97+'/'+_0x28226e+'/'+_0x5ef81b+'\x20'+_0x17ea86+':'+_0x32a159+':'+_0x5e2a9a+'\x20'+_0x3c43a5;}function checkZero(_0x551cd8){var _0x28e667=_0x23f5b2;return _0x551cd8[_0x28e667(0x126)]==0x1&&(_0x551cd8='0'+_0x551cd8),_0x551cd8;}function _0x5822(){var _0x2158f6=['<label\x20class=\x22custom-radio\x22style=\x22margin-bottom:0;\x22><input\x20type=\x22radio\x22\x20id=\x22b','</textarea><div\x20style=\x22margin-top:8px;\x22>ใส่คำอธิฐานของคุณได้ที่นี่</div></div>','<label\x20class=\x22custom-radio\x22\x20onclick=\x22SelectItem4(','513296auOEuP','<div\x20class=\x22box_gift1\x22\x20onclick=\x22Krathong(2)\x22><img\x20src=\x22./img/icon-pray.png\x22\x20class=\x22img-width\x22><br>2.\x20คำอธิฐาน</div>','</div></div></span></label>','id01','style','getDate','3526atCcNX','\x22\x20name=\x22SelectPlace\x22\x20value=\x22','now','#DisplaySelect','.png\x22\x20class=\x22hand\x22\x20style=\x22width:100%;\x20max-width:\x2080%;margin:auto;\x22></div></div>','<div\x20class=\x22img-over-img1\x22><img\x20src=\x22./img/loy-','getMonth','add','\x22\x20style=\x22width:100%;\x20height:80vh;\x20z-index:100;\x22>','toLocaleString','MemotoFriend=','<label\x20class=\x22custom-radio\x22\x20style=\x22margin-bottom:0;\x22><input\x20type=\x22radio\x22\x20id=\x22d','<div><img\x20src=\x22./img/person-','<div\x20style=\x22margin:20px\x20auto;\x20color:#fff;\x22><textarea\x20onmouseout=\x22CheckNewMemo()\x22\x20name=\x22text\x22\x20id=\x22txttextmemo\x22\x20style=\x22margin:12px\x20auto\x203px\x20auto;\x20height:90px;\x20width:80%;\x20padding:7px;\x20background:#c9ebd1;border-radius:\x2010px;\x20color:#000;\x22></textarea><div\x20style=\x22margin-top:8px;\x22>ใส่คำอธิฐานของคุณได้ที่นี่</div></div>','#DisplaySelect3','239ktIStU','StartKrathong','loykrathong.html',')\x22\x20><img\x20src=\x22./img/flower-','.jpg\x22\x20style=\x22margin-bottom:0px;\x22></div></div></span></label>','./mp3/loykrathong_remix.mp3','getMinutes','<div\x20class=\x22img-over-person\x22><div><img\x20src=\x22','.png\x22\x20class=\x22img-over-person1\x22></div></div>','getSeconds','firestore',')\x22\x20><img\x20src=\x22./img/person-','<div\x20class=\x22box_gift1\x22\x20onclick=\x22Krathong(4)\x22><img\x20src=\x22./img/icon-map.png\x22\x20class=\x22img-width\x22><br>4.\x20ไปลอยที่ไหน</div>','2539719DAMYln','id04','<label\x20class=\x22custom-radio\x22\x20onclick=\x22SelectItem1(','OpenKrathong','<span\x20class=\x22radio-btn\x22><i\x20class=\x22las\x20la-check\x22></i><div\x20class=\x22hobbies-icon\x22>','html','length','href','#DisplaySelect2','ready','id03','#DisplaySelect4','</a>','getFullYear','EmpID_Moon2023','33kVMsBJ','ใส่ชื่อเพื่อนของคุณก่อนนะ','<div\x20class=\x22box_gift11\x22\x20onclick=\x22Krathong(3)\x22><img\x20src=\x22./img/icon-partner.png\x22\x20class=\x22img-width\x22><br>3.\x20เลือกคู่ลอย</div>','play','index.html','<div\x20style=\x22width:95%;\x20max-width:\x20500px;\x20margin:5px\x20auto\x2015px\x20auto;\x22>','ใส่ข้อมูลยังไม่ครบถ้วน','<label\x20class=\x22custom-radio\x22style=\x22margin-bottom:0;\x22><input\x20type=\x22radio\x22\x20id=\x22c','<div\x20style=\x22margin:20px\x20auto;\x20color:#fff;\x22><input\x20id=\x22txtfriendname\x22\x20onmouseout=\x22CheckFriendName()\x22\x20style=\x22width:50%;\x20padding:7px;\x20text-align:center;\x20background:#ff69d3;border-radius:\x2030px;\x20color:#fff;\x22\x20type=\x22text\x22\x20value=\x22',')\x22\x20style=\x22margin-bottom:0;\x22><input\x20type=\x22radio\x22\x20id=\x22a','getItem','1176BMSOGj','\x22><div\x20style=\x22margin-top:8px;\x22>ใส่ชื่อเพื่อนของคุณ</div></div>','\x22\x20class=\x22img-over-person2\x22></div><div><img\x20src=\x22./img/person-','<div\x20onclick=\x22SelectItem2(','value','getElementById','block','<div\x20style=\x22margin:20px\x20auto;\x20color:#fff;\x22><textarea\x20onmouseout=\x22CheckNewMemo()\x22\x20name=\x22text\x22\x20id=\x22txttextmemo\x22\x20style=\x22margin:12px\x20auto\x203px\x20auto;\x20height:90px;\x20width:80%;\x20padding:7px;\x20background:#c9ebd1;border-radius:\x2010px;\x20color:#000;\x22>','.png\x22></div><div\x20class=\x22radio-label\x22>','<div\x20class=\x22img-bottom\x22><img\x20src=\x22./map/','<div\x20class=\x22img-over-icon\x22\x20style=\x22height:66px;\x20opacity:.9;\x20background:#fff;padding-top:16px;\x22><b>LINE\x20Retail\x20Society</b><br>ชวนคุณมาร่วมสร้างกระทงออนไลน์กัน\x20...<br>4\x20ขั้นตอนสำหรับการสร้างกระทง\x20คลิก..</div>','LinePicture','<div\x20class=\x22container\x22\x20style=\x22line-height:\x201.3;\x20color:#fff;\x22><br>4\x20ขั้นตอนในการเตรียมกระทงออนไลน์</div>','padStart','id02','Change\x20Map','none','.png\x22\x20style=\x22width:100%;\x20max-width:\x2080%;margin:auto;\x22></div></div>','<div\x20style=\x22height:140px;margin:-130px\x20auto\x2010px\x20auto;\x22><center><img\x20src=\x22./img/wood-bridge.png\x22\x20style=\x22width:100%;max-width:80%;\x22></center></div>','</div>','\x22\x20checked>','ลอยคนเดียว','\x22\x20class=\x22img-over-person\x22></div><div><img\x20src=\x22./img/person-','DisplaySelect','40066lfhmQl','80ScLcVJ',')\x22\x20style=\x22margin-bottom:0;\x22><input\x20type=\x22radio\x22\x20id=\x22d','\x22\x20name=\x22SelectUser\x22\x20value=\x22','display','<div\x20class=\x22img-over-icon\x22\x20style=\x22top:50%;padding-top:18px;\x22>','ME\x20Only','<div\x20class=\x22box_gift11\x22\x20onclick=\x22Krathong(4)\x22><img\x20src=\x22./img/icon-map.png\x22\x20class=\x22img-width\x22><br>4.\x20ไปลอยที่ไหน</div>','#DisplaySelect1','498dXQBmo','collection','29125HsmdCD','<div\x20class=\x22img-over-img\x22\x20style=\x22z-ingde:100;margin-top:150px;\x22><img\x20src=\x22./img/person.png\x22\x20style=\x22width:100%;\x20max-width:\x2080%;margin:auto;\x22></div>','getHours','log','#txttextmemo','\x22\x20class=\x22img-over-person\x22\x20style=\x22left:100%;\x22></div></div>','<label\x20class=\x22custom-radio\x22\x20style=\x22margin-bottom:0;\x22><input\x20type=\x22radio\x22\x20id=\x22a','<div\x20class=\x22box_gift11\x22\x20onclick=\x22Krathong(2)\x22><img\x20src=\x22./img/icon-pray.png\x22\x20class=\x22img-width\x22><br>2.\x20คำอธิฐาน</div>','536591gOFcTk','txttextmemo','\x22\x20class=\x22img-over-person2\x22\x20style=\x22left:100%;\x22></div>','.png\x22\x20style=\x22width:140%;\x22></div><div\x20class=\x22radio-label\x22>','<div\x20class=\x22checkbox-group\x22\x20style=\x22margin-top:5px;\x22><div\x20class=\x22radio-buttons\x22>','LoyKrathong','<label\x20class=\x22custom-radio\x22\x20style=\x22margin-bottom:0;\x22><input\x20type=\x22radio\x22\x20id=\x22c','Asia/Jakarta','25468rvMxrH','txtfriendname','<div\x20class=\x22box_gift1\x22\x20onclick=\x22Krathong(3)\x22><img\x20src=\x22./img/icon-partner.png\x22\x20class=\x22img-width\x22><br>3.\x20เลือกคู่ลอย</div>','64iuiNhP','DisplayKrathong'];_0x5822=function(){return _0x2158f6;};return _0x5822();}function CloseAll(){var _0x3037cd=_0x23f5b2;document[_0x3037cd(0x13f)](_0x3037cd(0x178))[_0x3037cd(0x179)][_0x3037cd(0x156)]=_0x3037cd(0x14a),document[_0x3037cd(0x13f)](_0x3037cd(0x148))['style']['display']='none',document['getElementById'](_0x3037cd(0x12a))[_0x3037cd(0x179)][_0x3037cd(0x156)]=_0x3037cd(0x14a),document[_0x3037cd(0x13f)](_0x3037cd(0x121))[_0x3037cd(0x179)][_0x3037cd(0x156)]=_0x3037cd(0x14a);}
