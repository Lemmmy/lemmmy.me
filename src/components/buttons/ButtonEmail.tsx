import { useCallback, useRef, useState } from "react";
import classNames from "classnames";

import { ProfileButton } from "./ProfileButton";
import { EmailIconSvg } from "./Icons";

import ReCAPTCHA from "react-google-recaptcha";

function ButtonEmailInner(): JSX.Element {
  const [shown, setShown] = useState(false);
  const [email, setEmail] = useState<string>();
  const [error, setError] = useState<boolean>();
  const captchaRef = useRef<ReCAPTCHA>(null);

  const onCaptchaChange = useCallback(async (code: string | null) => {
    if (!captchaRef.current || !code) return;

    try {
      // Validate CAPTCHA and fetch email from API
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ captcha: code }),
        headers: { "Content-Type": "application/json" }
      });

      const data = await res.json();
      if (!data || data.error) {
        // API returned error
        console.error(data.error);
        setError(true);
        return;
      }

      // Got email successfully, show
      setEmail(Buffer.from(data.email, "base64").toString("utf8"));
    } catch (e) {
      // Something else went wrong
      console.error(e);
      setError(true);
    } finally {
      captchaRef.current.reset();
    }
  }, []);

  return <>
    {!shown && <ProfileButton
      name="Email"
      icon={<EmailIconSvg />}
      onClick={() => setShown(true)}
    />}

    {/* Email button was clicked once, prompt for CAPTCHA or show results */}
    {shown && <>
      <div className={classNames(
        "h-16 px-8 flex items-center justify-center",
        "inline-block rounded-[32px] shadow-md bg-black text-white"
      )}>
        {email
          ? (
            // Success, got email
            <span className="font-semibold">{email}</span>
          )
          : (error
            ? (
              // Error, show message
              <span className="text-red-500 font-semibold">
                Sorry, something went wrong. Please try another platform.
              </span>
            )
            : (
              // Prompt for CAPTCHA
              <>
                Please verify you are not a robot.

                <span
                  onClick={() => captchaRef.current?.execute()}
                  className="opacity-75 underline pl-2 cursor-pointer"
                >
                  Verify
                </span>
              </>
            ))}
      </div>

      <ReCAPTCHA
        ref={captchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        onChange={onCaptchaChange}
        badge="bottomright"
      />
    </>}
  </>;
}

export function ButtonEmail(): JSX.Element | null {
  // Don't render the email button on the server at all, just in case
  return <div suppressHydrationWarning>
    {typeof window === "undefined" ? null : <ButtonEmailInner />}
  </div>;
}
