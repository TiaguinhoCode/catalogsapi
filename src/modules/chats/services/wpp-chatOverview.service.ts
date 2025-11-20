// // Services
// import { WppClientService } from './whatsapp-client.service';

// // Tipagem
// import { ChatOverview } from 'src/type/chat/chatOverview';
// interface ListChatOverviewProps {
//   clientService: WppClientService;
//   page: number;
//   pageSize: number;
// }

// export async function listChatOverview({
//   clientService,
//   page,
//   pageSize,
// }: ListChatOverviewProps): Promise<ChatOverview[]> {
//   const client = clientService.getClient();
//   const chats = await client.listChats({ count: page * pageSize });
//   const paginatedChats = chats.slice((page - 1) * pageSize, page * pageSize);
//   const overviewListChat: ChatOverview[] = [];

//   for (const chat of paginatedChats) {
//     const chatId = chat.id;
//     const contactName = chat.formattedName || chat.name || chat.id;
//     const profilePicUrl = await client
//       .getProfilePicFromServer(chatId)
//       .catch(() => undefined);

//     const messages = await client.getAllMessagesInChat(chatId, false, false);
//     const lastMsg = messages.length ? messages[messages.length - 1] : null;
//     console.log('Menssagem: ', messages.profilePicThumbObj);
//     if (!lastMsg) {
//       // caso não haja mensagem ainda
//       overviewListChat.push({
//         id: chatId._serialized,
//         contactName,
//         // profilePicUrl,
//         lastMessageText: '',
//         senderName: '',
//         isSentByMe: false,
//         lastMessageTime: new Date(0),
//         lastMessageMediaType: 'unknown',
//       });
//       continue;
//     }

//     // determinar quem enviou
//     const me = client.getWid(); // supondo que getWid retorna o meu ID no WhatsApp
//     const isSentByMe = lastMsg.from === me;
//     const senderName = isSentByMe
//       ? contactName
//       : lastMsg.sender?.pushname ||
//         lastMsg.sender?.formattedName ||
//         lastMsg.from;

//     // tipo de mídia / texto
//     let mediaType: ChatOverview['lastMessageMediaType'] = 'text';
//     let lastMessageText = lastMsg.body || '';
//     let caption: string | undefined = undefined;

//     if (lastMsg.isMedia) {
//       // supondo existe propriedade isMedia ou type
//       if (lastMsg.mimetype?.startsWith('image/')) {
//         mediaType = 'image';
//       } else if (lastMsg.mimetype?.startsWith('video/')) {
//         mediaType = 'video';
//       } else if (lastMsg.mimetype?.startsWith('audio/')) {
//         mediaType = 'audio';
//       } else {
//         mediaType = 'unknown';
//       }
//       caption = lastMsg.caption || lastMsg.body || undefined;
//       // opção: você pode querer sobrescrever lastMessageText para algo como "[Imagem]" ou Usar a URL do arquivo etc
//       lastMessageText = caption || `[${mediaType}]`;
//     } else if (lastMsg.type === 'sticker') {
//       mediaType = 'sticker';
//       lastMessageText = '[Figurinha]';
//     }

//     // data/hora da última mensagem
//     const lastMessageTime = new Date(lastMsg.t * 1000); // supondo lastMsg.t está em segundos

//     overviewListChat.push({
//       id: chatId._serialized,
//       contactName,
//       profilePicUrl,
//       lastMessageText,
//       lastMessageMediaType: mediaType,
//       lastMessageCaption: caption,
//       senderName,
//       isSentByMe,
//       lastMessageTime,
//     });
//   }

//   return overviewListChat;
// }
