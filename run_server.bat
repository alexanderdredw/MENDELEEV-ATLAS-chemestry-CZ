@echo off
echo Starting Anatomy Atlas Local Server...
echo This is required for features like Google Translate to work correctly.
echo.
echo Opening http://localhost:8000 in your browser...
start "" "http://localhost:8000"
echo.
echo Press Ctrl+C to stop the server.
python server.py
pause
