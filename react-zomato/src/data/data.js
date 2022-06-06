function Enterdata({change,changeIt,show,sort}){
    return(
        <>
        <input type="text" placeholder='Enter location' onInput={(event)=>change(event)}/>
        <input type="text" placeholder='Enter name of the restaurant' onInput={(event)=>changeIt(event)}/>
        <div onChange={(event)=>show(event)} >
        <input type="checkbox" value={"Chinese"} id="Chinese"  /><label htmlFor="Chinese">Chinese</label><br/>
        <input type="checkbox" value={"Fast"} id="Fast" /><label htmlFor="Fast">Fast</label><br/>
        </div>
        <div onChange={(event)=>sort(event)} >
        <input type="radio" name="cost" value={"less"} id="less"  /><label htmlFor="less">Low to high</label>
        <input type="radio" name="cost" value={"high"} id="high" /><label htmlFor="high">high to low</label>
        </div>
       
        </>
    )
}
export default Enterdata;