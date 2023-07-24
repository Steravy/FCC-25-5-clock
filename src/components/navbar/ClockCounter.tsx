
const ClockCounter = () => {

    return (
        <article className="flex flex-col justify-center items-center gap-4" >
            <article className="flex flex-col items-center justify-center gap-4 border rounded-full border-neutral-400 p-4 w-[200px] h-[200px] aspect-auto" >
                <h1 className="text-2xl font-medium text-zinc-100" >
                    Session
                </h1>
                <article className="text-4xl font-bold text-zinc-100" >
                    {'25:00'}
                </article>
            </article>

            <article className="flex flex-row items-center gap-10" >
                <span>Play</span>
                <span>Reset</span>
            </article>
        </article>
    )
}

export default ClockCounter;