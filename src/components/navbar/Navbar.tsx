import Container from "../Container";

const Navbar = () => {

    return (

        <header className="fixed w-full z-10 shadow-md bg-white text-gray-800">
            <nav className="py-4 border-b-[1px]">
                <Container>
                    <article className="flex flex-row justify-center items-center " >
                        <h1 className="text-2xl">Markdown Previewer</h1>
                    </article>
                </Container>
            </nav>
        </header>

    )
}

export default Navbar;