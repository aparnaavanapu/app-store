import './index.css'
const TabItem=(props)=>{
    const {details,getTabId,isActive}=props
    const {tabId,displayText,}=details

    const handleClick=()=>{
         getTabId(tabId)
    }
    const activeTabClass=isActive&&'active-tab'
    
    return(
        <li className="tab">
            <button className={ `tab-name ${activeTabClass}`} onClick={handleClick}>{displayText}</button>
        </li>
    )
}

export default TabItem