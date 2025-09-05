export const currentUser = {
  id: '1',
  name: 'Ravi',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  status: 'online'
};

export const users = [
  {
    id: '2',
    name: 'Sarah',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'online'
  },
  {
    id: '3',
    name: 'Alex',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'away'
  },
  {
    id: '4',
    name: 'Jordhi',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'online'
  },
  {
    id: '5',
    name: 'Shaik Uthamulla',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'offline'
  },
  {
    id: '6',
    name: 'Priya Patel',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'online'
  },
  {
    id: '7',
    name: 'David Lee',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'away'
  },
  {
    id: '8',
    name: 'Anna Schmidt',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'offline'
  },
  {
    id: '9',
    name: 'John Carter',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'online'
  },
  {
    id: '10',
    name: 'Linda Park',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'away'
  },
  {
    id: '11',
    name: 'Carlos Mendez',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'offline'
  },
  {
    id: '12',
    name: 'Julie',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'online'
  },
  {
    id: '13',
    name: 'Tom Hanks',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'away'
  },
  {
    id: '14',
    name: 'Sophia',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'offline'
  },
  {
    id: '15',
    name: 'Chris Evans',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'online'
  },
  {
    id: '16',
    name: 'Emma Stone',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'away'
  },
  {
    id: '17',
    name: 'Robert Downey',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    status: 'offline'
  }
];

export const dummyChats = [
  {
    id: '1',
    participants: [currentUser, users[0]],
    messages: [
      {
        id: '1',
        senderId: '2',
        content: 'Hey! How\'s the new project coming along?',
        timestamp: new Date(Date.now() - 15 * 60000)
      },
      {
        id: '2',
        senderId: '1',
        content: 'Going well! We should discuss the UI changes tomorrow.',
        timestamp: new Date(Date.now() - 10 * 60000)
      },
      {
        id: '3',
        senderId: '2',
        content: 'Perfect! I have some ideas about the user flow.',
        timestamp: new Date(Date.now() - 5 * 60000)
      }
    ],
    lastMessage: 'Perfect! I have some ideas about the user flow.',
    lastMessageTime: new Date(Date.now() - 5 * 60000),
    unreadCount: 2
  },
  {
    id: '2',
    participants: [currentUser, users[1]],
    messages: [
      {
        id: '4',
        senderId: '3',
        content: 'The deployment went smoothly!',
        timestamp: new Date(Date.now() - 2 * 60 * 60000)
      },
      {
        id: '5',
        senderId: '1',
        content: 'Awesome work on the performance optimizations 🚀',
        timestamp: new Date(Date.now() - 90 * 60000)
      }
    ],
    lastMessage: 'Awesome work on the performance optimizations 🚀',
    lastMessageTime: new Date(Date.now() - 90 * 60000),
    unreadCount: 0
  },
  {
    id: '3',
    participants: [currentUser, users[2]],
    messages: [
      {
        id: '6',
        senderId: '4',
        content: 'Can we schedule a design review this week?',
        timestamp: new Date(Date.now() - 3 * 60 * 60000)
      }
    ],
    lastMessage: 'Can we schedule a design review this week?',
    lastMessageTime: new Date(Date.now() - 3 * 60 * 60000),
    unreadCount: 1
  },
  {
    id: '4',
    participants: [currentUser, users[3]],
    messages: [
      {
        id: '7',
        senderId: '5',
        content: 'Thanks for the code review feedback!',
        timestamp: new Date(Date.now() - 24 * 60 * 60000)
      }
    ],
    lastMessage: 'Thanks for the code review feedback!',
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60000),
    unreadCount: 0
  },
  {
    id: '5',
    participants: [currentUser, users[4]],
    messages: [
      {
        id: '8',
        senderId: '6',
        content: 'Morning! Have you checked the analytics dashboard?',
        timestamp: new Date(Date.now() - 30 * 60000)
      },
      {
        id: '9',
        senderId: '1',
        content: 'Yes, looks like traffic is up by 20% 📈',
        timestamp: new Date(Date.now() - 25 * 60000)
      }
    ],
    lastMessage: 'Yes, looks like traffic is up by 20% 📈',
    lastMessageTime: new Date(Date.now() - 25 * 60000),
    unreadCount: 0
  },
  {
    id: '6',
    participants: [currentUser, users[5]],
    messages: [
      {
        id: '10',
        senderId: '7',
        content: 'Can you review my PR today?',
        timestamp: new Date(Date.now() - 60 * 60000)
      }
    ],
    lastMessage: 'Can you review my PR today?',
    lastMessageTime: new Date(Date.now() - 60 * 60000),
    unreadCount: 1
  },
  {
    id: '7',
    participants: [currentUser, users[6]],
    messages: [
      {
        id: '11',
        senderId: '8',
        content: 'Don’t forget we have the client meeting tomorrow.',
        timestamp: new Date(Date.now() - 12 * 60 * 60000)
      }
    ],
    lastMessage: 'Don’t forget we have the client meeting tomorrow.',
    lastMessageTime: new Date(Date.now() - 12 * 60 * 60000),
    unreadCount: 0
  }
];

export const smartReplySuggestions = [
  "Sounds great! Let's schedule it.",
  "I agree, that's a good approach.",
  "Can we discuss this further tomorrow?",
  "Perfect, I'll get started on that.",
  "Noted, thanks for the update!",
  "I’ll check and get back to you.",
  "That works for me 👍",
  "Let’s finalize this in the meeting."
];
