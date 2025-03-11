import { dayjs } from 'element-plus'
// 获取日期
export const formatTime = (time) => dayjs(time).format('YYYY年MM月DD日')
