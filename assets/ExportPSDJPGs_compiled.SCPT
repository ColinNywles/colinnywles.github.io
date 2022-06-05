set targetFolderString to "/Volumes/PhotoSSD/WEBSITE_CNywles/finished_images/exports_2022_06_05_18_18/psd/"
--set targetFolderString to "/Volumes/PhotoSSD/WEBSITE_Untitled_washi/finished_images/exports_2022_04_30_21_13/psd"


set targetFolder to POSIX file targetFolderString

tell application "Finder"
	set numberOfFiles to (count of (files in folder targetFolder whose name extension is "psd")) as integer
end tell
--say numberOfFiles

tell application "Finder"
	set target of (make new Finder window) to item targetFolder
end tell
delay 0.05

tell application "Finder" to select (every file in the front Finder window whose name ends with ".psd")
delay 0.05

tell application "Finder"
	activate
end tell
delay 0.05

tell application "System Events" to keystroke "o" using command down
delay (random number from 10 to 15)

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

delay (random number from 10 to 15)

tell application "System Events" to tell process "Adobe Photoshop 2022"
	set frontmost to true
end tell
delay 2

repeat numberOfFiles times

	delay 2

	--tell application "System Events" to click at {159, 12}
	tell application "System Events"
		tell process "Adobe Photoshop 2022"
			try
				click menu bar item "File" of menu bar 1
			end try
		end tell
	end tell
	delay 1
	
	tell application "System Events" to tell process "Adobe Photoshop 2022"
		set frontmost to true
	end tell
	delay 1
	
	--tell application "System Events" to click at {180, 291}
	tell application "System Events"
		tell process "Adobe Photoshop 2022"
			click menu item "Export" of menu "File" of menu bar item "File" of menu bar 1
		end tell
	end tell
	delay 1
	
	tell application "System Events" to tell process "Adobe Photoshop 2022"
		set frontmost to true
	end tell
	delay 1
	
	--tell application "System Events" to click at {549, 360}
	tell application "System Events"
		tell process "Adobe Photoshop 2022"
			click menu item 1 of menu "Export" of menu item "Export" of menu "File" of menu bar item "File" of menu bar 1
		end tell
	end tell
	delay 1
	
	tell application "System Events" to keystroke "g" using {shift down, command down}
	delay 1
	
	tell application "System Events"
		keystroke targetFolderString
	end tell
	delay 1
	
	--tell application "System Events" to click at {1449, 630}
	tell application "System Events"
		tell process "Adobe Photoshop 2022"
			click button "Go" of sheet 1 of window "Save"
		end tell
	end tell
	delay 1
	
	--tell application "System Events" to click at {1922, 1008}
	tell application "System Events"
		tell process "Adobe Photoshop 2022"
			click button "Save" of window "Save"
		end tell
	end tell
	delay 1
	
	tell application "System Events" to tell process "Adobe Photoshop 2022"
		set frontmost to true
	end tell
	delay 1
	
	tell application "System Events" to keystroke "w" using command down
	delay 1

	--tell application "System Events" to click at {1203, 535}
	tell application "System Events"
		tell process "Adobe Photoshop 2022"
			try
				click button "Don’t Save" of window "Adobe Photoshop"
			end try
		end tell
	end tell
	delay 2
	
end repeat

