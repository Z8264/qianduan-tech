import React from 'react';
import './style.less';
function Menu(props) {
  const { data, current, onChange } = props;
  const onClick = (obj) => {
    onChange(obj);
  };
  return (
    <div className="rmenu">
      {data.map((obj, i) => (
        <nav className="rmenu-block" key={i}>
          <h3 className="rmenu-title">{obj.title}</h3>
          {obj.menu.map((item, j) => (
            <a
              className={
                item.cn === current?.cn
                  ? 'rmenu-item rmenu-active'
                  : 'rmenu-item'
              }
              href="#"
              key={j}
              onClick={() => onClick(item)}
            >
              <span className="rmenu-item-name">{item.cn}</span>
              <span className="rmenu-item-label">{item.en}</span>
            </a>
          ))}
        </nav>
      ))}
    </div>
  );
}

export default Menu;
