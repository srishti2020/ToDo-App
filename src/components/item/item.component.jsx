import "./item.styles.scss"
const Item = (props) => {
    const deleteElement = (id) => {
        console.log(id)
        const updatedItems = props.itemsArray.filter((element, index) => {
            return index !== id;
        })
        props.setItemsArray(updatedItems)
    }
    return(
        <div className="item-container">
            <div className="item">
            <div > {props.value} </div>
        <i className="fa fa-trash" aria-hidden="true" onClick={()=>{deleteElement(props.id)}}></i>
            </div>
        
        </div>
        
    )
}
export default Item;