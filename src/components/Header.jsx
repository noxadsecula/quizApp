import headerImage from '../assets/quiz-logo.png'

export default function Header() {
    return (
        <header>
            <img src={headerImage} alt="Header image quiz logo" />
            <h1>ReactQuiz</h1>
        </header>
    )
}