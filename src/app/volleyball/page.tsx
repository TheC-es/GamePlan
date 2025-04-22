/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import React, { useState } from 'react';

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

const generateInitialSlots = (): MatchSlot[] => {
  const slots: MatchSlot[] = [];
  for (let court = 1; court <= 2; court++) {
    for (const day of days.slice(1, 6)) { // Monday to Friday only
      for (const time of times) {
        slots.push({
          court,
          day,
          time,
          team1: 'Free',
          team2: 'Free',
          score1: undefined,
          score2: undefined,
        });
      }
    }
  }
  return slots;
};

const SchedulePage: React.FC = () => {
  const [slots, setSlots] = useState<MatchSlot[]>(generateInitialSlots());

  const todayName = days[new Date().getDay()];
  const todaySlots = slots.filter(slot => slot.day === todayName);

  const updateSlot = (
    court: number,
    time: string,
    field: keyof MatchSlot,
    value: string,
  ) => {
    setSlots(prev => prev.map(slot => (slot.court === court && slot.day === todayName && slot.time === time
      ? { ...slot, [field]: field.includes('score') ? Number(value) : value }
      : slot)));
  };

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
                          onChange={e => updateSlot(court, time, 'team1', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={slot.score1 ?? ''}
                          onChange={e => updateSlot(court, time, 'score1', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={slot.team2}
                          onChange={e => updateSlot(court, time, 'team2', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={slot.score2 ?? ''}
                          onChange={e => updateSlot(court, time, 'score2', e.target.value)}
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
};

export default SchedulePage;
