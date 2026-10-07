// Mock Email Service to satisfy immediate requirements.
// You can directly replace this file's logic with `emailjs.send()` later.

export const sendEmailNotification = async (type: 'Ticket' | 'Query', data: Record<string, unknown>) => {
  const adminEmails = [
    'founder@sparkwavsproduction.me',
    'dev@sparkwavsproduction.me',
    'support@sparkwavsproduction.me'
  ];

  console.log(`[EMAIL DISPATCH SYSTEM - ${type.toUpperCase()}]`);
  console.log(`To: ${adminEmails.join(', ')}`);
  console.log('--- Payload ---');
  console.table(data);
  console.log('-----------------');

  // Simulating network delay
  return new Promise((resolve) => setTimeout(resolve, 800));
};
