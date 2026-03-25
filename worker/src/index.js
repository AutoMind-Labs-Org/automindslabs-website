export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    const allowedOrigins = new Set([
      "https://automind-labs-org.github.io",
      "https://website-contact-worker.autominds.workers.dev",
      "http://127.0.0.1:5500",
      "http://localhost:5500",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
    ]);
    const allowedOrigin = allowedOrigins.has(origin)
      ? origin
      : "https://automind-labs-org.github.io";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders(allowedOrigin),
      });
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405, allowedOrigin);
    }

    if (!origin || !allowedOrigins.has(origin)) {
      return json({ ok: false, error: "Forbidden origin" }, 403, allowedOrigin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, error: "Invalid JSON" }, 400, allowedOrigin);
    }

    const { name, email, project, message, turnstileToken, company } = body;

    // Honeypot: bots often fill hidden fields
    if (company) {
      return json({ ok: true }, 200, allowedOrigin);
    }

    if (!name || !email || !message || !turnstileToken) {
      return json({ ok: false, error: "Missing required fields" }, 400, allowedOrigin);
    }

    if (message.length > 5000) {
      return json({ ok: false, error: "Message too long" }, 400, allowedOrigin);
    }

    // 1) Verify Turnstile token server-side
    const verifyBody = new URLSearchParams();
    verifyBody.append("secret", env.TURNSTILE_SECRET_KEY);
    verifyBody.append("response", turnstileToken);

    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verifyBody,
      }
    );

    const turnstile = await turnstileRes.json();

    if (!turnstile.success) {
      return json({ ok: false, error: "Bot verification failed" }, 403, allowedOrigin);
    }

    const projectLine = project ? `Project: ${project}` : "Project: Not provided";
    const subjectSuffix = project ? ` - ${project}` : "";

    // 2) Send email with Resend
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AutoMind Labs <onboarding@resend.dev>",
        to: ["gstavrakis1996@gmail.com"],
        subject: `New portfolio message from ${name}${subjectSuffix}`,
        reply_to: email,
        text:
`Name: ${name}
Email: ${email}
${projectLine}

Message:
${message}`
      }),
    });

    if (!resendRes.ok) {
      const errorText = await resendRes.text();
      return json({ ok: false, error: errorText }, 500, allowedOrigin);
    }

    return json({ ok: true }, 200, allowedOrigin);
  },
};

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}
