import React from "react";
import "./sideMenu.css";

const SideMenu = ({ onSelectMenu, setContentType, selectedMenu }) => {
  const handleClick = (menu, type) => {
    onSelectMenu(menu);
    setContentType(type);
  };

  return (
    <div className="sideWrapper">
      <h2 className="sideTitle">마이페이지</h2>
      <ul className="menuWrapper">
        <li className="mainMenu">
          <a href="#">주문 관리</a>
          <ul className="subMenu">
            {[
              { label: "주문/배송 조회", type: "1" },
              { label: "취소/반품/교환 신청", type: "2" },
              { label: "취소/반품/교환 조회", type: "3" },
              { label: "쿠폰 등록/조회", type: "4" },
            ].map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleClick(item.label, item.type)}
                  className={selectedMenu === item.label ? "active" : ""}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li className="mainMenu">
          <a href="#">활동</a>
          <ul className="subMenu">
            {[
              { label: "나의 리뷰", type: "5" },
              { label: "문의 내역", type: "6" },
            ].map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleClick(item.label, item.type)}
                  className={selectedMenu === item.label ? "active" : ""}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li className="mainMenu">
          <a href="#">회원 정보</a>
          <ul className="subMenu">
            {[
              { label: "개인정보 수정", type: "7"},
              { label: "배송지 관리", type: "8"},
            ].map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleClick(item.label, item.type)}
                  className={selectedMenu === item.label ? "active" : ""}
                >{item.label}</button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
