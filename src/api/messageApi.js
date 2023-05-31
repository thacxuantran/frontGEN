import axiosClient from "./axiosClient";

const messageApi = {
    sendMessage(data) {
        const url = `/api/Message/sendMessage`;
        return axiosClient.post(url, data);
    },
    subcribe(data) {
        const url = `/api/Message/subcribeTopic`;
        return axiosClient.post(url, data);
    },
    unSubcribe(data) {
        const url = `/api/Message/unsubcribeTopic`;
        return axiosClient.post(url, data);
    },
    sendMessageTopic(data, topic) {
        const url = `/api/Message/sendMessageTopic/${topic}`;
        return axiosClient.post(url, data);
    },
    getMessage(account_id, device_token) {
        const url = `/api/Message/getMessage?id=${account_id}&device_token=${device_token}`;
        return axiosClient.get(url);
    },
    updateMessage(account_id, message_id) {
        const url = `/api/Message/updateMessage`;
        return axiosClient.put(url, { account_id, message_id });
    }
};

export default messageApi;
