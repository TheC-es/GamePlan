/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useState } from 'react';

const sports = ['Volleyball', 'Basketball'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

type Reservation = {
  sport: string;
  court: number;
  day: string;
  time: string;
  name: string;
  phone: string;
};

export default function ReservationPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [formData, setFormData] = useState({
    sport: sports[0],
    court: 1,
    day: days[0],
    time: times[0],
    name: '',
    phone: '',
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if slot is already reserved
    const isReserved = reservations.some(r => r.sport === formData.sport
      && r.court === formData.court
      && r.day === formData.day
      && r.time === formData.time);

    if (isReserved) {
      alert('This time slot is already reserved!');
      return;
    }

    setReservations([...reservations, formData]);
    setSuccess(true);
    setFormData({
      sport: sports[0],
      court: 1,
      day: days[0],
      time: times[0],
      name: '',
      phone: '',
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'court' ? parseInt(value, 10) : value,
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Sports Court Reservation</h1>

      {success && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '10px',
          margin: '10px 0',
          borderRadius: '4px',
          textAlign: 'center',
        }}
        >
          Reservation successful!
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
        <div>
          <label>
            Sport:
          </label>
          <select
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          >
            {sports.map(sport => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Court:</label>
          <select
            name="court"
            value={formData.court}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          >
            <option value={1}>Court 1</option>
            <option value={2}>Court 2</option>
          </select>
        </div>

        <div>
          <label>Day:</label>
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          >
            {days.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Time:</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          >
            {times.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Reserve Court
        </button>
      </form>
    </div>
  );
}
