/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Puppet17514.gihub.io/2023/06/21/hello-world/index.html","c938407971ca5c3803c7c499d57b8d43"],["/Puppet17514.gihub.io/2023/06/25/test_3/index.html","4adeacaab437d8489694d42aac18bada"],["/Puppet17514.gihub.io/2023/06/25/软外暑期学习/index.html","00c7689a9dc9483db9ec6b4ab602b906"],["/Puppet17514.gihub.io/about/index-1.html","e3b667b1fb87932c075143e98a2494a6"],["/Puppet17514.gihub.io/about/index.html","3d5c62523469ebffe8b626c4c9dbb5c4"],["/Puppet17514.gihub.io/archives/2023/06/index.html","42a6bbc5930e6e3211f9a5e077e122e9"],["/Puppet17514.gihub.io/archives/2023/index.html","ec27915fdec81e05160ca4f54abaee67"],["/Puppet17514.gihub.io/archives/index.html","260c15939f8bc5ca1171f444699fe433"],["/Puppet17514.gihub.io/categories/index.html","fbedc47c3ff1ae41867c63545cecc0fc"],["/Puppet17514.gihub.io/css/bb.css","a13497fcf67377687248cad43633417c"],["/Puppet17514.gihub.io/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/Puppet17514.gihub.io/css/matery.css","d1f54495d53301cb6c19499cc7515b4a"],["/Puppet17514.gihub.io/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/Puppet17514.gihub.io/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/Puppet17514.gihub.io/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/Puppet17514.gihub.io/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/Puppet17514.gihub.io/friends/index.html","a1f22d91fdea6a805f8c02be0454d42d"],["/Puppet17514.gihub.io/index.html","4b96acfd4167c5b075a35434f13fd44d"],["/Puppet17514.gihub.io/js/matery.js","c2d4306a24948ffd6f7f853449c2e44b"],["/Puppet17514.gihub.io/js/search.js","23158886da44ec57f9d355b68ff1bac2"],["/Puppet17514.gihub.io/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/Puppet17514.gihub.io/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/Puppet17514.gihub.io/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/Puppet17514.gihub.io/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/Puppet17514.gihub.io/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/Puppet17514.gihub.io/libs/awesome/css/all.css","0e6a8d020eceb660ebe98adad8639825"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-brands-400.eot","451b51d8700fb035bcaaa9e8710b384a"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-brands-400.svg","8528edfd60e8bc4274c0eadf6b121a3c"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-brands-400.ttf","189c0326f75931886d5b60cde8b5628f"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-brands-400.woff","85b063debeb5d5f079776ac1a9c924cb"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-brands-400.woff2","0425d661f34ffa46604c9dfa344c03bb"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-regular-400.eot","b6579220162705be426ad4db0dc43f6b"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-regular-400.svg","ec9318dc8ba3ec3cbb379f2d40f300cb"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-regular-400.ttf","9230982faf6ed4d1dab07babfb813777"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-regular-400.woff","14f22fbed8146dbf3b497bb32d8491b0"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-regular-400.woff2","772a0f14c850c8b0dfe283a95857583e"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-solid-900.eot","1898ebd2e3162e7ca8627073d865b893"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-solid-900.svg","f331e75b803f42d96aaba8540f29d3b3"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-solid-900.ttf","b1161bce5381a5fa7aacc073e1a01dd3"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-solid-900.woff","db525089f5101b59a66184d109e6f917"],["/Puppet17514.gihub.io/libs/awesome/webfonts/fa-solid-900.woff2","4cc04a31c42f2f9d951547bbce75960b"],["/Puppet17514.gihub.io/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/Puppet17514.gihub.io/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/Puppet17514.gihub.io/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/Puppet17514.gihub.io/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/Puppet17514.gihub.io/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/Puppet17514.gihub.io/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/Puppet17514.gihub.io/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/Puppet17514.gihub.io/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/Puppet17514.gihub.io/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/Puppet17514.gihub.io/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/Puppet17514.gihub.io/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/Puppet17514.gihub.io/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/Puppet17514.gihub.io/libs/gitalk/gitalk.css","e4369194a22c7aaf65af93b2a04edb94"],["/Puppet17514.gihub.io/libs/gitalk/gitalk.min.js","7526181d13660d1e4a2bbb3795d73120"],["/Puppet17514.gihub.io/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/Puppet17514.gihub.io/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/Puppet17514.gihub.io/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/Puppet17514.gihub.io/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/Puppet17514.gihub.io/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/Puppet17514.gihub.io/libs/jquery/jquery.min.js","f832e36068ab203a3f89b1795480d0d7"],["/Puppet17514.gihub.io/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/Puppet17514.gihub.io/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/Puppet17514.gihub.io/libs/lightGallery/fonts/lg.svg","4cf7d0890238750cf9fd18878fea096f"],["/Puppet17514.gihub.io/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/Puppet17514.gihub.io/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/Puppet17514.gihub.io/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/Puppet17514.gihub.io/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/Puppet17514.gihub.io/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/Puppet17514.gihub.io/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/Puppet17514.gihub.io/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/Puppet17514.gihub.io/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/Puppet17514.gihub.io/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/Puppet17514.gihub.io/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/Puppet17514.gihub.io/libs/minivaline/MiniValine.js","e5daebb3b28977819ad51a62d38a52b9"],["/Puppet17514.gihub.io/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/Puppet17514.gihub.io/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/Puppet17514.gihub.io/libs/prism/prism.css","9de440b6e18b43a39139958655391e18"],["/Puppet17514.gihub.io/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/Puppet17514.gihub.io/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/Puppet17514.gihub.io/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/Puppet17514.gihub.io/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/Puppet17514.gihub.io/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/Puppet17514.gihub.io/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/Puppet17514.gihub.io/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/Puppet17514.gihub.io/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/Puppet17514.gihub.io/libs/tocbot/tocbot.css","a260895566c6a9f968a9101d5510f7d6"],["/Puppet17514.gihub.io/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/Puppet17514.gihub.io/libs/valine/Valine.min.js","3c37a47598a8970c84db5591f01c483d"],["/Puppet17514.gihub.io/libs/valine/av-min.js","df7538b359e7a7e904c430e8385b44da"],["/Puppet17514.gihub.io/medias/avatar.jpg","415de4d5d462d6bd318c09824113e54e"],["/Puppet17514.gihub.io/medias/banner/0.jpg","67d9bc444c44ef46c28ecf6fb858d0e6"],["/Puppet17514.gihub.io/medias/banner/1.jpg","b87be87e075f7527ec76f76ca54ffc95"],["/Puppet17514.gihub.io/medias/banner/2.jpg","dd67fcb391ebb0a5d8aeaa5036edd5c1"],["/Puppet17514.gihub.io/medias/banner/3.jpg","1d9e5fc0fe2ee01b4ebdea9eaab92135"],["/Puppet17514.gihub.io/medias/banner/4.jpg","7189dd42b5fa6110e800ce22cb6f6a4d"],["/Puppet17514.gihub.io/medias/banner/5.jpg","4636d6bec142e3b6609a679093264c3a"],["/Puppet17514.gihub.io/medias/banner/6.jpg","5e91cd7898a44cc8724fc5cad27f8819"],["/Puppet17514.gihub.io/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/Puppet17514.gihub.io/medias/contact.png","05f80f75317895d4d6a5c0b39c18236e"],["/Puppet17514.gihub.io/medias/cover.jpg","67d9bc444c44ef46c28ecf6fb858d0e6"],["/Puppet17514.gihub.io/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/Puppet17514.gihub.io/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/Puppet17514.gihub.io/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/Puppet17514.gihub.io/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/Puppet17514.gihub.io/medias/featureimages/12.jpg","1d9e5fc0fe2ee01b4ebdea9eaab92135"],["/Puppet17514.gihub.io/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/Puppet17514.gihub.io/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/Puppet17514.gihub.io/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/Puppet17514.gihub.io/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/Puppet17514.gihub.io/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/Puppet17514.gihub.io/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/Puppet17514.gihub.io/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/Puppet17514.gihub.io/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/Puppet17514.gihub.io/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/Puppet17514.gihub.io/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/Puppet17514.gihub.io/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/Puppet17514.gihub.io/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/Puppet17514.gihub.io/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/Puppet17514.gihub.io/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/Puppet17514.gihub.io/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/Puppet17514.gihub.io/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/Puppet17514.gihub.io/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/Puppet17514.gihub.io/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/Puppet17514.gihub.io/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/Puppet17514.gihub.io/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/Puppet17514.gihub.io/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/Puppet17514.gihub.io/medias/reward/alipay.jpg","bc0beeb475610bdcd0e11170d24d768c"],["/Puppet17514.gihub.io/medias/reward/wechat.png","09b79cfde30a831da7f6932eefe12f35"],["/Puppet17514.gihub.io/sw-register.js","94ded6e1e35eafbe0f770e6ba9481176"],["/Puppet17514.gihub.io/tags/index.html","68ca4699d80b34aadf875e77efabacd9"],["/Puppet17514.gihub.io/tags/test/index.html","1c95614c02314b30ea232398bca3a1a2"],["/Puppet17514.gihub.io/tags/前端/index.html","27057b8b5ee6513fed9fafe6c8924d06"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
