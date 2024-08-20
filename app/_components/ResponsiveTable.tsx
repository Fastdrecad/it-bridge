import { FaCheck } from "react-icons/fa6";
import { calendarCourses } from "../config";
import { FaTimes } from "react-icons/fa";

const ResponsiveTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-purple-700 rounded-lg shadow-lg overflow-hidden">
        <thead className="hidden md:table-header-group">
          <tr
            className="bg-purple-800 text-white text-left"
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
              className={`border-b ${
                index % 2 === 0 ? "bg-purple-100" : "bg-white"
              } md:table-row flex flex-col w-full ${
                course.status === "Popunjeno" ? "brightness-[85%]" : ""
              }`}
              style={
                index === calendarCourses.length - 1
                  ? {
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px"
                    }
                  : {}
              }
              // make flex flex-col w-full on small devices and as it is for larger devices
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
      <div className="text-white mt-16">
        <h6>
          **Početak obuke može biti pomeren usled nepredviđenih okolnosti.
        </h6>
      </div>
    </div>
  );
};

export default ResponsiveTable;
