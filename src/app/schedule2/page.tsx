/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
// NOTE: This file no longer uses the client side.
import { prisma } from '@/lib/prisma';
import React from 'react';
import { Reservation } from '@prisma/client';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

type MatchSlot = {
  court: number;
  day: string;
  time: string;
  team1: string;
  team2: string;
};

// replaces old generateInitialSlots function.
function generateSchedule(reservations: Reservation[]): MatchSlot[] {
  const slots: MatchSlot[] = [];
  for (let court = 1; court <= 2; court++) {
    for (const day of days) {
      for (const time of times) {
        // filter reservations to ensure only applicable ones are included.
        const slotReservations = reservations.filter(
          r => r.court === court && r.day === day && r.time === parseInt(time, 10) && r.sport === 'Volleyball',
        );

        slots.push({
          court,
          day,
          time,
          // use either the reservation's team name or write Free if there is no reservation.
          team1: slotReservations[0]?.team_name || 'Free',
          team2: slotReservations[1]?.team_name || 'Free',
        });
      }
    }
  }
  return slots;
}

// replaces old VolleyballSchedulePage constant.
// This is necessary to allow database requests.
export default async function VolleyballSchedulePage() {
  const reservations = await prisma.reservation.findMany();
  const slots = generateSchedule(reservations);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Volleyball Court Schedule</h1>
      {Array.from({ length: 2 }, (_, i) => i + 1).map(court => (
        <div key={court} style={{ marginBottom: '3rem' }}>
          <h2>
            Court {court}
          </h2>
          <table border={1} cellPadding={8} style={{ width: '100%', textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Time</th>
                {days.map(day => (
                  <th key={day} colSpan={2}>{day}</th>
                ))}
              </tr>
              <tr>
                <td />
                {days.map(day => (
                  <React.Fragment key={day}>
                    <td>Team 1</td>
                    <td>Team 2</td>
                  </React.Fragment>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map(time => (
                <tr key={time}>
                  <td>{time}</td>
                  {days.map(day => {
                    const slot = slots.find(
                      s => s.court === court && s.day === day && s.time === time,
                    );
                    return (
                      <React.Fragment key={`${court}-${day}-${time}`}>
                        <td>
                          <input
                            type="text"
                            value={slot?.team1 || ''}
                            // inputs are now read only so that users do not change text for reservations.
                            readOnly
                            style={{ width: '100%' }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={slot?.team2 || ''}
                            readOnly
                            style={{ width: '100%' }}
                          />
                        </td>
                      </React.Fragment>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
