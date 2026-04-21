// Auto-generated shim — re-exports from @/lib/tesda-nc/config
// This lets shared ecosystem components import from "@/lib/act/config"
import type { ExamConfig as _tesda_nc_Config } from "@/lib/tesda-nc/config";
import { EXAM_CONFIG as _raw } from "@/lib/tesda-nc/config";

// Normalise to the common shape expected by ecosystem components
export const EXAM_CONFIG = {
  ..._raw,
  locale: (_raw as {"locale"?: string}).locale ?? "en",
  isRTL: (_raw as {"isRTL"?: boolean}).isRTL ?? false,
  themeColorDark: (_raw as {"themeColorDark"?: string}).themeColorDark ?? (_raw as {"themeColor"?: string}).themeColor ?? "#1E3A8A",
} as const;

export type ExamConfig = typeof EXAM_CONFIG;
