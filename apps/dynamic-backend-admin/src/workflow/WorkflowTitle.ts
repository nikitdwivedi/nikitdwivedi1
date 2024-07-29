import { Workflow as TWorkflow } from "../api/workflow/Workflow";

export const WORKFLOW_TITLE_FIELD = "title";

export const WorkflowTitle = (record: TWorkflow): string => {
  return record.title?.toString() || String(record.id);
};
