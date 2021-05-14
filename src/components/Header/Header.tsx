import React from "react"
import "./Header.scss"
import {NavLink} from "react-router-dom";

type PropsType = {}
export const Haeder: React.FC<PropsType> = (props) => {
  return (
    <header className="header">
      <div className="header__btn-home">
			<NavLink to="/home" className="home">🍿</NavLink>
	  </div>
	  <div className="header__btns">
		  	<NavLink to="/featured" activeClassName="btn-trend-active" className="btn-trend">
			  	<svg className="active" viewBox="0 0 24 24" stroke-linecap="square" stroke-linejoin="square" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" fill="currentColor" stroke-width="2" d="M14.182 9.966S15.125 4.412 11.273 2c-.116352 1.929932-1.04875 3.719087-2.564 4.92C7.063 8.368 3.967 11.616 4 15.089c-.022483 3.023694 1.669766 5.799168 4.368 7.164.096045-1.352233.73215-2.608946 1.765-3.487.875693-.672893 1.443995-1.669674 1.577-2.766 2.305482 1.224578 3.796777 3.571676 3.926 6.179v.021c2.545328-1.167974 4.220488-3.664873 4.336-6.463.08399-2.817217-.862897-5.56827-2.663-7.737"></path></svg>
				<svg className="no-active" viewBox="0 0 24 24" stroke-linecap="square" stroke-linejoin="square" width="24" height="24" xmlns="http://www.w3.org/2000/svg" ><path stroke="currentColor" fill="none" stroke-width="2" d="M14.182 9.966S15.125 4.412 11.273 2c-.116352 1.929932-1.04875 3.719087-2.564 4.92C7.063 8.368 3.967 11.616 4 15.089c-.022483 3.023694 1.669766 5.799168 4.368 7.164.096045-1.352233.73215-2.608946 1.765-3.487.875693-.672893 1.443995-1.669674 1.577-2.766 2.305482 1.224578 3.796777 3.571676 3.926 6.179v.021c2.545328-1.167974 4.220488-3.664873 4.336-6.463.08399-2.817217-.862897-5.56827-2.663-7.737"></path></svg>
			</NavLink>
			<NavLink to="/favorites" activeClassName="btn-trend-active" className="btn-favorite">
				<svg className="active" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke-width="2" stroke="currentColor" fill="currentColor" d="M12 5.74C24.32-3.88 26.31 14.49 12 20-2.31 15.57-.32-3.88 12 5.74z"></path></svg>
				<svg className="no-active" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.74C24.32-3.88 26.31 14.49 12 20-2.31 15.57-.32-3.88 12 5.74z" fill="none" stroke="currentColor" stroke-width="2"></path></svg>
			</NavLink>
	  </div>
    </header>
  )
};
