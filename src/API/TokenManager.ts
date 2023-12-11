const accessExp = "chr-accessExpiredAt";
const accessToken = "chr-accessToken";

export interface TokensType {
  accessToken: string;
  refreshToken: string;
  AccessExpiredAt: string;
  refreshExpiredAt: string;
}

export class TokenManager {
  private _accessToken: string | null = null;
  private _accessExp: string | null = null;

  constructor() {
    this.initToken();
  }

  validateToken(expiredString: string | null, token: string | null): boolean {
    if (!expiredString || !token) return false;

    return this.calculateMinutes(expiredString, 1) >= new Date();
  }

  calculateMinutes(currentDate: string, addMinute: number): Date {
    const expiredAt = currentDate ? new Date(currentDate) : new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() - addMinute);

    return expiredAt;
  }

  initToken() {
    if (typeof window === "undefined") return;
    this._accessToken = localStorage.getItem(accessToken);
    this._accessExp = localStorage.getItem(accessExp);
  }

  setTokens(tokens: TokensType) {
    this._accessToken = tokens.accessToken;
    this._accessExp = tokens.AccessExpiredAt;

    localStorage.setItem(accessToken, tokens.accessToken);
    localStorage.setItem(accessExp, tokens.AccessExpiredAt);
  }

  removeTokens() {
    if (typeof window === "undefined") return;
    this._accessToken = null;
    this._accessExp = null;

    localStorage.removeItem(accessToken);
    localStorage.removeItem(accessExp);
  }

  get accessToken() {
    return this._accessToken;
  }

  get accessExp() {
    return this._accessExp;
  }
}

export default TokenManager;
