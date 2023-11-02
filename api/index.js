module.exports = (req, res) => {
  res
    .status(200)
    .send(
      "Welcome to the API Index :/ \n here are all the API Links: \n https://hhqv2backend.vercel.app/api/department \n https://hhqv2backend.vercel.app/api/subject \n https://hhqv2backend.vercel.app/api/division \n https://hhqv2backend.vercel.app/api/term \n https://hhqv2backend.vercel.app/api/course \n https://hhqv2backend.vercel.app/api/offering \n https://hhqv2backend.vercel.app/api/student \n https://hhqv2backend.vercel.app/api/level"
    );
};
