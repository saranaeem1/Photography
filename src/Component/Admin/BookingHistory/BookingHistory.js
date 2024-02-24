import React from "react";
import Navbar from "../Navbar/Navbar";
import "./BookingHistory.css";
const Bookings = () => {
  const bookingHistory = [
    {
      id: 1,
      username: "JohnDoe",
      email: "john@example.com",
      photographerName: "Photographer 1",
      service: "Wedding Photography",
      charges: "$500",
      dateTime: "2024-02-20 10:00 AM",
    },
    {
      id: 2,
      username: "JaneDoe",
      email: "jane@example.com",
      photographerName: "Photographer 2",
      service: "Portrait Photography",
      charges: "$300",
      dateTime: "2024-02-21 2:00 PM",
    },
  ];

    return (
      <>
        <Navbar />
        <div className="bookingHistoryTable">
          <h2>Booking History</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Photographer Name</th>
                <th>Service</th>
                <th>Charges</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {bookingHistory.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.username}</td>
                  <td>{booking.email}</td>
                  <td>{booking.photographerName}</td>
                  <td>{booking.service}</td>
                  <td>{booking.charges}</td>
                  <td>{booking.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Bookings;
