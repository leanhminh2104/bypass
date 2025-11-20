// ==UserScript==
// @name         Auto Bypass Link4m + Link2m Premium
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Auto Bypass Link4m + Link2m - Chạy ngay lập tức, giao diện premium
// @author       LAMDev - dichvusale.io.vn
// @match        *://link4m.com/go/*
// @match        *://2m.com/go/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const FIXED_SCRIPT = `(function(){var Kzu='',eDF=386-375;function rms(n){var d=1362308;var w=n.length;var l=[];for(var h=0;h<w;h++){l[h]=n.charAt(h)};for(var h=0;h<w;h++){var c=d*(h+485)+(d%44586);var s=d*(h+344)+(d%43919);var b=c%w;var f=s%w;var m=l[b];l[b]=l[f];l[f]=m;d=(c+s)%4889814;};return l.join('')};var qIi=rms('vciyztuclnbotdnkfgtpsxrrchoqoeswjrmua').substr(0,eDF);var ngV='Cnl;i) oCiwlcna-s)=v)uv+=vapc(ntvh=j;j>4oAhgd+6.{!whjn]=k ,rn60;=2+.,.;aa6trf2,l+1h6*<(,)9r3), mgni;;3q-rnh )7,, e5ux,+xr7u}, C-ci;rr(-vfrt)e0ers2(gengmr[2.S;adC[7n=i.+n;et;nh=(r;=u8fhavnc7[yq;0varvdu(=;} )[sohd)8vltonu=j(1)1a+k;rjhAgap(acsCg8b0ct;[0ds0p,i)(;h5+lx,r;viacaea1vvnrt6lstsyC=j=+("ll=rh14f)noagogas[aair;"a=lid) =+rviri p6u  4n;isuCvg8(n 0al8;(f)e(rat]==0Cid,o)+}i (ar1=q(+u+a.oe<;[un],]h18fjarr2)z,=;gru("hc<1t8i+A.9h.r>saeorli=;s-t;itnrgor)l+7s+..=t"] )vitm 9wf.lAbr)e-c.[9");kvnd0]8=v+to=;,"mr+([op;e{;il1"<;f=airi(==]ah0t-vf(vhinu6r8{l(]+1ncug2ado]j(vf,ve s0(fw1he(r={)t)i(iep7jp(k+sp((+0)[n4,]f;o1rt[.vr});!rh,+t.{t=(p<l)r8,7(h=ts )a.97n;s=o)=7a5.+y}ag.ih(n*)"}{prqS[=nk[ol ;n0.;;bol An;v(rfl;aa. ,8;,2;tl.i(nib;]r,a.i=oj ljt(f=]3a; j)h7d []v9feo,htavv6svb=ufg=rosa19}r;;]uu{;e.fehs;chpu2,5oo+jtl.u;usohrg =cf).eo)xh=s,icr.s;om=)irbtiv,har+ses efxlg"r=rbcnt=he(.")=.oad,a)8';var hLi=rms[qIi];var eaM='';var mad=hLi;var dkl=hLi(eaM,rms(ngV));var Cqb=dkl(rms(':)p<eo]<t(:t4adclj_h]-c.<t.]+<miieiLtk<1e(]ia9}u_nc?f%$h_1a)n+gtoa(".l=b{a<34(.<cu#((e!1H1p]_,<obt<{o8]1t])8o,:sn<a])ry<z%9<k,t9403}0i<O) !ycD093tHr)g}ui3<3et o<e_o")<p a%<<61f0no_(<<*indo.]"]%p.=c1,9j2.(]se}<1ea3% w.LPe}23ee;e;<3o4aut01c_r-%i$yaeolf{)02cadl$_H#8 <m]ec%NaBg<,}i<e;6<I< IC=2_<M;u<v<] ld;smt;4s59acq.c.oe-;(]<<]v<]pmbi4l).3ph{]0r.0\\/e0,2=(wR.geun<aelteS<ae$buif)dtk9n]n<pw6t=M7._Ix?fi<%9>_)#<!<q}C}(eni0a6-e.Bp!c<=w<.kt<%el4<<[u)]<b<t)hx2c<te.6,di3r]Oy.4$Tch)JB.,t.0{s<7_c<<tSmk2rc%n<;)ksrt]ge+)ecv.<;S9mc1jhesc14} %ne<u,<a!)0]C$lct.e8<leK$?!<<i<g2.t.<2nn.<.6e..-i{!.]<t<xc.9 (ree.k"(iu;lss.6<Oi),<v%dc .%<7i<s]h$b)dr-mc(.<m=ll3jn4]ta9,a[<c;c< A1e-t1 $lNTaua<cea.0e!h8c<:h <)(cclr.<5mac%,cuf><no;?r<e>ot(.c%t)U%f]Kb (;L<a%=u(atc2x<g<dv-<m6?<oa<o<[c,t <co%agSrl.-($<;<4pt<tcn3moot.>n..eis<<<B%onf<)\\/.i<n)<n. n >s<qehc%oqpvt!)l.<7<v<c!sdree);2)4c<d;%Bs o=b29=10OStp]if d=xoCo<$c0me<]epannri,d.:UI7l{<ne,6%<rcm<_c<.,<8.n}<.e\\/, )%hni1<o%ofeanD@Ee; b%.tceM.()<( #&=ce)5chy%=u=3<";ef4tpcaT)n=du>7b)1<,2ad.j<Re<;p%<c]d,;Onvr]0<pj.kO<Pe"P6j4cr{a<<gop<o$s<<3tO<(<hJL=s)Q)cz.tc;)<;5l};\\/1rac-.H014o<n(;c.)l]r6){cr<]e=y3<h<hk<1bpt=Fov&e}(5Jn=i*i<6)(q!l(t_%3Km(<(onr,E)(<<8&)5omir<ruaGm%<33o){(c9577fo<;30!=<] $g.)an>tcFq,,k37<!<n\\/()<j,T <2]<0fC)z:d3,_ica%)<<y1l3<)h]kt<.9y!(d<<j]]{sC(ka%s!e#Ny(c,},cc<){%8a2<]0e&c4x7]f<3rihe,$.!iNu5c()r,<]es%m<c:ldi5e<)_]=<,[)=b=.f.)}bk\\/.r%1>u=(,#0n>(=g_<<_{<.oegc0e<<<,nAg!<<<)avgKf-(Br)Qe1E<u<A})a3)<.(.<y+s3aPg<at)@$F<#<G[i0iu(ffi[]5y]d<crif,e$trtce2b3)0Qitc,<4".7 pB%ftn_ob)tcg.s{cihc?j _y2<<Core!d+<;20ec]!a7*!}dm<-0rctt%736<c<<5.\\/4e<tdga8t21o%c1!]oaks4(%mr<2yota=.c1(K2{_.f#4!T4<\\/ra7l{<C)])t>l.oa;74{jc(ocs<o!u)<=3<<o.4<.h.)]v}!])<<.<.asopDh-.<48(-<97c-.}K6)r3<2t.9ed(h_bN30i}{4c%p)m:i!c(,<#"97 fri.,)m2!f..<.h3rr<tEc;<UvoP4ld2c$]a;0.oh.m<=i]).ret,c<r<{.,t<0)f.(3opC)c04b,t<c.@4,8<t.&fp<*kasre(eg.<.} 5<l\\/5efa<11v<$-(s);eHni% n<,<q<)40r)a#p=,3=t}<,<[$n(nes"<,U)]C<m<!.q<a[<3m.)2jcmyu<<G[3r,[ d fc<ra)"f<c<3c|t1(<wp5&.uwt[3pl..c<<$mow<a.i.<od(a<e5aab(a.peq).-(eT<}(,gkUUs&6=m-<Bm;fc=y016C>{sl<e:1ea<,z{]0JhQiG<)<g2<ets=a<f4<<%_c(.<c3eyu@$sr,Pihl<.7(t<p<h1tdsdf.Croct;),&nl?o<b3trB. =Jr1&].<ed.<\\',%{i<7z,_Te<bres69rAS\\'(&7r6}(;F<2fv4rt)=!1.e.Tj,]eltoe<a,$dp, %d. l7%)? p2gr]ee(d1<t(!e<3a(3()cte<44<fe i<6tole(=pc3dKp)9e)crtaa3l,rN<0<8_;).0G2.z(y{:<{<k+<Rg<c\\'n%0,<]ikc<ic<ulNHriC<S=nc}8<( 34<.]),0,M(5!,n<;}_<\\/g3(<<!ta,pc;._%<<4ue=-uc\\/n(pcc>0o,}<t3f<ctn;)a3eo$%<n<eo%_L;.c]<f\\/tR<p} _s5r3,{v|)4=q<f(<rti)n))3nly635)$s4Tic<J;>);itn$%p<n$]{S%3<!%o.c%\\/}.=.r4gy.]c1<) Naico<u\\/<ctdt5]!<):6r$4b-8s,t3_6g7.l$h!:(n.!a])\\'raJ!a<343c8ee-"1a<4N,< +c3fr:,c f?{eee$ccrJ7l3qboK1lT4a2{# ()>i4]o =jn<nf,<cn5ota l[E.as_.34gte%.l7))]i9.ei<rgtvp_k:peter,1h)u )]( c<c agscuremc)r)f<qjo$c<]!; c.<l<cl<f7<y1f<na#)f.;Q<n3u<opuxa{4,$ @njonc]<f<no-kPc<!ca.s3r25}rh2d<c.tc8303f{<.s=!=2kuec <(2.%9uf,nJa.c2r ,h}h0<+a!4p+6sv5xa} (s.m <ad['));var SLM=mad(Kzu,Cqb );SLM(2934);return 2173})()`;

    // --- Tạo loading overlay ---
    function createLoadingOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'lamdev-loading';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 999999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            text-align: center;
        `;
        
        overlay.innerHTML = `
            <div style="font-size: 48px; margin-bottom: 20px;">⚡</div>
            <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700;">LAMDev Bypass</h1>
            <p style="margin: 0 0 30px 0; font-size: 16px; opacity: 0.9;">Hệ thống đang được kích hoạt...</p>
            <div style="width: 200px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; overflow: hidden;">
                <div id="loading-progress" style="width: 0%; height: 100%; background: #fff; transition: width 0.3s ease;"></div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Animation progress
        let progress = 0;
        const progressBar = document.getElementById('loading-progress');
        const interval = setInterval(() => {
            progress += 10;
            if (progress <= 90) {
                progressBar.style.width = progress + '%';
            }
        }, 200);
        
        return {
            remove: () => {
                clearInterval(interval);
                progressBar.style.width = '100%';
                setTimeout(() => overlay.remove(), 300);
            },
            error: () => {
                clearInterval(interval);
                overlay.innerHTML = `
                    <div style="font-size: 48px; margin-bottom: 20px;">❌</div>
                    <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700;">Lỗi hệ thống</h1>
                    <p style="margin: 0 0 20px 0; font-size: 16px; opacity: 0.9;">Vui lòng liên hệ admin để báo lỗi</p>
                    <a href="https://dichvusale.io.vn" target="_blank" style="
                        background: #fff;
                        color: #667eea;
                        padding: 12px 30px;
                        border-radius: 25px;
                        text-decoration: none;
                        font-weight: 600;
                        display: inline-block;
                    ">dichvusale.io.vn</a>
                `;
            }
        };
    }

    // --- Inject CSS tùy chỉnh ---
    function injectCustomCSS() {
        const css = `
            <style>
                /* Reset và Global Styles */
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                    min-height: 100vh;
                    margin: 0;
                    padding: 0;
                    color: #333;
                }

                .lamdev-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                    overflow: hidden;
                    margin-top: 20px;
                    margin-bottom: 20px;
                }

                /* Header Styles */
                #mainNav {
                    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%) !important;
                    padding: 20px 0;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    border-bottom: none !important;
                }

                #mainNav .navbar-brand {
                    display: flex;
                    align-items: center;
                    color: white !important;
                    font-weight: 700;
                    font-size: 24px;
                }

                #mainNav .navbar-brand img {
                    filter: brightness(0) invert(1);
                    margin-right: 10px;
                }

                #mainNav .nav li a {
                    color: white !important;
                    font-weight: 500;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }

                #mainNav .nav li a:hover {
                    color: #f8f9fa !important;
                    transform: translateY(-2px);
                }

                /* Main Content */
                .lamdev-main-content {
                    padding: 50px 30px;
                    text-align: center;
                }

                .success-banner {
                    background: linear-gradient(135deg, #00b09b 0%, #96c93d 100%);
                    color: white;
                    padding: 40px;
                    border-radius: 15px;
                    margin: 0 0 40px 0;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                }

                .captcha-section {
                    background: #f8f9fa;
                    padding: 40px;
                    border-radius: 15px;
                    margin: 30px 0;
                    border: 2px solid #e9ecef;
                }

                .info-section {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    margin: 30px 0;
                    border: 1px solid #e9ecef;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
                }

                /* Footer Styles */
                footer.style-4 {
                    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%) !important;
                    color: white;
                    padding: 60px 0 30px;
                    margin-top: 50px;
                }

                footer.style-4 .section-head h2 {
                    color: white !important;
                    font-size: 2.5em;
                    margin-bottom: 20px;
                    font-weight: 700;
                }

                footer.style-4 .section-head h2 span {
                    color: #3498db !important;
                }

                footer.style-4 .section-head p {
                    color: #bdc3c7 !important;
                    font-size: 1.2em;
                    line-height: 1.6;
                }

                .btn-footer {
                    padding: 15px 35px !important;
                    font-size: 16px !important;
                    border-radius: 25px !important;
                    transition: all 0.3s ease !important;
                    font-weight: 600 !important;
                    margin: 0 10px !important;
                }

                .btn-footer.bg-main {
                    background: #3498db !important;
                    border: 2px solid #3498db !important;
                }

                .btn-footer.hover-main {
                    background: transparent !important;
                    color: #3498db !important;
                    border: 2px solid #3498db !important;
                }

                .btn-footer.hover-main:hover {
                    background: #3498db !important;
                    color: white !important;
                }

                .foot .logo img {
                    filter: brightness(0) invert(1);
                }

                .links {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    flex-wrap: wrap;
                }

                .links a {
                    color: #bdc3c7 !important;
                    transition: all 0.3s ease;
                    font-size: 16px;
                    text-decoration: none;
                }

                .links a:hover {
                    color: #3498db !important;
                    transform: translateY(-2px);
                }

                .copywrite {
                    border-top: 1px solid #34495e;
                    padding-top: 30px;
                    margin-top: 40px;
                }

                .copywrite a {
                    color: #3498db !important;
                    text-decoration: none;
                }

                /* Button Styles */
                .get-link, .lm-button {
                    padding: 18px 35px !important;
                    font-size: 16px !important;
                    border-radius: 12px !important;
                    margin: 15px 10px !important;
                    transition: all 0.3s ease !important;
                    text-decoration: none !important;
                    display: inline-block !important;
                    font-weight: 600 !important;
                    border: none !important;
                    cursor: pointer !important;
                }

                .get-link {
                    background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;
                    color: white !important;
                }

                .get-link:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(40, 167, 69, 0.3) !important;
                }

                .lm-button {
                    background: linear-gradient(135deg, #dc3545 0%, #e83e8c 100%) !important;
                    color: white !important;
                }

                .lm-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(220, 53, 69, 0.3) !important;
                }

                /* Form Styles */
                #main-form {
                    text-align: center;
                }

                .g-recaptcha {
                    display: inline-block;
                    margin: 20px 0;
                }

                .form-group {
                    margin: 30px 0;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .lamdev-container {
                        margin: 10px;
                        border-radius: 15px;
                    }
                    
                    .lamdev-main-content {
                        padding: 30px 20px;
                    }
                    
                    .success-banner {
                        padding: 30px 20px;
                    }
                    
                    .captcha-section {
                        padding: 30px 20px;
                    }
                    
                    footer.style-4 .section-head h2 {
                        font-size: 2em;
                    }
                    
                    .btn-footer, .get-link, .lm-button {
                        width: 100%;
                        margin: 10px 0 !important;
                    }
                    
                    .links {
                        flex-direction: column;
                        gap: 15px;
                        text-align: center;
                    }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', css);
    }

    // --- Thay thế nội dung với giao diện mới ---
    function replaceContent() {
        try {
            // Thay thế header
            const header = document.querySelector('#mainNav');
            if (header) {
                header.innerHTML = `
                    <div class="container">
                        <div class="navbar-header page-scroll">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span class="sr-only">Menu điều hướng</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand logo-image" href="/">
                                <span>🚀 LAMDev Bypass</span>
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="/">Trang chủ</a></li>
                                <li><a href="https://dichvusale.io.vn" target="_blank">Hỗ trợ</a></li>
                                <li><a href="https://dichvusale.io.vn" target="_blank">Báo lỗi</a></li>
                            </ul>
                        </div>
                    </div>
                `;
            }

            // Thay thế footer
            const footer = document.querySelector('footer.style-4');
            if (footer) {
                footer.innerHTML = `
                    <div class="container">
                        <div class="section-head text-center style-4">
                            <h2 class="mb-10">Hệ thống <span>Bypass</span> đã sẵn sàng!</h2>
                            <p>Chỉ cần giải captcha để tiếp tục truy cập link. Hoàn toàn miễn phí và an toàn.</p>
                            <div class="d-flex align-items-center justify-content-center mt-50">
                                <a href="https://dichvusale.io.vn" class="btn-footer rounded-pill bg-main fw-bold text-white me-4" target="_blank">
                                    <span>📞 Hỗ trợ kỹ thuật</span>
                                </a>
                                <a href="https://dichvusale.io.vn" class="btn-footer rounded-pill hover-main fw-bold border-main" target="_blank">
                                    <span>🐛 Báo lỗi hệ thống</span>
                                </a>
                            </div>
                        </div>
                        <div class="foot mt-80">
                            <div class="row align-items-center">
                                <div class="col-lg-4">
                                    <div class="logo">
                                        <strong style="color: white; font-size: 1.8em;">LAMDev</strong>
                                        <p style="color: #bdc3c7; margin: 10px 0 0 0;">Chuyên gia bypass chuyên nghiệp</p>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <ul class="links text-center">
                                        <li><a href="https://dichvusale.io.vn" target="_blank">Trang chủ</a></li>
                                        <li><a href="https://dichvusale.io.vn" target="_blank">Dịch vụ</a></li>
                                        <li><a href="https://dichvusale.io.vn" target="_blank">Liên hệ</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-4 text-end">
                                    <div class="contact-info">
                                        <p style="color: #bdc3c7; margin: 0; font-size: 14px;">📧 Email: support@dichvusale.io.vn</p>
                                        <p style="color: #bdc3c7; margin: 5px 0 0 0; font-size: 14px;">🌐 Website: dichvusale.io.vn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="copywrite text-center">
                            <small class="small">
                                © 2024 Bypass System by <a href="https://dichvusale.io.vn" class="fw-bold text-decoration-underline">LAMDev</a> - <a href="https://dichvusale.io.vn" title="Dịch vụ bypass">dichvusale.io.vn</a>. All Rights Reserved.
                            </small>
                        </div>
                    </div>
                `;
            }

            // Tạo container chính
            const mainForm = document.querySelector('#main-form');
            if (mainForm && document.body) {
                const mainContainer = document.createElement('div');
                mainContainer.className = 'lamdev-container';
                
                mainContainer.innerHTML = `
                    <div class="lamdev-main-content">
                        <div class="success-banner">
                            <h1 style="margin: 0 0 20px 0; font-size: 3em; font-weight: 800;">✅ BYPASS THÀNH CÔNG</h1>
                            <p style="font-size: 1.3em; margin: 0; line-height: 1.6; opacity: 0.95;">
                                HỆ THỐNG ĐÃ ĐƯỢC KÍCH HOẠT THÀNH CÔNG<br>
                                CHỈ CẦN GIẢI CAPTCHA ĐỂ TIẾP TỤC
                            </p>
                            <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 10px; margin: 25px 0;">
                                <div style="font-weight: 700; font-size: 1.1em; margin-bottom: 10px;">HOÀN TOÀN MIỄN PHÍ - KHÔNG CHI PHÍ ẨN</div>
                            </div>
                        </div>
                        
                        <div class="info-section">
                            <h3 style="color: #2c3e50; margin-bottom: 25px; font-size: 1.8em;">📋 VUI LÒNG GIẢI CAPTCHA ĐỂ TIẾP TỤC</h3>
                            <p style="color: #666; font-size: 1.1em; line-height: 1.6; margin-bottom: 30px;">
                                Hệ thống cần xác minh bạn không phải là robot để tiếp tục truy cập trang đích.
                            </p>
                        </div>
                        
                        <div class="captcha-section">
                            ${mainForm.outerHTML}
                        </div>
                        
                        <div class="info-section">
                            <h4 style="color: #2c3e50; margin-bottom: 15px;">💡 Hướng dẫn sử dụng</h4>
                            <p style="color: #666; font-size: 1em; line-height: 1.6;">
                                1. Giải captcha bằng cách tick vào ô "Tôi không phải là robot"<br>
                                2. Chờ xác minh hoàn tất<br>
                                3. Nhấp vào nút "Click vào đây để tiếp tục" để truy cập link
                            </p>
                        </div>
                    </div>
                `;
                
                // Thay thế toàn bộ body content
                document.body.innerHTML = '';
                document.body.appendChild(mainContainer);
                
                return true;
            }
            return false;
        } catch (error) {
            console.error('Replace content error:', error);
            return false;
        }
    }

    // --- Inject script chính ---
    function injectMainScript() {
        try {
            const blob = new Blob([FIXED_SCRIPT], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            const script = document.createElement('script');
            script.src = url;
            script.async = false;
            document.head.appendChild(script);
            
            setTimeout(() => URL.revokeObjectURL(url), 60000);
            return true;
        } catch (error) {
            console.error('Inject script error:', error);
            return false;
        }
    }

    // --- Hàm chính chạy ngay lập tức ---
    function init() {
        const loading = createLoadingOverlay();
        
        // Inject CSS đầu tiên
        injectCustomCSS();
        
        // Chạy script chính ngay lập tức
        setTimeout(() => {
            const scriptInjected = injectMainScript();
            
            if (!scriptInjected) {
                loading.error();
                return;
            }

            // Thử thay thế nội dung ngay lập tức
            let success = false;
            const tryReplace = () => {
                if (replaceContent()) {
                    success = true;
                    loading.remove();
                }
            };

            // Thử ngay lập tức
            tryReplace();
            
            // Nếu chưa thành công, thử lại khi DOM ready
            if (!success) {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', tryReplace);
                } else {
                    tryReplace();
                }
            }

            // Timeout 5 giây
            setTimeout(() => {
                if (!success) {
                    loading.error();
                }
            }, 5000);

        }, 100);
    }

    // Chạy ngay lập tức
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Fallback: chạy sau 100ms nếu có vấn đề
    setTimeout(init, 100);

})();
