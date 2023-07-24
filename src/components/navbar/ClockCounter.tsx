import { PiPlayPauseThin } from 'react-icons/pi';
import { IoRefresh } from 'react-icons/io5';
import { DisplayState, formatTime } from '../../utils/providers';

interface CounterClockProps {
    currentTime: DisplayState;
    reset: () => void;
    startStop: (displayState: DisplayState) => void;
}

const ClockCounter: React.FC<CounterClockProps> = ({ currentTime }) => {


    return (
        <article id="timer-label" className="flex flex-col justify-center items-center gap-4" >
            <article className="flex flex-col items-center justify-center gap-4 border rounded-full border-neutral-400 p-4 w-[200px] h-[200px] aspect-auto" >
                <h1 className="text-2xl font-medium text-zinc-100" >
                    Session
                </h1>
                <article className="text-4xl font-bold text-zinc-100" >
                    {formatTime(currentTime.time)}
                </article>
            </article>

            <article className="flex flex-row items-center gap-4" >
                <PiPlayPauseThin className='text-white ' size={30} />
                <IoRefresh className='text-zinc-100 ' size={26} />
            </article>
        </article>
    )
}

export default ClockCounter;