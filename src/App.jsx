import { useEffect, useState } from 'react'
import './styles/globals.css'
import { toast } from 'react-toastify'

function App() {
    const [second, setSecond] = useState(0)
    const [isCounting, setIsCounting] = useState(false)

    useEffect(() => {
        let interval = null

        if(isCounting){
            interval = setInterval(() => {
                if(second > 0){
                    setSecond(prev => prev - 1)
                }else{
                    toast.success("تایمر تموم شد")
                    setIsCounting(false)
                    clearInterval(interval)
                }
            }, 1000);
        }

        return () => {
            if(interval){
                clearInterval(interval)
            }
        }
    }, [isCounting, second])

    return (
        <div className="w-full max-w-[512px] mx-auto h-dvh px-4 py-5">
            <div className="w-full flex flex-col gap-3 p-4 rounded-xl bg-slate-950">
                <h5 className='text-sm font-medium text-white'>
                    چند ثانیه میخای برات بشمارم؟
                </h5>
                {!isCounting && (
                    <div className="w-full flex items-center gap-2 justify-center h-10">
                        <button
                            className='h-full aspect-square bg-slate-900 rounded-md text-3xl cursor-pointer transition-transform duration-200 ease-out hover:scale-98'
                            onClick={() => setSecond(prev => {
                                if (prev > 59) return 60
                                return prev + 1
                            })}
                        >+</button>
                        <div className="w-full h-full rounded-md bg-slate-900 text-xl font-bold text-slate-500 flex items-center justify-center cursor-default select-none">
                            {second}
                        </div>
                        <button
                            className='h-full aspect-square bg-slate-900 rounded-md text-3xl cursor-pointer transition-transform duration-200 ease-out hover:scale-98'
                            onClick={() => setSecond(prev => {
                                if (prev > 0) {
                                    return prev - 1
                                } else {
                                    return 0
                                }
                            })}
                        >-</button>
                    </div>
                )}
                {!isCounting && (
                    <div className="w-full flex items-center gap-2 h-10">
                        <button
                            className='w-full h-full text-base text-white flex items-center justify-center rounded-md cursor-pointer bg-blue-600 drop-shadow-lg drop-shadow-blue-600/30 transition-transform duration-200 ease-out hover:scale-98'
                            onClick={() => {
                                if(second > 0){
                                    setIsCounting(true)
                                }else{
                                    toast.error("یک چیزی وارد کن حداقل")
                                }
                            }}
                        >
                            شروع
                        </button>
                        <button
                            className='w-full h-full text-base text-white flex items-center justify-center rounded-md cursor-pointer bg-pink-600 drop-shadow-lg drop-shadow-bg-pink-600/30 transition-transform duration-200 ease-out hover:scale-98'
                            onClick={() => setSecond(0)}

                        >
                            بازنشانی
                        </button>
                    </div>
                )}

                {isCounting && (
                    <div className="w-full flex items-center justify-center">
                        <h1 className='text-center text-4xl font-bold text-white'>
                            {second}
                        </h1>
                    </div>
                )}
                {isCounting && (
                    <button
                        className='w-full h-10 text-base text-white flex items-center justify-center rounded-md cursor-pointer bg-pink-600 drop-shadow-lg drop-shadow-bg-pink-600/30 transition-transform duration-200 ease-out hover:scale-98'
                        onClick={() => setIsCounting(false)}
                    >
                        توقف
                    </button>
                )}
            </div>
        </div>
    )
}

export default App