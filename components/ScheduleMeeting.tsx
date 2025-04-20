import React, { useState } from "react";
import { AppointmentData } from "@/types";

interface ScheduleMeetingProps {
  onDateTimeSelected: (appointment: AppointmentData) => void;
}

const times = [
  "1:00 pm",
  "1:15 pm",
  "1:30 pm",
  "1:45 pm",
  "2:00 pm",
  "2:15 pm",
  "2:30 pm"
];

const ScheduleMeeting: React.FC<ScheduleMeetingProps> = ({
  onDateTimeSelected
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    setSelectedTime("");
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
    onDateTimeSelected({ date: selectedDate, time });
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
        Select date:
      </label>
      <input
        type="date"
        name="date"
        id="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <div className="mt-4">
        <div className="font-bold">Choose a time:</div>
        {selectedDate &&
          times.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeChange(time)}
              className={`mt-2 px-4 py-2 rounded-md text-sm font-medium ${
                selectedTime === time
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black border"
              }`}
            >
              {time}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ScheduleMeeting;
