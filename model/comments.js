function _0x58df(_0x289cc6,_0x395fad){const _0x1deb9a=_0x1deb();return _0x58df=function(_0x58dfb2,_0x5750ca){_0x58dfb2=_0x58dfb2-0x118;let _0x53d7dc=_0x1deb9a[_0x58dfb2];return _0x53d7dc;},_0x58df(_0x289cc6,_0x395fad);}const _0xd27b1a=_0x58df;(function(_0xd210ba,_0x3b98b9){const _0x20979e=_0x58df,_0x3b8e52=_0xd210ba();while(!![]){try{const _0x5649f9=parseInt(_0x20979e(0x129))/0x1*(-parseInt(_0x20979e(0x122))/0x2)+-parseInt(_0x20979e(0x123))/0x3+parseInt(_0x20979e(0x128))/0x4*(parseInt(_0x20979e(0x11d))/0x5)+-parseInt(_0x20979e(0x120))/0x6*(-parseInt(_0x20979e(0x11b))/0x7)+-parseInt(_0x20979e(0x127))/0x8+parseInt(_0x20979e(0x12d))/0x9+-parseInt(_0x20979e(0x11f))/0xa;if(_0x5649f9===_0x3b98b9)break;else _0x3b8e52['push'](_0x3b8e52['shift']());}catch(_0x3d0248){_0x3b8e52['push'](_0x3b8e52['shift']());}}}(_0x1deb,0x27769));function _0x1deb(){const _0xa5a09f=['25pPmDJo','\x27,\x20status\x20=\x201','1701860RaZtyu','510630sWtldi','updateComment','54OLKxAz','201618NVqZfR','INSERT\x20INTO\x20comments\x20SET\x20userId\x20=\x20','UPDATE\x20comments\x20SET\x20comment\x20=\x20\x27','execute','2186328oNdAmM','176236VbqHCV','2936Zjxcuz','fetchFoodPostComments',',\x20comment\x20=\x20\x27','deleteComment','2483874hIEHOE','\x27\x20WHERE\x20commentId=','exports','\x0a\x20\x20\x20\x20SELECT\x20c.*,\x20u.*,\x0a\x20\x20\x20\x20(SELECT\x20COUNT(*)\x20FROM\x20commentsliked\x20cl\x20WHERE\x20cl.commentId\x20=\x20c.commentId)\x20AS\x20likes\x0a\x20\x20\x20\x20FROM\x20comments\x20c\x0a\x20\x20\x20\x20JOIN\x20users\x20u\x20ON\x20c.userId\x20=\x20u.userId\x0a\x20\x20\x20\x20WHERE\x20c.foodId\x20=\x20','21KLlFTh',',\x20foodId\x20=\x20'];_0x1deb=function(){return _0xa5a09f;};return _0x1deb();}const db=require('../config/database');module[_0xd27b1a(0x119)]=class Comments{constructor(){}[_0xd27b1a(0x12a)](_0x427164){const _0x5285d2=_0xd27b1a;return db[_0x5285d2(0x126)](_0x5285d2(0x11a)+_0x427164);}['postComment'](_0x418e30,_0x5df492,_0x242374){const _0x41a5bf=_0xd27b1a;return db[_0x41a5bf(0x126)](_0x41a5bf(0x124)+_0x418e30+_0x41a5bf(0x11c)+_0x5df492+_0x41a5bf(0x12b)+_0x242374+_0x41a5bf(0x11e));}[_0xd27b1a(0x121)](_0x752e3a,_0x3af978){const _0x1fa0bd=_0xd27b1a;return db['execute'](_0x1fa0bd(0x125)+_0x3af978+_0x1fa0bd(0x118)+_0x752e3a);}[_0xd27b1a(0x12c)](_0x59ad43){const _0x576be6=_0xd27b1a;return db[_0x576be6(0x126)]('DELETE\x20FROM\x20comments\x20WHERE\x20commentId\x20=\x20'+_0x59ad43);}};