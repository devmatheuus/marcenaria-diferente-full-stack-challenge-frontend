import { format, parseISO } from "date-fns";

const formatDate = (date: string): string => {
  const dateObject: Date = parseISO(date);
  const formattedDate: string = format(dateObject, "dd/MM/yyyy");

  return formattedDate;
};

export default formatDate;
