import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
 
import ItemLinkCustome from '../components/list/listNavbar/ItemLinkCustome';


export default function ListDrawer() {
    return (
        <div  >
            <List
                sx={{ width: '100%' }}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" disableSticky
                        sx={{
                            color: "text.primary",
                            fontSize: "16px",
                            bgcolor: "transparent",
                        }}>
                        Widget
                    </ListSubheader>
                }
                component="nav">
                <ItemLinkCustome title={"Intro"} to="/admin/intro" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-arcs" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="1" />
                        <path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" />
                        <path d="M3 12a9 9 0 1 0 9 -9" />
                    </svg>
                } />
                <ItemLinkCustome title={"About"} to="/admin/about" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
                        <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                        <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                    </svg>
                } />
                <ItemLinkCustome title={"Product"} to="/admin/product" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-desktop-analytics" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="4" width="18" height="12" rx="1" />
                        <path d="M7 20h10" />
                        <path d="M9 16v4" />
                        <path d="M15 16v4" />
                        <path d="M9 12v-4" />
                        <path d="M12 12v-1" />
                        <path d="M15 12v-2" />
                        <path d="M12 12v-1" />
                    </svg>
                } />
                <ItemLinkCustome title={"Contact"} to="/admin/contact" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-desktop-analytics" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="4" width="18" height="12" rx="1" />
                        <path d="M7 20h10" />
                        <path d="M9 16v4" />
                        <path d="M15 16v4" />
                        <path d="M9 12v-4" />
                        <path d="M12 12v-1" />
                        <path d="M15 12v-2" />
                        <path d="M12 12v-1" />
                    </svg>
                } />
            </List>
       
        </div>

    );
}