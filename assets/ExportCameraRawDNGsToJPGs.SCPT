insert_path_here
-- set targetFolder to POSIX file "/Volumes/PhotoSSD/WEBSITE_Cloe/import"

tell application "Finder"
    set target of (make new Finder window) to item targetFolder
end tell
delay 0.05

tell application "Finder" to select (every file in the front Finder window whose name ends with ".dng")
delay 0.05

tell application "Finder"
    activate
end tell
delay 0.05

tell application "System Events" to keystroke "o" using command down
delay (random number from 4 to 5)

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
delay 3


tell application "System Events" to tell process "Adobe Photoshop 2022"
	set frontmost to true
end tell
delay 1

tell application "System Events" to keystroke "a" using command down
delay 1


tell application "System Events" to tell process "Adobe Photoshop 2022"
    set frontmost to true

    --click (every button of window 1 whose title is "Save Images...")
    delay 0.1

    keystroke "s" using command down
    delay 5

    click pop up button 1 of window 1
    key code 125
    delay 0.05
    key code 125
    delay 0.05
    key code 125
    delay 0.05
    key code 125
    delay 0.05
    key code 125
    delay 0.05
    key code 125
    delay 0.05
    key code 36
    delay 0.1

    click (every button of window 1 whose title is "Save")
    delay 0.2

    click (every button of window 1 whose title is "Done")
    delay 1

end tell
