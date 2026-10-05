/* Aero Noir Academy — signup funnel, checkout wiring, pricing + testimonials. Settings live in config.js */
(function () {
  var C = window.ANA_CONFIG || {};

  /* ── traffic source (UTMs, ?ref=, or referrer) ── */
  function sourceLabel() {
    try {
      var q = new URLSearchParams(location.search), parts = [];
      ["utm_source", "utm_medium", "utm_campaign"].forEach(function (k) { if (q.get(k)) parts.push(q.get(k)); });
      if (!parts.length && q.get("ref")) parts.push("ref:" + q.get("ref"));
      if (parts.length) { sessionStorage.setItem("ana_src", parts.join("/")); }
      var saved = sessionStorage.getItem("ana_src");
      if (saved) return saved;
      if (document.referrer) { return "referrer:" + new URL(document.referrer).hostname; }
    } catch (e) {}
    return "direct";
  }
  var SOURCE = sourceLabel();

  /* ── pricing placeholders ── */
  document.querySelectorAll("[data-price]").forEach(function (el) {
    var v = (C.pricing || {})[el.getAttribute("data-price")];
    if (v) { el.textContent = v; el.classList.remove("tba"); }
    else { el.textContent = "Pricing coming soon"; el.classList.add("tba"); }
  });

  /* ── checkout buttons: real link if configured, otherwise a "notify me" signup ── */
  document.querySelectorAll("[data-checkout]").forEach(function (a) {
    var link = (C.checkout || {})[a.getAttribute("data-checkout")];
    if (link) {
      a.href = link; a.target = "_blank"; a.rel = "noopener";
    } else {
      a.href = "#signup";
      a.textContent = a.getAttribute("data-fallback") || "Notify me when it opens";
      a.addEventListener("click", function () {
        var v = a.getAttribute("data-interest");
        document.querySelectorAll('.ana-signup input[name="interest"]').forEach(function (cb) { if (cb.value === v) cb.checked = true; });
      });
    }
  });

  /* ── existing Jotform links ── */
  document.querySelectorAll("[data-form]").forEach(function (a) {
    var url = (C.forms || {})[a.getAttribute("data-form")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
  });

  /* ── testimonials (only real ones from config) ── */
  var tWrap = document.getElementById("testimonials");
  if (tWrap) {
    var list = C.testimonials || [];
    if (!list.length) { tWrap.hidden = true; }
    else {
      var grid = tWrap.querySelector(".grid");
      list.forEach(function (t) {
        var f = document.createElement("figure");
        f.className = "card"; f.style.margin = "0";
        var b = document.createElement("blockquote"); b.className = "quote"; b.textContent = "“" + t.quote + "”";
        var w = document.createElement("figcaption"); w.className = "who"; w.textContent = t.name + (t.role ? " — " + t.role : "");
        f.appendChild(b); f.appendChild(w); grid.appendChild(f);
      });
    }
  }

  /* ── signup forms → Mailchimp (JSONP), with a safe fallback ── */
  function parseAction(action) {
    try {
      var u = new URL(action);
      return { post: u.origin + u.pathname.replace("/subscribe/post", "/subscribe/post-json"), u: u.searchParams.get("u"), id: u.searchParams.get("id"), f_id: u.searchParams.get("f_id") };
    } catch (e) { return null; }
  }
  document.querySelectorAll("form.ana-signup").forEach(function (form) {
    var msg = form.querySelector(".msg");
    var src = form.querySelector('input[name="SOURCE"]'); if (src) src.value = SOURCE;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.EMAIL.value.trim();
      if (!email) return;
      var interests = Array.prototype.map.call(form.querySelectorAll('input[name="interest"]:checked'), function (c) { return c.value; });
      if (form.hp && form.hp.value) return; /* bot */
      function show(kind, text) { msg.className = "msg " + kind; msg.textContent = text; msg.hidden = false; }

      var m = C.mailchimpAction ? parseAction(C.mailchimpAction) : null;
      if (!m || !m.u || !m.id) {
        /* Mailchimp not connected yet: send to the existing Jotform so no lead is lost. */
        show("ok", "Opening our sign-up form…");
        window.open(C.fallbackSignupUrl, "_blank", "noopener");
        return;
      }
      var cb = "anaCb" + Date.now();
      var p = new URLSearchParams();
      p.set("u", m.u); p.set("id", m.id); if (m.f_id) p.set("f_id", m.f_id);
      p.set("EMAIL", email);
      p.set("FNAME", form.FNAME ? form.FNAME.value.trim() : "");
      p.set("INTEREST", interests.join(","));
      p.set("SOURCE", SOURCE);
      p.set("b_" + m.u + "_" + m.id, "");
      p.set("c", cb);
      var s = document.createElement("script");
      var timer = setTimeout(function () { show("err", "That took too long. Please try again."); cleanup(); }, 12000);
      function cleanup() { clearTimeout(timer); delete window[cb]; if (s.parentNode) s.parentNode.removeChild(s); }
      window[cb] = function (res) {
        cleanup();
        if (res && res.result === "success") {
          form.reset();
          show("ok", "You're in! Check your inbox to confirm your email, then look out for your free guide.");
          try { localStorage.setItem("ana_subscribed", "1"); } catch (x) {}
        } else {
          var t = (res && res.msg || "").replace(/<[^>]+>/g, "");
          show("err", /already subscribed/i.test(t) ? "You're already on the list. Check your inbox (and spam)." : (t || "Something went wrong. Please try again."));
        }
      };
      s.src = m.post + "?" + p.toString();
      s.onerror = function () { cleanup(); show("err", "Could not reach the signup service. Please try again."); };
      document.body.appendChild(s);
    });
  });
})();
