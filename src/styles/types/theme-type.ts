import { theme } from "../theme/theme";

export type ThemeType = { [K in keyof typeof theme]: (typeof theme)[K] };
