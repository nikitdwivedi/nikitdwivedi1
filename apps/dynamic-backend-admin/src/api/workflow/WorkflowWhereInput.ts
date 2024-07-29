import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WorkflowWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
};
