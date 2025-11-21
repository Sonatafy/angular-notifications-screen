export interface Notification {
  id: number;
  title: string;
  description: string;
}

export const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    title: 'New Message',
    description: 'You have received a new message.',
  },
  {
    id: 2,
    title: 'Mentioned In Comment',
    description: 'You were mentioned in a comment.',
  },
  {
    id: 3,
    title: 'Event Today',
    description: 'Don\'t forget, you have an event today.',
  },
  {
    id: 4,
    title: 'Update Available',
    description: 'A new update is available for download.',
  },
  {
    id: 5,
    title: 'New Follower',
    description: 'Someone started following you.',
  },
  {
    id: 6,
    title: 'Password Expiry',
    description: 'Your password will expire in 7 days.',
  },
  {
    id: 7,
    title: 'System Maintenance',
    description: 'Scheduled maintenance will occur tonight.',
  },
  {
    id: 8,
    title: 'New Like',
    description: 'Your post received a new like.',
  },
  {
    id: 9,
    title: 'Security Alert',
    description: 'A new login was detected on your account.',
  },
  {
    id: 10,
    title: 'Friend Request',
    description: 'You have a new friend request.',
  },
];
