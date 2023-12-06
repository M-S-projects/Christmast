export interface loginType {
  data: loginDataType;
}

export type loginDataType = {
  accessToken: string;
  expiredAt: string;
};
