module.exports = (req, res) => {
  const apiBaseURL = "https://hhqv2backend.vercel.app/api";
  const endpoints = {
    message: "Welcome to the API Index.",
    links: {
      department: `${apiBaseURL}/department`,
      subject: `${apiBaseURL}/subject`,
      division: `${apiBaseURL}/division`,
      term: `${apiBaseURL}/term`,
      course: `${apiBaseURL}/course`,
      offering: `${apiBaseURL}/offering`,
      student: `${apiBaseURL}/student`,
      level: `${apiBaseURL}/level`,
    },
  };

  res.status(200).json(endpoints);
};
