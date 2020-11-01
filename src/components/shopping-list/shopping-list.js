import './shopping-list.css'
function ShoppingList(props) {
  const shoppingList = props.shoppingList || []
  const shoppingListItem = shoppingList.map((item, index) => {
    return (
      <ShoppingListItem key={item.id} content={item}></ShoppingListItem>
    )
  })
  return (
    <ul>
      {shoppingListItem}
    </ul>
  );
}

function ShoppingListItem(props) {
  const content = props.content || {}
  return (
    <li>{content.id}-{content.name}</li>
  )
}
export default ShoppingList;