const _0x455c1e=_0x5442;(function(_0x1a6dd3,_0x144ca6){const _0x1fe5e6=_0x5442,_0x241321=_0x1a6dd3();while(!![]){try{const _0x20e00a=parseInt(_0x1fe5e6(0x18e))/0x1+-parseInt(_0x1fe5e6(0x184))/0x2+parseInt(_0x1fe5e6(0x18c))/0x3+parseInt(_0x1fe5e6(0x1a3))/0x4+parseInt(_0x1fe5e6(0x1aa))/0x5*(-parseInt(_0x1fe5e6(0x1a4))/0x6)+parseInt(_0x1fe5e6(0x1a9))/0x7+parseInt(_0x1fe5e6(0x183))/0x8;if(_0x20e00a===_0x144ca6)break;else _0x241321['push'](_0x241321['shift']());}catch(_0x5030ec){_0x241321['push'](_0x241321['shift']());}}}(_0x8410,0x2b4dc));function _0x8410(){const _0x9b978c=['user','\x27,\x20otp\x20=\x20','uploadVideo','\x27\x20OR\x20CAST(u.email\x20AS\x20CHAR)\x20=\x20\x27','\x27,\x20password\x20=\x20\x27','CheckPhoneNumber',',\x20otp\x20=\x200\x20WHERE\x20phoneNumber=\x27','SELECT\x20*\x20FROM\x20\x20users\x20WHERE\x20phoneNumber\x20=\x20\x27','UPDATE\x20users\x20SET\x20','1869472pHFRuR','136954MwSRQV','fullName=\x27','userAddresses=\x27',',\x20userType\x20=\x20\x27','\x27\x20OR\x20u.phoneNumber\x20=\x20\x27','\x20AND\x20(phoneNumber=\x27','INSERT\x20INTO\x20\x20foodposts\x20SET\x20userId\x20=\x20','singUp','364635kqohgW','fetchALlVideos','62899byNPgb',',\x20videoDescription\x20=\x20\x27','password=\x27','SELECT\x20*\x20FROM\x20users\x20WHERE\x20otp\x20=\x20','SELECT\x20*\x20FROM\x20\x20users\x20WHERE\x20email\x20=\x20\x27','../config/database','\x27,\x20','\x27,\x20status=0','updateProfile','UPDATE\x20users\x20SET\x20status\x20=\x20','verifyOtp','checkUsername','storeAddress=\x27','\x27,commentsAllowed\x20=\x20','SELECT\x20*\x20FROM\x20\x20users\x20WHERE\x20username\x20=\x20\x27','INSERT\x20INTO\x20users\x20SET\x20username\x20=\x20\x27','logIn','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20u.*,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20COUNT(DISTINCT\x20f1.followId)\x20AS\x20totalFollowing,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20COUNT(DISTINCT\x20f2.followId)\x20AS\x20totalFollowers,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20COUNT(DISTINCT\x20fp.foodId)\x20AS\x20totalVideos\x0a\x20\x20\x20\x20\x20\x20FROM\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20users\x20u\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20following\x20f1\x20ON\x20u.userId\x20=\x20f1.userId\x20--\x20To\x20count\x20the\x20number\x20of\x20users\x20this\x20user\x20is\x20following\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20following\x20f2\x20ON\x20u.userId\x20=\x20f2.followerId\x20--\x20To\x20count\x20the\x20number\x20of\x20users\x20following\x20this\x20user\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20foodposts\x20fp\x20ON\x20u.userId\x20=\x20fp.userId\x20--\x20To\x20count\x20the\x20number\x20of\x20videos\x20this\x20user\x0a\x20\x20\x20\x20\x20\x20WHERE\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20u.userId\x20=\x20\x27','\x27\x20OR\x20userId=\x27','execute','\x27\x20OR\x20email=\x27','109836yBmWIB','84498CwvtGH','updateProfileStatus','status=1\x20WHERE\x20userId=','stringify','\x27,location\x20=\x20\x27','869197WSTEUY','115sANFBc'];_0x8410=function(){return _0x9b978c;};return _0x8410();}const db=require(_0x455c1e(0x193));function _0x5442(_0x1103ae,_0x3ec9c6){const _0x841075=_0x8410();return _0x5442=function(_0x544214,_0x3f2bfb){_0x544214=_0x544214-0x182;let _0x3e9cb7=_0x841075[_0x544214];return _0x3e9cb7;},_0x5442(_0x1103ae,_0x3ec9c6);}module['exports']=class Users{constructor(){}[_0x455c1e(0x199)](_0x4dec3c){const _0x3741e3=_0x455c1e;return db[_0x3741e3(0x1a1)](_0x3741e3(0x19c)+_0x4dec3c+'\x27');}['checkEmail'](_0x37cdee){const _0x49d469=_0x455c1e;return db['execute'](_0x49d469(0x192)+_0x37cdee+'\x27');}[_0x455c1e(0x1b0)](_0x346394){const _0x307b27=_0x455c1e;return db[_0x307b27(0x1a1)](_0x307b27(0x1b2)+_0x346394+'\x27');}[_0x455c1e(0x19e)](_0x334836){const _0x1b2aee=_0x455c1e;return db[_0x1b2aee(0x1a1)]('SELECT\x20*\x20FROM\x20\x20users\x20where\x20email\x20=\x20\x27'+_0x334836+'\x27\x20OR\x20phoneNumber\x20=\x20\x27'+_0x334836+'\x27\x20OR\x20username\x20=\x20\x27'+_0x334836+'\x27;');}[_0x455c1e(0x18b)]({username:_0x5a9a32,phoneNumber:_0x4827cb,password:_0xb3a2d5,otp:_0xe2d2ba,userType:_0x4d1fbd,email:_0x290dad}){const _0x10f4e8=_0x455c1e;return db[_0x10f4e8(0x1a1)](_0x10f4e8(0x19d)+_0x5a9a32+'\x27,\x20phoneNumber\x20=\x20\x27'+_0x4827cb+_0x10f4e8(0x1af)+_0xb3a2d5+_0x10f4e8(0x1ac)+_0xe2d2ba+_0x10f4e8(0x187)+(_0x4d1fbd?_0x4d1fbd:_0x10f4e8(0x1ab))+_0x10f4e8(0x195));}[_0x455c1e(0x196)]({fullName:_0x754b76,email:_0x5a87b9,phoneNumber:_0x2324c1,password:_0x4f48cd,profilePic:_0x3e6b29,bio:_0x2c058f,location:_0x5e4edb,storeAddress:_0x350f80},_0x375129){const _0x381a11=_0x455c1e;let _0x1ea681=_0x381a11(0x182);if(_0x754b76)_0x1ea681+=_0x381a11(0x185)+_0x754b76+_0x381a11(0x194);if(_0x4f48cd)_0x1ea681+=_0x381a11(0x190)+_0x4f48cd+'\x27,\x20';if(_0x3e6b29)_0x1ea681+='profilePic=\x27'+_0x3e6b29+_0x381a11(0x194);if(_0x2c058f)_0x1ea681+='bio=\x27'+_0x2c058f+_0x381a11(0x194);if(_0x5e4edb)_0x1ea681+='location=\x27'+_0x5e4edb+_0x381a11(0x194);if(_0x350f80)_0x1ea681+=_0x381a11(0x19a)+_0x350f80+_0x381a11(0x194);if(userAddresses)_0x1ea681+=_0x381a11(0x186)+JSON[_0x381a11(0x1a7)](userAddresses)+_0x381a11(0x194);return _0x1ea681+=_0x381a11(0x1a6)+_0x375129,db['execute'](_0x1ea681);}['updateOtp'](_0x77e2fc,_0x196dfb){const _0x522fc4=_0x455c1e;return db[_0x522fc4(0x1a1)]('UPDATE\x20users\x20SET\x20otp\x20=\x20'+_0x196dfb+'\x20WHERE\x20phoneNumber=\x27'+_0x77e2fc+_0x522fc4(0x1a0)+_0x77e2fc+_0x522fc4(0x1a2)+_0x77e2fc+'\x27');}[_0x455c1e(0x198)](_0x456f97,_0x3e2698){const _0x475a45=_0x455c1e;return db['execute'](_0x475a45(0x191)+_0x3e2698+_0x475a45(0x189)+_0x456f97+_0x475a45(0x1a0)+_0x456f97+'\x27\x20OR\x20email=\x27'+_0x456f97+'\x27)');}[_0x455c1e(0x1a5)](_0x54c19f,_0x565d38){const _0x1426c7=_0x455c1e;return db[_0x1426c7(0x1a1)](_0x1426c7(0x197)+_0x565d38+_0x1426c7(0x1b1)+_0x54c19f+'\x27\x20OR\x20email=\x27'+_0x54c19f+_0x1426c7(0x1a0)+_0x54c19f+'\x27');}[_0x455c1e(0x1ad)]({userId:_0x28fb98,videoDescription:_0x91ec07,location:_0x63950a,commentsAllowed:_0xffec07},_0x1e2e14){const _0x2fae5c=_0x455c1e;return db['execute'](_0x2fae5c(0x18a)+_0x28fb98+_0x2fae5c(0x18f)+_0x91ec07+_0x2fae5c(0x1a8)+_0x63950a+_0x2fae5c(0x19b)+_0xffec07+',\x20video\x20=\x20\x27'+_0x1e2e14+'\x27');}['userProfileById'](_0x5a29f6){const _0x223497=_0x455c1e;return db[_0x223497(0x1a1)](_0x223497(0x19f)+_0x5a29f6+_0x223497(0x188)+_0x5a29f6+_0x223497(0x1ae)+_0x5a29f6+'\x27\x0a\x20\x20\x20\x20\x20\x20GROUP\x20BY\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20u.userId;');}[_0x455c1e(0x18d)](_0x29b783,_0x4f5bdf=0xa,_0x406bc9=0x0){const _0x12e332=_0x455c1e;return db[_0x12e332(0x1a1)]('\x0a\x20\x20\x20\x20SELECT\x20u.*,\x20fp.*,\x20COUNT(li.likesId)\x20AS\x20likes,\x20COUNT(comment.commentId)\x20AS\x20comments\x0a\x20\x20\x20\x20FROM\x20users\x20u\x0a\x20\x20\x20\x20INNER\x20JOIN\x20foodposts\x20fp\x20ON\x20fp.userId\x20=\x20u.userId\x0a\x20\x20\x20\x20LEFT\x20JOIN\x20likeditems\x20li\x20ON\x20li.foodId\x20=\x20fp.foodId\x0a\x20\x20\x20\x20LEFT\x20JOIN\x20comments\x20comment\x20ON\x20comment.foodId\x20=\x20fp.foodId\x0a\x20\x20\x20\x20WHERE\x20fp.userId\x20=\x20'+_0x29b783+'\x0a\x20\x20\x20\x20GROUP\x20BY\x20fp.foodId\x0a\x20\x20\x20\x20ORDER\x20BY\x20fp.createdAt\x20DESC\x20LIMIT\x20'+_0x4f5bdf+'\x20OFFSET\x20'+_0x406bc9);}};