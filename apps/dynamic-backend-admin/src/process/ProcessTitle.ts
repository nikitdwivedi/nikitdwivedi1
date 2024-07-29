import { Process as TProcess } from "../api/process/Process";

export const PROCESS_TITLE_FIELD = "title";

export const ProcessTitle = (record: TProcess): string => {
  return record.title?.toString() || String(record.id);
};
