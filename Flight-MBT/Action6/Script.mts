﻿' Click the Trashcan icon to delete whatever order has been selected
'This action must start after a Search Order has been completed.

WpfWindow("Micro Focus MyFlight Sample").WpfButton("WpfButton").Click @@ hightlight id_;_2058186184_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Notification").WinButton("Yes").Click @@ hightlight id_;_2753606_;_script infofile_;_ZIP::ssf2.xml_;_

Wait 2 ' The Exist statement below seems to find a little box that exists if we run too fast - so the Wait is necessary
' Wait for Deleted message to appear (about 3-4 seconds) 
If WpfWindow("Micro Focus MyFlight Sample").WpfObject("OrderDeletedMessage").Exist (4) Then
	WpfWindow("Micro Focus MyFlight Sample").WpfObject("OrderDeletedMessage").Output CheckPoint("OrderDeletedNumber") @@ hightlight id_;_2137223792_;_script infofile_;_ZIP::ssf3.xml_;_
End  If
' Flight app ends on BOOK FLIGHT screen with FIND FLIGHTS button available
