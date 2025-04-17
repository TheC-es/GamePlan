'use client';

import React, { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

type MatchSlot = {
  court: number;
  day: string;
  time: string;
  team1: string;
  team2: string;
};

const generateInitialSlots = (): MatchSlot[] => {
  const slots: MatchSlot[] = [];
  for (let court = 1; court <= 2; court++) {
    for (const day of days) {
      for (const time of times) {
        slots.push({
          court,
          day,
          time,
          team1: 'Free',
          team2: 'Free',
        });
      }
    }
  }
  return slots;
};

const VolleyballSchedulePage: React.FC = () => {
  const [slots, setSlots] = useState<MatchSlot[]>(generateInitialSlots());

  const updateTeam = (
    court: number,
    day: string,
    time: string,
    team: 'team1' | 'team2',
    value: string,
  ) => {
    setSlots(prev => prev.map(slot => (slot.court === court && slot.day === day && slot.time === time
      ? { ...slot, [team]: value }
      : slot)));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Volleyball Court Schedule</h1>
      {Array.from({ length: 2 }, (_, i) => i + 1).map(court => (
        <div key={court} style={{ marginBottom: '3rem' }}>
          <h2>
            Court
            {' '}
            {court}
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
                <td aria-hidden="true" />
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
                    const slot = slots.find(s => s.court === court && s.day === day && s.time === time);
                    return (
                      <React.Fragment key={`${court}-${day}-${time}`}>
                        <td>
                          <input
                            type="text"
                            value={slot?.team1 || ''}
                            onChange={e => updateTeam(court, day, time, 'team1', e.target.value)}
                            style={{ width: '100%' }}
                            aria-label={`Court ${court} - ${day} ${time} - Team 1`}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={slot?.team2 || ''}
                            onChange={e => updateTeam(court, day, time, 'team2', e.target.value)}
                            style={{ width: '100%' }}
                            aria-label={`Court ${court} - ${day} ${time} - Team 2`}
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
};

export default VolleyballSchedulePage;
