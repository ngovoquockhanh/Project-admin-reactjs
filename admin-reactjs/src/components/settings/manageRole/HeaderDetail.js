import imgnotify from "../../../assets/images/iconnotify.png";
import chandung from "../../../assets/images/chandung.jpg";
import { Link, NavLink } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

const HeaderAddRole = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard">
        <div className="headerdashboard-main">
          <h2 style={{ color: "#7e7d88" }}>
            Cài đặt hệ thống
            <RightOutlined
              style={{
                color: "#d4d4d7",
                fontSize: "1.4rem",
                padding: "0 1rem",
              }}
            />
            <NavLink to="/manage-role">
              <span style={{ color: "#7e7d88" }}>Quản lý vai trò</span>
            </NavLink>
            <RightOutlined
              style={{
                color: "#d4d4d7",
                fontSize: "1.4rem",
                padding: "0 1rem",
              }}
            />
            <span style={{ color: "#ff9138" }}>Câp nhật vai trò</span>
          </h2>
        </div>
        <div className="headerdashboard-content">
          <img src={imgnotify} alt="" className="imgnotify" />
          <NavLink
            className="headerdashboard-content-box"
            to="/user"
            exact="true"
          >
            <img src={chandung} alt="" className="imguser" />
            <div className="infomation">
              <h3 className="sub-label">Xin chào</h3>
              <h4 className="label">Ngô Võ Quốc Khánh</h4>
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default HeaderAddRole;
