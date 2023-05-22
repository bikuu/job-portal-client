import Card from "../../card/Card";

const JobList = () => {
  return (
    <>
      <div class="ms-2 text-decoration-underline">
        <h4>Latest Jobs</h4>
      </div>
      <div
        class="row row-cols-1 row-cols-md-3 g-4"
        style={{ cursor: "pointer" }}
      >
        <Card />
      </div>
    </>
  );
};

export default JobList;
