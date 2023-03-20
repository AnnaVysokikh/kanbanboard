import css from './Header.module.css'
import { Profile } from './Profile/Profile'

const Header = () => {
    return (
        <main className={css.header}>
            <div className={css.title}>Awesome Kanban Board</div>
            <Profile />
        </main>
    )
}

export default Header