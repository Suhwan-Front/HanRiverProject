import Map from "./Map"

const MainContents = () => {
    return(
        <div className="flex flex-col items-center mt-2 bg-white">
            <div>
                <button>1</button>
                <button>2</button>
                <label className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input type="checkbox" name="dark-mode" id="dark-toggle" className="checkbox hidden"/>
                        <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition"></div>
                    </div>
                </label>
            </div>
            <Map />
            <div>
                메인 컨텐츠
            </div>
        </div>
    )
}

export default MainContents