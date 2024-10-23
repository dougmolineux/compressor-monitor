# Compressor Monitor
![Alt text](./compressor-monitor-logo.webp)
_Compressor Monitor_ is a Node.js-based system for generating, storing, and visualizing metrics from industrial gas compressors. The system generates realistic metrics such as temperature, vibration levels, and pressure, with an aim to provide insights into compressor health and efficiency.

The project is divided into two main components:
- **Server**: A backend that generates and stores compressor metrics in CSV format.
- **Client**: A frontend dashboard that visualizes the data through charts and a map of compressors across the mid-continent U.S.

## Project Structure

compressor-monitor/ 
    server/ # Backend code responsible for data generation and storage 
        generateMetrics.js │ 
    client/ # Frontend code for visualizing metrics and compressor locations           
        dashboard.js
        index.html

## Features
- **CSV Generator**: Randomly generates compressor metrics, such as engine temperature, vibration levels (in multiple axes), pressure, RPM, and runtime hours.
- **Real-time Visualization**: A future enhancement that will visualize compressor data through interactive charts and graphs.
- **Compressor Map**: A planned feature to display compressor locations across the mid-continent U.S. using open-source mapping technology.

## Future Features / Wishlist
- **Dashboard with Graphs**: The client will feature an interactive dashboard to view compressor metrics over time. It will have graphs for temperature, vibration, and pressure, providing real-time insights into compressor health.
- **Compressor Map**: The frontend will also include a map displaying the locations of compressors in the mid-continent U.S., using **Leaflet.js**—a free, open-source JavaScript library for maps.
- **Alerts & Notifications**: Set up alerts for when critical metrics (e.g., temperature, pressure) exceed safe operating ranges.
- **Historical Data Analysis**: The ability to analyze historical data for predictive maintenance and trend analysis.
- **User Authentication**: Add user roles for engineers and managers, controlling access to sensitive data.
- **API Integration**: A REST API to send/receive real-time compressor data, with the option to interface with SCADA systems.
- **AI-Based Alert Prediction**: Implement AI-based system that analyzes incoming metrics and predicts which compressor is most likely to alert or alarm next. This feature will allow for proactive maintenance by identifying potential issues before they occur.
- **Historical Data Analysis**: Allow users to query historical data for compressors, compare performance trends, and generate reports on metrics over time.
- **User Alerts**: Enable real-time alerts and notifications when a compressor reaches critical thresholds for temperature, vibration, pressure, or other metrics.

## Technologies Used
- **Node.js**: For the backend, responsible for generating and storing compressor metrics.
- **CSV**: Data format used for storing compressor metrics.
- **Leaflet.js**: Open-source mapping library for displaying compressor locations on the client side.
- **D3.js** or **Chart.js**: For building the graphs and data visualization in the frontend dashboard.
- **Express.js**: Optionally for setting up a server to serve the frontend and expose APIs.

## How to Run

### Server
1. Navigate to the `server/` folder.
2. Run the command to generate 1,000 compressor metric entries:
   ```bash
   node generateMetrics.js
