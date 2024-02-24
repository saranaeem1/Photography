import React from "react";
import "./BookingHistoryPhotographer.css"; // Import the CSS file for styling

const BookingHistory = () => {
  const bookingHistory = [
    {
      id: 1,
      username: "JohnDoe",
      email: "john@example.com",
      service: "Wedding Photography",
      charges: "$500",
      dateTime: "2024-02-20 10:00 AM",
    },
    {
      id: 2,
      username: "JaneDoe",
      email: "jane@example.com",
      service: "Portrait Photography",
      charges: "$300",
      dateTime: "2024-02-21 2:00 PM",
    },
  ];

  return (
    <div className="booking-history">
      <h2>Booking History</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
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
              <td>{booking.service}</td>
              <td>{booking.charges}</td>
              <td>{booking.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
