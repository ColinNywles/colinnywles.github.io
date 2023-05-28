insert_path_here
--set targetFolder to POSIX file "/Volumes/PhotoSSD/WEBSITE_Cloe/import"

tell application "Finder"
    set target of (make new Finder window) to item targetFolder
end tell
delay 0.05

tell application "Finder" to select (every file in the front Finder window whose name ends with insert_file_ext_here)
delay 0.05

tell application "Finder"
    activate
end tell

tell application "System Events" to keystroke "o" using command down
delay 3

--to get indentifier use command shift 4 to get coordinates 
--run: tell application "System Events" to click at {x, y}
--this will click the button as well as return the object indentifier, like the one below
--button "Open" of window 1 of application process "Finder" of application "System Events"
tell application "System Events"
	tell process "Finder"
		try
			click button "Open" of window 1
		end try
	end tell
end tell
delay 10

tell application "System Events" to tell process "Adobe Photoshop 2022"
	set frontmost to true
end tell
delay 1

tell application "System Events" to keystroke "1" using command down
delay 1

tell application "System Events" to keystroke "a" using command down
delay 1

tell application "System Events" to keystroke "u" using command down
delay (random number from 4 to 5)


tell application "System Events" to tell process "Adobe Photoshop 2022"
set frontmost to true
delay 5
-- get description of every UI element of front window
-- get properties of every UI element of front window whose title is "Done"
click (every button of window 1 whose title is "Done")
end tell
