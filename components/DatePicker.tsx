import * as React from "react";
import { Dayjs } from "dayjs";
import Box from "@mui/material/Box";
import { IoIosArrowDown } from "react-icons/io";
import { TbCalendar } from "react-icons/tb";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";

export default function CustomDateRangeInputs() {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        label="Advanced keyboard"
        value={value}
        mask="__/__"
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <div
            style={{ border: "1px solid #E1E1E1" }}
            className="border-1 rounded-md bg-white sm:h-12 h-8 flex justify-between items-center md:px-4 px-2 "
          >
            <TbCalendar />
            <input
              className="text-center w-24 bg-transparent focus:outline-none "
              ref={startProps.inputRef as React.Ref<HTMLInputElement>}
              {...startProps.inputProps}
              placeholder="1/1/2022"
            />

            <input
              className="w-24  bg-transparent focus:outline-none text-center"
              ref={endProps.inputRef as React.Ref<HTMLInputElement>}
              {...endProps.inputProps}
              placeholder="1/1/2023"
            />
            <IoIosArrowDown />
          </div>
        )}
      />
    </LocalizationProvider>
  );
}

// const newLife = 0;
// export default newLife;
