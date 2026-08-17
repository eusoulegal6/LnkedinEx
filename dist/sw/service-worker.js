function I(e) {
  let o = [];
  return [(t) => {
    let n = e;
    e = t;
    let s = o;
    for (; s[2] && (s = s[2], s[0](t, n), t === e); ) ;
  }, (t) => {
    let n = o;
    for (; n[2]; ) n = n[2];
    return n = n[2] = [t, n], () => {
      n && (n[1][2] = n[2], n = 0);
    };
  }, () => e];
}
const j = I("https://confido-key.lovable.app/api/public"), [he, , m] = j, B = I(""), [ye, , S] = B, l = {
  leads: "db:leads",
  messages: "db:msgs:",
  activity: "db:act:"
};
function N() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function f() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
async function p() {
  return (await chrome.storage.local.get(l.leads))[l.leads] || [];
}
async function G(e) {
  return (await p()).filter((t) => t.status === e);
}
async function R() {
  const e = await p(), o = { new: 0, connected: 0, messaged: 0, replied: 0, followup_due: 0, archived: 0 };
  for (const t of e) o[t.status] = (o[t.status] || 0) + 1;
  return o;
}
async function W() {
  return (await p()).filter((o) => o.status === "messaged").sort((o, t) => o.updatedAt.localeCompare(t.updatedAt));
}
async function L(e, o, t) {
  const n = await p(), s = n.find((r) => r.name === e);
  if (s)
    return s.headline = o || s.headline, s.profileUrl = t || s.profileUrl, s.updatedAt = f(), await chrome.storage.local.set({ [l.leads]: n }), s;
  const a = {
    id: N(),
    name: e,
    headline: o,
    profileUrl: t,
    status: "new",
    notes: "",
    createdAt: f(),
    updatedAt: f()
  };
  return n.push(a), await chrome.storage.local.set({ [l.leads]: n }), a;
}
async function P(e, o) {
  const t = await p(), n = t.find((s) => s.id === e);
  n && (n.status = o, n.updatedAt = f(), await chrome.storage.local.set({ [l.leads]: t }));
}
async function Y(e, o) {
  const t = await L(e, o, "");
  return await P(t.id, "connected"), t.status = "connected", t;
}
async function F(e) {
  return (await chrome.storage.local.get(l.messages + e))[l.messages + e] || [];
}
async function J(e, o, t, n) {
  const s = await F(e);
  s.push({ id: N(), leadId: e, direction: o, content: t, aiGenerated: n, createdAt: f() }), await chrome.storage.local.set({ [l.messages + e]: s });
}
function X() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
async function O() {
  const e = X();
  return (await chrome.storage.local.get(l.activity + e))[l.activity + e] || { date: e, connectionsSent: 0, commentsMade: 0, postsCreated: 0, messagesSent: 0, messagesReceived: 0 };
}
async function y(e, o = 1) {
  const t = await O();
  t[e] = t[e] + o, await chrome.storage.local.set({ [l.activity + t.date]: t });
}
async function V() {
  const e = [];
  for (let o = 6; o >= 0; o--) {
    const t = /* @__PURE__ */ new Date();
    t.setDate(t.getDate() - o);
    const n = t.toISOString().slice(0, 10), s = await chrome.storage.local.get(l.activity + n);
    e.push(s[l.activity + n] || { date: n, connectionsSent: 0, commentsMade: 0, postsCreated: 0, messagesSent: 0, messagesReceived: 0 });
  }
  return e;
}
function q() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
async function x() {
  const { deviceId: e } = await chrome.storage.local.get("deviceId");
  if (e) return e;
  const o = q();
  return await chrome.storage.local.set({ deviceId: o }), o;
}
async function D(e, o) {
  try {
    const t = m(), n = S(), s = await x(), a = await fetch(`${t}${e}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...n ? { "X-Api-Key": n } : {},
        "X-Device-Id": s
      },
      body: JSON.stringify(o)
    });
    a.ok || console.warn(`[sync] ${e} returned ${a.status}: ${await a.text()}`);
  } catch (t) {
    console.warn(`[sync] ${e} failed:`, t);
  }
}
async function z(e, o) {
  try {
    const t = m(), n = S(), s = await x();
    await fetch(`${t}${e}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...n ? { "X-Api-Key": n } : {},
        "X-Device-Id": s
      },
      body: JSON.stringify(o)
    });
  } catch {
  }
}
async function b(e, o, t, n) {
  await D("/sync/lead", { name: e, headline: o, profile_url: t, status: n });
}
async function _(e, o, t, n) {
  await D("/sync/message", { lead_name: e, direction: o, content: t, ai_generated: n });
}
async function M(e) {
  await D("/sync/activity", e);
}
async function Q() {
  const e = S(), o = await x();
  return {
    "Content-Type": "application/json",
    ...e ? { "X-Api-Key": e } : {},
    "X-Device-Id": o
  };
}
async function Z(e) {
  try {
    const o = await fetch(`${m()}${e}`, { headers: await Q() });
    return o.ok ? o.json() : null;
  } catch {
    return null;
  }
}
async function ee() {
  return await Z("/sync/fingerprints") ?? { comments: [], posts: [] };
}
async function te(e, o) {
  await z("/sync/fingerprints", { fingerprint: e, kind: o });
}
function w() {
  const e = S();
  return e ? { "Content-Type": "application/json", "X-Api-Key": e } : { "Content-Type": "application/json" };
}
let i = {
  isRunning: !1,
  count: 0,
  commentCount: 0,
  postCount: 0,
  messageCount: 0,
  firstMessageCount: 0,
  replyTarget: "",
  firstMessageTarget: "",
  recentNotes: [],
  postPreview: null
};
chrome.runtime.onMessage.addListener((e, o, t) => {
  var n, s;
  if (console.log(`[${o.tab ? "tab" : "popup"}]`, e.action, e.data ?? e), e.action === "debug") {
    console.log(`  [tab debug] ${e.msg}`, e.data ?? "");
    return;
  }
  if (e.action === "getState") {
    t(i);
    return;
  }
  if (e.action === "stateUpdated") {
    i = { ...i, isRunning: e.isRunning, count: e.count, commentCount: e.commentCount ?? i.commentCount, postCount: e.postCount ?? i.postCount, messageCount: e.messageCount ?? i.messageCount, firstMessageCount: e.firstMessageCount ?? i.firstMessageCount, replyTarget: e.replyTarget ?? i.replyTarget, firstMessageTarget: e.firstMessageTarget ?? i.firstMessageTarget };
    return;
  }
  if ((e.action === "start" || e.action === "stop") && chrome.tabs.query({ active: !0, currentWindow: !0 }, ([a]) => {
    a != null && a.id && chrome.tabs.sendMessage(a.id, e).catch(() => {
      console.log("[sw] tab not reachable — is the content script loaded on this page?");
    });
  }), e.action === "generateNote")
    return re(e.profile).then(t).catch(() => t("")), !0;
  if (e.action === "generateComment")
    return ie(e.post).then(t).catch(() => t("")), !0;
  if (e.action === "generateReply")
    return ce(e.conversation).then(t).catch(() => t("")), !0;
  if (e.action === "generatePostContent")
    return le(e.topic, e.imagePrompt).then(t).catch(() => t({})), !0;
  if (e.action === "noteGenerated" && (i.recentNotes = [...i.recentNotes, { name: e.name, note: e.note }], i.recentNotes.length > 10 && i.recentNotes.shift()), e.action === "postPreview") {
    i.postPreview = { text: e.text, imageBase64: e.imageBase64, imageMimeType: e.imageMimeType };
    return;
  }
  if (e.action === "postPreviewCleared") {
    i.postPreview = null;
    return;
  }
  if (e.action === "cdpClick") {
    me((n = o.tab) == null ? void 0 : n.id, e.x, e.y).catch(() => {
    });
    return;
  }
  if (e.action === "cdpPaste") {
    ge((s = o.tab) == null ? void 0 : s.id).catch(() => {
    });
    return;
  }
  if (e.action === "reportConnected" && oe(e.data).catch(() => {
  }), e.action === "reportMessaged" && ne(e.data).catch(() => {
  }), e.action === "reportReplied" && ae(e.data).catch(() => {
  }), e.action === "reportActivity" && se(e.data).catch(() => {
  }), e.action === "getFingerprints")
    return ee().then(t).catch(() => t({ comments: [], posts: [] })), !0;
  if (e.action === "syncFingerprint") {
    te(e.fingerprint, e.kind);
    return;
  }
  if (e.action === "getPipeline" || e.action === "getDailyStats" || e.action === "getWeeklyStats" || e.action === "getUnreplied" || e.action === "getLeadsByStatus")
    return ue(e.action, e.data).then(t).catch(() => t(null)), !0;
});
async function oe(e) {
  await Y(e.name, e.headline), await y("connectionsSent"), b(e.name, e.headline, "", "connected"), M({ connections_sent: 1 });
}
async function ne(e) {
  const o = await L(e.name, e.headline, e.profileUrl);
  o.status !== "replied" && await P(o.id, "messaged"), await y("messagesReceived"), b(e.name, e.headline, e.profileUrl, "messaged"), _(e.name, "inbound", e.headline || "", !1), M({ messages_received: 1 });
}
async function ae(e) {
  const t = (await p()).find((n) => n.name === e.name);
  t && (await P(t.id, "replied"), await J(t.id, "outbound", e.replyText, !0)), b(e.name, "", "", "replied"), _(e.name, "outbound", e.replyText, !0), M({ messages_sent: 1 });
}
async function se(e) {
  e.connections && await y("connectionsSent", e.connections), e.comments && await y("commentsMade", e.comments), e.posts && await y("postsCreated", e.posts), e.messagesSent && await y("messagesSent", e.messagesSent), e.messagesReceived && await y("messagesReceived", e.messagesReceived), M({
    connections_sent: e.connections ?? 0,
    comments_made: e.comments ?? 0,
    posts_created: e.posts ?? 0,
    messages_sent: e.messagesSent ?? 0,
    messages_received: e.messagesReceived ?? 0
  });
}
async function re(e) {
  var t, n, s;
  console.log("[sw] calling Claude via proxy for", e.name || "(no name)");
  const o = {
    model: "claude-haiku-4-5-20251001",
    max_tokens: 150,
    system: "You write personalized LinkedIn connection notes. Be concise and genuine. Never use placeholders like [Name] or [Company].",
    messages: [{ role: "user", content: `Write ONE short, friendly LinkedIn connection note to ${e.name || "this person"} (${e.headline || "no headline available"}). Natural, not salesy, under 250 chars. No placeholders.` }]
  };
  try {
    const a = await fetch(`${m()}/claude`, {
      method: "POST",
      headers: w(),
      body: JSON.stringify(o)
    });
    if (!a.ok) {
      const g = await a.json().catch(() => ({ error: `HTTP ${a.status}` }));
      return console.error("[sw] Proxy Claude error", g.error || a.status), "";
    }
    const r = await a.json(), u = ((s = (n = (t = r == null ? void 0 : r.content) == null ? void 0 : t[0]) == null ? void 0 : n.text) == null ? void 0 : s.trim()) || "";
    return console.log("[sw] Proxy Claude response text length:", u.length), u;
  } catch (a) {
    return console.log("[sw] Proxy Claude error", a), "";
  }
}
async function ie(e) {
  var t, n, s;
  console.log("[sw] calling Claude via proxy for comment on post by", e.author || "(no author)");
  const o = {
    model: "claude-haiku-4-5-20251001",
    max_tokens: 200,
    system: "You write thoughtful, genuine LinkedIn comments on posts. Be concise and relevant to the post content. Never use generic praise like 'Great post!' or 'Thanks for sharing!'. Write something specific that shows you read the post.",
    messages: [{ role: "user", content: `Write ONE short, genuine comment on this LinkedIn post by ${e.author || "someone"}.

Post content:
"${e.text.substring(0, 500)}"

Make it specific to what they wrote, under 300 chars. Conversational and natural, not salesy.` }]
  };
  try {
    const a = await fetch(`${m()}/claude`, {
      method: "POST",
      headers: w(),
      body: JSON.stringify(o)
    });
    if (!a.ok) {
      const u = await a.json().catch(() => ({ error: `HTTP ${a.status}` }));
      return console.error("[sw] Proxy Claude error", u.error || a.status), "";
    }
    const r = await a.json();
    return ((s = (n = (t = r == null ? void 0 : r.content) == null ? void 0 : t[0]) == null ? void 0 : n.text) == null ? void 0 : s.trim()) || "";
  } catch (a) {
    return console.log("[sw] Proxy Claude error", a), "";
  }
}
async function ce(e) {
  var n, s, a;
  console.log("[sw] calling Claude via proxy for reply to", e.correspondent || "(unknown)");
  const o = e.lastMessages.map((r) => `${r.sender}: ${r.text}`).join(`
`), t = {
    model: "claude-haiku-4-5-20251001",
    max_tokens: 200,
    system: "You are a busy professional replying to LinkedIn DMs. You are direct, confident, and never waffle. You write like you speak — short sentences, no fluff. Never use: 'I'd love to', 'Happy to', 'Great question', 'That's a great', 'I appreciate', 'Thank you for', 'I'm excited', 'Let's connect', 'I'd be happy', 'Would love to'. No exclamation marks. No emoji. No sign-offs like 'Best' or 'Cheers'. Never acknowledge you're an AI, never apologize for not being able to do something. Just give a straight answer like a real person would.",
    messages: [{
      role: "user",
      content: `Reply to ${e.correspondent || "this person"}${e.headline ? ` (${e.headline})` : ""}.

Messages:
${o || "(no previous messages)"}

Under 200 chars. One message only.`
    }]
  };
  try {
    const r = await fetch(`${m()}/claude`, {
      method: "POST",
      headers: w(),
      body: JSON.stringify(t)
    });
    if (!r.ok) {
      const C = await r.json().catch(() => ({ error: `HTTP ${r.status}` }));
      return console.error("[sw] Proxy Claude error", C.error || r.status), "";
    }
    const u = await r.json(), g = ((a = (s = (n = u == null ? void 0 : u.content) == null ? void 0 : n[0]) == null ? void 0 : s.text) == null ? void 0 : a.trim()) || "";
    return console.log("[sw] Proxy Claude reply generated, length:", g.length), g;
  } catch (r) {
    return console.log("[sw] Proxy Claude reply error", r), "";
  }
}
async function le(e, o) {
  var r, u, g, C, A, $;
  const t = o || `Write a short, professional LinkedIn post about ${e || "industry trends"}. Include 2-3 sentences that show expertise. Under 500 characters. Also generate a relevant, professional image to accompany the post.`;
  let n, s, a;
  try {
    console.log("[sw] calling Gemini via proxy for post generation");
    const c = await fetch(`${m()}/gemini`, {
      method: "POST",
      headers: w(),
      body: JSON.stringify({
        model: "gemini-3.1-flash-image-preview",
        action: "generateContent",
        contents: [{ parts: [{ text: t }] }],
        generationConfig: { responseModalities: ["IMAGE", "TEXT"] }
      })
    });
    if (c.ok) {
      const d = await c.json(), E = ((g = (u = (r = d == null ? void 0 : d.candidates) == null ? void 0 : r[0]) == null ? void 0 : u.content) == null ? void 0 : g.parts) || [];
      for (const h of E)
        h.inlineData && (n = h.inlineData.data, s = h.inlineData.mimeType || "image/png"), h.text && typeof h.text == "string" && h.text.length > 10 && (a = h.text);
      console.log("[sw] Proxy Gemini response:", { hasImage: !!n, hasText: !!a });
    } else {
      const d = await c.json().catch(() => ({ error: `HTTP ${c.status}` }));
      console.error("[sw] Proxy Gemini error", d.error || c.status);
    }
  } catch (c) {
    console.log("[sw] Proxy Gemini error", c);
  }
  if (!a)
    try {
      console.log("[sw] falling back to Claude via proxy for post text");
      const c = await fetch(`${m()}/claude`, {
        method: "POST",
        headers: w(),
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 200,
          system: "You write professional LinkedIn posts. Be concise and insightful. No hashtags unless they flow naturally.",
          messages: [{ role: "user", content: `Write a short, professional LinkedIn post about ${e || "industry trends"}. 2-3 sentences, under 500 chars. Natural tone.` }]
        })
      });
      if (c.ok) {
        const d = await c.json();
        a = (($ = (A = (C = d == null ? void 0 : d.content) == null ? void 0 : C[0]) == null ? void 0 : A.text) == null ? void 0 : $.trim()) || "", console.log("[sw] Proxy Claude post text generated, length:", (a || "").length);
      } else {
        const d = await c.json().catch(() => ({ error: `HTTP ${c.status}` }));
        console.error("[sw] Proxy Claude error", d.error || c.status);
      }
    } catch (c) {
      console.log("[sw] Proxy Claude post text error", c);
    }
  return { imageBase64: n, imageMimeType: s, text: a };
}
async function ue(e, o) {
  switch (e) {
    case "getPipeline":
      return R();
    case "getDailyStats":
      return O();
    case "getWeeklyStats":
      return V();
    case "getUnreplied":
      return W();
    case "getLeadsByStatus":
      return G(o.status);
    default:
      return null;
  }
}
chrome.alarms.create("midnight", { when: de(), periodInMinutes: 1440 });
function de() {
  const e = /* @__PURE__ */ new Date();
  return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime();
}
const T = "autoComment";
chrome.storage.onChanged.addListener((e) => {
  (e.autoCommentDaily || e.commentScheduleHour) && K(), (e.autoPostDaily || e.postScheduleHour) && H(), (e.autoMessageDaily || e.messageScheduleHour) && U();
});
async function K() {
  const { autoCommentDaily: e, commentScheduleHour: o } = await chrome.storage.sync.get({
    autoCommentDaily: !1,
    commentScheduleHour: "9"
  }), t = await chrome.alarms.get(T);
  if (e) {
    const n = Number(o) || 9, s = /* @__PURE__ */ new Date(), a = new Date(s.getFullYear(), s.getMonth(), s.getDate(), n, 7, 0);
    a.getTime() <= s.getTime() && a.setDate(a.getDate() + 1), (!t || t.scheduledTime !== a.getTime()) && (chrome.alarms.create(T, {
      when: a.getTime(),
      periodInMinutes: 1440
    }), console.log("[sw] auto-comment alarm set for", a.toLocaleString()));
  } else
    t && (chrome.alarms.clear(T), console.log("[sw] auto-comment alarm cleared"));
}
const v = "autoPost";
async function H() {
  const { autoPostDaily: e, postScheduleHour: o } = await chrome.storage.sync.get({
    autoPostDaily: !1,
    postScheduleHour: "10"
  }), t = await chrome.alarms.get(v);
  if (e) {
    const n = Number(o) || 10, s = /* @__PURE__ */ new Date(), a = new Date(s.getFullYear(), s.getMonth(), s.getDate(), n, 13, 0);
    a.getTime() <= s.getTime() && a.setDate(a.getDate() + 1), (!t || t.scheduledTime !== a.getTime()) && (chrome.alarms.create(v, {
      when: a.getTime(),
      periodInMinutes: 1440
    }), console.log("[sw] auto-post alarm set for", a.toLocaleString()));
  } else
    t && (chrome.alarms.clear(v), console.log("[sw] auto-post alarm cleared"));
}
chrome.alarms.onAlarm.addListener(async (e) => {
  if (e.name === "midnight" && (chrome.storage.local.remove("dailyConnectionCount"), chrome.storage.local.remove("dailyCommentCount"), chrome.storage.local.remove("dailyPostCount"), chrome.storage.local.remove("dailyMessageCount"), i = { ...i, count: 0, commentCount: 0, postCount: 0, messageCount: 0 }, console.log("[sw] midnight reset — daily counts cleared")), e.name === T) {
    console.log("[sw] auto-comment alarm fired");
    const { commentSearchKeyword: o } = await chrome.storage.sync.get({ commentSearchKeyword: "" }), t = o || "", n = t ? `https://www.linkedin.com/search/results/content/?keywords=${encodeURIComponent(t)}` : "https://www.linkedin.com/search/results/content/";
    chrome.tabs.create({ url: n }, (s) => {
      if (s != null && s.id) {
        const a = s.id;
        setTimeout(() => {
          chrome.tabs.sendMessage(a, { action: "start" }).catch(() => {
            console.log("[sw] auto-comment: tab not ready yet");
          }), i = { ...i, isRunning: !0 };
        }, 5e3);
      }
    });
  }
  e.name === v && (console.log("[sw] auto-post alarm fired"), chrome.tabs.create({ url: "https://www.linkedin.com/feed/" }, (o) => {
    if (o != null && o.id) {
      const t = o.id;
      setTimeout(() => {
        chrome.tabs.sendMessage(t, { action: "start" }).catch(() => {
          console.log("[sw] auto-post: tab not ready yet");
        }), i = { ...i, isRunning: !0 };
      }, 5e3);
    }
  })), e.name === k && (console.log("[sw] auto-message alarm fired"), chrome.tabs.create({ url: "https://www.linkedin.com/messaging/" }, (o) => {
    if (o != null && o.id) {
      const t = o.id;
      setTimeout(() => {
        chrome.tabs.sendMessage(t, { action: "start" }).catch(() => {
          console.log("[sw] auto-message: tab not ready yet");
        }), i = { ...i, isRunning: !0 };
      }, 5e3);
    }
  }));
});
const k = "autoMessage";
async function U() {
  const { autoMessageDaily: e, messageScheduleHour: o } = await chrome.storage.sync.get({
    autoMessageDaily: !1,
    messageScheduleHour: "9"
  }), t = await chrome.alarms.get(k);
  if (e) {
    const n = Number(o) || 9, s = /* @__PURE__ */ new Date(), a = new Date(s.getFullYear(), s.getMonth(), s.getDate(), n, 23, 0);
    a.getTime() <= s.getTime() && a.setDate(a.getDate() + 1), (!t || t.scheduledTime !== a.getTime()) && (chrome.alarms.create(k, {
      when: a.getTime(),
      periodInMinutes: 1440
    }), console.log("[sw] auto-message alarm set for", a.toLocaleString()));
  } else
    t && (chrome.alarms.clear(k), console.log("[sw] auto-message alarm cleared"));
}
K();
H();
U();
async function me(e, o, t) {
  if (!e) {
    console.log("[sw] cdpClick: no tabId");
    return;
  }
  try {
    await chrome.debugger.attach({ tabId: e }, "1.3"), await chrome.debugger.sendCommand({ tabId: e }, "Input.dispatchMouseEvent", {
      type: "mouseMoved",
      x: o,
      y: t,
      pointerType: "mouse"
    }), await new Promise((n) => setTimeout(n, 50)), await chrome.debugger.sendCommand({ tabId: e }, "Input.dispatchMouseEvent", {
      type: "mousePressed",
      x: o,
      y: t,
      button: "left",
      clickCount: 1,
      pointerType: "mouse"
    }), await new Promise((n) => setTimeout(n, 80 + Math.random() * 120)), await chrome.debugger.sendCommand({ tabId: e }, "Input.dispatchMouseEvent", {
      type: "mouseReleased",
      x: o,
      y: t,
      button: "left",
      clickCount: 1,
      pointerType: "mouse"
    }), console.log(`[sw] CDP click dispatched at (${Math.round(o)}, ${Math.round(t)})`);
  } catch (n) {
    console.log("[sw] CDP click failed:", n.message);
  } finally {
    chrome.debugger.detach({ tabId: e }).catch(() => {
    });
  }
}
async function ge(e) {
  if (!e) {
    console.log("[sw] cdpPaste: no tabId");
    return;
  }
  try {
    await chrome.debugger.attach({ tabId: e }, "1.3"), await chrome.debugger.sendCommand({ tabId: e }, "Input.dispatchKeyEvent", {
      type: "keyDown",
      key: "Control",
      code: "ControlLeft",
      keyCode: 17,
      windowsVirtualKeyCode: 17
    }), await chrome.debugger.sendCommand({ tabId: e }, "Input.dispatchKeyEvent", {
      type: "keyDown",
      key: "v",
      code: "KeyV",
      keyCode: 86,
      modifiers: 2,
      windowsVirtualKeyCode: 86
    }), await new Promise((o) => setTimeout(o, 30 + Math.random() * 40)), await chrome.debugger.sendCommand({ tabId: e }, "Input.dispatchKeyEvent", {
      type: "keyUp",
      key: "v",
      code: "KeyV",
      keyCode: 86,
      modifiers: 2,
      windowsVirtualKeyCode: 86
    }), await chrome.debugger.sendCommand({ tabId: e }, "Input.dispatchKeyEvent", {
      type: "keyUp",
      key: "Control",
      code: "ControlLeft",
      keyCode: 17,
      windowsVirtualKeyCode: 17
    }), console.log("[sw] CDP paste dispatched");
  } catch (o) {
    console.log("[sw] CDP paste failed:", o.message);
  } finally {
    chrome.debugger.detach({ tabId: e }).catch(() => {
    });
  }
}
