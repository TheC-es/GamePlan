/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { prisma } from '@/lib/prisma';
import { Reservation } from '@prisma/client';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const times = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

type MatchSlot = {
  court: number;
  day: string;
  time: string;
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
};

function generateSlots(reservations: Reservation[]): MatchSlot[] {
  const slots: MatchSlot[] = [];
  for (let court = 1; court <= 2; court++) {
    for (const day of days.slice(1, 6)) { // Monday to Friday only
      for (const time of times) {
        // filter reservations to ensure only applicable ones included.
        const slotReservations = reservations.filter(
          r => r.court === court && r.day === day && r.time === parseInt(time, 10) && r.sport === 'Volleyball',
        );

        slots.push({
          court,
          day,
          time,
          team1: slotReservations[0]?.team_name || 'Free',
          team2: slotReservations[1]?.team_name || 'Free',
          score1: undefined,
          score2: undefined,
        });
      }
    }
  }
  return slots;
}

export default async function SchedulePage() {
  const reservations = await prisma.reservation.findMany({});
  const slots = generateSlots(reservations);
  const todayName = days[new Date().getDay()];
  const todaySlots = slots.filter(slot => slot.day === todayName);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Volleyball Games for
        {' '}
        {todayName}
      </h1>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[1, 2].map(court => (
          <div
            key={court}
            style={{
              flex: '1 1 500px',
              minWidth: '300px',
              maxWidth: '600px',
            }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
              Court
              {court}
            </h2>
            <table
              border={1}
              cellPadding={8}
              style={{
                width: '100%',
                textAlign: 'center',
                borderCollapse: 'collapse',
              }}
            >
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Team 1</th>
                  <th>Score 1</th>
                  <th>Team 2</th>
                  <th>Score 2</th>
                </tr>
              </thead>
              <tbody>
                {times.map(time => {
                  const slot = todaySlots.find(s => s.court === court && s.time === time);
                  if (!slot) return null;
                  return (
                    <tr key={`${court}-${time}`}>
                      <td>{time}</td>
                      <td>
                        <input
                          type="text"
                          value={slot.team1}
                          readOnly
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={slot.score1 ?? ''}
                          readOnly
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={slot.team2}
                          readOnly
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={slot.score2 ?? ''}
                          readOnly
                          style={{ width: '100%' }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
