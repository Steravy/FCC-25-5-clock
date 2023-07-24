import { RefObject } from 'react';
import { IoRefresh } from 'react-icons/io5';
import { PiPlayPauseThin } from 'react-icons/pi';
import beep from '../../assets/sound/beep.mp3';
import { DisplayState, formatTime } from '../../utils/providers';

interface CounterClockProps {
    currentTime: DisplayState;
    reset: () => void;
    startStop: () => void;
    audioRef: RefObject<HTMLAudioElement>;
}

const ClockCounter: React.FC<CounterClockProps> = ({ currentTime, reset, startStop, audioRef }) => {


    return (
        <article id="timer-label" className="flex flex-col justify-center items-center gap-4" >
            <article className="flex flex-col items-center justify-center gap-4 border rounded-full border-neutral-400 p-4 w-[200px] h-[200px] aspect-auto" >
                <h1 className="text-2xl font-medium text-zinc-100" >
                    Session
                </h1>
                <article id="time-left" className="text-4xl font-bold text-zinc-100" >
                    {formatTime(currentTime.time)}
                </article>
                <audio ref={audioRef} id="beep" src={beep} />
            </article>

            <article className="flex flex-row items-center gap-4" >
                <button id="start_stop" onClick={startStop}>
                    <PiPlayPauseThin className='text-white ' size={30} />
                </button>
                <button id="reset" onClick={reset} >
                    <IoRefresh className='text-zinc-100 ' size={26} />
                </button>
            </article>
        </article>
    )
}

export default ClockCounter;