import Overview from "../overview/Overview";
import JobDetails from "./jobDetail/JobDetails";
import JobList from "./jobList/JobList";

const Middle = () => {
  return (
    <div class="border border-success border-opacity-25 rounded w-100 mt-sm-2  ms-2 me-2">
      {/* <JobList /> */}
      {/* <JobDetails /> */}
      <Overview />
    </div>
  );
};

export default Middle;
