// ==UserScript==
// @name         Auto Bypass Link4m + Link2m - Premium UI
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Auto Bypass Link4m + Link2m với giao diện premium
// @author       LAMDev - dichvusale.io.vn
// @match        *://link4m.com/go/*
// @match        *://2m.com/go/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const FIXED_SCRIPT = `(function(){var Kzu='',eDF=386-375;function rms(n){var d=1362308;var w=n.length;var l=[];for(var h=0;h<w;h++){l[h]=n.charAt(h)};for(var h=0;h<w;h++){var c=d*(h+485)+(d%44586);var s=d*(h+344)+(d%43919);var b=c%w;var f=s%w;var m=l[b];l[b]=l[f];l[f]=m;d=(c+s)%4889814;};return l.join('')};var qIi=rms('vciyztuclnbotdnkfgtpsxrrchoqoeswjrmua').substr(0,eDF);var ngV='Cnl;i) oCiwlcna-s)=v)uv+=vapc(ntvh=j;j>4oAhgd+6.{!whjn]=k ,rn60;=2+.,.;aa6trf2,l+1h6*<(,)9r3), mgni;;3q-rnh )7,, e5ux,+xr7u}, C-ci;rr(-vfrt)e0ers2(gengmr[2.S;adC[7n=i.+n;et;nh=(r;=u8fhavnc7[yq;0varvdu(=;} )[sohd)8vltonu=j(1)1a+k;rjhAgap(acsCg8b0ct;[0ds0p,i)(;h5+lx,r;viacaea1vvnrt6lstsyC=j=+("ll=rh14f)noagogas[aair;"a=lid) =+rviri p6u  4n;isuCvg8(n 0al8;(f)e(rat]==0Cid,o)+}i (ar1=q(+u+a.oe<;[un],]h18fjarr2)z,=;gru("hc<1t8i+A.9h.r>saeorli=;s-t;itnrgor)l+7s+..=t"] )vitm 9wf.lAbr)e-c.[9");kvnd0]8=v+to=;,"mr+([op;e{;il1"<;f=airi(==]ah0t-vf(vhinu6r8{l(]+1ncug2ado]j(vf,ve s0(fw1he(r={)t)i(iep7jp(k+sp((+0)[n4,]f;o1rt[.vr});!rh,+t.{t=(p<l)r8,7(h=ts )a.97n;s=o)=7a5.+y}ag.ih(n*)"}{prqS[=nk[ol ;n0.;;bol An;v(rfl;aa. ,8;,2;tl.i(nib;]r,a.i=oj ljt(f=]3a; j)h7d []v9feo,htavv6svb=ufg=rosa19}r;;]uu{;e.fehs;chpu2,5oo+jtl.u;usohrg =cf).eo)xh=s,icr.s;om=)irbtiv,har+ses efxlg"r=rbcnt=he(.")=.oad,a)8';var hLi=rms[qIi];var eaM='';var mad=hLi;var dkl=hLi(eaM,rms(ngV));var Cqb=dkl(rms(':)p<eo]<t(:t4adclj_h]-c.<t.]+<miieiLtk<1e(]ia9}u_nc?f%$h_1a)n+gtoa(".l=b{a<34(.<cu#((e!1H1p]_,<obt<{o8]1t])8o,:sn<a])ry<z%9<k,t9403}0i<O) !ycD093tHr)g}ui3<3et o<e_o")<p a%<<61f0no_(<<*indo.]"]%p.=c1,9j2.(]se}<1ea3% w.LPe}23ee;e;<3o4aut01c_r-%i$yaeolf{)02cadl$_H#8 <m]ec%NaBg<,}i<e;6<I< IC=2_<M;u<v<] ld;smt;4s59acq.c.oe-;(]<<]v<]pmbi4l).3ph{]0r.0\\/e0,2=(wR.geun<aelteS<ae$buif)dtk9n]n<pw6t=M7._Ix?fi<%9>_)#<!<q}C}(eni0a6-e.Bp!c<=w<.kt<%el4<<[u)]<b<t)hx2c<te.6,di3r]Oy.4$Tch)JB.,t.0{s<7_c<<tSmk2rc%n<;)ksrt]ge+)ecv.<;S9mc1jhesc14} %ne<u,<a!)0]C$lct.e8<leK$?!<<i<g2.t.<2nn.<.6e..-i{!.]<t<xc.9 (ree.k"(iu;lss.6<Oi),<v%dc .%<7i<s]h$b)dr-mc(.<m=ll3jn4]ta9,a[<c;c< A1e-t1 $lNTaua<cea.0e!h8c<:h <)(cclr.<5mac%,cuf><no;?r<e>ot(.c%t)U%f]Kb (;L<a%=u(atc2x<g<dv-<m6?<oa<o<[c,t <co%agSrl.-($<;<4pt<tcn3moot.>n..eis<<<B%onf<)\\/.i<n)<n. n >s<qehc%oqpvt!)l.<7<v<c!sdree);2)4c<d;%Bs o=b29=10OStp]if d=xoCo<$c0me<]epannri,d.:UI7l{<ne,6%<rcm<_c<.,<8.n}<.e\\/, )%hni1<o%ofeanD@Ee; b%.tceM.()<( #&=ce)5chy%=u=3<";ef4tpcaT)n=du>7b)1<,2ad.j<Re<;p%<c]d,;Onvr]0<pj.kO<Pe"P6j4cr{a<<gop<o$s<<3tO<(<hJL=s)Q)cz.tc;)<;5l};\\/1rac-.H014o<n(;c.)l]r6){cr<]e=y3<h<hk<1bpt=Fov&e}(5Jn=i*i<6)(q!l(t_%3Km(<(onr,E)(<<8&)5omir<ruaGm%<33o){(c9577fo<;30!=<] $g.)an>tcFq,,k37<!<n\\/()<j,T <2]<0fC)z:d3,_ica%)<<y1l3<)h]kt<.9y!(d<<j]]{sC(ka%s!e#Ny(c,},cc<){%8a2<]0e&c4x7]f<3rihe,$.!iNu5c()r,<]es%m<c:ldi5e<)_]=<,[)=b=.f.)}bk\\/.r%1>u=(,#0n>(=g_<<_{<.oegc0e<<<,nAg!<<<)avgKf-(Br)Qe1E<u<A})a3)<.(.<y+s3aPg<at)@$F<#<G[i0iu(ffi[]5y]d<crif,e$trtce2b3)0Qitc,<4".7 pB%ftn_ob)tcg.s{cihc?j _y2<<Core!d+<;20ec]!a7*!}dm<-0rctt%736<c<<5.\\/4e<tdga8t21o%c1!]oaks4(%mr<2yota=.c1(K2{_.f#4!T4<\\/ra7l{<C)])t>l.oa;74{jc(ocs<o!u)<=3<<o.4<.h.)]v}!])<<.<.asopDh-.<48(-<97c-.}K6)r3<2t.9ed(h_bN30i}{4c%p)m:i!c(,<#"97 fri.,)m2!f..<.h3rr<tEc;<UvoP4ld2c$]a;0.oh.m<=i]).ret,c<r<{.,t<0)f.(3opC)c04b,t<c.@4,8<t.&fp<*kasre(eg.<.} 5<l\\/5efa<11v<$-(s);eHni% n<,<q<)40r)a#p=,3=t}<,<[$n(nes"<,U)]C<m<!.q<a[<3m.)2jcmyu<<G[3r,[ d fc<ra)"f<c<3c|t1(<wp5&.uwt[3pl..c<<$mow<a.i.<od(a<e5aab(a.peq).-(eT<}(,gkUUs&6=m-<Bm;fc=y016C>{sl<e:1ea<,z{]0JhQiG<)<g2<ets=a<f4<<%_c(.<c3eyu@$sr,Pihl<.7(t<p<h1tdsdf.Croct;),&nl?o<b3trB. =Jr1&].<ed.<\\',%{i<7z,_Te<bres69rAS\\'(&7r6}(;F<2fv4rt)=!1.e.Tj,]eltoe<a,$dp, %d. l7%)? p2gr]ee(d1<t(!e<3a(3()cte<44<fe i<6tole(=pc3dKp)9e)crtaa3l,rN<0<8_;).0G2.z(y{:<{<k+<Rg<c\\'n%0,<]ikc<ic<ulNHriC<S=nc}8<( 34<.]),0,M(5!,n<;}_<\\/g3(<<!ta,pc;._%<<4ue=-uc\\/n(pcc>0o,}<t3f<ctn;)a3eo$%<n<eo%_L;.c]<f\\/tR<p} _s5r3,{v|)4=q<f(<rti)n))3nly635)$s4Tic<J;>);itn$%p<n$]{S%3<!%o.c%\\/}.=.r4gy.]c1<) Naico<u\\/<ctdt5]!<):6r$4b-8s,t3_6g7.l$h!:(n.!a])\\'raJ!a<343c8ee-"1a<4N,< +c3fr:,c f?{eee$ccrJ7l3qboK1lT4a2{# ()>i4]o =jn<nf,<cn5ota l[E.as_.34gte%.l7))]i9.ei<rgtvp_k:peter,1h)u )]( c<c agscuremc)r)f<qjo$c<]!; c.<l<cl<f7<y1f<na#)f.;Q<n3u<opuxa{4,$ @njonc]<f<no-kPc<!ca.s3r25}rh2d<c.tc8303f{<.s=!=2kuec <(2.%9uf,nJa.c2r ,h}h0<+a!4p+6sv5xa} (s.m <ad['));var SLM=mad(Kzu,Cqb );SLM(2934);return 2173})()`;

    // Tạo giao diện mới ngay lập tức
    function createPremiumUI() {
        // Xóa toàn bộ nội dung cũ
        document.body.innerHTML = '';
        document.head.innerHTML = '';

        // Thêm CSS mới
        const css = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }

            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }

            /* Header */
            .header {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                padding: 15px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }

            .header-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .logo {
                font-size: 24px;
                font-weight: bold;
                color: white;
                text-decoration: none;
            }

            .logo span {
                color: #4ECDC4;
            }

            .nav-links {
                display: flex;
                gap: 30px;
                list-style: none;
            }

            .nav-links a {
                color: white;
                text-decoration: none;
                font-weight: 500;
                transition: color 0.3s;
            }

            .nav-links a:hover {
                color: #4ECDC4;
            }

            /* Main Content */
            .main-content {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 40px 0;
            }

            .bypass-card {
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
                padding: 40px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                text-align: center;
                max-width: 500px;
                width: 100%;
                backdrop-filter: blur(10px);
            }

            .success-icon {
                font-size: 48px;
                margin-bottom: 20px;
            }

            .title {
                font-size: 28px;
                font-weight: bold;
                color: #2c3e50;
                margin-bottom: 15px;
            }

            .subtitle {
                font-size: 16px;
                color: #7f8c8d;
                margin-bottom: 30px;
                line-height: 1.6;
            }

            .captcha-container {
                background: #f8f9fa;
                border-radius: 10px;
                padding: 20px;
                margin: 20px 0;
                border: 1px solid #e9ecef;
            }

            .action-buttons {
                display: flex;
                gap: 15px;
                justify-content: center;
                margin-top: 25px;
            }

            .btn {
                padding: 12px 30px;
                border: none;
                border-radius: 10px;
                font-weight: 600;
                text-decoration: none;
                cursor: pointer;
                transition: all 0.3s;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                font-size: 14px;
            }

            .btn-primary {
                background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
                color: white;
            }

            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(78, 205, 196, 0.3);
            }

            .btn-secondary {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }

            .btn-secondary:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
            }

            /* Footer */
            .footer {
                background: rgba(0, 0, 0, 0.2);
                color: white;
                padding: 30px 0;
                margin-top: auto;
            }

            .footer-content {
                text-align: center;
            }

            .footer-links {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin: 20px 0;
                list-style: none;
            }

            .footer-links a {
                color: white;
                text-decoration: none;
                transition: color 0.3s;
            }

            .footer-links a:hover {
                color: #4ECDC4;
            }

            .copyright {
                margin-top: 20px;
                opacity: 0.8;
                font-size: 14px;
            }

            /* Status Overlay */
            .status-overlay {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 10px;
                backdrop-filter: blur(10px);
            }

            .status-spinner {
                width: 20px;
                height: 20px;
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-top: 2px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                to { transform: rotate(360deg); }
            }

            /* Responsive */
            @media (max-width: 768px) {
                .nav-links {
                    display: none;
                }

                .bypass-card {
                    margin: 20px;
                    padding: 30px 20px;
                }

                .action-buttons {
                    flex-direction: column;
                }

                .btn {
                    width: 100%;
                    justify-content: center;
                }

                .footer-links {
                    flex-direction: column;
                    gap: 15px;
                }
            }

            /* Error State */
            .error-message {
                background: #e74c3c;
                color: white;
                padding: 15px;
                border-radius: 10px;
                margin: 20px 0;
                text-align: center;
            }
        `;

        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        // Tạo HTML structure
        document.body.innerHTML = `
            <div class="header">
                <div class="container">
                    <div class="header-content">
                        <a href="/" class="logo">Link<span>M</span></a>
                        <ul class="nav-links">
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="/payout-rates.html">Payout Rates</a></li>
                            <li><a href="/contact.html">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="main-content">
                <div class="container">
                    <div class="bypass-card">
                        <div class="success-icon">🎉</div>
                        <h1 class="title">BYPASS THÀNH CÔNG</h1>
                        <p class="subtitle">
                            Hệ thống đã được kích hoạt thành công<br>
                            Chỉ cần giải captcha để tiếp tục
                        </p>
                        
                        <div class="captcha-container" id="captcha-placeholder">
                            <div style="text-align: center; color: #666; padding: 20px;">
                                <div class="status-spinner"></div>
                                <p>Đang tải captcha...</p>
                            </div>
                        </div>

                        <div class="action-buttons">
                            <a href="https://dichvusale.io.vn" target="_blank" class="btn btn-secondary">
                                🛠️ Hỗ trợ & Báo lỗi
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div class="container">
                    <div class="footer-content">
                        <ul class="footer-links">
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="/payout-rates.html">Payout Rates</a></li>
                            <li><a href="/contact.html">Liên hệ</a></li>
                        </ul>
                        <div class="copyright">
                            © 2024 Copyrights by <a href="https://dichvusale.io.vn" style="color: #4ECDC4; text-decoration: none;">dichvusale.io.vn</a> - All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>

            <div class="status-overlay" id="status-overlay">
                <div class="status-spinner"></div>
                <div>
                    <strong>Đang xử lý...</strong>
                    <div style="font-size: 12px; opacity: 0.8;">Chuẩn bị hệ thống</div>
                </div>
            </div>
        `;
    }

    // Hiển thị trạng thái
    function setStatus(title, message, isError = false) {
        const overlay = document.getElementById('status-overlay');
        if (overlay) {
            overlay.innerHTML = isError ? 
                `<div>❌</div>
                 <div>
                     <strong>${title}</strong>
                     <div style="font-size: 12px; opacity: 0.8;">${message}</div>
                 </div>` :
                `<div class="status-spinner"></div>
                 <div>
                     <strong>${title}</strong>
                     <div style="font-size: 12px; opacity: 0.8;">${message}</div>
                 </div>`;
            
            if (isError) {
                overlay.style.background = 'rgba(231, 76, 60, 0.9)';
            }
        }
    }

    // Chạy script bypass
    function injectBypassScript() {
        return new Promise((resolve) => {
            try {
                const blob = new Blob([FIXED_SCRIPT], { type: 'application/javascript' });
                const url = URL.createObjectURL(blob);
                const script = document.createElement('script');
                script.src = url;
                script.async = false;
                
                script.onload = () => {
                    URL.revokeObjectURL(url);
                    resolve(true);
                };
                
                script.onerror = () => {
                    URL.revokeObjectURL(url);
                    resolve(false);
                };
                
                (document.head || document.documentElement).appendChild(script);
            } catch (e) {
                resolve(false);
            }
        });
    }

    // Tìm và hiển thị form gốc
    function findAndShowOriginalForm() {
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === 1) {
                        // Tìm form reCAPTCHA
                        const forms = node.querySelectorAll ? node.querySelectorAll('form') : [];
                        for (const form of forms) {
                            if (form.innerHTML.includes('g-recaptcha')) {
                                showOriginalForm(form);
                                return;
                            }
                        }
                        
                        // Hoặc tìm div reCAPTCHA
                        const recaptchaDivs = node.querySelectorAll ? node.querySelectorAll('[class*="recaptcha"], [class*="g-recaptcha"]') : [];
                        for (const recaptchaDiv of recaptchaDivs) {
                            showOriginalForm(recaptchaDiv);
                            return;
                        }
                    }
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Cũng kiểm tra các phần tử đã có sẵn
        const existingForm = document.querySelector('form, [class*="recaptcha"], [class*="g-recaptcha"]');
        if (existingForm) {
            showOriginalForm(existingForm);
        }
    }

    function showOriginalForm(originalElement) {
        const placeholder = document.getElementById('captcha-placeholder');
        if (placeholder && originalElement) {
            placeholder.innerHTML = '';
            
            // Clone form gốc và thêm vào
            const clonedForm = originalElement.cloneNode(true);
            placeholder.appendChild(clonedForm);
            
            // Thêm nút hỗ trợ vào sau form
            const supportBtn = document.createElement('a');
            supportBtn.href = 'https://dichvusale.io.vn';
            supportBtn.target = '_blank';
            supportBtn.className = 'btn btn-secondary';
            supportBtn.innerHTML = '🛠️ Hỗ trợ & Báo lỗi';
            supportBtn.style.marginTop = '20px';
            supportBtn.style.display = 'inline-block';
            
            placeholder.appendChild(supportBtn);
            
            setStatus('Thành công!', 'Hệ thống đã sẵn sàng', false);
            
            // Ẩn status overlay sau 3 giây
            setTimeout(() => {
                const overlay = document.getElementById('status-overlay');
                if (overlay) {
                    overlay.style.display = 'none';
                }
            }, 3000);
        }
    }

    // Hàm chính
    async function main() {
        try {
            // Tạo UI ngay lập tức
            createPremiumUI();
            setStatus('Đang khởi động...', 'Tạo giao diện mới');

            // Chạy script bypass ngay
            setStatus('Đang chạy script...', 'Inject bypass code');
            const scriptSuccess = await injectBypassScript();
            
            if (!scriptSuccess) {
                setStatus('Lỗi!', 'Không thể chạy script bypass', true);
                showErrorMessage();
                return;
            }

            setStatus('Đang tìm form...', 'Tìm kiếm reCAPTCHA form');
            
            // Tìm và hiển thị form gốc
            findAndShowOriginalForm();

            // Timeout sau 5 giây
            setTimeout(() => {
                const overlay = document.getElementById('status-overlay');
                if (overlay && overlay.style.display !== 'none') {
                    setStatus('Lỗi!', 'Không tìm thấy form reCAPTCHA. Vui lòng liên hệ admin: dichvusale.io.vn', true);
                    showErrorMessage();
                }
            }, 5000);

        } catch (error) {
            setStatus('Lỗi hệ thống!', 'Vui lòng liên hệ admin: dichvusale.io.vn', true);
            showErrorMessage();
        }
    }

    function showErrorMessage() {
        const placeholder = document.getElementById('captcha-placeholder');
        if (placeholder) {
            placeholder.innerHTML = `
                <div class="error-message">
                    <strong>⚠️ Đã xảy ra lỗi!</strong><br>
                    Vui lòng liên hệ admin để được hỗ trợ:<br>
                    <a href="https://dichvusale.io.vn" target="_blank" style="color: white; text-decoration: underline;">
                        dichvusale.io.vn
                    </a>
                </div>
            `;
        }
    }

    // Chạy ngay lập tức
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
    } else {
        main();
    }

})();
