import './index.css'

const AppItem=(props)=>{
    const {details}=props
    const {appName,imageUrl}=details
    return(
        <li className="app-item-container">
            <img src={imageUrl} alt={appName} className="app-img" />
            <h1 className="app-item">{appName}</h1>
        </li>
    )
}

export default AppItem