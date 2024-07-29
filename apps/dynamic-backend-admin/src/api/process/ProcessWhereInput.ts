import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProcessWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
};
