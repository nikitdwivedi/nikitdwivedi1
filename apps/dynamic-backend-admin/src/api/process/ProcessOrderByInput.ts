import { SortOrder } from "../../util/SortOrder";

export type ProcessOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
