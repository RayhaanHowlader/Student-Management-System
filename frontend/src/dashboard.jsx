import './dashboard.css'
function Dashboard(){
    return(<>
 
 <div className="container">
<div className="nav">
    <h2><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>Student Dashboard</h2>
    <div className="line"></div>
    <ul>
        <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg><a href="#">Student Info</a></li>
        <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg><a href="">Student Fees</a></li>
        <li><i class="fa-solid fa-book"></i><a href="">Library</a></li>
        <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg><a href="">Fine</a></li>
        <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg><a href="">Syllabus</a></li>
    </ul>
</div>

<div className="main">
    <div className="text">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg><input type="text" name="" id="" placeholder="Search Students stat Events " />
 
    <div className="profile">
        <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" />
        rayhaanhowlader4@gmail.com
      </div>   
    </div>

    <h2 className="headover">Overview</h2>
    <div className="over">
       
        <div className="item">
            <img src="https://i.pinimg.com/originals/51/90/10/519010d9ee8167bfe445e616f260f758.png" alt="" />
            <span>Students</span>
            <span>2000</span>
        </div>
        <div className="item">
            <img className="img2" src="https://e7.pngegg.com/pngimages/552/861/png-clipart-computer-icons-avatar-avatar-computer-icons-avatar.png" alt="" />
        <span>Teachers</span>
        <span>2000</span>
        </div>
        <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/780/780248.png" alt="" />
        <span>Parents</span>
        <span>2115</span>
        </div>
        <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/3090/3090108.png" alt="" />
        <span>Staff</span>
        <span>82</span>
        </div>
    </div>
    <h2 className="headover">Dashboard</h2>
    <div className="navbar">
        <ul>
            <li><a href="">Results</a></li>
            <li><a href="">Fees</a></li>
            <li><a href="">Syllabus</a></li>
            <li><a href="">Admissions</a></li>
        </ul>
   
    </div>
    <h2>Students Performance</h2>
    <div className="marks">
        <span>Sem1 CGPA: 8.18 Grade: A+</span>
        <span>Sem2 CGPA : 8.45 Grade: A+</span>
        <span>Sem3 CGPA : 7.91 Grade: A</span>
    </div>
</div>
</div>
    </>);
}
export default Dashboard