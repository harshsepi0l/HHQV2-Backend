import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";

type StudentData = {
  student_id: string;
  name: string;
  year: string;
  transfer: string;
};

interface StudentRegistrationProps {
  onRegister: (student: StudentData) => void;
}

// Define your theme (if customizing)
const theme = createTheme({
  palette: {
    // Define your palette here
    secondary: {
      main: "#yourColor", // Replace with your desired color
    },
  },
  // ...other theme customizations
});

const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  "& .MuiTextField-root": {
    margin: theme.spacing(1, 0),
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const StudentRegistration: React.FC<StudentRegistrationProps> = ({
  onRegister,
}) => {
  const [student, setStudent] = useState<StudentData>({
    student_id: "",
    name: "",
    year: "",
    transfer: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if student ID is provided
    if (!student.student_id) {
      setError("Student ID is required");
      return;
    }

    // Prepare the data to be sent
    const payload = {
      student_id: student.student_id,
      name: student.name,
      year: student.year,
      transfer: student.transfer,
    };

    // API endpoint
    const apiEndpoint = "https://hhqv2backend.vercel.app/api/student";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      console.log("Payload being sent:", payload); // Log the payload

      // Handle success - perform actions after successful registration
      setError(null);
      onRegister(student);
    } catch (error) {
      console.error("Error during API call:", error);
      setError("Failed to register student");
    }
  };

  const handleCloseSnackbar = () => {
    setError(null);
  };

  return (
    <StyledPaper>
      <StyledAvatar>
        <PeopleAltIcon />
      </StyledAvatar>
      <Typography component="h1" variant="h5">
        Student Registration
      </Typography>
      <FormContainer onSubmit={handleSubmit}>
        <TextField
          label="Student ID"
          name="student_id"
          value={student.student_id}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Graduation Year"
          name="year"
          value={student.year}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Transfer Student (Y/1)"
          name="transfer"
          value={student.transfer}
          onChange={handleChange}
          fullWidth
          inputProps={{ maxLength: 1 }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </FormContainer>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <SnackbarContent
          message={
            <div style={{ display: "flex", alignItems: "center" }}>
              <ErrorIcon style={{ marginRight: "8px" }} color="error" />
              {error}
            </div>
          }
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Snackbar>
    </StyledPaper>
  );
};

const ThemedStudentRegistration: React.FC<StudentRegistrationProps> = (
  props
) => {
  return (
    <ThemeProvider theme={theme}>
      <StudentRegistration {...props} />
    </ThemeProvider>
  );
};

export default ThemedStudentRegistration;
