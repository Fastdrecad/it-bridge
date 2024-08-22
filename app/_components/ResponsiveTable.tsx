import { calendarCourses } from "../config";
import { FaTimes } from "react-icons/fa";

const ResponsiveTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="border border-gray-300 rounded-2xl overflow-hidden">
        <table className="min-w-full text-[#15103E]  ">
          <thead className="hidden md:table-header-group border-b border-gray-300">
            <tr
              className="bg-[#cfe3a0] text-left"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
              }}
            >
              <th className="py-3 px-6">Obuka</th>
              <th className="py-3 px-6">Lokacija</th>
              <th className="py-3 px-6">Datum</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {calendarCourses.map((course, index) => (
              <tr
                key={index}
                className={`border-b text-[#15103E] ${
                  index % 2 === 0 ? "bg-[#f5f9ec]" : "bg-[#fcfdfc]"
                } md:table-row flex flex-col w-full ${
                  course.status === "Popunjeno" ? "brightness-[60%]" : ""
                }`}
                style={
                  index === calendarCourses.length - 1
                    ? {
                        borderBottomLeftRadius: "1rem",
                        borderBottomRightRadius: "1rem"
                      }
                    : {}
                }
              >
                <td className="py-3 px-6">{course.name}</td>
                <td className="py-3 px-6">{course.location}</td>
                <td className="py-3 px-6">{course.date}</td>
                <td className="py-3 px-6 flex items-center">
                  {course.status}
                  {course.status === "Popunjeno" && (
                    <FaTimes className="ml-2 text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-white mt-10">
        <h6>
          **Početak obuke može biti pomeren usled nepredviđenih okolnosti.
        </h6>
      </div>
    </div>
  );
};

export default ResponsiveTable;
