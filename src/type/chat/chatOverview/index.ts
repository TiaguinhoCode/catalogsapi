export interface ChatOverview {
  id: string;
  contactName: string;
  profilePic: string;
  lastMessage: string;
  isSentByMe: boolean;
  chatType: 'individual' | 'group' | 'channel';
  senderName: string;
  groupName?: string;
  unreadCount: number;
  isRead: boolean;
  isDelivered: boolean;
  lastMessageTime: Date | null;
  lastMessageMediaUrl?: string | null;
}

// export interface ChatOverview {
//   id: string;
//   contactName: string;
//   profilePicUrl?: string;
//   lastMessageText: string;
//   lastMessageMediaType?:
//     | 'text'
//     | 'image'
//     | 'video'
//     | 'audio'
//     | 'sticker'
//     | 'unknown';
//   lastMessageCaption?: string;
//   senderName: string;
//   isSentByMe: boolean;
//   lastMessageTime: Date;
// }
