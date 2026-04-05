// Mock Email Service to satisfy immediate requirements.
// You can directly replace this file's logic with `emailjs.send()` later.

export const sendEmailNotification = async (type: 'Ticket' | 'Query', data: Record<string, unknown>) => {
  const adminEmails = [
    'surajnarayangupta2004@gmail.com',
    'suraj9891@1vnm34.onmicrosoft.com',
    'niteshji833@gmail.com'
  ];

  console.log(`[EMAIL DISPATCH SYSTEM - ${type.toUpperCase()}]`);
  console.log(`To: ${adminEmails.join(', ')}`);
  console.log('--- Payload ---');
  console.table(data);
  console.log('-----------------');

  // Simulating network delay
  return new Promise((resolve) => setTimeout(resolve, 800));
};
