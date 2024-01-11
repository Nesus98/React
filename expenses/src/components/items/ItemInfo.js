import './ItemInfo.css';

function ItemInfo({data}) {
  return (
    <div className="item-info flex-60">
    <h2>{data.title}</h2>
    <small className="expense-date">{data.date}</small>
  </div>    );
}

export default ItemInfo;
