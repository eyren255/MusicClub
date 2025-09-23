#!/usr/bin/env python3
"""
Simple HTTP server to serve the Music Club static website
"""

import http.server
import socketserver
import os
import sys

# Change to the directory containing the HTML files
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add headers to disable caching for development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    PORT = 5000
    HOST = '0.0.0.0'
    
    print(f"Starting Music Club server at http://{HOST}:{PORT}")
    print("Server will serve files from the current directory")
    print("Press Ctrl+C to stop the server\n")
    
    try:
        with socketserver.TCPServer((HOST, PORT), MyHTTPRequestHandler) as httpd:
            httpd.allow_reuse_address = True
            print(f"Server running at http://{HOST}:{PORT}")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)