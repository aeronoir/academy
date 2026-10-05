/*
 * Aero Noir Academy — site configuration.
 * This is the ONLY file you need to edit to connect email, payments, pricing and testimonials.
 * Anything left blank falls back gracefully (buttons become "notify me" signups).
 */
window.ANA_CONFIG = {
  /* ── Mailchimp ─────────────────────────────────────────────
   * In Mailchimp: Audience → Signup forms → Embedded forms → copy the form's action URL, e.g.
   *   https://aeronoir.us21.list-manage.com/subscribe/post?u=XXXXXXXX&id=YYYYYYYY&f_id=ZZZZZZZZ
   * Also create two text merge fields in the audience: INTEREST and SOURCE.
   * See docs/FUNNEL.md for the full walkthrough.
   */
  mailchimpAction: "",

  /* Used until Mailchimp is connected, so signups are never lost. */
  fallbackSignupUrl: "https://form.jotform.com/262087998364071",

  /* Existing Jotform forms */
  forms: {
    booking: "https://form.jotform.com/262205458940054",
    campInterest: "https://form.jotform.com/262154725801050",
    kickstartOrder: "https://form.jotform.com/262146866493064"
  },

  /* ── Checkout links ────────────────────────────────────────
   * Paste Stripe Payment Links (recommended), PayPal.me / PayPal checkout links,
   * or Square Online / Square payment links. Blank = button shows "Notify me".
   */
  checkout: {
    prep: "",          /* Part 107 Prep — full question bank + mock exams */
    crashCourse: "",   /* Drone Basics Crash Course (being revamped)      */
    launch: "",        /* Launch bundle                                    */
    pro: ""            /* Pro membership                                   */
  },

  /* Pricing placeholders — fill in when decided, e.g. "$39". Blank shows "Pricing coming soon". */
  pricing: {
    prep: "",
    crashCourse: "",
    launch: "",
    pro: "",
    kickstart: ""
  },

  /* Real testimonials only, with permission. Section stays hidden while this is empty.
   * Example: { quote: "…", name: "Marcus", role: "Remote pilot" }
   */
  testimonials: [],

  /* Flashcards: while true, questions not yet approved (approved:false) still show with a "Draft" tag.
   * Set to false after you review the bank to hide anything unapproved. */
  showUnapprovedQuestions: true
};
