/*
 * @文档描述:
 * @author: 伟烽
 * @Date: 2021-05-22 16:31:59
 * @LastEditTime: 2021-05-22 19:28:58
 * @LastEditors: 伟烽
 */
import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello' });
};
