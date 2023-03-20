import {IconChevron} from "../../shared/icons/icon-chevron";
import {IconProfile} from "../../shared/icons/icon-profile";
import css from './Profile.module.css'
import {useState} from "react";

export const Profile = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <div className={css.profile}
             onClick={() => setIsMenuShown(!isMenuShown)}>
            <IconProfile/>
            <div className={`${css.chevron} ${isMenuShown ? css.up : ''}`}>
                <IconChevron/>
            </div>

            {isMenuShown && <div className={css.menu}>
                <div className={css.item}>Profile</div>
                <div className={css.item}>Log Out</div>
            </div>
            }
        </div>
    )
}