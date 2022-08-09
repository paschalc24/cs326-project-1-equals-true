## Data Interactions

When the user opens the page, there will be a form to log hours on the left, and a calendar on the right. In the calendar, any days where the user has logged hours will have the option to 
view details of the log from that day. 

The form to log hours will include 7 inputs: 
* Start Time: unix timestamp
* End Time: unix timestamp
* Date: unix timestamp
* Location: string
* Employer: string
* Work Type: string
* Hourly Wage: number

The calendar will be stored as a table of dates. Columns following each of these dates will hold information logged by the user if it exists. If a user ever inputs data for a certain date, 
I will set a flag called "Worked" to be true (default false). This will allow for easy filtering of the table when creating reports.

There will then be a section at the bottom of the page titled "Create Report". In this section there will be a dropdown selection where the User can either choose "Invoice" or "Earnings Report". 
Then there will be a variety of input options. The first will prompt the user to enter their name. Then, there will be two sections where users can choose dates titled "From" and "Until". 
At the right of these labels, there will be a button titled "Complete". When the User hits this button, a text file will be compiled and downloaded to the user's browser titled either "Invoice.txt" 
or "Earnings_Report.txt".

These reports are text files, so I will be able to store old reports as strings in the database. I will store another table in the database that will hold these old reports. The last functionality 
on the page will be a dropdown label titled "Get Past Report" that will have the contents of this table listed.
