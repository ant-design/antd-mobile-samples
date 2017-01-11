#xgj-client
    使用react+indexedDB+serviceWorker打造的工具类webapp,支持离线使用
##用到的技术栈
    react + react-router + mobx + indexedDB + serviceWorker + webworker
##使用方法
    step1:npm run dll
    step2:npm run dev (打包请执行npm run build)
    step3:打开 http://localhost:8000 
##多媒体模块
    使用Aurora.js+flv.js播放音频（计划支持音乐格式WAV/MP3/OGG/M4A/FLAC/ALAC/AAC）视频（FLV）
    使用webworker用于解码避免卡顿
##日程模块
    待办事项提醒
##考勤模块
    1、增加加班时间统计
    2、增加迟到早退提示
    3、长按考勤记录支持删除
##密码本模块
    1、网站/应用密码 
    2、未使用优惠券
##serviceWorker
    1、缓存控制(匹配没有后缀名的URL,单页应用前端路由URL匹配) /.+?\.?[^\.]{4,}$/期待更好的正则
##欢迎Star
https://github.com/cjd6568358/xgj-client.git