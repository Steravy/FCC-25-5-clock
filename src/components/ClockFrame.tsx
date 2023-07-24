import { Fragment } from "react"
import Container from "./Container"
import CounterButton from "./CounterButton"

const ClockFrame = () => {


    return (
        <Fragment>
            <Container>

                <section className='flex flex-col justify-center items-center' >
                    <p>Pitada</p>

                    <article className="flex flex-row justify-between items-center gap-10" >
                        <CounterButton title='Break Length' subtitle='Minutes' value={5} onChange={value => console.log(value)} />
                        <CounterButton title='Session Length' subtitle='Minutes' value={5} onChange={value => console.log(value)} />
                    </article>

                </section>

            </Container>
        </Fragment>
    )
}

export default ClockFrame