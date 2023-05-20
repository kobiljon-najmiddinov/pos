import burgersDark from '../img/burgers-dark.png'
import leftChevron from '../img/leftChevron.png'

function Content() {
    return (
        <div className='content container'>
            <header className='flex mb-6  items-center'>
                <span className='ml-[10px]'><img className='w-[6px] h-[12px]' src={leftChevron} alt="< symbol" /></span>
                <button className='ml-[10px] test-base'> <strong>New</strong> Order</button>
            </header>
            <div className="categories border-2 h-[94px] flex justify-center gap-x-[10px]">
                <button className='w-[80px] h-[85px] flex-row justify-center'>
                    <p className=''><img className="w-[24px] h-[20px]" src={burgersDark} alt="Burger" /></p>
                    <p className=''>Burgers</p>
                </button>

                <button className='w-[80px] h-[85px]'> <img className="w-[24px] h-[20px]" src={burgersDark} alt="Burger" /> Burgers</button>
                <button className='w-[80px] h-[85px]'> <img className="w-[24px] h-[20px]" src={burgersDark} alt="Burger" /> Burgers</button>
                <button className='w-[80px] h-[85px]'> <img className="w-[24px] h-[20px]" src={burgersDark} alt="Burger" /> Burgers</button>

            </div>
            <div className="menu"></div>

        </div>
    )
}

export default Content;