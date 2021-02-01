import '../css/podcast.css'
function AccessField(){
    return(
        <div className= "AccessField">
            <form>
                <input type="email" id="email" name="email" className="email-form" placeholder="john@titor.com"></input>
                <button className="request-button">Request Access</button>
            </form>
        </div>
    )
}

export default AccessField