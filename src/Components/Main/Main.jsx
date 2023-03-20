import css from './Main.module.css'
import Board from '../Board/Board'

const Main = (props) => {

	return (
		<main className={css.main}>
			<Board {...props} />
		</main>
	)
}

export default Main