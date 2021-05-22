/*
 * @文档描述:
 * @author: 伟烽
 * @Date: 2021-05-22 15:43:08
 * @LastEditTime: 2021-05-22 19:17:51
 * @LastEditors: 伟烽
 */
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
