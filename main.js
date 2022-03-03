requirejs.config({
    baseUrl: '/staticreserve/js/src/front/apps/seat',
    paths: {
        jquery: 'https://office.chaoxing.com/staticreserve/js/lib/jquery/jquery.min',
        moment: 'https://office.chaoxing.com/staticreserve/js/lib/date/moment.min',
        Vue: 'https://office.chaoxing.com/staticreserve/js/lib/vue/vue.min',
        bridge: 'https://office.chaoxing.com/staticreserve/js/lib/appBridge/CXJSBridge',
        appUtils: 'https://office.chaoxing.com/staticreserve/js/lib/appBridge/app.utils',
        oauth: 'https://office.chaoxing.com/staticreserve/js/lib/oauth/oauth',
        dropload: 'https://office.chaoxing.com/staticreserve/js/lib/dropload/dropload.min',
        lever: 'https://office.chaoxing.com/staticreserve/js/lib/lever/alloy-lever',
        cookies: 'https://office.chaoxing.com/staticreserve/js/lib/cookie/js.cookie',
        iosSelect: 'https://office.chaoxing.com/staticreserve/js/lib/iosSelect/iosSelect.min',
        iosSelectCmp: 'https://office.chaoxing.com/staticreserve/js/lib/iosSelect/iosSelectCmp',
        ratio: 'https://office.chaoxing.com/staticreserve/js/lib/ratio/ratio',
        stcsPanel: 'https://office.chaoxing.com/staticreserve/js/src/front/stcs/stcsPanel',
        iscroll: 'https://office.chaoxing.com/staticreserve/js/lib/iscroll/iscroll4',
        popup: 'https://office.chaoxing.com/staticreserve/js/lib/popup/popup',
        viewer: 'https://office.chaoxing.com/staticreserve/js/lib/viewer/viewer.min',
        sha: 'https://office.chaoxing.com/staticreserve/js/lib/sha/sha1',
        jweixin: 'https://office.chaoxing.com/staticreserve/js/lib/wechat/jweixin',
        mapLoader: 'mapLoader',
        cxcaptcha: 'https://office.chaoxing.com/staticreserve/js/src/front/apps/cxcaptcha/cxcaptcha',
        seatBaseUtils: 'seatBaseUtils',
        wxinit: 'https://office.chaoxing.com/staticreserve/js/lib/wechat/wxinit'
    },
    map: {
        '*': {
            'css': 'https://office.chaoxing.com/staticreserve/js/lib/requirejs/require-css/css.min.js'
        }
    },
    shim: {
        appUtils: {deps: ['jquery', 'bridge']},
        oauth: {deps: ['appUtils']},
        dropload: {deps: ['jquery', 'css!https://office.chaoxing.com/staticreserve/js/lib/dropload/dropload.css']},
        iosSelect: {deps: ['jquery', 'css!https://office.chaoxing.com/staticreserve/js/lib/iosSelect/iosSelect.css']},
        popup: {deps: ['jquery', 'css!https://office.chaoxing.com/staticreserve/js/lib/popup/popup']},
        viewer: {deps: ['jquery', 'css!https://office.chaoxing.com/staticreserve/js/lib/viewer/css/viewer.min.css']}
    }
})