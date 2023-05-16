import { format, formatISO } from "date-fns";

import type { FC } from "react";

export interface DateProps {
  date: Date;
}

const Date: FC<DateProps> = ({ date }) => {
  return (
    <time dateTime={formatISO(date)}>
      <span className="text-gray-400">{format(date, "LLLL d, yyyy")}</span>
    </time>
  );
};

export default Date;
