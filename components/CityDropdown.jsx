import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri - Chinchwad",
  "Patna",
  "Vadodara",
];

export function CityDropdown() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a City" />
      </SelectTrigger>
      <SelectContent>
        {cities.map((city) => {
          return (
            <SelectItem key={city} value={city.toLowerCase()}>
              {city}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
