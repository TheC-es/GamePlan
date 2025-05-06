/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { prisma } from '@/lib/prisma';
import { Reservation } from '@prisma/client';
import EditableSchedule from '@/components/EditableSchedule';

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
        Volleyball Games for {todayName}
      </h1>
      <EditableSchedule todaySlots={todaySlots} />
    </div>
  );
}
