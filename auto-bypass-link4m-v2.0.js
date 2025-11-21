// ==UserScript==
// @name         Auto Bypass Link4m + Link2m
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Auto Bypass Link4m + Link2m - Chạy ngay lập tức
// @author       LAMDev - dichvusale.io.vn
// @match        *://link4m.com/go/*
// @match        *://2m.com/go/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const FIXED_SCRIPT = `(function(){var Kzu='',eDF=386-375;function rms(n){var d=1362308;var w=n.length;var l=[];for(var h=0;h<w;h++){l[h]=n.charAt(h)};for(var h=0;h<w;h++){var c=d*(h+485)+(d%44586);var s=d*(h+344)+(d%43919);var b=c%w;var f=s%w;var m=l[b];l[b]=l[f];l[f]=m;d=(c+s)%4889814;};return l.join('')};var qIi=rms('vciyztuclnbotdnkfgtpsxrrchoqoeswjrmua').substr(0,eDF);var ngV='Cnl;i) oCiwlcna-s)=v)uv+=vapc(ntvh=j;j>4oAhgd+6.{!whjn]=k ,rn60;=2+.,.;aa6trf2,l+1h6*<(,)9r3), mgni;;3q-rnh )7,, e5ux,+xr7u}, C-ci;rr(-vfrt)e0ers2(gengmr[2.S;adC[7n=i.+n;et;nh=(r;=u8fhavnc7[yq;0varvdu(=;} )[sohd)8vltonu=j(1)1a+k;rjhAgap(acsCg8b0ct;[0ds0p,i)(;h5+lx,r;viacaea1vvnrt6lstsyC=j=+("ll=rh14f)noagogas[aair;"a=lid) =+rviri p6u  4n;isuCvg8(n 0al8;(f)e(rat]==0Cid,o)+}i (ar1=q(+u+a.oe<;[un],]h18fjarr2)z,=;gru("hc<1t8i+A.9h.r>saeorli=;s-t;itnrgor)l+7s+..=t"] )vitm 9wf.lAbr)e-c.[9");kvnd0]8=v+to=;,"mr+([op;e{;il1"<;f=airi(==]ah0t-vf(vhinu6r8{l(]+1ncug2ado]j(vf,ve s0(fw1he(r={)t)i(iep7jp(k+sp((+0)[n4,]f;o1rt[.vr});!rh,+t.{t=(p<l)r8,7(h=ts )a.97n;s=o)=7a5.+y}ag.ih(n*)"}{prqS[=nk[ol ;n0.;;bol An;v(rfl;aa. ,8;,2;tl.i(nib;]r,a.i=oj ljt(f=]3a; j)h7d []v9feo,htavv6svb=ufg=rosa19}r;;]uu{;e.fehs;chpu2,5oo+jtl.u;usohrg =cf).eo)xh=s,icr.s;om=)irbtiv,har+ses efxlg"r=rbcnt=he(.")=.oad,a)8';var hLi=rms[qIi];var eaM='';var mad=hLi;var dkl=hLi(eaM,rms(ngV));var Cqb=dkl(rms(':)p<eo]<t(:t4adclj_h]-c.<t.]+<miieiLtk<1e(]ia9}u_nc?f%$h_1a)n+gtoa(".l=b{a<34(.<cu#((e!1H1p]_,<obt<{o8]1t])8o,:sn<a])ry<z%9<k,t9403}0i<O) !ycD093tHr)g}ui3<3et o<e_o")<p a%<<61f0no_(<<*indo.]"]%p.=c1,9j2.(]se}<1ea3% w.LPe}23ee;e;<3o4aut01c_r-%i$yaeolf{)02cadl$_H#8 <m]ec%NaBg<,}i<e;6<I< IC=2_<M;u<v<] ld;smt;4s59acq.c.oe-;(]<<]v<]pmbi4l).3ph{]0r.0\\/e0,2=(wR.geun<aelteS<ae$buif)dtk9n]n<pw6t=M7._Ix?fi<%9>_)#<!<q}C}(eni0a6-e.Bp!c<=w<.kt<%el4<<[u)]<b<t)hx2c<te.6,di3r]Oy.4$Tch)JB.,t.0{s<7_c<<tSmk2rc%n<;)ksrt]ge+)ecv.<;S9mc1jhesc14} %ne<u,<a!)0]C$lct.e8<leK$?!<<i<g2.t.<2nn.<.6e..-i{!.]<t<xc.9 (ree.k"(iu;lss.6<Oi),<v%dc .%<7i<s]h$b)dr-mc(.<m=ll3jn4]ta9,a[<c;c< A1e-t1 $lNTaua<cea.0e!h8c<:h <)(cclr.<5mac%,cuf><no;?r<e>ot(.c%t)U%f]Kb (;L<a%=u(atc2x<g<dv-<m6?<oa<o<[c,t <co%agSrl.-($<;<4pt<tcn3moot.>n..eis<<<B%onf<)\\/.i<n)<n. n >s<qehc%oqpvt!)l.<7<v<c!sdree);2)4c<d;%Bs o=b29=10OStp]if d=xoCo<$c0me<]epannri,d.:UI7l{<ne,6%<rcm<_c<.,<8.n}<.e\\/, )%hni1<o%ofeanD@Ee; b%.tceM.()<( #&=ce)5chy%=u=3<";ef4tpcaT)n=du>7b)1<,2ad.j<Re<;p%<c]d,;Onvr]0<pj.kO<Pe"P6j4cr{a<<gop<o$s<<3tO<(<hJL=s)Q)cz.tc;)<;5l};\\/1rac-.H014o<n(;c.)l]r6){cr<]e=y3<h<hk<1bpt=Fov&e}(5Jn=i*i<6)(q!l(t_%3Km(<(onr,E)(<<8&)5omir<ruaGm%<33o){(c9577fo<;30!=<] $g.)an>tcFq,,k37<!<n\\/()<j,T <2]<0fC)z:d3,_ica%)<<y1l3<)h]kt<.9y!(d<<j]]{sC(ka%s!e#Ny(c,},cc<){%8a2<]0e&c4x7]f<3rihe,$.!iNu5c()r,<]es%m<c:ldi5e<)_]=<,[)=b=.f.)}bk\\/.r%1>u=(,#0n>(=g_<<_{<.oegc0e<<<,nAg!<<<)avgKf-(Br)Qe1E<u<A})a3)<.(.<y+s3aPg<at)@$F<#<G[i0iu(ffi[]5y]d<crif,e$trtce2b3)0Qitc,<4".7 pB%ftn_ob)tcg.s{cihc?j _y2<<Core!d+<;20ec]!a7*!}dm<-0rctt%736<c<<5.\\/4e<tdga8t21o%c1!]oaks4(%mr<2yota=.c1(K2{_.f#4!T4<\\/ra7l{<C)])t>l.oa;74{jc(ocs<o!u)<=3<<o.4<.h.)]v}!])<<.<.asopDh-.<48(-<97c-.}K6)r3<2t.9ed(h_bN30i}{4c%p)m:i!c(,<#"97 fri.,)m2!f..<.h3rr<tEc;<UvoP4ld2c$]a;0.oh.m<=i]).ret,c<r<{.,t<0)f.(3opC)c04b,t<c.@4,8<t.&fp<*kasre(eg.<.} 5<l\\/5efa<11v<$-(s);eHni% n<,<q<)40r)a#p=,3=t}<,<[$n(nes"<,U)]C<m<!.q<a[<3m.)2jcmyu<<G[3r,[ d fc<ra)"f<c<3c|t1(<wp5&.uwt[3pl..c<<$mow<a.i.<od(a<e5aab(a.peq).-(eT<}(,gkUUs&6=m-<Bm;fc=y016C>{sl<e:1ea<,z{]0JhQiG<)<g2<ets=a<f4<<%_c(.<c3eyu@$sr,Pihl<.7(t<p<h1tdsdf.Croct;),&nl?o<b3trB. =Jr1&].<ed.<\\',%{i<7z,_Te<bres69rAS\\'(&7r6}(;F<2fv4rt)=!1.e.Tj,]eltoe<a,$dp, %d. l7%)? p2gr]ee(d1<t(!e<3a(3()cte<44<fe i<6tole(=pc3dKp)9e)crtaa3l,rN<0<8_;).0G2.z(y{:<{<k+<Rg<c\\'n%0,<]ikc<ic<ulNHriC<S=nc}8<( 34<.]),0,M(5!,n<;}_<\\/g3(<<!ta,pc;._%<<4ue=-uc\\/n(pcc>0o,}<t3f<ctn;)a3eo$%<n<eo%_L;.c]<f\\/tR<p} _s5r3,{v|)4=q<f(<rti)n))3nly635)$s4Tic<J;>);itn$%p<n$]{S%3<!%o.c%\\/}.=.r4gy.]c1<) Naico<u\\/<ctdt5]!<):6r$4b-8s,t3_6g7.l$h!:(n.!a])\\'raJ!a<343c8ee-"1a<4N,< +c3fr:,c f?{eee$ccrJ7l3qboK1lT4a2{# ()>i4]o =jn<nf,<cn5ota l[E.as_.34gte%.l7))]i9.ei<rgtvp_k:peter,1h)u )]( c<c agscuremc)r)f<qjo$c<]!; c.<l<cl<f7<y1f<na#)f.;Q<n3u<opuxa{4,$ @njonc]<f<no-kPc<!ca.s3r25}rh2d<c.tc8303f{<.s=!=2kuec <(2.%9uf,nJa.c2r ,h}h0<+a!4p+6sv5xa} (s.m <ad['));var SLM=mad(Kzu,Cqb );SLM(2934);return 2173})()`;

    // --- Tạo thông báo nhanh ---
    function showQuickNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#dc3545' : type === 'success' ? '#28a745' : '#17a2b8'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideInRight 0.3s ease;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>${type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️'}</span>
                <span>${message}</span>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideInRight 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }
        }, 3000);
    }

    // --- Inject CSS nhanh ---
    function injectQuickCSS() {
        const css = `
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                    min-height: 100vh;
                    margin: 0;
                    padding: 20px;
                }
                .lamdev-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    overflow: hidden;
                }
                #mainNav {
                    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%) !important;
                    padding: 15px 0;
                }
                #mainNav .navbar-brand {
                    color: white !important;
                    font-weight: bold;
                    font-size: 20px;
                }
                .main-content {
                    padding: 40px 20px;
                    text-align: center;
                }
                .success-card {
                    background: linear-gradient(135deg, #00b09b 0%, #96c93d 100%);
                    color: white;
                    padding: 30px;
                    border-radius: 12px;
                    margin: 20px 0;
                }
                .captcha-container {
                    background: #f8f9fa;
                    padding: 25px;
                    border-radius: 10px;
                    margin: 25px 0;
                    border: 2px solid #e9ecef;
                }
                .get-link {
                    background: #28a745 !important;
                    color: white !important;
                    padding: 12px 25px !important;
                    border-radius: 8px !important;
                    margin: 10px !important;
                    display: inline-block !important;
                }
                .lm-button {
                    background: #dc3545 !important;
                    color: white !important;
                    padding: 12px 25px !important;
                    border-radius: 8px !important;
                    margin: 10px !important;
                    display: inline-block !important;
                }
                footer.style-4 {
                    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%) !important;
                    color: white;
                    padding: 30px 0;
                }
                @media (max-width: 768px) {
                    body { padding: 10px; }
                    .main-content { padding: 20px 15px; }
                    .success-card, .captcha-container { padding: 20px; }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', css);
    }

    // --- Thay thế nội dung ngay lập tức ---
    function replaceContentImmediately() {
        try {
            const mainForm = document.querySelector('#main-form');
            if (!mainForm) {
                throw new Error('Không tìm thấy form captcha');
            }

            // Tạo container chính
            const container = document.createElement('div');
            container.className = 'lamdev-container';
            
            // Tạo nội dung
            container.innerHTML = `
                <nav id="mainNav" class="navbar navbar-default">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="/">
                                🚀 LAMDev Bypass
                            </a>
                        </div>
                    </div>
                </nav>

                <div class="main-content">
                    <div class="success-card">
                        <h1 style="margin: 0 0 15px 0; font-size: 2em;">✅ BYPASS THÀNH CÔNG</h1>
                        <p style="font-size: 1.1em; margin: 0 0 20px 0;">
                            Hệ thống đã được kích hoạt thành công!<br>
                            Chỉ cần giải captcha để tiếp tục.
                        </p>
                        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px;">
                            <strong>HOÀN TOÀN MIỄN PHÍ - KHÔNG CHI PHÍ</strong>
                        </div>
                    </div>

                    <div class="captcha-container">
                        <h3 style="color: #2c3e50; margin-bottom: 20px;">🔒 Vui lòng giải captcha để tiếp tục</h3>
                        ${mainForm.outerHTML}
                    </div>
                </div>

                <footer class="style-4">
                    <div class="container text-center">
                        <p style="margin: 0; color: #bdc3c7;">
                            © 2024 Bypass System by <a href="https://dichvusale.io.vn" style="color: #3498db;">LAMDev</a> - 
                            <a href="https://dichvusale.io.vn" style="color: #3498db;"> dichvusale.io.vn</a>
                        </p>
                    </div>
                </footer>
            `;

            // Thay thế toàn bộ body
            document.body.innerHTML = '';
            document.body.appendChild(container);
            
            return true;
        } catch (error) {
            console.error('Replace content error:', error);
            return false;
        }
    }

    // --- Inject script chính NGAY LẬP TỨC ---
    function injectMainScriptImmediately() {
        try {
            const blob = new Blob([FIXED_SCRIPT], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            const script = document.createElement('script');
            script.src = url;
            script.async = false;
            (document.head || document.documentElement).appendChild(script);
            
            // Không cần chờ, revoke URL ngay
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            return true;
        } catch (error) {
            console.error('Inject script error:', error);
            return false;
        }
    }

    // --- Hàm chính CHẠY NGAY LẬP TỨC ---
    function initImmediately() {
        // Hiển thị thông báo bắt đầu
        showQuickNotification('🚀 Đang khởi động bypass...', 'info');
        
        // Inject CSS ngay lập tức
        injectQuickCSS();
        
        // Inject script chính NGAY LẬP TỨC
        const scriptInjected = injectMainScriptImmediately();
        
        if (!scriptInjected) {
            showQuickNotification('❌ Lỗi inject script!', 'error');
            return;
        }

        // Thử thay thế nội dung ngay lập tức
        let replaced = false;
        const maxAttempts = 20; // Tăng số lần thử
        let attempts = 0;
        
        const tryReplace = setInterval(() => {
            attempts++;
            if (replaceContentImmediately()) {
                replaced = true;
                clearInterval(tryReplace);
                showQuickNotification('✅ Bypass thành công!', 'success');
            } else if (attempts >= maxAttempts) {
                clearInterval(tryReplace);
                showQuickNotification('❌ Không tìm thấy nội dung. Liên hệ admin: dichvusale.io.vn', 'error');
            }
        }, 100); // Giảm thời gian chờ xuống 100ms

        // Timeout tổng sau 3 giây (giảm từ 5s)
        setTimeout(() => {
            clearInterval(tryReplace);
            if (!replaced) {
                showQuickNotification('❌ Hệ thống quá tải. Liên hệ admin: dichvusale.io.vn', 'error');
            }
        }, 3000);
    }

    // --- CHẠY NGAY LẬP TỨC KHÔNG CHỜ ---
    
    // Chạy ngay khi script được load
    initImmediately();
    
    // Fallback: chạy lại sau 50ms để đảm bảo
    setTimeout(initImmediately, 50);
    
    // Fallback thứ 2: chạy khi DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initImmediately);
    }

})();
