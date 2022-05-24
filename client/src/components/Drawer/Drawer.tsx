import * as React from "react";
import styles from "./Drawer.module.scss";

//Components Import
import PrimarySearchAppBar from "../Navbar/Navbar";

//Images
import bugTracker from "../../Assets/bugTracker.png";



// Bootstrap Imports
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ActionAreaCard from "../Card/Card";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";
import IconButton from "@mui/material/IconButton";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


const drawerWidth = 300;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div>
        <img src={bugTracker} alt="logo" className={styles.drawer__logo} />
        <h3>Welcome name</h3>
      </div> 
 
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon style={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard Home" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PersonAddIcon style={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="Manage Role Assignment" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon style={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="Manage Project Users" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon style={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="My Projects" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIndIcon style={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="My Tickets" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon style={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItemButton>
        {/* {['Dashboard Home', 'Manage Role Assignment', 'Manage Project Users', 'My Projects', 'My Tickets', 'User Profile'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 6 === 0 ? <HomeIcon /> : <PersonAddIcon /> : <PeopleIcon /> : <AssignmentIcon /> }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
       <PrimarySearchAppBar />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}
