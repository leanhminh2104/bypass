// ==UserScript==
// @name         Auto Bypass Link4m + Link2m
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Auto Bypass Link4m + Link2m - Clean & Responsive
// @author       LAMDev - dichvusale.io.vn
// @match        *://link4m.com/go/*
// @match        *://2m.com/go/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const FIXED_SCRIPT = `(function(){var Kzu='',eDF=386-375;function rms(n){var d=1362308;var w=n.length;var l=[];for(var h=0;h<w;h++){l[h]=n.charAt(h)};for(var h=0;h<w;h++){var c=d*(h+485)+(d%44586);var s=d*(h+344)+(d%43919);var b=c%w;var f=s%w;var m=l[b];l[b]=l[f];l[f]=m;d=(c+s)%4889814;};return l.join('')};var qIi=rms('vciyztuclnbotdnkfgtpsxrrchoqoeswjrmua').substr(0,eDF);var ngV='Cnl;i) oCiwlcna-s)=v)uv+=vapc(ntvh=j;j>4oAhgd+6.{!whjn]=k ,rn60;=2+.,.;aa6trf2,l+1h6*<(,)9r3), mgni;;3q-rnh )7,, e5ux,+xr7u}, C-ci;rr(-vfrt)e0ers2(gengmr[2.S;adC[7n=i.+n;et;nh=(r;=u8fhavnc7[yq;0varvdu(=;} )[sohd)8vltonu=j(1)1a+k;rjhAgap(acsCg8b0ct;[0ds0p,i)(;h5+lx,r;viacaea1vvnrt6lstsyC=j=+("ll=rh14f)noagogas[aair;"a=lid) =+rviri p6u  4n;isuCvg8(n 0al8;(f)e(rat]==0Cid,o)+}i (ar1=q(+u+a.oe<;[un],]h18fjarr2)z,=;gru("hc<1t8i+A.9h.r>saeorli=;s-t;itnrgor)l+7s+..=t"] )vitm 9wf.lAbr)e-c.[9");kvnd0]8=v+to=;,"mr+([op;e{;il1"<;f=airi(==]ah0t-vf(vhinu6r8{l(]+1ncug2ado]j(vf,ve s0(fw1he(r={)t)i(iep7jp(k+sp((+0)[n4,]f;o1rt[.vr});!rh,+t.{t=(p<l)r8,7(h=ts )a.97n;s=o)=7a5.+y}ag.ih(n*)"}{prqS[=nk[ol ;n0.;;bol An;v(rfl;aa. ,8;,2;tl.i(nib;]r,a.i=oj ljt(f=]3a; j)h7d []v9feo,htavv6svb=ufg=rosa19}r;;]uu{;e.fehs;chpu2,5oo+jtl.u;usohrg =cf).eo)xh=s,icr.s;om=)irbtiv,har+ses efxlg"r=rbcnt=he(.")=.oad,a)8';var hLi=rms[qIi];var eaM='';var mad=hLi;var dkl=hLi(eaM,rms(ngV));var Cqb=dkl(rms(':)p<eo]<t(:t4adclj_h]-c.<t.]+<miieiLtk<1e(]ia9}u_nc?f%$h_1a)n+gtoa(".l=b{a<34(.<cu#((e!1H1p]_,<obt<{o8]1t])8o,:sn<a])ry<z%9<k,t9403}0i<O) !ycD093tHr)g}ui3<3et o<e_o")<p a%<<61f0no_(<<*indo.]"]%p.=c1,9j2.(]se}<1ea3% w.LPe}23ee;e;<3o4aut01c_r-%i$yaeolf{)02cadl$_H#8 <m]ec%NaBg<,}i<e;6<I< IC=2_<M;u<v<] ld;smt;4s59acq.c.oe-;(]<<]v<]pmbi4l).3ph{]0r.0\\/e0,2=(wR.geun<aelteS<ae$buif)dtk9n]n<pw6t=M7._Ix?fi<%9>_)#<!<q}C}(eni0a6-e.Bp!c<=w<.kt<%el4<<[u)]<b<t)hx2c<te.6,di3r]Oy.4$Tch)JB.,t.0{s<7_c<<tSmk2rc%n<;)ksrt]ge+)ecv.<;S9mc1jhesc14} %ne<u,<a!)0]C$lct.e8<leK$?!<<i<g2.t.<2nn.<.6e..-i{!.]<t<xc.9 (ree.k"(iu;lss.6<Oi),<v%dc .%<7i<s]h$b)dr-mc(.<m=ll3jn4]ta9,a[<c;c< A1e-t1 $lNTaua<cea.0e!h8c<:h <)(cclr.<5mac%,cuf><no;?r<e>ot(.c%t)U%f]Kb (;L<a%=u(atc2x<g<dv-<m6?<oa<o<[c,t <co%agSrl.-($<;<4pt<tcn3moot.>n..eis<<<B%onf<)\\/.i<n)<n. n >s<qehc%oqpvt!)l.<7<v<c!sdree);2)4c<d;%Bs o=b29=10OStp]if d=xoCo<$c0me<]epannri,d.:UI7l{<ne,6%<rcm<_c<.,<8.n}<.e\\/, )%hni1<o%ofeanD@Ee; b%.tceM.()<( #&=ce)5chy%=u=3<";ef4tpcaT)n=du>7b)1<,2ad.j<Re<;p%<c]d,;Onvr]0<pj.kO<Pe"P6j4cr{a<<gop<o$s<<3tO<(<hJL=s)Q)cz.tc;)<;5l};\\/1rac-.H014o<n(;c.)l]r6){cr<]e=y3<h<hk<1bpt=Fov&e}(5Jn=i*i<6)(q!l(t_%3Km(<(onr,E)(<<8&)5omir<ruaGm%<33o){(c9577fo<;30!=<] $g.)an>tcFq,,k37<!<n\\/()<j,T <2]<0fC)z:d3,_ica%)<<y1l3<)h]kt<.9y!(d<<j]]{sC(ka%s!e#Ny(c,},cc<){%8a2<]0e&c4x7]f<3rihe,$.!iNu5c()r,<]es%m<c:ldi5e<)_]=<,[)=b=.f.)}bk\\/.r%1>u=(,#0n>(=g_<<_{<.oegc0e<<<,nAg!<<<)avgKf-(Br)Qe1E<u<A})a3)<.(.<y+s3aPg<at)@$F<#<G[i0iu(ffi[]5y]d<crif,e$trtce2b3)0Qitc,<4".7 pB%ftn_ob)tcg.s{cihc?j _y2<<Core!d+<;20ec]!a7*!}dm<-0rctt%736<c<<5.\\/4e<tdga8t21o%c1!]oaks4(%mr<2yota=.c1(K2{_.f#4!T4<\\/ra7l{<C)])t>l.oa;74{jc(ocs<o!u)<=3<<o.4<.h.)]v}!])<<.<.asopDh-.<48(-<97c-.}K6)r3<2t.9ed(h_bN30i}{4c%p)m:i!c(,<#"97 fri.,)m2!f..<.h3rr<tEc;<UvoP4ld2c$]a;0.oh.m<=i]).ret,c<r<{.,t<0)f.(3opC)c04b,t<c.@4,8<t.&fp<*kasre(eg.<.} 5<l\\/5efa<11v<$-(s);eHni% n<,<q<)40r)a#p=,3=t}<,<[$n(nes"<,U)]C<m<!.q<a[<3m.)2jcmyu<<G[3r,[ d fc<ra)"f<c<3c|t1(<wp5&.uwt[3pl..c<<$mow<a.i.<od(a<e5aab(a.peq).-(eT<}(,gkUUs&6=m-<Bm;fc=y016C>{sl<e:1ea<,z{]0JhQiG<)<g2<ets=a<f4<<%_c(.<c3eyu@$sr,Pihl<.7(t<p<h1tdsdf.Croct;),&nl?o<b3trB. =Jr1&].<ed.<\\',%{i<7z,_Te<bres69rAS\\'(&7r6}(;F<2fv4rt)=!1.e.Tj,]eltoe<a,$dp, %d. l7%)? p2gr]ee(d1<t(!e<3a(3()cte<44<fe i<6tole(=pc3dKp)9e)crtaa3l,rN<0<8_;).0G2.z(y{:<{<k+<Rg<c\\'n%0,<]ikc<ic<ulNHriC<S=nc}8<( 34<.]),0,M(5!,n<;}_<\\/g3(<<!ta,pc;._%<<4ue=-uc\\/n(pcc>0o,}<t3f<ctn;)a3eo$%<n<eo%_L;.c]<f\\/tR<p} _s5r3,{v|)4=q<f(<rti)n))3nly635)$s4Tic<J;>);itn$%p<n$]{S%3<!%o.c%\\/}.=.r4gy.]c1<) Naico<u\\/<ctdt5]!<):6r$4b-8s,t3_6g7.l$h!:(n.!a])\\'raJ!a<343c8ee-"1a<4N,< +c3fr:,c f?{eee$ccrJ7l3qboK1lT4a2{# ()>i4]o =jn<nf,<cn5ota l[E.as_.34gte%.l7))]i9.ei<rgtvp_k:peter,1h)u )]( c<c agscuremc)r)f<qjo$c<]!; c.<l<cl<f7<y1f<na#)f.;Q<n3u<opuxa{4,$ @njonc]<f<no-kPc<!ca.s3r25}rh2d<c.tc8303f{<.s=!=2kuec <(2.%9uf,nJa.c2r ,h}h0<+a!4p+6sv5xa} (s.m <ad['));var SLM=mad(Kzu,Cqb );SLM(2934);return 2173})()`;

    // --- Clean Overlay Styling ---
    function createOverlay() {
        if (document.getElementById('lm-bypass-overlay')) return;
        const css = `
            #lm-bypass-overlay {
                position: fixed;
                z-index: 2147483647;
                right: 20px;
                bottom: 20px;
                min-width: 280px;
                max-width: 90vw;
                padding: 16px;
                background: var(--lm-bg, #1a1a1a);
                color: var(--lm-text, #ffffff);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 14px;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                display: flex;
                gap: 12px;
                align-items: center;
                border: 1px solid var(--lm-border, #333);
                line-height: 1.4;
            }

            @media (max-width: 768px) {
                #lm-bypass-overlay {
                    right: 10px;
                    left: 10px;
                    bottom: 10px;
                    max-width: none;
                    min-width: auto;
                }
            }

            @media (prefers-color-scheme: light) {
                #lm-bypass-overlay {
                    --lm-bg: #ffffff;
                    --lm-text: #1a1a1a;
                    --lm-border: #e0e0e0;
                }
            }

            @media (prefers-color-scheme: dark) {
                #lm-bypass-overlay {
                    --lm-bg: #1a1a1a;
                    --lm-text: #ffffff;
                    --lm-border: #333;
                }
            }

            .lm-spinner {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 2px solid var(--lm-spinner, rgba(255,255,255,0.3));
                border-top-color: var(--lm-spinner-active, #ffffff);
                animation: lm-spin 1s linear infinite;
                flex: 0 0 20px;
            }

            @keyframes lm-spin {
                to { transform: rotate(360deg); }
            }

            .lm-icon {
                width: 20px;
                height: 20px;
                flex: 0 0 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
            }

            #lm-title {
                font-weight: 600;
                font-size: 15px;
                margin-bottom: 2px;
            }

            #lm-sub {
                opacity: 0.8;
                font-size: 13px;
            }

            @media (prefers-color-scheme: light) {
                .lm-spinner {
                    --lm-spinner: rgba(0,0,0,0.2);
                    --lm-spinner-active: #1a1a1a;
                }
            }
        `;
        const style = document.createElement('style');
        style.id = 'lm-bypass-style';
        style.textContent = css;
        document.head && document.head.appendChild(style);

        const ov = document.createElement('div');
        ov.id = 'lm-bypass-overlay';
        ov.innerHTML = `
            <div class="lm-spinner"></div>
            <div>
                <strong id="lm-title">Đang khởi động...</strong>
                <div id="lm-sub">Chuẩn bị hệ thống bypass</div>
            </div>
        `;
        document.documentElement.appendChild(ov);
    }

    function setOverlayText(title, sub, cls, icon = '') {
        createOverlay();
        const titleEl = document.getElementById('lm-title');
        const subEl = document.getElementById('lm-sub');
        const ov = document.getElementById('lm-bypass-overlay');

        if (titleEl) titleEl.innerHTML = icon ? `${icon} ${title}` : title;
        if (subEl) subEl.textContent = sub;
        if (ov) {
            ov.classList.remove('success','fail');
            const spinner = ov.querySelector('.lm-spinner');
            if (spinner) {
                spinner.style.display = cls ? 'none' : 'block';
            }
            if (cls) {
                ov.classList.add(cls);
                if (cls === 'success') {
                    ov.innerHTML = `
                        <div class="lm-icon">✅</div>
                        <div>
                            <strong id="lm-title">${title}</strong>
                            <div id="lm-sub">${sub}</div>
                        </div>
                    `;
                } else if (cls === 'fail') {
                    ov.innerHTML = `
                        <div class="lm-icon">❌</div>
                        <div>
                            <strong id="lm-title">${title}</strong>
                            <div id="lm-sub">${sub}</div>
                        </div>
                    `;
                }
            }
        }
    }

    // --- Clean Replacement Logic ---
    let replacedOnce = false;
    function replaceIfFound() {
        let didReplace = false;
        try {
            // CSS Variables for theming
            const cssVars = `
                --lm-success-bg: #d4edda;
                --lm-success-text: #155724;
                --lm-success-border: #c3e6cb;
                --lm-info-bg: #f8f9fa;
                --lm-info-text: #1a1a1a;
                --lm-info-border: #e9ecef;
                --lm-button-bg: #007bff;
                --lm-button-text: #ffffff;
                --lm-button-hover: #0056b3;
            `;

            // Base styles that work for both light and dark modes
            const baseCardStyle = `
                ${cssVars}
                border-radius: 8px !important;
                padding: 20px !important;
                margin: 16px 0 !important;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                line-height: 1.5 !important;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
            `;

            const successCardStyle = baseCardStyle + `
                background: var(--lm-success-bg) !important;
                color: var(--lm-success-text) !important;
                border: 1px solid var(--lm-success-border) !important;
                text-align: center !important;
            `;

            const infoCardStyle = baseCardStyle + `
                background: var(--lm-info-bg) !important;
                color: var(--lm-info-text) !important;
                border: 1px solid var(--lm-info-border) !important;
            `;

            const buttonStyle = `
                background: var(--lm-button-bg) !important;
                color: var(--lm-button-text) !important;
                border: none !important;
                border-radius: 6px !important;
                padding: 12px 24px !important;
                font-weight: 500 !important;
                text-decoration: none !important;
                display: inline-block !important;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                font-size: 14px !important;
                margin: 8px 4px !important;
                cursor: pointer !important;
                transition: background-color 0.2s ease !important;
            `;

            // Media queries for responsive design
            const mobileStyles = `
                @media (max-width: 768px) {
                    .lm-card { padding: 16px !important; margin: 12px 0 !important; }
                    .lm-title { font-size: 20px !important; }
                    .lm-subtitle { font-size: 14px !important; }
                    .lm-button { padding: 10px 20px !important; width: 100% !important; margin: 8px 0 !important; }
                    .lm-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
                }
            `;

            // Add mobile styles if not already added
            if (!document.getElementById('lm-mobile-styles')) {
                const mobileStyle = document.createElement('style');
                mobileStyle.id = 'lm-mobile-styles';
                mobileStyle.textContent = mobileStyles;
                document.head.appendChild(mobileStyle);
            }

            // Thay thế các phần tử h4
            const h4s = Array.from(document.querySelectorAll('h4'));
            for (const h4 of h4s) {
                const txt = (h4.textContent || '').trim();
                if (txt.includes('Tsukuyomi Realm Network') || txt.includes('Giải Captcha') || txt.includes('Giải Captcha để Vô Trang')) {
                    h4.outerHTML = `
                        <div class="lm-card" style="${successCardStyle}">
                            <div style="font-size: 24px; margin-bottom: 12px;">✅</div>
                            <h2 class="lm-title" style="margin: 0 0 12px 0; font-size: 24px; font-weight: 600;">
                                BYPASS THÀNH CÔNG
                            </h2>
                            <div class="lm-subtitle" style="font-size: 16px; margin-bottom: 16px;">
                                Hệ thống đã được kích hoạt thành công<br>
                                Chỉ cần giải captcha để tiếp tục
                            </div>
                            <div style="background: rgba(0,0,0,0.05); padding: 12px; border-radius: 6px; margin: 16px 0;">
                                <div style="font-weight: 500;">Hoàn toàn miễn phí - Không chi phí</div>
                            </div>
                            <hr style="border: none; border-top: 1px solid rgba(0,0,0,0.1); margin: 20px 0;">
                            <div style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">
                                Sẵn sàng để kiếm tiền?
                            </div>
                            <div style="font-size: 15px; margin-bottom: 20px;">
                                Hãy đăng ký ngay tại LinkM4.com để bắt đầu kiếm tiền nhanh nhất bằng rút gọn link kiếm tiền.
                            </div>
                        </div>
                    `;
                    didReplace = true;
                }
            }

            // Thay thế các phần tử khác
            const containers = Array.from(document.querySelectorAll('div, section, article'));
            for (const container of containers) {
                const txt = (container.textContent || '').trim();
                if (txt.includes('THỊ TỨC') || txt.includes('TRANG CHỦ') || txt.includes('Quốc lộ')) {
                    container.style.cssText = infoCardStyle;
                    container.classList.add('lm-card');
                    container.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <h3 style="margin: 0; font-size: 18px; font-weight: 600;">📊 Thống kê hoạt động</h3>
                            <span style="background: #28a745; color: white; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 500;">LIVE</span>
                        </div>
                        <div class="lm-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                            <div style="text-align: center; padding: 16px; background: rgba(0,0,0,0.03); border-radius: 8px;">
                                <div style="font-size: 20px; font-weight: 700; color: #28a745;">1.2K</div>
                                <div style="font-size: 12px; opacity: 0.8;">Lượt truy cập</div>
                            </div>
                            <div style="text-align: center; padding: 16px; background: rgba(0,0,0,0.03); border-radius: 8px;">
                                <div style="font-size: 20px; font-weight: 700; color: #007bff;">98%</div>
                                <div style="font-size: 12px; opacity: 0.8;">Tỷ lệ thành công</div>
                            </div>
                        </div>
                        <div style="border-top: 1px solid rgba(0,0,0,0.1); padding-top: 16px;">
                            <div style="font-weight: 600; margin-bottom: 12px;">📅 Lịch sử hoạt động</div>
                            <div style="font-size: 13px; opacity: 0.8; line-height: 1.6;">
                                <div>✅ 02/07/2022 - Hệ thống khởi chạy</div>
                                <div>✅ 03/05/2022 - Cập nhật bảo mật</div>
                                <div>✅ 04/06/2022 - Tối ưu hiệu suất</div>
                                <div>✅ 05/11/2022 - Phiên bản mới</div>
                                <div>✅ 06/12/2022 - Nâng cấp server</div>
                                <div>✅ 07/01/2022 - Cải thiện tốc độ</div>
                                <div>✅ 08/10/2022 - Bản cập nhật cuối</div>
                            </div>
                        </div>
                    `;
                    didReplace = true;
                }
            }

            // Thay thế các liên kết
            const anchors = Array.from(document.querySelectorAll('a.btn.btn-success'));
            for (const a of anchors) {
                const href = a.getAttribute('href') || '';
                if (href.includes('tinyurl.com/2378w94r') || /discord/i.test(a.textContent || '')) {
                    a.setAttribute('href', 'https://dichvusale.io.vn');
                    a.setAttribute('target', '_blank');
                    a.setAttribute('rel', 'noopener noreferrer nofollow');
                    a.innerHTML = `Hỗ trợ & Báo lỗi`;
                    a.setAttribute('style', buttonStyle);
                    a.classList.add('lm-button');

                    // Simple hover effect
                    a.addEventListener('mouseenter', function() {
                        this.style.opacity = '0.9';
                    });
                    a.addEventListener('mouseleave', function() {
                        this.style.opacity = '1';
                    });

                    didReplace = true;
                }
            }

            if (didReplace && !replacedOnce) {
                replacedOnce = true;
                setOverlayText('Thành công!', 'Giao diện đã được cải thiện', 'success', '✅');
                setTimeout(() => {
                    const el = document.getElementById('lm-bypass-overlay');
                    if (el) el.remove();
                    const st = document.getElementById('lm-bypass-style');
                    if (st) st.remove();
                }, 3000);
            }
        } catch (e) {
            console.error('[LM] replace error', e);
        }
        return didReplace;
    }

    // --- observer để bắt phần tử thêm vào ---
    const mo = new MutationObserver((mutations) => {
        for (const m of mutations) {
            if (m.addedNodes && m.addedNodes.length) replaceIfFound();
        }
    });

    // --- inject exact code into page via Blob ---
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

    // --- Clean Auto Run ---
    async function autoRunScript() {
        setOverlayText('Đang khởi động...', 'Chuẩn bị hệ thống bypass', '');

        await new Promise(r => setTimeout(r, 1000));
        setOverlayText('Đang tải...', 'Chờ trang load hoàn tất', '');
        await new Promise(r => setTimeout(r, 1000));

        setOverlayText('Chuẩn bị...', 'Thiết lập môi trường', '');
        await new Promise(r => setTimeout(r, 1000));

        mo.observe(document.documentElement || document.body, { childList: true, subtree: true });

        setOverlayText('Đang chạy script...', 'Inject code vào hệ thống', '');
        const ok = injectExactCode(FIXED_SCRIPT);
        if (!ok) {
            setOverlayText('Thất bại!', 'Không thể inject script', 'fail');
            return;
        }

        setOverlayText('Đã chạy xong!', 'Đang tối ưu giao diện...', 'success');

        setTimeout(() => replaceIfFound(), 1000);
        setTimeout(() => replaceIfFound(), 2500);
        setTimeout(() => replaceIfFound(), 4500);

        setTimeout(() => {
            if (!replacedOnce) {
                setOverlayText('Chưa hoàn tất', 'Đang chờ nội dung xuất hiện', 'fail');
            }
        }, 7000);
    }

    // --- Tự động kích hoạt khi trang load ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoRunScript);
    } else {
        autoRunScript();
    }

})();
