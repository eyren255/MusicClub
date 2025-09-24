# Music Club Website

## Overview
A music club website for browsing and displaying song sheet music images. Features a collection of songs with images in Myanmar language, search functionality, favorites, and responsive design.

## Project Structure
- Static HTML/CSS/JavaScript frontend application
- Python HTTP server for serving files in development
- Collection of song images in "Sa Yar Ga Toe Pwell" folder
- Multiple learning resource pages

## Key Files
- `index.html` - Redirects to main menu
- `mainmenu.html` - Home page with navigation
- `app.html` - Main song browser application
- `learn.html` - Music learning resources hub
- `script.js` - Main application logic and song data
- `styles.css` - Complete styling and responsive design
- `server.py` - Development HTTP server

## Features
- **Enhanced Navigation**: Bottom navigation bar with intuitive primary controls
- **Smart UI**: Floating zoom controls and organized more menu
- Song image browser with smooth navigation
- Search functionality (by title or number)
- Favorites and recently viewed songs
- **Advanced Touch Support**: Swipe gestures for song navigation + haptic feedback
- **Mobile-First Design**: Optimized for both desktop and mobile use
- Multiple collections support
- Keyboard shortcuts
- Current song info display in header

## Recent Changes (Sept 24, 2025)
- **MAJOR NAVIGATION REVAMP**: Completely redesigned app.html navigation for better usability
- **Bottom Navigation Bar**: Added mobile-friendly bottom nav with primary actions (Previous, Favorite, Next, Random, Fullscreen)
- **Simplified Top Header**: Clean header showing current song info and collection
- **Floating Zoom Controls**: Smart zoom controls that appear on hover/touch
- **More Menu**: Organized secondary actions (Home, Share, Help, Quick Nav) in dropdown menu
- **Mobile Enhancements**: Added swipe gestures for song navigation and haptic feedback
- **Responsive Design**: Mobile-first approach with optimized touch targets
- Set up Python HTTP server for Replit environment
- Configured workflow to run on port 5000
- Added deployment configuration for autoscale

## Technology Stack
- Frontend: HTML5, CSS3, JavaScript (vanilla)
- Server: Python 3.11 HTTP server
- Deployment: Replit autoscale configuration

## Development
- Server runs on port 5000 with cache-disabled headers for development
- Static files served directly by Python HTTP server
- No build process required

## User Preferences
- Project is ready for immediate use
- All static assets included
- Cross-platform compatible