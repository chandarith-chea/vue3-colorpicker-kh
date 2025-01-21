import enUS from "./en-US";
import zhCn from "./zh-CN";
import kmKH from './km-KH';

export type Lang = "ZH-cn" | "En" | "Kh";

export const Local: { [K in Lang]: { [key: string]: string } } = {
  En: enUS,
  "ZH-cn": zhCn,
  Kh: kmKH
};
