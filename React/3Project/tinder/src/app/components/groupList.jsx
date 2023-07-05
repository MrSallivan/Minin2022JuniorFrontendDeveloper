import React from "react"
import PropTypes from "prop-types"

const GroupList = ({
  items,
  onItemSelect,
  selectedItem,
  valueProperty,
  contentProperty
}) => {
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          className={
            items[item] === selectedItem ? "list-group-item active" : "list-group-item"
          }
          key={items[item][valueProperty]}
          onClick={() => onItemSelect(items[item])}
          role="button"
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  )
}
GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
}

GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
}
export default GroupList
