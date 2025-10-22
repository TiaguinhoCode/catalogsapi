export interface ChatOverview {
  id: string;
  contactName: string;
  profilePic: string;
  lastMessage: string;
  isSentByMe: boolean;
  chatType: 'individual' | 'group' | 'channel';
  groupName?: string;
}
