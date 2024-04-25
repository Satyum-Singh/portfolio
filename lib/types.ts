import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];
export type ActiveSectionContextType = {
  active: SectionName;
  setActive: React.Dispatch<React.SetStateAction<SectionName>>;
  timeofLastClick: number;
  setTimeofLastClick: React.Dispatch<React.SetStateAction<number>>;
};