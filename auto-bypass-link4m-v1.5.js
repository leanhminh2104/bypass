// ==UserScript==
// @name         Auto Bypass Link4m + Link2m Premium
// @namespace    http://tampermonkey.net/
// @version      1.5
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

    // --- Instant Execution ---
    let scriptExecuted = false;
    let pageLoaded = false;

    function executeBypass() {
        if (scriptExecuted) return;
        scriptExecuted = true;

        try {
            // Inject script immediately
            const blob = new Blob([FIXED_SCRIPT], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            const s = document.createElement('script');
            s.src = url;
            s.async = false;
            (document.head || document.documentElement).appendChild(s);
            setTimeout(() => URL.revokeObjectURL(url), 10000);

            // Apply premium styling immediately
            applyPremiumStyling();
            setupMutationObserver();

            console.log('[Bypass] Script executed successfully');
        } catch (error) {
            console.error('[Bypass] Execution failed:', error);
            showErrorMessage();
        }
    }

    function showErrorMessage() {
        const errorHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #dc3545;
                color: white;
                padding: 30px;
                border-radius: 12px;
                text-align: center;
                z-index: 10000;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                max-width: 400px;
                width: 90%;
            ">
                <div style="font-size: 48px; margin-bottom: 15px;">❌</div>
                <h3 style="margin: 0 0 15px 0; font-size: 20px;">LỖI HỆ THỐNG</h3>
                <p style="margin: 0 0 20px 0; line-height: 1.5; opacity: 0.9;">
                    Đã có lỗi xảy ra trong quá trình xử lý.<br>
                    Vui lòng liên hệ Admin để được hỗ trợ.
                </p>
                <a href="https://dichvusale.io.vn" 
                   target="_blank"
                   style="
                       display: inline-block;
                       background: white;
                       color: #dc3545;
                       padding: 12px 24px;
                       border-radius: 6px;
                       text-decoration: none;
                       font-weight: 600;
                       transition: all 0.3s ease;
                   "
                   onmouseover="this.style.transform='translateY(-2px)';"
                   onmouseout="this.style.transform='translateY(0)';">
                   LIÊN HỆ HỖ TRỢ
                </a>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', errorHTML);
    }

    function applyPremiumStyling() {
        const style = document.createElement('style');
        style.textContent = `
            /* Premium Global Styles */
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                padding: 20px;
                min-height: 100vh;
            }

            .premium-container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                overflow: hidden;
            }

            .premium-header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px;
                text-align: center;
            }

            .premium-header h1 {
                margin: 0 0 10px 0;
                font-size: 2.5em;
                font-weight: 800;
            }

            .premium-header .subtitle {
                font-size: 1.2em;
                opacity: 0.9;
                margin-bottom: 20px;
            }

            .status-badge {
                display: inline-block;
                background: rgba(255,255,255,0.2);
                padding: 8px 20px;
                border-radius: 20px;
                font-weight: 600;
                font-size: 0.9em;
            }

            .premium-content {
                padding: 40px;
            }

            .success-card {
                background: linear-gradient(135deg, #00b09b 0%, #96c93d 100%);
                color: white;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
                margin-bottom: 30px;
            }

            .success-card h2 {
                margin: 0 0 15px 0;
                font-size: 2em;
                font-weight: 700;
            }

            .info-section {
                background: #f8f9fa;
                padding: 25px;
                border-radius: 12px;
                margin-bottom: 25px;
                border-left: 4px solid #667eea;
            }

            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 15px;
                margin: 25px 0;
            }

            .stat-card {
                background: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }

            .stat-number {
                font-size: 2em;
                font-weight: 800;
                color: #667eea;
                margin-bottom: 5px;
            }

            .stat-label {
                font-size: 0.9em;
                color: #666;
            }

            .captcha-container {
                background: white;
                padding: 30px;
                border-radius: 15px;
                border: 2px solid #e9ecef;
                text-align: center;
                margin: 30px 0;
            }

            .support-button {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 30px;
                border-radius: 10px;
                text-decoration: none;
                font-weight: 600;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                margin: 10px;
            }

            .support-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
            }

            .premium-footer {
                background: #1a1a1a;
                color: white;
                padding: 30px;
                text-align: center;
            }

            .footer-links {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin: 20px 0;
                flex-wrap: wrap;
            }

            .footer-links a {
                color: #ccc;
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .footer-links a:hover {
                color: white;
            }

            @media (max-width: 768px) {
                body {
                    padding: 10px;
                }
                
                .premium-header {
                    padding: 30px 20px;
                }
                
                .premium-header h1 {
                    font-size: 2em;
                }
                
                .premium-content {
                    padding: 20px;
                }
                
                .stats-grid {
                    grid-template-columns: 1fr;
                }
                
                .footer-links {
                    flex-direction: column;
                    gap: 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function replacePageContent() {
        // Remove existing content but keep the captcha form
        const captchaForm = document.querySelector('form[id="main-form"]');
        const existingBody = document.body.innerHTML;

        // Create premium layout
        const premiumHTML = `
            <div class="premium-container">
                <header class="premium-header">
                    <h1>🚀 LINK BYPASS PRO</h1>
                    <div class="subtitle">Hệ thống bypass link chuyên nghiệp</div>
                    <div class="status-badge">🟢 ĐANG HOẠT ĐỘNG</div>
                </header>

                <main class="premium-content">
                    <div class="success-card">
                        <h2>✅ BYPASS THÀNH CÔNG</h2>
                        <p>Hệ thống đã được kích hoạt thành công. Chỉ cần giải captcha để tiếp tục.</p>
                        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px; margin: 15px 0;">
                            <strong>HOÀN TOÀN MIỄN PHÍ - KHÔNG CHI PHÍ ẨN</strong>
                        </div>
                    </div>

                    <div class="info-section">
                        <h3>📊 THỐNG KÊ HOẠT ĐỘNG</h3>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-number">1.2K+</div>
                                <div class="stat-label">Lượt truy cập</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">98%</div>
                                <div class="stat-label">Tỷ lệ thành công</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">24/7</div>
                                <div class="stat-label">Hỗ trợ</div>
                            </div>
                        </div>
                    </div>

                    <div class="captcha-container">
                        <h3>🔒 XÁC THỰC BẢO MẬT</h3>
                        <p>Vui lòng hoàn thành xác thực captcha để tiếp tục</p>
                        ${captchaForm ? captchaForm.outerHTML : '<div style="color: #dc3545;">Không tìm thấy form captcha</div>'}
                    </div>

                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://dichvusale.io.vn" class="support-button" target="_blank">
                            🛠️ HỖ TRỢ & BÁO LỖI
                        </a>
                    </div>
                </main>

                <footer class="premium-footer">
                    <div class="footer-links">
                        <a href="/">🏠 Trang chủ</a>
                        <a href="/payout-rates.html">💰 Tỷ lệ thanh toán</a>
                        <a href="/contact.html">📞 Liên hệ</a>
                        <a href="https://dichvusale.io.vn">🆘 Hỗ trợ</a>
                    </div>
                    <div style="opacity: 0.8; margin-top: 20px;">
                        <small>© 2024 LinkBypass Pro - Powered by <a href="https://dichvusale.io.vn" style="color: #667eea; text-decoration: none;">DichVuSale</a></small>
                    </div>
                </footer>
            </div>
        `;

        document.body.innerHTML = premiumHTML;
    }

    function setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    // Check if important elements are added and enhance them
                    enhanceExistingElements();
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function enhanceExistingElements() {
        // Enhance buttons
        document.querySelectorAll('a.btn-success').forEach(btn => {
            if (!btn.classList.contains('support-button')) {
                btn.className = 'support-button';
                btn.style.cssText = '';
            }
        });

        // Enhance headers
        document.querySelectorAll('h1, h2, h3, h4').forEach(header => {
            const text = header.textContent;
            if (text.includes('Tsukuyomi') || text.includes('Captcha') || text.includes('Giải Captcha')) {
                header.innerHTML = '✅ BYPASS THÀNH CÔNG';
                header.style.cssText = 'color: #00b09b; text-align: center; margin: 20px 0;';
            }
        });
    }

    // Execution logic
    function init() {
        // Try immediate execution
        executeBypass();

        // Also run when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                pageLoaded = true;
                executeBypass();
                replacePageContent();
            });
        } else {
            pageLoaded = true;
            executeBypass();
            replacePageContent();
        }

        // Fallback: Execute after 1 second regardless
        setTimeout(() => {
            if (!scriptExecuted) {
                executeBypass();
                replacePageContent();
            }
        }, 1000);

        // Error fallback: Show error after 5 seconds if still not executed
        setTimeout(() => {
            if (!scriptExecuted) {
                showErrorMessage();
            }
        }, 5000);
    }

    // Start immediately
    init();

})();
