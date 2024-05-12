import { registerInter, loginInter } from "@/types/data";
export const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth`;
export const AuthServices = {
  login(req: loginInter) {
    return fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      });
  },
  register(req: registerInter) {
    return fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      });
  },
  activateAcc(token: number) {
    return fetch(`${baseUrl}/activate-account?token=${token}`, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    })
      .then(() => 1)
      .catch((err) => {
        throw new Error(err);
      });
  },
  resetPasswordByEmail(email: string) {
    return fetch(`${baseUrl}/reset-password-by-email`, {
      method: "POST",
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      });
  },
};
