import React from "react";

interface CourseSchedule {
  participants: string;
  location: string;
  schedule: string;
  duration: string;
  price?: string;
}

interface CourseScheduleTableProps {
  schedules: CourseSchedule[];
}

const CourseScheduleTable: React.FC<CourseScheduleTableProps> = ({
  schedules
}) => {
  const hasPriceColumn = schedules.some((schedule) => !!schedule.price);

  return (
    <div className="overflow-x-auto">
      <div className="border border-gray-300 rounded-2xl overflow-hidden hidden md:block">
        <table className="min-w-full text-[#15103E]">
          <thead className="border-b border-gray-300">
            <tr
              className="bg-[#cfe3a0] text-left"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
              }}
            >
              <th className="py-3 px-6">Broj polaznika</th>
              <th className="py-3 px-6">Mesto</th>
              <th className="py-3 px-6">Termin</th>
              <th className="py-3 px-6">Ukupno trajanje</th>
              {hasPriceColumn && <th className="py-3 px-6">Cena</th>}
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule, index) => (
              <tr
                key={index}
                className={`${
                  index === schedules.length - 1 ? "" : "border-b"
                } text-[#15103E] ${
                  index % 2 === 0 ? "bg-[#f2f6e7]" : "bg-[#fcfdfc]"
                } md:table-row flex flex-col w-full`}
                style={
                  index === schedules.length - 1
                    ? {
                        borderBottomLeftRadius: "1rem",
                        borderBottomRightRadius: "1rem"
                      }
                    : {}
                }
              >
                <td className="py-3 px-6">{schedule.participants}</td>
                <td className="py-3 px-6">{schedule.location}</td>
                <td className="py-3 px-6">{schedule.schedule}</td>
                <td className="py-3 px-6">{schedule.duration}</td>
                {hasPriceColumn && (
                  <td className="py-3 px-6">{schedule.price || "N/A"}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Stacked Layout for Mobile */}
      <div className="md:hidden">
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg mb-4 "
          >
            <div className="p-4 bg-[#cfe3a0] rounded-t-lg">
              <strong>Broj polaznika: </strong>
              {schedule.participants}
            </div>
            <div className="p-4">
              <strong>Mesto: </strong>
              {schedule.location}
            </div>
            <div className="p-4 bg-[#cfe3a0]">
              <strong>Termin: </strong>
              {schedule.schedule}
            </div>
            <div className="p-4">
              <strong>Ukupno trajanje: </strong>
              {schedule.duration}
            </div>
            {hasPriceColumn && (
              <div className="p-4 bg-[#cfe3a0] rounded-b-lg">
                <strong>Cena: </strong>
                {schedule.price || "N/A"}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseScheduleTable;
