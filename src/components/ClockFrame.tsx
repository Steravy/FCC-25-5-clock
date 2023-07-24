import { Fragment, useEffect, useRef, useState } from "react"
import { DisplayState } from "../utils/providers"
import Container from "./Container"
import CounterButton from "./CounterButton"
import ClockCounter from "./navbar/ClockCounter"

const ClockFrame = () => {

    const defaultBreakTime = 5 * 60;
    const defaultSessionTime = 25 * 60;
    const min = 60;
    const max = 60 * 60;
    const interval = 60;

    const audioRef = useRef<HTMLAudioElement>(null);
    const [breakTime, setBreakTime] = useState(defaultBreakTime);
    const [sessionTime, setSessionTime] = useState(defaultSessionTime);
    const [currentTime, setCurrentTime] = useState<DisplayState>({
        time: sessionTime,
        timeType: "Session",
        timerRunning: false,
    });


    const reset = () => {
        setBreakTime(defaultBreakTime);
        setSessionTime(defaultSessionTime);
        setCurrentTime({
            time: defaultSessionTime,
            timeType: "Session",
            timerRunning: false,
        });
        const audio = document.getElementById("beep") as HTMLAudioElement;
        audio.pause();
        audio.currentTime = 0;
    };

    const decrementDisplay = () => {
        setCurrentTime((prev) => ({
            ...prev,
            time: prev.time - 1,
        }));
    };

    const startStop = () => {
        setCurrentTime((prev) => ({
            ...prev,
            timerRunning: !prev.timerRunning,
        }));
    };

    const changeBreakTime = (time: number) => {
        if (currentTime.timerRunning) return;
        setBreakTime(time);
    };

    const changeSessionTime = (time: number) => {
        if (currentTime.timerRunning) return;
        setSessionTime(time);
        setCurrentTime({
            time: time,
            timeType: "Session",
            timerRunning: false,
        });
    };

    useEffect(() => {

        let timerID: number;
        if (!currentTime.timerRunning) return;

        if (currentTime.timerRunning) {
            timerID = window.setInterval(decrementDisplay, 1000);
        }

        return () => {
            window.clearInterval(timerID);
        };
    }, [currentTime.timerRunning]);

    useEffect(() => {
        if (currentTime.time === 0) {
            const audio = document.getElementById("beep") as HTMLAudioElement;
            audio.currentTime = 2;
            audio.play().catch((err) => console.log(err));
            setCurrentTime((prev) => ({
                ...prev,
                timeType: prev.timeType === "Session" ? "Break" : "Session",
                time: prev.timeType === "Session" ? breakTime : sessionTime,
            }));
        }
    }, [currentTime, breakTime, sessionTime]);


    return (
        <Fragment>
            <Container>

                <section className='flex flex-col justify-center items-center' >

                    <section className="flex flex-col justify-between items-center gap-10" >
                        <article className="flex flex-row justify-between items-center gap-10" >
                            <CounterButton
                                id={"break-label"}
                                title='Break Length'
                                time={breakTime}
                                type="break"
                                min={min}
                                max={max}
                                interval={interval}
                                setTime={changeBreakTime}
                            />
                            <CounterButton
                                id={"session-label"}
                                title='Session Length'
                                time={sessionTime}
                                min={min}
                                max={max}
                                interval={interval}
                                type="session"
                                setTime={changeSessionTime}
                            />
                        </article>
                        <ClockCounter
                            audioRef={audioRef}
                            currentTime={currentTime}
                            reset={reset}
                            startStop={startStop}
                        />
                    </section>

                </section>

            </Container>
        </Fragment>
    )
}

export default ClockFrame