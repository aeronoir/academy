/* Aero Noir Academy — Part 107 study tool: flashcards (spaced repetition), quiz, mock exam.
 * Progress is stored only in this browser (localStorage). */
(function () {
  var C = window.ANA_CONFIG || {};
  var ALL = (window.ANA_QUESTION_BANK || []).filter(function (q) { return C.showUnapprovedQuestions !== false || q.approved; });
  var FREE = ALL.filter(function (q) { return q.tier === "free"; });
  var LOCKED = ALL.length - FREE.length;
  var KEY = "ana_study_v1";
  var state = { boxes: {}, answered: 0, correct: 0 };
  try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && s.boxes) state = s; } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  var $ = function (id) { return document.getElementById(id); };
  var stage = $("stage"), bar = $("progress"), stats = $("stats");
  var mode = "flash", topic = "all", queue = [], idx = 0, session = null, timerId = null;

  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pool() { return FREE.filter(function (q) { return topic === "all" || q.topic === topic; }); }
  function box(q) { return state.boxes[q.id] || 1; }

  /* spaced repetition: lowest Leitner box first, random within a box */
  function build(n) {
    var p = shuffle(pool());
    p.sort(function (a, b) { return box(a) - box(b); });
    return p.slice(0, n);
  }

  function renderStats() {
    var mastered = FREE.filter(function (q) { return box(q) >= 4; }).length;
    stats.textContent = "";
    [["Cards in free deck", FREE.length], ["Mastered", mastered], ["Answered", state.answered],
     ["Accuracy", state.answered ? Math.round(100 * state.correct / state.answered) + "%" : "—"]].forEach(function (x) {
      var d = el("span"); d.appendChild(document.createTextNode(x[0] + ": ")); d.appendChild(el("b", null, String(x[1]))); stats.appendChild(d);
    });
  }

  function start() {
    clearInterval(timerId); timerId = null;
    session = { right: 0, wrong: [], answers: 0 };
    queue = build(mode === "mock" ? 20 : mode === "quiz" ? 10 : Math.min(15, pool().length));
    idx = 0;
    if (!queue.length) { stage.textContent = ""; stage.appendChild(el("p", "lede", "No cards match this filter yet.")); return; }
    if (mode === "mock") startTimer(30 * 60);
    next();
  }

  function startTimer(sec) {
    var end = Date.now() + sec * 1000;
    function tick() {
      var left = Math.max(0, Math.round((end - Date.now()) / 1000));
      var t = $("timer"); if (t) t.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0");
      if (left <= 0) { clearInterval(timerId); finish(); }
    }
    timerId = setInterval(tick, 1000);
  }

  function next() {
    bar.firstElementChild.style.width = Math.round(100 * idx / queue.length) + "%";
    if (idx >= queue.length) return finish();
    var q = queue[idx];
    var opts = shuffle(q.choices.map(function (c, i) { return { text: c, ok: i === q.answer }; }));
    stage.textContent = "";
    var card = el("div", "qcard");
    var tp = el("div", "topic"); tp.appendChild(document.createTextNode(q.topic + "  ·  " + (idx + 1) + "/" + queue.length));
    if (!q.approved) tp.appendChild(el("span", "draft", "DRAFT"));
    if (mode === "mock") { var tm = el("span", "timer"); tm.id = "timer"; tp.appendChild(tm); }
    card.appendChild(tp);
    card.appendChild(el("p", "qtext", q.q));

    var answered = false;
    var box_ = el("div", "opts"), reveal = el("div");
    function showAnswer(picked) {
      var a = el("div", "answer");
      var right = opts.filter(function (o) { return o.ok; })[0];
      a.appendChild(el("div", "a", "Answer: " + right.text));
      a.appendChild(el("p", "why", q.why));
      a.appendChild(el("div", "ref", "Source: " + q.ref));
      reveal.appendChild(a);
    }
    function record(ok) {
      state.answered++; if (ok) { state.correct++; state.boxes[q.id] = Math.min(5, box(q) + 1); session.right++; }
      else { state.boxes[q.id] = 1; session.wrong.push(q); }
      session.answers++; save(); renderStats();
    }
    function goNext(label) {
      var b = el("button", "btn", label || "Next →"); b.type = "button";
      b.onclick = function () { idx++; next(); }; reveal.appendChild(el("div", "actions")).appendChild(b);
    }

    if (mode === "flash") {
      var rv = el("button", "btn", "Reveal answer"); rv.type = "button";
      opts.forEach(function (o) { var d = el("div", "opt", o.text); d.style.cursor = "default"; box_.appendChild(d); });
      rv.onclick = function () {
        rv.remove(); showAnswer();
        var act = el("div", "actions");
        var miss = el("button", "btn ghost", "Missed it — repeat soon"), got = el("button", "btn", "Got it");
        miss.type = got.type = "button";
        miss.onclick = function () { record(false); idx++; next(); };
        got.onclick = function () { record(true); idx++; next(); };
        act.appendChild(miss); act.appendChild(got); reveal.appendChild(act);
      };
      card.appendChild(box_); card.appendChild(el("div", "actions")).appendChild(rv); card.appendChild(reveal);
    } else {
      opts.forEach(function (o) {
        var b = el("button", "opt", o.text); b.type = "button";
        b.onclick = function () {
          if (answered) return; answered = true;
          if (mode === "mock") {
            b.classList.add("sel"); record(o.ok);
            Array.prototype.forEach.call(box_.children, function (c) { c.disabled = true; });
            setTimeout(function () { idx++; next(); }, 250);
          } else {
            Array.prototype.forEach.call(box_.children, function (c, i) { c.disabled = true; if (opts[i].ok) c.classList.add("right"); });
            if (!o.ok) b.classList.add("wrong");
            record(o.ok); showAnswer(); goNext(idx === queue.length - 1 ? "See results" : "Next →");
          }
        };
        box_.appendChild(b);
      });
      card.appendChild(box_); card.appendChild(reveal);
    }
    stage.appendChild(card);
  }

  function finish() {
    clearInterval(timerId); timerId = null;
    bar.firstElementChild.style.width = "100%";
    var total = mode === "flash" ? queue.length : queue.length;
    var pct = Math.round(100 * session.right / Math.max(1, total));
    stage.textContent = "";
    var r = el("div", "qcard result" + (pct >= 70 ? " pass" : ""));
    r.appendChild(el("div", "big", pct + "%"));
    r.appendChild(el("p", "lede", session.right + " of " + total + " correct" + (mode === "mock" ? (pct >= 70 ? " — above the 70% passing mark." : " — the real exam passing mark is 70%.") : ".")));
    if (session.wrong.length) {
      var h = el("p", "tag", "Review these"); r.appendChild(h);
      var ul = el("ul"); ul.style.cssText = "text-align:left;color:#d8d2bd;font-size:14px";
      session.wrong.forEach(function (q) { ul.appendChild(el("li", null, q.q + " → " + q.choices[q.answer])); });
      r.appendChild(ul);
    }
    var again = el("button", "btn", "Study again"); again.type = "button"; again.onclick = start;
    var act = el("div", "actions"); act.style.justifyContent = "center"; act.appendChild(again);
    r.appendChild(act);
    var up = el("div", "bank-note", LOCKED > 0 ? "The full Part 107 Prep bank adds " + LOCKED + "+ more questions, plus longer mock exams. " : "More questions are coming. ");
    var a = el("a", null, "Get notified when it opens →"); a.href = "index.html#signup"; a.style.color = "var(--gold-lt)"; up.appendChild(a);
    up.style.marginTop = "22px"; r.appendChild(up);
    stage.appendChild(r);
  }

  /* controls */
  var topics = ["all"]; FREE.forEach(function (q) { if (topics.indexOf(q.topic) < 0) topics.push(q.topic); });
  var sel = $("topic");
  topics.forEach(function (t) { var o = el("option", null, t === "all" ? "All topics" : t); o.value = t; sel.appendChild(o); });
  sel.onchange = function () { topic = sel.value; start(); };
  Array.prototype.forEach.call(document.querySelectorAll("#modes button"), function (b) {
    b.onclick = function () {
      mode = b.getAttribute("data-mode");
      Array.prototype.forEach.call(document.querySelectorAll("#modes button"), function (x) { x.classList.toggle("on", x === b); });
      start();
    };
  });
  $("reset").onclick = function () { if (confirm("Reset all saved study progress on this device?")) { state = { boxes: {}, answered: 0, correct: 0 }; save(); renderStats(); start(); } };

  if (FREE.some(function (q) { return !q.approved; })) $("draftnote").hidden = false;
  renderStats(); start();
})();
