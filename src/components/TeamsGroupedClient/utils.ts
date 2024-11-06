export const getBgColorByClientName = (clientName: string): string => {
  let bgColor = "bg-acai-900";

  if (clientName.includes("Galicia")) bgColor = "bg-galicia-900";
  if (clientName.includes("Macro")) bgColor = "bg-macro-900";

  return bgColor;
};
