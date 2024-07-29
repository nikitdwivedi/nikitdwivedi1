import { SortOrder } from "../../util/SortOrder";

export type WorkflowOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
