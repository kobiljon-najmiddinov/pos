import symbols from '../img/symbols.png';
console.log(symbols);

function Statusbar() {
    return (
        <div className="status-bar ">
            <div className=" flex items-center justify-between py-2 px-2">
                <span className=" font-['SF Pro Text'] font-bold text-base">
                    9:41
                </span>
                <img className=" w-26 h-4 " src={symbols} alt="Status symbols" />
            </div>
        </div>
    );
}

export default Statusbar;