# [1 == true] - *Time Stamps*

## Sections
1. [Team Overview](#team-overview)
2. [Application Idea](#application-idea)
3. [Functionality](#functionality)

## Team Overview

* Paschal Corrigan
    * GitHub username: `paschalc24`
    
## Application Idea
My mom is a gardener/landscaper and she spends a lot of time at different job sites throughout the week. When it comes time for her to log her hours, she often has to backtrack and create more formal invoices from the notes that she has written down.

I want to create an application that will allow her, and other independent contractors, to easily log their hours and create necessary documents. Users will be able to log their hours to an input, so that this information is stored and can be retrieved whenever it is requested. Then, when a document is desired, the information will be compiled into either an invoice or an earnings report dependent on input from the users. I also want users to be able to view a calendar showing the days and the hours that they have worked. 

## Functionality
When the user opens the page, there will be a form to log hours on the left, and a calendar on the right. In the calendar, any days where the user has logged hours will have the option to view details of the log from that day. 

The form to log hours will include: 
Start Time: unix timestamp
End Time: unix timestamp
Date: unix timestamp
Location: string
Employer: string
Work Type: string
Hourly Wage: number

The calendar will be stored as a table of dates. Columns following each of these dates will hold information logged by the user if it exists. If a user ever inputs data for a certain date, I will set a flag called "Worked" to be true (default false). This will allow for easy filtering of the table when creating reports.

There will then be a section at the bottom of the page titled "Create Report". In this section there will be a dropdown selection where the User can either choose "Invoice" or "Earnings Report". Then there will be a variety of input options. The first will prompt the user to enter their name. Then, there will  be two sections where users can choose dates titled "From" and "Until". At the right of these labels, there will be a button titled "Complete". When the User hits this button, a text file will be compiled and downloaded to the user's browser titled either "Invoice.txt" or "Earnings_Report.txt".

The Invoice will include a short message greeting the employer and will list the dates worked within the time period specified. Below each of these dates, the start times, end times, locations, and daily totals will appear, where daily totals are the amount earned each day (hourly * time worked). At the bottom of this text file there will be a section that says "Amount Due" beside the sum of the daily totals.

The Earnings Report will be similar, with a short message at the top including the name of the user and the dates covered. The dates will then be listed with the location, employer, hourly wage, and daily totals underneath. At the bottom of this file there will be a section titled "Amount Earned" beside the sum of the daily totals.

These reports are text files, so I will be able to store old reports as strings in the database. I will store another table in the database that will hold these old reports. The last functionality on the page will be a dropdown label titled "Get Past Report" that will have the contents of this table listed.

This app will be for one person until I am able to implement a user login. At that point I will be able to store peoples calendars in the database in an additional table and map them to user logins.

Four Types of Data That Arent User Data:
Date Table - object
Calendar Table - object
Reports - string
Amount Earned/Amount Due - number
Worked Flag - boolean