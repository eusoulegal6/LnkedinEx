function m(t) {
  let n = [];
  return [(e) => {
    let s = t;
    t = e;
    let r = n;
    for (; r[2] && (r = r[2], r[0](e, s), e === t); ) ;
  }, (e) => {
    let s = n;
    for (; s[2]; ) s = s[2];
    return s = s[2] = [e, s], () => {
      s && (s[1][2] = s[2], s = 0);
    };
  }, () => t];
}
const At = m("25"), [Le, , we] = At, Et = m(0), [Me, kt, Ce] = Et;
function z() {
  const t = /* @__PURE__ */ new Date();
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}
var S = /* @__PURE__ */ ((t) => (t[t.Unidentified = 0] = "Unidentified", t[t.SearchPeople = 1] = "SearchPeople", t[t.MyNetwork = 2] = "MyNetwork", t[t.PostSearch = 3] = "PostSearch", t[t.PostFeed = 4] = "PostFeed", t[t.Messaging = 5] = "Messaging", t[t.Connections = 6] = "Connections", t))(S || {}), V = /* @__PURE__ */ ((t) => (t.SearchPeoplePage = "https://www.linkedin.com/search/results/people/", t.MyNetworkPage = "https://www.linkedin.com/mynetwork/", t.PostSearchPage = "https://www.linkedin.com/search/results/content/", t.FeedPage = "https://www.linkedin.com/feed/", t.MessagingPage = "https://www.linkedin.com/messaging/", t.ConnectionsPage = "https://www.linkedin.com/mynetwork/invite-connect/connections/", t.PatternOfSearchPage = "linkedin.com/search/results/people", t.PatternOfMyNetworkPage = "linkedin.com/mynetwork", t.PatternOfConnectionsPage = "linkedin.com/mynetwork/invite-connect/connections", t.PatternOfPostSearchPage = "linkedin.com/search/results/content", t.PatternOfFeedPage = "linkedin.com/feed", t.PatternOfMessagingPage = "linkedin.com/messaging", t))(V || {});
const Tt = m(
  "normal"
  /* Normal */
), [je, , Dt] = Tt, Nt = m(""), [ze, , Ft] = Nt, Bt = m("https://confido-key.lovable.app/api/public"), [_t, , Ht] = Bt, qt = m(""), [Rt, , zo] = qt, Ot = m("0"), [Ye, , It] = Ot, Vt = m("10"), [Je, , Pe] = Vt, $t = m(0), [Se, Yo, xe] = $t, Wt = m([""]), [Ue, , Kt] = Wt, Lt = m(""), [Xe, , Jo] = Lt, jt = m(!1), [Qe, , Uo] = jt, zt = m("9"), [Ze, , Xo] = zt, Yt = m("3"), [Ge, , ve] = Yt, Jt = m(0), [Ae, Qo, Ee] = Jt, Ut = m(!1), [et, , Zo] = Ut, Xt = m("10"), [tt, , Go] = Xt, Qt = m(""), [nt, , Zt] = Qt, Gt = m("30"), [ot, , He] = Gt, en = m("120"), [st, , qe] = en, tn = m(""), [at, , nn] = tn, on = m([""]), [it, , sn] = on, an = m("15"), [rt, , ke] = an, rn = m(0), [Te, es, De] = rn, cn = m([""]), [ct, , ln] = cn, un = m(!1), [lt, , ts] = un, mn = m("9"), [ut, , ns] = mn, dn = m(!0), [mt, , fn] = dn, pn = m([""]), [dt, , gn] = pn, bn = m("10"), [ft, , Re] = bn, hn = m(0), [Ne, os, Fe] = hn;
function x() {
  const t = Dt();
  return t === "slow" ? 5 : t === "fast" ? 0.5 : 1;
}
function p(t) {
  return new Promise((n) => setTimeout(n, t));
}
async function yn() {
  const {
    maximumAutoConnectionsPerDay: t,
    maximumAutoConnectionsPerSession: n,
    speedPreset: e,
    connectionNote: s,
    sessionDurationMinutes: r,
    maximumAutoCommentsPerDay: i,
    commentPool: a,
    commentSearchKeyword: l,
    autoCommentDaily: o,
    commentScheduleHour: u,
    maximumAutoPostsPerDay: d,
    postTopic: f,
    postIntervalMinutesMin: b,
    postIntervalMinutesMax: h,
    postImagePrompt: C,
    postTextPool: _,
    autoPostDaily: O,
    postScheduleHour: y,
    maximumAutoMessagesPerDay: E,
    messageReplyPool: re,
    autoMessageDaily: J,
    messageScheduleHour: I,
    replyToConnectionsOnly: Mt,
    messageFirstPool: Ct,
    maximumAutoFirstMessagesPerDay: Pt,
    apiBase: St,
    apiKey: xt
  } = await new Promise(
    (k) => {
      chrome.storage.sync.get(
        { maximumAutoConnectionsPerDay: "", maximumAutoConnectionsPerSession: "", speedPreset: "normal", connectionNote: "", sessionDurationMinutes: "", maximumAutoCommentsPerDay: "", commentPool: [""], commentSearchKeyword: "", autoCommentDaily: !1, commentScheduleHour: "9", maximumAutoPostsPerDay: "", postTopic: "", postIntervalMinutesMin: "", postIntervalMinutesMax: "", postImagePrompt: "", postTextPool: [""], autoPostDaily: !1, postScheduleHour: "10", maximumAutoMessagesPerDay: "", messageReplyPool: [""], autoMessageDaily: !1, messageScheduleHour: "9", replyToConnectionsOnly: !0, messageFirstPool: [""], maximumAutoFirstMessagesPerDay: "", apiBase: "", apiKey: "" },
        (T) => k(T)
      );
    }
  ), vt = t || n || we();
  Le(vt), je(
    e || "normal"
    /* Normal */
  ), ze(s || ""), Ye(r || "0"), Je(i || Pe()), Ue(a || [""]), Xe(l || ""), Qe(o || !1), Ze(u || "9"), Ge(d || ve()), nt(f || ""), ot(b || He()), st(h || qe()), at(C || ""), it(_ || [""]), et(O || !1), tt(y || "10"), rt(E || ke()), ct(re || [""]), lt(J || !1), ut(I || "9"), mt(Mt !== !1), dt(Ct || [""]), ft(Pt || Re()), _t(St || Ht()), Rt(xt || "");
  const U = z(), { dailyConnectionCount: ce } = await new Promise(
    (k) => {
      chrome.storage.local.get("dailyConnectionCount", (T) => k(T));
    }
  );
  (ce == null ? void 0 : ce.date) === U ? Me(ce.count) : Me(0);
  const { dailyCommentCount: le } = await new Promise(
    (k) => {
      chrome.storage.local.get("dailyCommentCount", (T) => k(T));
    }
  );
  (le == null ? void 0 : le.date) === U ? Se(le.count) : Se(0);
  const { dailyPostCount: ue } = await new Promise(
    (k) => {
      chrome.storage.local.get("dailyPostCount", (T) => k(T));
    }
  );
  (ue == null ? void 0 : ue.date) === U ? Ae(ue.count) : Ae(0);
  const { dailyMessageCount: me } = await new Promise(
    (k) => {
      chrome.storage.local.get("dailyMessageCount", (T) => k(T));
    }
  );
  (me == null ? void 0 : me.date) === U ? Te(me.count) : Te(0);
  const { dailyFirstMessageCount: de } = await new Promise(
    (k) => {
      chrome.storage.local.get("dailyFirstMessageCount", (T) => k(T));
    }
  );
  (de == null ? void 0 : de.date) === U ? Ne(de.count) : Ne(0);
}
async function wn(t) {
  await chrome.storage.local.set({ dailyConnectionCount: { date: z(), count: t } });
}
async function Mn(t) {
  await chrome.storage.local.set({ dailyCommentCount: { date: z(), count: t } });
}
async function Cn(t) {
  await chrome.storage.local.set({ dailyPostCount: { date: z(), count: t } });
}
async function Pn(t) {
  await chrome.storage.local.set({ dailyMessageCount: { date: z(), count: t } });
}
async function Sn(t) {
  await chrome.storage.local.set({ dailyFirstMessageCount: { date: z(), count: t } });
}
const Y = 5;
let G = !1;
const [Oe, xn] = m(), [vn, An] = m(), [En, kn] = m(), [Tn, Dn] = m(), [F, Nn] = m(), [Fn, Bn] = m(), [_n, Hn] = m(), [L, , X] = m(S.Unidentified), [Ie, qn, w] = m(!1);
let $ = !1;
const ee = /* @__PURE__ */ new Set();
function Rn() {
  chrome.storage.local.set({
    commentedAuthors: [...ee].slice(-500)
  });
}
function Be(t) {
  return t.replace(/\s+/g, " ").replace(/^View\s+/i, "").replace(/[’']s\s*profile\s*$/i, "").replace(/\s*profile\s*$/i, "").replace(/[’']s$/i, "").trim().toLowerCase().substring(0, 60);
}
function Ve(t) {
  const n = gt(t);
  return n.author ? ee.has(Be(n.author)) : !1;
}
const [$e, On] = m(), [In, Vn] = m(), [$n, Wn] = m(), [Kn, Ln] = m();
let B = !1;
const Q = /* @__PURE__ */ new Set();
function jn() {
  chrome.storage.local.set({
    postFingerprints: [...Q].slice(-200)
  });
}
function be(t) {
  return t.toLowerCase().trim().replace(/\s+/g, " ").substring(0, 100);
}
const [zn, Yn] = m(), [Jn, Un] = m(), [Xn, Qn] = m(), [Zn, Gn] = m();
let A = !1;
const ae = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set();
function te() {
  chrome.storage.local.set({
    conversations: {
      replied: [...ae].slice(-500),
      skipped: [...W].slice(-500)
    }
  });
}
function fe(t) {
  var e, s;
  const n = t.closest("li.msg-conversation-listitem");
  if (n) {
    const r = ((e = n.textContent) == null ? void 0 : e.trim().replace(/\s+/g, " ")) || "", i = r.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}\b/);
    return i && i.index !== void 0 ? r.substring(0, i.index).trim().substring(0, 60) : r.substring(0, 60);
  }
  return (((s = t.textContent) == null ? void 0 : s.trim()) || "").substring(0, 60);
}
function eo(t) {
  var r;
  let n = "", e = "";
  const s = t.closest("li.msg-conversation-listitem");
  if (s) {
    const i = ((r = s.textContent) == null ? void 0 : r.trim().replace(/\s+/g, " ")) || "", a = i.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}\b/);
    a && a.index !== void 0 && a.index > 2 && (n = i.substring(0, a.index).trim(), n.length > 60 && (n = n.substring(0, 60)));
    const l = document.querySelector('.msg-s-message-group__profile-link a, .msg-thread__topcard a[href*="/in/"]');
    l && (e = l.href);
  }
  return n = n.replace(/,\s*You\b/g, "").replace(/\bYou,\s*/g, "").trim(), n.includes(",") && (n = n.split(",")[0].trim()), (!n || n.length < 3 || n === "Skip to search" || n === "Search messages" || n === "Type a name or multiple names" || n.includes("Sponsored") || n.includes("Ad ")) && (n = ""), c("extractConversationInfo", { name: n, threadUrl: !!e }), { correspondent: n, headline: "", threadUrl: e };
}
function to(t) {
  const n = [];
  return document.querySelectorAll(".msg-s-event-listitem").forEach((s) => {
    var o, u, d;
    let i = ((o = s.textContent) == null ? void 0 : o.trim().replace(/\s+/g, " ")) || "";
    if (i = i.replace(/^View\s+.+?'s\s+profile\s+/, ""), i = i.replace(/^[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\s+\d{1,2}:\d{2}\s+(AM|PM)\s+/, ""), i = i.replace(/👏\s*👍\s*😊\s*Open\s+Emoji\s+Keyboard\s*/, ""), i = i.trim(), i.length < 4) return;
    let a = "", l = s.previousElementSibling;
    for (let f = 0; f < 8 && l; f++) {
      if (l.classList.contains("msg-s-message-group__profile-link")) {
        a = ((u = l.textContent) == null ? void 0 : u.trim()) || "";
        break;
      }
      l = l.previousElementSibling;
    }
    if (!a) {
      const f = document.querySelector(".msg-s-message-group__profile-link");
      f && (a = ((d = f.textContent) == null ? void 0 : d.trim()) || "");
    }
    a && n.push({ sender: a, text: i.substring(0, 500) });
  }), c("extractConversationMessages", { count: n.length }), n.slice(-8);
}
const [no, oo] = m(), [so, ao] = m(), [io, ro] = m(), [co, lo] = m(), [uo, mo] = m();
function c(t, n) {
  chrome.runtime.sendMessage({ action: "debug", msg: t, data: n }).catch(() => {
  });
}
function pt() {
  for (const t of document.querySelectorAll("*")) {
    const n = Object.keys(t).find(
      (e) => e.startsWith("__reactFiber$") || e.startsWith("__reactInternalInstance$")
    );
    if (n) {
      let e = t[n];
      for (; e.return; ) e = e.return;
      return e;
    }
  }
  return null;
}
function j(t) {
  const n = pt();
  if (n) {
    let e = function(i) {
      return !i || s.has(i) ? null : (s.add(i), i.stateNode instanceof HTMLButtonElement && t(i.stateNode) ? i.stateNode : e(i.child) || e(i.sibling));
    };
    const s = /* @__PURE__ */ new Set(), r = e(n);
    if (r) return r;
  }
  for (const e of document.querySelectorAll("button"))
    if (t(e)) return e;
  return null;
}
function N(t) {
  try {
    t.scrollIntoView({ block: "center" }), t.click();
  } catch (n) {
    c("clickElement error", { message: n == null ? void 0 : n.message });
  }
}
function fo(t, n) {
  const e = document.createElement("div");
  e.id = "__autoconnect_note_preview";
  const s = document.getElementById(e.id);
  s && s.remove(), e.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:99999;max-width:360px;padding:14px 18px;background:#1a202c;color:#e2e8f0;border-radius:10px;box-shadow:0 8px 30px rgba(0,0,0,0.4);font:13px/1.5 -apple-system,BlinkMacSystemFont,sans-serif;transition:opacity 0.3s;", e.innerHTML = `<div style="font-weight:600;margin-bottom:6px;color:#68d391;">AI Note for ${n || "this person"}</div><div>${t}</div>`, document.body.appendChild(e), setTimeout(() => {
    e.style.opacity = "0", setTimeout(() => e.remove(), 300);
  }, 6e3);
}
function pe() {
  const t = x(), n = (2e3 + Math.floor(-Math.log(1 - Math.random()) * 3e3)) * t;
  return Math.random() < 0.1 ? Math.min(n + (6e3 + Math.floor(Math.random() * 1e4)) * t, 3e4 * t) : Math.min(n, 18e3 * t);
}
async function ie() {
  const t = x(), n = Math.random();
  if (n < 0.4) {
    const r = window.innerHeight * (0.7 + Math.random() * 0.4), i = Math.round((4 + Math.floor(Math.random() * 8)) / t);
    for (let a = 0; a < i; a++)
      window.scrollBy({ top: r / i, behavior: "smooth" }), await p((25 + Math.random() * 70) * t);
    Math.random() < 0.3 && (await p((150 + Math.random() * 250) * t), window.scrollBy({ top: -(30 + Math.random() * 80), behavior: "smooth" }));
    return;
  }
  if (n < 0.65) {
    const r = document.body.scrollHeight - window.innerHeight, a = Math.min(r, window.scrollY + window.innerHeight * (0.2 + Math.random() * 0.5)) - window.scrollY;
    if (a <= 0) return;
    const l = Math.round((3 + Math.floor(Math.random() * 6)) / t);
    for (let o = 0; o < l; o++)
      window.scrollBy({ top: a / l, behavior: "smooth" }), await p((20 + Math.random() * 60) * t);
    return;
  }
  const e = document.body.scrollHeight - window.scrollY;
  if (e <= 0) return;
  const s = Math.round((5 + Math.floor(Math.random() * 10)) / t);
  for (let r = 0; r < s; r++)
    window.scrollBy({ top: e / s, behavior: "smooth" }), await p((30 + Math.random() * 80) * t);
}
async function K(t) {
  const n = x();
  t.scrollIntoView({ block: "center", behavior: "smooth" }), await p((150 + Math.random() * 200) * n), t.dispatchEvent(new MouseEvent("mouseenter", { bubbles: !0 })), t.dispatchEvent(new MouseEvent("mouseover", { bubbles: !0 })), await p((200 + Math.random() * 600) * n);
}
let D = "";
function po(t) {
  var a, l, o;
  let n = t.parentElement;
  for (let u = 0; u < 10 && !(!n || n === document.body || n.tagName === "LI" || n.querySelector('a[href*="/in/"]')); u++)
    n = n.parentElement;
  const e = n.querySelector('a[href*="/in/"]');
  let s = "";
  if (e && (s = (e.getAttribute("aria-label") || "").replace(/^(View|查看)\s+/, "").replace(/[’']s\s+profile\s*$/i, "").replace(/\s*profile\s*$/i, "").trim(), !s || s.length < 2 || s.length > 80)) {
    const d = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
    for (; d.nextNode(); ) {
      const f = ((a = d.currentNode.textContent) == null ? void 0 : a.trim()) || "";
      if (f.length >= 2 && f.length <= 60 && !f.includes("/") && !f.startsWith("http")) {
        s = f;
        break;
      }
    }
    s || (s = ((l = e.textContent) == null ? void 0 : l.trim().replace(/\s+/g, " ").substring(0, 60)) || "");
  }
  let r = "";
  const i = document.createTreeWalker(n, NodeFilter.SHOW_TEXT);
  for (; i.nextNode(); ) {
    const u = ((o = i.currentNode.textContent) == null ? void 0 : o.trim().replace(/\s+/g, " ")) || "", d = i.currentNode.parentElement;
    if (d && u !== s && !(u.length < 15 || u.length > 200) && !(u === "Connect" || u === "Message" || u === "Follow") && !d.closest("button") && d.tagName !== "A" && !d.closest('a[href*="/in/"]')) {
      r = u;
      break;
    }
  }
  return c("extractProfile", { name: s, headline: r }), { name: s, headline: r };
}
async function go(t) {
  try {
    D = await chrome.runtime.sendMessage({ action: "generateNote", profile: t }), c("AI note generated", { len: D.length }), D && chrome.runtime.sendMessage({ action: "noteGenerated", name: t.name, note: D }).catch(() => {
    });
  } catch {
    D = "";
  }
}
async function bo() {
  var n;
  if (G) return;
  G = !0;
  let t = 0;
  for (c("findNextAvailableConnectButton started"); t < Y && w(); ) {
    await ie(), await p((800 + Math.random() * 2200) * x());
    const e = j(
      (s) => {
        var r;
        return !s.disabled && !s.dataset.autoconnected && ((r = s.textContent) == null ? void 0 : r.trim()) === "Connect";
      }
    );
    if (e) {
      if (Math.random() < 0.12) {
        e.dataset.autoconnected = "true", c("randomly skipped a connect button");
        continue;
      }
      c("connect button found via fiber"), await K(e), Oe(e);
      return;
    }
    t++;
  }
  c("fiber walk exhausted, trying DOM fallback");
  for (const e of document.querySelectorAll("button"))
    if (!e.disabled && !e.dataset.autoconnected && ((n = e.textContent) == null ? void 0 : n.trim()) === "Connect") {
      if (Math.random() < 0.12) {
        e.dataset.autoconnected = "true", c("randomly skipped a connect button (DOM fallback)");
        continue;
      }
      c("connect button found via DOM fallback"), await K(e), Oe(e);
      return;
    }
  c("no connect button found in DOM either"), vn(), G = !1;
}
function ho() {
  chrome.storage.local.set({ messagedConns: [...ge].slice(-500) }).catch(() => {
  });
}
function yo(t) {
  const e = (t.getAttribute("aria-label") || "").match(/^Send a message to (.+)$/);
  return e ? e[1].trim() : "";
}
function wo() {
  const t = gn().filter((n) => n.trim());
  return t.length ? t[Math.floor(Math.random() * t.length)] : "Hey, wanted to reach out — hope you're doing well!";
}
async function Mo() {
  var n, e;
  if (R || A) return;
  R = !0;
  let t = 0;
  for (c("searchForNextMessageButton started"); t < Y && w(); ) {
    await ie(), await p((800 + Math.random() * 2200) * x());
    for (const s of document.querySelectorAll("a")) {
      if ((s.textContent || "").trim() !== "Message" || !(s.getAttribute("aria-label") || "").startsWith("Send a message to ")) continue;
      const a = yo(s);
      if (!a || ge.has(a)) continue;
      if (Math.random() < 0.12) {
        c("randomly skipped a message button", { name: a });
        continue;
      }
      c("message link found", { name: a }), Z = a, M(), await K(s), s.setAttribute("target", "_self");
      const l = s.getAttribute("href");
      s.removeAttribute("href"), s.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0, cancelable: !0 })), s.dispatchEvent(new MouseEvent("mouseup", { bubbles: !0, cancelable: !0 })), s.dispatchEvent(new MouseEvent("click", { bubbles: !0, cancelable: !0 })), l && s.setAttribute("href", l);
      const o = await Ko(9e3);
      if (!w()) {
        R = !1;
        return;
      }
      if (!o) {
        c("message composer never appeared, skipping", { name: a }), he(), Z = "", M(), R = !1, w() && P();
        return;
      }
      c("message composer ready", {
        name: a,
        editor: se(o.editor),
        sendBtnDisabled: o.sendButton.disabled
      });
      const u = wo();
      if (!u) {
        c("no first-message text available, skipping"), Z = "", M(), he(), R = !1;
        return;
      }
      let d = !1;
      const f = (n = q()) == null ? void 0 : n.editor;
      if (f && await yt(u, f)) {
        await p(300);
        for (let b = 0; b < 5; b++) {
          if (wt((e = q()) == null ? void 0 : e.sendButton)) {
            c("first message SENT", { name: a }), d = !0, await p(1500);
            break;
          }
          await p(500);
        }
      } else
        c("fillMessageTextarea returned false", { name: a });
      if (d) {
        ge.add(a), ho();
        const b = Fe() + 1;
        Ne(b), Sn(b), chrome.runtime.sendMessage({
          action: "reportActivity",
          data: { connections: 0, comments: 0, posts: 0, messagesSent: 1, messagesReceived: 0 }
        }).catch(() => {
        });
      }
      he(), Z = "", M(), w() && Fe() >= Number(Re()) && (c("first-message daily cap reached, stopping"), F()), await p(pe()), R = !1, w() && P();
      return;
    }
    t++;
  }
  c("no message links found"), R = !1;
}
function he() {
  const t = document.querySelector(
    '.msg-overlay-bubble-header__control [data-test-icon="close-small"], .msg-overlay-bubble-header button, [aria-label="Close"], .artdeco-modal__dismiss, .msg-overlay-bubble-header__controls button'
  );
  t && (t.click(), c("dismissed messaging overlay"));
}
function Co() {
  let t = !1;
  const n = j(
    (i) => (i.getAttribute("aria-label") || "").includes("Dismiss") && !i.disabled
  );
  n && (N(n), t = !0);
  const e = document.querySelector(
    '.msg-overlay-bubble-header__control .artdeco-button__icon[data-test-icon="close-small"]'
  );
  e != null && e.parentElement && (N(e.parentElement), t = !0);
  const s = D || Ft().trim();
  if (s) {
    const i = j((a) => {
      var l;
      return ((l = a.textContent) == null ? void 0 : l.trim()) === "Add a note" && !a.disabled;
    });
    if (i) {
      N(i);
      const a = document.querySelector(
        ".send-invite textarea, [role='dialog'] textarea, .artdeco-modal textarea"
      );
      a && (a.value = s, a.dispatchEvent(new Event("input", { bubbles: !0 })), a.dispatchEvent(new Event("change", { bubbles: !0 })), c("connection note written", { ai: !!D })), D = "", t = !0;
    }
  }
  const r = j((i) => {
    var a;
    return ((a = i.textContent) == null ? void 0 : a.trim()) === "Send" && !i.disabled;
  });
  return r && (N(r), t = !0), t;
}
function Po() {
  return new Promise((t) => {
    let n = 0;
    const e = setInterval(() => {
      (Co() || ++n >= Y) && (clearInterval(e), t());
    }, 500);
  });
}
function We() {
  const t = j((n) => {
    var e;
    return ((e = n.textContent) == null ? void 0 : e.trim()) === "Next" && !n.disabled;
  });
  t && N(t);
}
function M() {
  chrome.runtime.sendMessage({
    action: "stateUpdated",
    isRunning: w(),
    count: Ce(),
    commentCount: xe(),
    postCount: Ee(),
    messageCount: De(),
    firstMessageCount: Fe(),
    replyTarget: (v == null ? void 0 : v.correspondent) || "",
    firstMessageTarget: Z || ""
  }).catch(() => {
  });
}
function P() {
  w() && [S.MyNetwork, S.SearchPeople].includes(X()) ? bo() : w() && X() === S.PostSearch ? Eo() : w() && X() === S.PostFeed ? Fo() : w() && X() === S.Messaging ? jo() : w() && X() === S.Connections && Mo();
}
let ne = "";
function gt(t) {
  var s, r, i;
  const n = xo(t);
  if (n) return n;
  let e = t.parentElement;
  for (let a = 0; a < 15 && !(!e || e === document.body); a++) {
    if (e.getAttribute("data-urn") || e.classList.contains("feed-shared-update-v2") || e.querySelector('a[href*="/in/"]')) {
      let l = "";
      const o = e.querySelector('a[href*="/in/"]');
      if (o) {
        if (l = (o.getAttribute("aria-label") || "").trim(), l || (l = Array.from(o.querySelectorAll("span")).filter((h) => h.offsetParent !== null).map((h) => {
          var C;
          return (C = h.textContent) == null ? void 0 : C.trim();
        }).join(" ")), l || (l = ((s = o.textContent) == null ? void 0 : s.trim().replace(/\s+/g, " ")) || ""), !l || l.length < 2) {
          const b = o.querySelector("img");
          b && (l = (b.getAttribute("alt") || "").trim());
        }
        if (!l || l.length < 2) {
          const b = document.createTreeWalker(o, NodeFilter.SHOW_TEXT);
          for (; b.nextNode(); ) {
            const h = ((r = b.currentNode.textContent) == null ? void 0 : r.trim()) || "";
            if (h.length >= 2 && h.length <= 60) {
              l = h;
              break;
            }
          }
        }
      }
      l = l.replace(/\s+/g, " ").trim(), l = l.replace(/^View\s+/i, "").replace(/[’']s\s+profile\s*$/i, "").replace(/\s*profile\s*$/i, "").replace(/[’']s$/i, "").trim(), l = l.substring(0, 60);
      const u = [], d = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
      for (; d.nextNode(); ) {
        const b = d.currentNode.parentElement;
        if (!b || b.closest("button") || b.closest("a") || b.closest("h1,h2,h3,h4,h5,h6") || b.closest("[role='button']") || b.offsetParent === null) continue;
        const h = ((i = d.currentNode.textContent) == null ? void 0 : i.trim().replace(/\s+/g, " ")) || "";
        h.length < 10 || h.length > 500 || h === "Comment" || h === "Like" || h === "Share" || h === "Repost" || h === "Send" || h.includes("Comment as") || h.includes("Add a comment") || h !== l && u.push(h);
      }
      const f = u.slice(0, 5).join(" | ").substring(0, 800);
      return c("extractPostContent", { author: l || "(none)", textLen: f.length }), { author: l, text: f };
    }
    e = e.parentElement;
  }
  return { author: "", text: "" };
}
function So(t) {
  const n = Object.keys(t).find(
    (e) => e.startsWith("__reactFiber$") || e.startsWith("__reactInternalInstance$")
  );
  return n ? t[n] : null;
}
function xo(t) {
  let n = So(t);
  if (!n) return null;
  let e = "", s = "", r = n;
  for (let i = 0; i < 30 && r; i++) {
    const a = r.memoizedProps || r.pendingProps || {};
    if (!e) {
      const l = a.actorName || a.authorName;
      if (l && typeof l == "string" && (e = l), !e && a.actor && typeof a.actor == "object" && (e = a.actor.name || a.actor.firstName || a.actorName || ""), !e) {
        const o = a.actor || a.author;
        o && typeof o == "string" && (e = o);
      }
    }
    if (!s) {
      const l = a.text || a.body || a.commentary;
      l && typeof l == "string" && l.length > 10 && (s = l), !s && a.content && typeof a.content == "string" && a.content.length > 10 && (s = a.content);
    }
    if (!e || !s) {
      let l = r.sibling;
      for (let o = 0; o < 5 && l && (!e || !s); o++) {
        const u = l.memoizedProps || l.pendingProps || {};
        if (!e) {
          const d = u.actorName || u.authorName;
          if (d && typeof d == "string" && (e = d), !e && u.actor && typeof u.actor == "object" && (e = u.actor.name || u.actor.firstName || u.actorName || ""), !e) {
            const f = u.actor || u.author;
            f && typeof f == "string" && (e = f);
          }
        }
        if (!s) {
          const d = u.text || u.body || u.commentary;
          d && typeof d == "string" && d.length > 10 && (s = d), !s && u.content && typeof u.content == "string" && u.content.length > 10 && (s = u.content);
        }
        l = l.sibling;
      }
    }
    if (e && s) break;
    r = r.return;
  }
  return e = e.replace(/\s+/g, " ").trim(), e = e.replace(/^View\s+/i, "").replace(/[’']s\s+profile\s*$/i, "").replace(/\s*profile\s*$/i, "").replace(/[’']s$/i, "").trim(), e = e.substring(0, 60), s = s.substring(0, 800), c("extractPostFromFiber", { author: e || "(none)", textLen: s.length }), s ? { author: e, text: s } : null;
}
async function vo(t) {
  try {
    ne = await chrome.runtime.sendMessage({ action: "generateComment", post: t }), c("AI comment generated", { len: ne.length });
  } catch {
    ne = "";
  }
}
function Ao() {
  const t = Kt().filter((n) => n.trim());
  return t.length ? t[Math.floor(Math.random() * t.length)] : "";
}
async function Eo() {
  var n;
  if ($) return;
  $ = !0;
  let t = 0;
  for (c("searchForNextPostToComment started"); t < Y && w(); ) {
    await ie(), await p((800 + Math.random() * 2200) * x());
    const e = j(
      (s) => {
        var r;
        return !s.disabled && !Ve(s) && ((r = s.textContent) == null ? void 0 : r.trim()) === "Comment";
      }
    );
    if (e) {
      c("comment button found"), await K(e), $e(e);
      return;
    }
    t++;
  }
  c("no comment buttons found, trying DOM fallback");
  for (const e of document.querySelectorAll("button"))
    if (!e.disabled && !Ve(e) && ((n = e.textContent) == null ? void 0 : n.trim()) === "Comment") {
      c("comment button found via DOM fallback"), await K(e), $e(e);
      return;
    }
  c("no comment buttons found"), In(), $ = !1;
}
function bt(t) {
  let n = t;
  for (let e = 0; e < 15 && (n = n.parentElement, !(!n || n === document.body)); e++)
    if (n.getAttribute("data-urn") || n.getAttribute("data-activity-urn") || n.classList.contains("feed-shared-update-v2") || n.querySelector('a[href*="/in/"]')) return n;
  return null;
}
function ko(t, n) {
  const e = document.activeElement;
  if (e instanceof HTMLElement) {
    if (e.isContentEditable)
      return e.textContent = n, e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 })), !0;
    if (e instanceof HTMLTextAreaElement && !e.disabled)
      return e.value = n, e.dispatchEvent(new Event("input", { bubbles: !0 })), e.dispatchEvent(new Event("change", { bubbles: !0 })), !0;
  }
  const s = [
    "[role='textbox']",
    ".comments-comment-box__form textarea",
    ".ql-editor[contenteditable='true']",
    "[contenteditable='true']",
    "form textarea",
    ".comments-comment-texteditor textarea",
    ".comments-comment-texteditor [contenteditable]"
  ];
  for (const r of s) {
    const i = document.querySelector(r);
    if (i) {
      if (i.isContentEditable)
        return i.focus(), i.textContent = n, i.dispatchEvent(new Event("input", { bubbles: !0 })), i.dispatchEvent(new Event("change", { bubbles: !0 })), !0;
      const a = i;
      if (a.tagName === "TEXTAREA" && !a.disabled)
        return a.focus(), a.value = n, a.dispatchEvent(new Event("input", { bubbles: !0 })), a.dispatchEvent(new Event("change", { bubbles: !0 })), !0;
    }
  }
  return !1;
}
function ye(t) {
  var e;
  if (t.disabled) return !1;
  const n = (e = t.textContent) == null ? void 0 : e.trim();
  return n === "Post" || n === "Comment";
}
function To(t) {
  const n = document.activeElement;
  if (!(n instanceof HTMLElement)) return !1;
  let e = n;
  for (let r = 0; r < 12 && e !== document.body; r++) {
    const i = e.parentElement;
    if (!i) break;
    for (const a of Array.from(i.children)) {
      if (a === e) continue;
      if (a instanceof HTMLButtonElement && ye(a))
        return N(a), !0;
      const l = a.querySelectorAll("button");
      for (const o of l)
        if (ye(o))
          return N(o), !0;
    }
    e = i;
  }
  const s = t ? [t] : [];
  s.push(document);
  for (const r of s) {
    const i = r.querySelectorAll("button");
    for (const a of i)
      if (ye(a))
        return N(a), !0;
  }
  return !1;
}
async function Do(t) {
  const n = ne || Ao();
  if (ne = "", !n)
    return c("submitComment: no text"), !1;
  const e = bt(t);
  for (let s = 0; s < 30; s++) {
    if (!w())
      return c("submitComment: stopped"), !1;
    if (ko(null, n) && (c("submitComment: textarea filled, clicking submit"), await p(300), To(e)))
      return c("submitComment: SUBMITTED"), await p(1500), !0;
    await p(1e3);
  }
  return c("submitComment: max attempts reached"), !1;
}
function No(t) {
  const n = pt();
  if (n) {
    let e = function(i) {
      return !i || s.has(i) ? null : (s.add(i), i.stateNode instanceof HTMLElement && t(i.stateNode) ? i.stateNode : e(i.child) || e(i.sibling));
    };
    const s = /* @__PURE__ */ new Set(), r = e(n);
    if (r) return r;
  }
  for (const e of document.querySelectorAll("button, [role='button']"))
    if (t(e)) return e;
  return null;
}
async function Fo() {
  if (B) return;
  B = !0;
  let t = 0;
  for (c("searchForStartPostButton started"); t < Y && w(); ) {
    await ie(), await p((800 + Math.random() * 2200) * x());
    const n = No(
      (e) => {
        var s;
        return (e instanceof HTMLButtonElement || e.getAttribute("role") === "button") && !(e instanceof HTMLButtonElement && e.disabled) && !e.hasAttribute("aria-disabled") && (((s = e.textContent) == null ? void 0 : s.trim()) ?? "").includes("Start a post");
      }
    );
    if (n) {
      c("start post button found", { tag: n.tagName }), await K(n), zn(n);
      return;
    }
    t++;
  }
  c("no start post button found"), Jn(), B = !1;
}
function Bo(t, n) {
  return new Promise((e, s) => {
    const r = new Image();
    r.onload = () => {
      const i = document.createElement("canvas");
      i.width = r.naturalWidth, i.height = r.naturalHeight, i.getContext("2d").drawImage(r, 0, 0), e(i.toDataURL("image/png").split(",")[1]);
    }, r.onerror = () => s(new Error("Image decode failed")), r.src = `data:${n};base64,${t}`;
  });
}
async function _o(t, n) {
  try {
    const e = n === "image/png" ? t : await Bo(t, n), s = atob(e), r = new Uint8Array(s.length);
    for (let a = 0; a < s.length; a++) r[a] = s.charCodeAt(a);
    const i = new Blob([r], { type: "image/png" });
    return await navigator.clipboard.write([
      new ClipboardItem({ "image/png": i })
    ]), c("writeImageToClipboard: success", { size: s.length }), !0;
  } catch (e) {
    return c("writeImageToClipboard: failed", e), !1;
  }
}
function Ho(t) {
  function n(e) {
    var s, r;
    try {
      const i = (s = e.querySelector) == null ? void 0 : s.call(e, t);
      if (i) return i;
      const a = ((r = e.querySelectorAll) == null ? void 0 : r.call(e, "*")) || [];
      for (const l of a)
        if (l.shadowRoot) {
          const o = n(l.shadowRoot);
          if (o) return o;
        }
    } catch {
    }
    return null;
  }
  return n(document);
}
function qo(t) {
  var n, e;
  for (let s = 0; s < 30; s++) {
    const r = Ho('.ql-editor[contenteditable="true"][role="textbox"]');
    if (r) {
      let a = r;
      for (let l = 0; l < 10 && a; l++) {
        const o = a.__quill;
        if (o && typeof o.setContents == "function")
          return o.setContents([{ insert: t + `
` }], "api"), c("fillPostEditor: Quill.setContents via shadow walk"), !0;
        a.getRootNode() instanceof ShadowRoot ? a = a.getRootNode().host : a = a.parentElement;
      }
      return r.focus(), r.innerHTML = "<p>" + t + "</p>", r.dispatchEvent(new InputEvent("input", { bubbles: !0 })), c("fillPostEditor: innerHTML fallback via shadow DOM"), !0;
    }
    const i = document.querySelector('.ql-editor[contenteditable="true"][role="textbox"]');
    if (i) {
      const a = (e = (n = i.parentElement) == null ? void 0 : n.parentElement) == null ? void 0 : e.__quill;
      return a != null && a.setContents ? (a.setContents([{ insert: t + `
` }], "api"), !0) : (i.focus(), i.innerHTML = "<p>" + t + "</p>", i.dispatchEvent(new InputEvent("input", { bubbles: !0 })), !0);
    }
  }
  return c("fillPostEditor: polled 30 times, no editor found"), !1;
}
function Ro(t) {
  const n = [];
  function e(s) {
    var r, i;
    try {
      const a = (r = s.querySelectorAll) == null ? void 0 : r.call(s, t);
      if (a) for (const o of a) n.push(o);
      const l = ((i = s.querySelectorAll) == null ? void 0 : i.call(s, "*")) || [];
      for (const o of l)
        o.shadowRoot && e(o.shadowRoot);
    } catch {
    }
  }
  return e(document), n;
}
function Oo() {
  var t, n;
  for (const e of Ro("button, [role='button']"))
    if (((t = e.textContent) == null ? void 0 : t.trim()) === "Post" && !(e instanceof HTMLButtonElement && e.disabled))
      return e.click(), c("clickPostSubmit: clicked Post button"), !0;
  for (const e of document.querySelectorAll("button, [role='button']"))
    if (((n = e.textContent) == null ? void 0 : n.trim()) === "Post" && !(e instanceof HTMLButtonElement && e.disabled))
      return e.click(), c("clickPostSubmit: clicked Post button (light DOM)"), !0;
  return c("clickPostSubmit: no Post button found"), !1;
}
let g = null;
function ht() {
  const t = sn().filter((n) => n.trim());
  return t.length ? t[Math.floor(Math.random() * t.length)] : "";
}
function Io() {
  const t = Number(He()) || 30, n = Number(qe()) || 120, e = Math.max(0, n - t);
  return (t + Math.random() * e) * 6e4 * (0.85 + Math.random() * 0.3) * x();
}
async function Ke() {
  const t = Zt(), n = nn() || void 0;
  try {
    const s = await chrome.runtime.sendMessage({
      action: "generatePostContent",
      topic: t || "",
      imagePrompt: n
    });
    if (s && (s.text || s.imageBase64))
      return c("generatePostContent: AI returned", { hasText: !!s.text, hasImage: !!s.imageBase64 }), s;
  } catch (s) {
    c("generatePostContent: error", s);
  }
  const e = ht();
  return e ? (c("generatePostContent: using pool text"), { text: e }) : null;
}
let oe = "", v = null, Z = "", R = !1, ge = /* @__PURE__ */ new Set();
function Vo() {
  const t = ln().filter((n) => n.trim());
  return t.length ? t[Math.floor(Math.random() * t.length)] : "";
}
async function $o(t, n) {
  try {
    oe = await chrome.runtime.sendMessage({
      action: "generateReply",
      conversation: {
        correspondent: t.correspondent,
        headline: t.headline,
        lastMessages: n
      }
    }), c("AI reply generated", { len: oe.length });
  } catch {
    oe = "";
  }
}
function H(t) {
  if (!t) return !1;
  const n = t.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return !1;
  const e = getComputedStyle(t);
  return !(e.display === "none" || e.visibility === "hidden");
}
function se(t) {
  const n = t.getBoundingClientRect();
  return {
    tag: t.tagName,
    role: t.getAttribute("role"),
    ariaLabel: t.getAttribute("aria-label"),
    className: t.className.substring(0, 60),
    rect: { w: Math.round(n.width), h: Math.round(n.height) },
    visible: H(t)
  };
}
function Wo(t) {
  const n = t.querySelector("button.msg-form__send-button");
  if (n && H(n)) return n;
  for (const e of t.querySelectorAll("button"))
    if ((e.textContent || "").trim() === "Send" && H(e)) return e;
  return null;
}
function q(t = document) {
  const n = [];
  function e(r) {
    const i = r.querySelectorAll(
      'div.msg-form__contenteditable[contenteditable="true"][role="textbox"]'
    );
    for (const l of i) n.push(l);
    const a = r.querySelectorAll(
      '[contenteditable="true"][role="textbox"][aria-label^="Write a message"]'
    );
    for (const l of a) n.includes(l) || n.push(l);
    for (const l of r.querySelectorAll("*"))
      l.shadowRoot && e(l.shadowRoot);
  }
  e(t);
  const s = n.filter(H);
  c("findActiveMessageComposer", {
    totalEditors: n.length,
    visibleEditors: s.length
  });
  for (const r of s) {
    const i = r.closest("form.msg-form");
    if (!i || !H(i)) {
      c("findActiveMessageComposer: composer missing/hidden", se(r));
      continue;
    }
    const a = Wo(i);
    if (!a) {
      c("findActiveMessageComposer: no visible Send button in composer", {
        ...se(r),
        composerClass: i.className.substring(0, 60)
      });
      continue;
    }
    return c("findActiveMessageComposer: resolved", {
      ...se(r),
      composerTag: i.tagName,
      composerClass: i.className.substring(0, 60),
      sendBtnDisabled: a.disabled,
      sendBtnVisible: H(a)
    }), { editor: r, composer: i, sendButton: a };
  }
  return c("findActiveMessageComposer: no match", { editorsChecked: s.length }), null;
}
async function Ko(t = 9e3) {
  const n = q();
  return n || new Promise((e) => {
    let s = !1;
    const r = (l) => {
      s || (s = !0, clearTimeout(i), a.disconnect(), e(l));
    }, i = setTimeout(() => {
      c("waitForMessageComposer: timeout, final poll"), r(q());
    }, t), a = new MutationObserver(() => {
      const l = q();
      l && r(l);
    });
    a.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["class", "style"]
    });
  });
}
function _e() {
  const t = q();
  return t ? t.editor : null;
}
async function yt(t, n) {
  const e = n && H(n) ? n : _e();
  if (!e)
    return c("fillMessageTextarea: no visible editor", { editorProvided: !!n }), !1;
  if (c("fillMessageTextarea: editor resolved", se(e)), e.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0, cancelable: !0 })), e.focus(), e.dispatchEvent(new MouseEvent("mouseup", { bubbles: !0, cancelable: !0 })), !e.isContentEditable)
    return c("fillMessageTextarea: element is not contentEditable"), !1;
  const s = window.getSelection();
  s && (s.selectAllChildren(e), s.collapseToEnd());
  for (let o = 0; o < t.length; o++) {
    const u = t[o];
    if (u === `
`) {
      e.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      })), document.execCommand("insertParagraph", !1), e.dispatchEvent(new InputEvent("input", {
        bubbles: !0,
        cancelable: !0,
        inputType: "insertParagraph"
      })), e.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      })), await new Promise((b) => setTimeout(b, 60 + Math.random() * 80));
      continue;
    }
    const d = {
      key: u,
      bubbles: !0,
      cancelable: !0,
      composed: !0
    };
    e.dispatchEvent(new KeyboardEvent("keydown", d)), e.dispatchEvent(new InputEvent("beforeinput", {
      bubbles: !0,
      cancelable: !0,
      inputType: "insertText",
      data: u
    })), document.execCommand("insertText", !1, u), e.dispatchEvent(new InputEvent("input", {
      bubbles: !0,
      cancelable: !0,
      inputType: "insertText",
      data: u
    })), e.dispatchEvent(new KeyboardEvent("keyup", d));
    const f = 30 + Math.random() * 200 + (Math.random() < 0.05 ? 400 : 0);
    await new Promise((b) => setTimeout(b, f));
  }
  const r = _e();
  if (!r)
    return c("fillMessageTextarea: editor disappeared after typing"), !1;
  const i = (r.textContent || "").replace(/\s+/g, " ").trim(), a = t.replace(/\s+/g, " ").trim().substring(0, 30);
  if (!i || i.length < 3)
    return c("fillMessageTextarea: verification failed — editor empty", { expectedMin: a }), !1;
  const l = q();
  return !l || !l.sendButton ? (c("fillMessageTextarea: post-type composer/send-btn not found"), !0) : (l.sendButton.disabled && (c("fillMessageTextarea: Send button still disabled after typing"), l.editor.dispatchEvent(new InputEvent("input", { bubbles: !0, inputType: "insertText" }))), c("fillMessageTextarea: typed", { len: t.length, hasBreaks: t.includes(`
`) }), !0);
}
function wt(t) {
  var e;
  const n = t && H(t) ? t : (e = q()) == null ? void 0 : e.sendButton;
  return n ? n.disabled ? (c("clickMessageSend: Send button is disabled"), !1) : (c("clickMessageSend: resolved", {
    disabled: n.disabled,
    visible: H(n),
    className: n.className.substring(0, 60)
  }), n.dispatchEvent(new MouseEvent("mouseenter", { bubbles: !0 })), n.dispatchEvent(new MouseEvent("mouseover", { bubbles: !0 })), n.dispatchEvent(new PointerEvent("pointerdown", { bubbles: !0, pointerId: 1 })), n.dispatchEvent(new MouseEvent("mousedown", { bubbles: !0, cancelable: !0 })), n.dispatchEvent(new MouseEvent("mouseup", { bubbles: !0, cancelable: !0 })), n.dispatchEvent(new PointerEvent("pointerup", { bubbles: !0, pointerId: 1 })), n.click(), c("clickMessageSend: clicked Send"), !0) : (c("clickMessageSend: no Send button resolved"), !1);
}
function Lo(t) {
  var e;
  const n = t.querySelectorAll("span");
  for (const s of n) {
    const r = ((e = s.textContent) == null ? void 0 : e.trim()) || "";
    if (r === "1st") return !0;
    if (r === "2nd" || r === "3rd" || r === "3rd+") return !1;
  }
  return !1;
}
async function jo() {
  var n, e, s;
  if (A) return;
  A = !0;
  let t = 0;
  for (c("searchForNextConversation started"); t < Y && w(); ) {
    await ie(), await p((800 + Math.random() * 2200) * x());
    const r = document.querySelectorAll("li.msg-conversation-listitem");
    for (const i of r) {
      const a = fe(i);
      if (a && (ae.has(a) || W.has(a))) continue;
      const l = ((n = i.textContent) == null ? void 0 : n.trim()) || "";
      if (l.includes("Sponsored") || l.length < 15) {
        a && (W.add(a), te());
        continue;
      }
      let o = !1;
      const u = i.querySelectorAll("span");
      for (const f of u) {
        const b = window.getComputedStyle(f), h = parseInt(b.fontWeight) || (b.fontWeight === "bold" ? 700 : 400), C = ((e = f.textContent) == null ? void 0 : e.trim()) || "";
        if (h >= 600 && C.length > 2 && C.length < 60) {
          o = !0;
          break;
        }
      }
      if (!o) {
        const f = i.querySelector(
          ".msg-conversation-card__unread-indicator, .conversation-list-item__unread-indicator, .notification-badge"
        );
        f && ((s = f.textContent) != null && s.trim()) && (o = !0);
      }
      if (!(!o && a && ae.size === 0)) {
        if (!o)
          continue;
      }
      if (fn() && !Lo(i)) {
        c("skipping non-connection conversation"), a && (W.add(a), te());
        continue;
      }
      c("unread conversation found");
      const d = i.querySelector('a, button, [role="button"]') || i;
      await K(d), no(d);
      return;
    }
    t++;
  }
  c("no unread conversations found"), so(), A = !1;
}
(async () => {
  await yn();
  const { commentedAuthors: t, postFingerprints: n, conversations: e, messagedConns: s } = await chrome.storage.local.get(["commentedAuthors", "postFingerprints", "conversations", "messagedConns"]);
  for (const o of t || []) ee.add(o);
  for (const o of n || []) Q.add(o);
  for (const o of (e == null ? void 0 : e.replied) || []) ae.add(o);
  for (const o of (e == null ? void 0 : e.skipped) || []) W.add(o);
  for (const o of s || []) ge.add(o);
  setInterval(() => {
    const o = window.location.href;
    o.includes(V.PatternOfPostSearchPage) ? Kn() : o.includes(V.PatternOfFeedPage) ? Zn() : o.includes(V.PatternOfMessagingPage) ? co() : o.includes(V.PatternOfConnectionsPage) ? uo() : o.includes(V.PatternOfSearchPage) ? Fn() : o.includes(V.PatternOfMyNetworkPage) && _n();
  }, 1e3), Bn(() => {
    L(S.SearchPeople), P();
  }), Hn(() => {
    L(S.MyNetwork), P();
  }), Ln(() => {
    L(S.PostSearch), P();
  }), Gn(() => {
    L(S.PostFeed), P();
  }), lo(() => {
    L(S.Messaging), P();
  }), mo(() => {
    L(S.Connections), P();
  }), chrome.storage.onChanged.addListener((o) => {
    o.speedPreset && je(o.speedPreset.newValue), o.maximumAutoConnectionsPerDay && Le(o.maximumAutoConnectionsPerDay.newValue || we()), o.connectionNote && ze(o.connectionNote.newValue || ""), o.sessionDurationMinutes && Ye(o.sessionDurationMinutes.newValue || "0"), o.maximumAutoCommentsPerDay && Je(o.maximumAutoCommentsPerDay.newValue || Pe()), o.commentPool && Ue(o.commentPool.newValue || [""]), o.commentSearchKeyword && Xe(o.commentSearchKeyword.newValue || ""), o.autoCommentDaily && Qe(o.autoCommentDaily.newValue ?? !1), o.commentScheduleHour && Ze(o.commentScheduleHour.newValue || "9"), o.maximumAutoPostsPerDay && Ge(o.maximumAutoPostsPerDay.newValue || ve()), o.postTopic && nt(o.postTopic.newValue || ""), o.postIntervalMinutesMin && ot(o.postIntervalMinutesMin.newValue || He()), o.postIntervalMinutesMax && st(o.postIntervalMinutesMax.newValue || qe()), o.postImagePrompt && at(o.postImagePrompt.newValue || ""), o.postTextPool && it(o.postTextPool.newValue || [""]), o.autoPostDaily && et(o.autoPostDaily.newValue ?? !1), o.postScheduleHour && tt(o.postScheduleHour.newValue || "10"), o.maximumAutoMessagesPerDay && rt(o.maximumAutoMessagesPerDay.newValue || ke()), o.messageReplyPool && ct(o.messageReplyPool.newValue || [""]), o.autoMessageDaily && lt(o.autoMessageDaily.newValue ?? !1), o.messageScheduleHour && ut(o.messageScheduleHour.newValue || "9"), o.replyToConnectionsOnly && mt(o.replyToConnectionsOnly.newValue ?? !0), o.messageFirstPool && dt(o.messageFirstPool.newValue || [""]), o.maximumAutoFirstMessagesPerDay && ft(o.maximumAutoFirstMessagesPerDay.newValue || Re());
  }), chrome.runtime.onMessage.addListener((o) => {
    o.action === "start" && Tn(), o.action === "stop" && F();
  });
  let r = 0;
  Dn(() => {
    r = Date.now(), Ie(!0), M();
  }), Nn(() => {
    G = !1, $ = !1, B = !1, A = !1, R = !1, Ie(!1), M();
  });
  function i() {
    const o = Number(It());
    return o <= 0 ? !1 : Date.now() - r >= o * 6e4;
  }
  let a = { name: "", headline: "" };
  const l = () => {
    const o = Ce() + 1;
    Me(o), wn(o), M(), chrome.runtime.sendMessage({
      action: "reportConnected",
      data: { name: a.name, headline: a.headline }
    }).catch(() => {
    }), chrome.runtime.sendMessage({
      action: "reportActivity",
      data: { connections: 1, comments: 0, posts: 0, messagesSent: D ? 1 : 0, messagesReceived: 0 }
    }).catch(() => {
    });
  };
  kn(async () => {
    l(), await Po(), await p(pe()), G = !1, w() && (i() ? (c("session duration cap reached, stopping"), F()) : Ce() >= Number(we()) ? F() : P());
  }), kt(() => M()), qn(() => {
    M(), P();
  }), xn(async (o) => {
    o.dataset.autoconnected = "true", a = po(o);
    const u = go(a);
    await Promise.race([u, p(4e3 * x())]), D && fo(D, a.name), N(o), En();
  }), An(() => We()), On(async (o) => {
    if (!w()) return;
    const u = gt(o);
    if (u.author && ee.has(Be(u.author))) {
      c("skipping already-commented author, searching next"), $ = !1, await p(500), P();
      return;
    }
    const d = vo(u);
    if (N(o), await p((500 + Math.random() * 1e3) * x()), await Promise.race([d, p(4e3 * x())]), !w()) return;
    if (await Do(o)) {
      u.author && (ee.add(Be(u.author)), Rn());
      const b = bt(o);
      b && (b.scrollIntoView({ block: "end", behavior: "smooth" }), await p(200)), window.scrollBy({ top: 400, behavior: "smooth" }), $n();
    } else
      $ = !1;
  }), Wn(async () => {
    const o = xe() + 1;
    Se(o), Mn(o), M(), chrome.runtime.sendMessage({
      action: "reportActivity",
      data: { connections: 0, comments: 1, posts: 0, messagesSent: 0, messagesReceived: 0 }
    }).catch(() => {
    }), await p(pe()), $ = !1, w() && (i() ? (c("session duration cap reached, stopping"), F()) : xe() >= Number(Pe()) ? F() : P());
  }), Vn(() => We()), Yn(async (o) => {
    var _, O;
    if (!w()) return;
    if ((!g || !g.text && !g.imageBase64) && (g = await Ke()), !(g != null && g.text) && !(g != null && g.imageBase64)) {
      c("no post content generated"), B = !1;
      return;
    }
    chrome.runtime.sendMessage({
      action: "postPreview",
      text: g.text || "",
      imageBase64: g.imageBase64,
      imageMimeType: g.imageMimeType
    }).catch(() => {
    });
    const u = be(g.text || "");
    if (u && Q.has(u)) {
      c("post text already posted this session, regenerating"), g = await Ke(), (g != null && g.text || g != null && g.imageBase64) && chrome.runtime.sendMessage({
        action: "postPreview",
        text: g.text || "",
        imageBase64: g.imageBase64,
        imageMimeType: g.imageMimeType
      }).catch(() => {
      });
      const y = be((g == null ? void 0 : g.text) || "");
      if (y && Q.has(y)) {
        c("regenerated text also a duplicate, stopping"), B = !1;
        return;
      }
    }
    o.scrollIntoView({ block: "center", behavior: "instant" }), await p(500);
    const d = o.getBoundingClientRect(), f = Math.round(d.left + d.width / 2), b = Math.round(d.top + d.height / 2);
    if (c("cdpClick request", { x: f, y: b, elementTag: o.tagName, elementText: (o.textContent || "").trim().substring(0, 40) }), chrome.runtime.sendMessage({
      action: "cdpClick",
      x: f,
      y: b
    }), await p((3e3 + Math.random() * 2e3) * x()), !w()) return;
    let h = !1;
    const C = (g == null ? void 0 : g.text) || ht();
    if (!C) {
      c("no post text available"), B = !1;
      return;
    }
    for (let y = 0; y < 15 && w(); y++) {
      if (qo(C)) {
        if (c("post editor filled"), g != null && g.imageBase64 && !g.imageUploaded && await _o(
          g.imageBase64,
          g.imageMimeType || "image/jpeg"
        )) {
          chrome.runtime.sendMessage({ action: "cdpPaste" }), g.imageUploaded = !0, c("image written to clipboard, paste requested");
          let re = !0;
          for (let J = 0; J < 15; J++) {
            await p(600);
            const I = document.querySelector(
              ".share-box__image-preview, .image-preview__container, [data-testid='image-container'], .share-creation-share-box__image, img.feed-shared-image__image"
            );
            if (I && I instanceof HTMLElement && I.offsetParent !== null) {
              c("attachment preview detected", { selector: ((O = (_ = I.className) == null ? void 0 : _.substring) == null ? void 0 : O.call(_, 0, 40)) || I.tagName });
              break;
            }
            J === 14 && (re = !1);
          }
          re ? await p(1500) : c("no attachment preview after paste — submitting anyway");
        }
        if (await p(500), Oo()) {
          c("post SUBMITTED"), h = !0;
          const E = be(C);
          E && Q.add(E), jn(), g = null, chrome.runtime.sendMessage({ action: "postPreviewCleared" }).catch(() => {
          }), await p(2e3);
          break;
        }
      }
      await p(1e3);
    }
    h ? Xn() : B = !1;
  }), Qn(async () => {
    const o = Ee() + 1;
    Ae(o), Cn(o), M(), chrome.runtime.sendMessage({
      action: "reportActivity",
      data: { connections: 0, comments: 0, posts: 1, messagesSent: 0, messagesReceived: 0 }
    }).catch(() => {
    });
    const u = Io();
    c("post cooldown", { intervalMs: u }), await p(u), B = !1, w() && (i() ? (c("session duration cap reached, stopping"), F()) : Ee() >= Number(ve()) ? F() : P());
  }), Un(() => {
    B = !1;
  }), oo(async (o) => {
    var _, O;
    if (!w()) return;
    const u = eo(o);
    if (v = u, !u.correspondent) {
      c("skipping non-conversation element", { name: u.correspondent });
      const E = fe(o) || ((_ = o.textContent) == null ? void 0 : _.trim().substring(0, 80)) || "";
      E && (W.add(E), te()), A = !1;
      return;
    }
    c("conversation clicked, extracting messages for", u.correspondent), chrome.runtime.sendMessage({
      action: "reportMessaged",
      data: { name: u.correspondent, headline: u.headline, profileUrl: u.threadUrl }
    }).catch(() => {
    }), N(o);
    let d = [];
    for (let y = 0; y < 10 && (await p(600), d = to(), !(d.length > 0)); y++)
      ;
    c("extracted messages", { count: d.length });
    const f = [...new Set(d.map((y) => y.sender))].filter((y) => y !== "You");
    if (f.length === 1)
      u.correspondent = f[0], c("corrected correspondent from messages", { name: u.correspondent });
    else if (f.length > 1 && u.correspondent) {
      const y = f.find((E) => u.correspondent.toLowerCase().includes(E.toLowerCase()) || E.toLowerCase().includes(u.correspondent.toLowerCase()));
      y && (u.correspondent = y, c("matched correspondent from senders", { name: u.correspondent }));
    }
    const b = $o(u, d);
    if (await Promise.race([b, p(5e3 * x())]), !w()) {
      v = null, M(), A = !1;
      return;
    }
    const h = oe || Vo();
    if (oe = "", !h) {
      c("no reply text available, skipping"), v = null, M(), A = !1;
      return;
    }
    let C = !1;
    for (let y = 0; y < 5; y++) {
      if (!w()) {
        v = null, M(), A = !1;
        return;
      }
      if (_e()) break;
      await p(800);
    }
    if (M(), await yt(h)) {
      c("reply text filled, clicking send"), await p(300);
      for (let y = 0; y < 5; y++) {
        if (wt((O = q()) == null ? void 0 : O.sendButton)) {
          c("reply SENT"), C = !0, await p(1500);
          break;
        }
        await p(500);
      }
    }
    if (C) {
      const y = fe(o);
      y && (ae.add(y), te()), v != null && v.correspondent && chrome.runtime.sendMessage({
        action: "reportReplied",
        data: { name: v.correspondent, replyText: h }
      }).catch(() => {
      }), io();
    } else {
      c("failed to send reply after all attempts");
      const y = fe(o);
      y && (W.add(y), te()), A = !1;
    }
    v = null, M();
  }), ro(async () => {
    const o = De() + 1;
    Te(o), Pn(o), M(), chrome.runtime.sendMessage({
      action: "reportActivity",
      data: { connections: 0, comments: 0, posts: 0, messagesSent: 1, messagesReceived: 0 }
    }).catch(() => {
    }), await p(pe()), A = !1, w() && (i() ? (c("session duration cap reached, stopping"), F()) : De() >= Number(ke()) ? F() : P());
  }), ao(() => {
    A = !1;
  }), M();
})();
