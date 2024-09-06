import { ucwords } from "@/utils/helpers/manipulations/string";

// Single size record
export const sizeResource = (size) => {
  return {
    id: size.sizeId,
    name: ucwords(size.name),
  };
};

// Multiple sizes records
export const sizeCollection = (sizes) => {
  return sizes.map((size) => sizeResource(size));
};
