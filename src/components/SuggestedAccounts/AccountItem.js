import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/455cde3cfb62e9c05d2bd7275d8f3ec4.jpeg?x-expires=1689861600&x-signature=SqYosWVjCB3Nn1A2%2BAdvgtay4VU%3D"
                alt="BlackPink"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>vnghyu</strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>Vuong Quang Huy</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
