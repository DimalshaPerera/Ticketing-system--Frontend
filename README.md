# Real-Time Ticketing System Simulation


![Screenshot 2024-12-12 053719](https://github.com/user-attachments/assets/06107493-e111-4be8-82ba-1e6dd93832cf)

## Overview
This project is a simulation of a real-time ticketing system that demonstrates ticket management using a Spring Boot backend and a React frontend. The application showcases real-time ticket management simulation with features such as multithreading, synchronization, and serialization.

## Technologies Used
- **Backend**: Spring Boot
- **Frontend**: React

## Prerequisites
Before running the application, ensure you have the following software installed on your machine:
- **Java Development Kit**: Version 11 or higher
- **Node.js**: Version 14 or higher
- **Maven**: For building the Spring Boot application
- **MySQL**: For database management

## How to Run the Application

1. **Clone the Repositories**:
   Clone the backend and frontend repositories using the following commands:
   ```bash
   git clone https://github.com/DimalshaPerera/ticketingsystem
   git clone https://github.com/DimalshaPerera/Frontend

1. **Start the Springboot Backend**:
   Start the backend
1. **Install the following packages and Start the front end**:
   Install these:
   ```bash
   npm install axios
   npm install react-icons

## Explanation of UI Controls
  

The user interface of the real-time ticketing system is designed to provide an intuitive experience for managing tickets efficiently. Below are the key components and their functionalities:

- **Control Panel**: 
  - This panel consists of **Start** and **Stop** buttons that allow you to control the operation of the ticketing system. 
  - Clicking **Start** initializes the ticket management process, while **Stop** halts any ongoing operations.

- **TConfig Settings**: 
  - This feature allows users to enter configuration values or poll values from the backend.
  - Users can input parameters such as ticket limits, polling intervals, and other settings that affect how the system operates.

- **System Logs**: 
  - The logs provide real-time feedback on system operations using periodic polling.
  - Users can view logs that detail actions taken, errors encountered, and other important notifications that help in monitoring system performance.

- **Available Tickets Display**: 
  - This section shows the current availability status of tickets in the pool.
  - Users can see how many tickets are currently available, helping them manage requests effectively.


## Usage Instructions

### How to Configure and Start the System

Before running the application, you need to configure the database settings in the `application.properties` file located in the backend directory. Update it with your MySQL database credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ticketpool
spring.datasource.username=ticketuser
spring.datasource.password=abc123

