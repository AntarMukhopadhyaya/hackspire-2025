export interface TurnstileVerificationResult {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export async function verifyTurnstileToken(
  token: string,
  remoteip?: string
): Promise<TurnstileVerificationResult> {
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    throw new Error(
      "Cloudflare Turnstile secret key not found in environment variables"
    );
  }

  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token);

  if (remoteip) {
    formData.append("remoteip", remoteip);
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: TurnstileVerificationResult = await response.json();
    return result;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    throw new Error("Failed to verify Turnstile token");
  }
}

export function getTurnstileErrorMessage(errorCodes?: string[]): string {
  if (!errorCodes || errorCodes.length === 0) {
    return "Verification failed";
  }

  const errorMessages: { [key: string]: string } = {
    "missing-input-secret": "The secret parameter is missing.",
    "invalid-input-secret": "The secret parameter is invalid or malformed.",
    "missing-input-response": "The response parameter is missing.",
    "invalid-input-response": "The response parameter is invalid or malformed.",
    "bad-request": "The request is invalid or malformed.",
    "timeout-or-duplicate":
      "The response is no longer valid: either is too old or has been used previously.",
    "internal-error":
      "An internal error happened while validating the response. The request can be retried.",
  };

  return errorCodes
    .map((code) => errorMessages[code] || `Unknown error: ${code}`)
    .join(", ");
}
