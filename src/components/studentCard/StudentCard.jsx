import "./StudentCard.css";
import PropTypes from "prop-types";

function StudentCard({ name, grade, average }) {
  const status = average >= 7 ? "Approved!" : "Failed!";
  const statusClass = average >= 7 ? "approved" : "failed";

  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Nota: {grade}</p>
      <p>Media: {average}</p>
      <p className={statusClass}>Status: {status}</p>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  average: PropTypes.number.isRequired,
};

export default StudentCard;
