/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import React, { useState } from 'react';

type MatchSlot = {
  court: number;
  day: string;
  time: string;
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
};

type Props = {
  todaySlots: MatchSlot[];
};

export default function EditableSchedule({ todaySlots }: Props) {
  const [slots, setSlots] = useState(todaySlots);

  const handleScoreChange = (
    index: number,
    field: 'score1' | 'score2',
    value: number,
  ) => {
    const updated = [...slots];
    updated[index] = { ...updated[index], [field]: value };
    setSlots(updated);
  };

  const times = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

  return (
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
            Court { court }
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
                const index = slots.findIndex(
                  s => s.court === court && s.time === time,
                );
                const slot = slots[index];
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
                        onChange={e => handleScoreChange(index, 'score1', +e.target.value)}
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
                        onChange={e => handleScoreChange(index, 'score2', +e.target.value)}
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
  );
}
