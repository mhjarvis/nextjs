import { useState } from "react"

import Post from "./Post"
import NewPost from "./NewPost"
import Modal from "./Modal"
import styles from "./PostsList.module.css"

export default function PostsList() {
	const [modalIsVisible, setModalIsVisible] = useState(true)
	const [enteredBody, setEnteredBody] = useState("")
	const [enteredAuthor, setEnteredAuthor] = useState("")

	function hideModalHandler() {
		setModalIsVisible(false)
	}

	function bodyChangeHandler(event) {
		setEnteredBody(event.target.value)
	}
	function authorChangeHandler(event) {
		setEnteredAuthor(event.target.value)
	}
	return (
		<>
			{modalIsVisible && (
				<Modal onClose={hideModalHandler}>
					<NewPost
						onBodyChange={bodyChangeHandler}
						onAuthorChange={authorChangeHandler}
					/>
				</Modal>
			)}

			<ul className={styles.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author="Jarvis" body="React sucks" />
			</ul>
		</>
	)
}
