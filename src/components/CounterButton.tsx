import { useCallback } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

interface CounterProps {
    title: string;
    time: number;
    setTime: (time: number) => void;
    min: number;
    max: number;
    interval: number;
    type: "break" | "session";
    id: string;
}

const CounterButton: React.FC<CounterProps> = ({ title, time, setTime, min, max, interval, type, id }) => {

    const handleAdd = useCallback(() => {
        return time < max ? setTime(time + interval) : null
    }, [setTime, time, min, interval]);

    const handleReduce = useCallback(() => {
        return time > min ? setTime(time - interval) : null
    }, [setTime, time, min, interval]);

    return (
        <article id={id} className='flex flex-col items-center justify-center gap-4' >
            <article className='flex flex-col items-center' >
                <p className="font-medium" >{title}</p>
            </article>
            <article className='flex flex-row items-center gap-4' >
                <div id={`${type}-decrement`} onClick={handleReduce} className="w-10 h-10 rounded-full text-zinc-100 border-[1px] border-neutral-400 flex items-center justify-center cursor-pointer hover:opacity-80 transition" >
                    <HiChevronDown size={30} />
                </div>
                <span id={`${type}-length`} className="font-light text-xl text-zinc-100 " >{time / interval}</span>
                <div id={`${type}-increment`} onClick={handleAdd} className="w-10 h-10 rounded-full text-zinc-100 border-[1px] border-neutral-400 flex items-center justify-center cursor-pointer hover:opacity-80 transition" >
                    <HiChevronUp size={30} />
                </div>
            </article>
        </article>
    )
}

export default CounterButton;