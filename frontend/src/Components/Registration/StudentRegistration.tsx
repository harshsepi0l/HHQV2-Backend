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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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

const theme = createTheme({
  palette: {
    secondary: {
      main: "#yourColor",
    },
  },
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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!student.student_id) {
      setError("Student ID is required");
      return;
    }

    const payload = {
      student_id: student.student_id,
      name: student.name,
      year: student.year,
      transfer: student.transfer,
    };

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

      await response.json();
      setSuccessMessage('Registration successful!');
      setError(null);
      onRegister(student);
    } catch (error) {
      console.error("Error during API call:", error);
      setError("Failed to register student");
      setSuccessMessage(null);
    }
  };

  const handleCloseSnackbar = () => {
    setError(null);
    setSuccessMessage(null);
  };

  return (
    <ThemeProvider theme={theme}>
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
            label="Transfer Student (Y/N)"
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
          open={!!error || !!successMessage}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <SnackbarContent
            message={
              <div style={{ display: "flex", alignItems: "center" }}>
                {error ? (
                  <>
                    <ErrorIcon style={{ marginRight: "8px" }} color="error" />
                    {error}
                  </>
                ) : (
                  <>
                    <CheckCircleIcon style={{ marginRight: "8px" }} color="success" />
                    {successMessage}
                  </>
                )}
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
    </ThemeProvider>
  );
};

export default StudentRegistration;
