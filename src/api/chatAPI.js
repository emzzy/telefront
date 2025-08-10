import api from "./api";

// Live Chat
export const getChatRooms = async () => {
    const res = await api.get(`/chat_rooms/rooms/`);
    return res.data;
};

export const getChatRoomDetail = async (slug) => {
    const res = await api.get(`/chat_rooms/rooms/${slug}/`);
    return res.data;
};

export const getRoomMessages = async (roomSlug) => {
    const res = await api.get(`/chat_rooms/rooms/${roomSlug}/messages/`);
    return res.data;
};