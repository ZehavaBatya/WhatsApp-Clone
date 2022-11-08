import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

function Sidebar() {
  return (
    <div className="sidebar"> 
        <div className="sidebar__header">
            <Avatar src="https://p1.hiclipart.com/preview/793/504/966/avatar-icon-ninja-samurai-icon-design-red-smile-circle-png-clipart.jpg"/>
            <div className="sidebar__headerRight"></div>
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>  
        </div>
  );
}

export default Sidebar;
