import React from 'react';
import { Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from "../../Layout/Layout";

function Logsign() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div style={{ height: "110vh", margin: "0.1rem", padding: "5rem" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: '4rem ', width: "40vw", height: "85vh", margin: "0rem 0rem 5rem 3rem", backgroundImage: "linear-gradient(#032174,#2c7da0,#61a5c2,#82eefd)", color: "#151e3d", boxShadow: "4px 4px 4px 4px #151e3d" }}>
              <img style={{ borderRadius: "1rem", width: "30vw", marginLeft: "1rem", height: "40vh" }} src="https://penji.co/wp-content/uploads/2023/11/cover-image-chatgpt-business-ideas-1200x720.jpg" alt="image" />
              <div style={{ marginTop: "1rem" }}>
                <h2 className='text-center'>For Businesses</h2>
              </div>
              <div>
                <h4 className='text-center'>Form groups with small businesses and a group of developers to increse productivity
                </h4>
              </div>
              <div className='text-center'>
                <Button style={{ width: "10vw", height: "6vh", borderRadius: "2rem", backgroundColor: "#151e3d" }} className='button' variant='contained' onClick={() => navigate("/signupbuis")}>
                  Join Us
                </Button>
              </div>

            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: '4rem ', width: "40vw", height: "85vh", margin: "0rem 0rem 5rem 3rem", backgroundImage: "linear-gradient(#502380,#3e2f84,#795f80,#fff0f5)", color: "#ffff", boxShadow: "4px 4px 4px 4px #301934" }}>
              <img style={{ borderRadius: "1rem", width: "30vw", marginLeft: "1rem", height: "40vh" }} src="https://teaching.uic.edu/wp-content/uploads/sites/683/2021/06/GroupWork-copy.png" alt="image" />
              <div style={{ margin: "1rem" }}>
                <h2 className='text-center'>For Normal Users</h2>
              </div>
              <div className='text-center'>
                <div>
                  <h4 className='text-center'>Form groups with small businesses and a group of developers to increse productivity
                  </h4>
                </div>
                <Button style={{ width: "10vw", height: "6vh", borderRadius: "2rem", backgroundColor: "#301934" }} className='button' variant='contained' onClick={() => navigate("/signup")}>
                  Join Us
                </Button>
              </div>

            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export default Logsign;
