import "./Topbar.css"
import {Chat, Notifications, Person, Search} from "@mui/icons-material"

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">VarunSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input placeholder="Search for a friend,post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
        
    </div>
  )
}

export default Topbar