import { ucwords } from "@/utils/helpers/manipulations/string";

export const baseResource = (base) => {
  return {
    id: base.baseId,
    name: ucwords(base.name),
  };
};

export const baseCollection = (bases) => {
  return bases.map((base) => baseResource(base));
};
