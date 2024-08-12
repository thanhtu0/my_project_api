// utils/api.js
import { get } from './request';

const teamsPerPage = 100; // Số đội mỗi trang
const maxRetries = 5; // Số lần thử lại
const retryDelay = 2000; // Thời gian chờ giữa các lần thử lại (ms)

export const fetchAllTeams = async () => {
    let allTeams = [];
    let page = 1;
    let totalPages = 1;
    let retries = 0;

    while (page <= totalPages) {
        try {
            const response = await get('/sports/1/teams', {
                params: { page, perPage: teamsPerPage }, // Nếu API hỗ trợ `perPage`
            });

            if (response && response.data) {
                allTeams = [...allTeams, ...response.data]; // Kết hợp dữ liệu từ trang hiện tại
                totalPages = response.meta.last_page; // Lấy tổng số trang từ thông tin phân trang
                page += 1;
                retries = 0; // Đặt lại số lần thử lại nếu thành công
            } else {
                console.error('Invalid data structure:', response);
                break;
            }
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // Nếu lỗi 429, chờ một thời gian trước khi thử lại
                if (retries < maxRetries) {
                    retries += 1;
                    console.warn(`Rate limit exceeded. Retrying in ${retryDelay / 1000} seconds...`);
                    await new Promise((resolve) => setTimeout(resolve, retryDelay));
                } else {
                    console.error('Max retries reached. Aborting.');
                    throw error;
                }
            } else {
                // Nếu gặp lỗi khác, ném lỗi
                console.error('Error fetching teams:', error);
                throw error;
            }
        }
    }

    return allTeams;
};
