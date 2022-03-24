# FlightBookingPlatform_PAD
2nd PAD project


Allows users to buy or search for flight tickets, to review the services or contact the company for further information.
Our platform provides an extra benefit consisting in direct links to complete forms (for Covid, Visa etc.) and to the documentation related to the restrictions of entering a foreign country.
Users will be able to connect to the platform via a web application (React).

Client:
The web application where the users will have the option to register, view flight, book flights, place reviewes and contact us for other information. 
After choosing the date, time and destination for their flight, the users will be redirected to an external http page (if necessary for external flights) where to complete the forms needed.


1st Server:
Is a Java application built with the help of the Spring framework. It will provide the client applications with REST endpoints through which registration, viewing and submission services are exposed.
It will also handle all user management actions (register, login) but will pass the responsibility of order fulfillment (redirect to a HTTP web page with the completion of the forms) to another server, connected to the same kafka broker.


2nd Server:
Is a small microservice running node, listening to the kafka topic the gateway server pushes to. It will process the bookings, call external APIs and save it to in database.
When booking a flight, the 2nd server will automatically redirect the user to an http page to complete the form needed to enter the desired country. This processing server will add all the completed documents in a database - mongodb.





Team Members:			Tripa Bianca-Cristina,
				Tuhasu Adina,
				Urucu Cristina-Andreea,
				Voiculescu Daniela,
