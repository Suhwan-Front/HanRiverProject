import { HiOutlineSun, HiSun  } from "react-icons/hi";
import { PiListBold } from "react-icons/pi";

const TopNav = () => {
    return(
    <nav className="bg-white flex px-4 py-2 justify-between">
        <button>
            <HiOutlineSun size={24}/>
        </button>
        <div className="text-lg font-bold">한강 현황</div>
        <button>
            <PiListBold size = {24}/>
        </button>
    </nav>
    )
}

export default TopNav