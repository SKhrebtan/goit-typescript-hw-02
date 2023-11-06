/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday = 'monday',
  tuesday = 'tuesday',
  wendsday = 'wendsday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday',
}

function isWeekend(day: string): boolean {
  if (Days.saturday === day || Days.sunday === day) {
    return true;
  }
  return false;
}
console.log( isWeekend('monday'))