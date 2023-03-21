import SendSharpIcon from "@mui/icons-material/SendSharp";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ContactMe() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      if(!formData.name || !formData.email || !formData.message){
        setFormStatus("Please fill in all required fields");
        console.log('here-2');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setFormStatus("Please enter a valid email address");
        console.log('here-3');
        return;
      }
      const phoneRegex = /^\d{10}$/;
      if (formData.phone && !phoneRegex.test(formData.phone)) {
        setFormStatus("Please enter a valid 10-digit phone number");
        console.log('here-4');
        return;
      }
      const response = await fetch("https://9tbq1ykvn9.execute-api.us-east-1.amazonaws.com/dev/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"id": uuidv4(),"name": formData.name,"email": formData.email, "message": formData.message, phone: formData.phone, subject: formData.subject}),
      });
      if (response.ok) {
        setFormStatus("Message sent successfully!");
        console.log("Message sent successfully!")
      } else {
        setFormStatus("Message is not sent. Please try again.");
        console.log("Message is not sent. Please try again.")
      }
    } catch (error) {
      console.error(error);
      setFormStatus("Error sending message. Please try again.");
    }
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={5} sm={0} xs={0}>
          <div style={{ height: "70vh" }}>
            <SendSharpIcon
              sx={{ width: "50%", height: "50%", margin: "20vh auto 0" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={5} sm={12} lg={6}>
          <div style={{ height: "70vh" }}>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, padding: 5 }}
              >
                {/* {formData.name ? (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    name="fullName"
                    autoComplete="FullName"
                    error
                    helperText="Please Fill in your Full Name"
                  />
                ) : ( */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="FullName"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                {/* {formData.emptyEmail ? (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error
                    helperText="Please Fill in your email"
                  />
                ) : ( */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="subject"
                    label="Subject"
                    name="subject"
                    autoComplete="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    id="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Contact Me
                </Button>
                <p style={{ color: 'red' }}>{formStatus}</p>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
