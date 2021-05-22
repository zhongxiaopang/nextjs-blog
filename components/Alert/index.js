/*
 * @文档描述:
 * @author: 伟烽
 * @Date: 2021-05-21 15:47:14
 * @LastEditTime: 2021-05-21 15:58:32
 * @LastEditors: 伟烽
 */
import styles from './alert.module.css';
import cn from 'classnames';

export default function Alert({ children, type }) {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            <div className={styles['flex-text']}>flex test style</div>
            <div className={cn([styles['flex-text']])}>flex test cn</div>
            {children}
        </div>
    );
}
