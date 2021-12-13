import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getClientIp } from "request-ip";

interface CaptchaRes {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  "error-codes": any;
}

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const ip = getClientIp(req);
  const ua = (req.headers["user-agent"] || "").substring(0, 256);
  const id = `**${ip}** - **${ua}**`;

  const captcha = req.body.captcha;

  if (req.method !== "POST"
    || !captcha || typeof captcha !== "string"
    || !process.env.RECAPTCHA_SECRET_KEY) {
    return res.status(400).send("Bad Request");
  }

  try {
    // Validate captcha response first
    const { data } = await axios.post<CaptchaRes>(
      "https://www.google.com/recaptcha/api/siteverify",
      undefined,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: captcha
        }
      }
    );

    // Deny failed captcha
    if (!data.success) {
      // Log the incident
      const webhook = process.env.DISCORD_WEBHOOK;
      if (webhook) axios.post(webhook, {
        content: `lemmmy.me email captcha failed by ${id}\nerror codes: ${JSON.stringify(data["error-codes"])}`
      }).catch(console.error);

      return res.status(400).send("Bad Request");
    }

    // Success - log it first
    const webhook = process.env.DISCORD_WEBHOOK;
    if (webhook) axios.post(webhook, {
      content: `lemmmy.me email given to ${id}`
    }).catch(console.error);

    // Return the email (should be base64 encoded)
    return res.status(200).json({
      email: process.env.EMAIL
    });
  } catch (e) {
    console.error(e);
  }

  return res.status(400).send("Bad Request");
}

export default handler;
