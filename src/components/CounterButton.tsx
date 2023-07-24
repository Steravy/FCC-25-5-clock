import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

interface CounterProps {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void;
}

const CounterButton: React.FC<CounterProps> = ({ title, value, onChange }) => {

    const handleAdd = useCallback(() => {
        onChange(value + 1);
    }, [value, onChange]);

    const handleReduce = useCallback(() => {
        if (value === 1) return;

        onChange(value - 1);
    }, [value, onChange]);

    return (
        <article className='flex flex-col items-center justify-center gap-4' >
            <article className='flex flex-col items-center' >
                <p className="font-medium" >{title}</p>
                {/* <p className="font-light text-gray-600" >{subtitle}</p> */}
            </article>
            <article className='flex flex-row items-center gap-8' >
                <div onClick={handleReduce} className="w-10 h-10 rounded-full text-zinc-100 border-[1px] border-neutral-400 flex items-center justify-center cursor-pointer hover:opacity-80 transition" >
                    <HiChevronDown size={30} />
                </div>
                <span className="font-light text-xl text-zinc-100 " >{value}</span>
                <div onClick={handleAdd} className="w-10 h-10 rounded-full text-zinc-100 border-[1px] border-neutral-400 flex items-center justify-center cursor-pointer hover:opacity-80 transition" >
                    <HiChevronUp size={30} />
                </div>
            </article>
        </article>
    )
}

export default CounterButton;