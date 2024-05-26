const Header = () => {
  return (
    <div>
        <header className="py-5"  style={{backgroundImage: "linear-gradient(yellow,aqua,skyblue,lightgreen)",color: "darkred"}}>
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-black">
                    <h1 className="display-4 fw-bolder">Shop Here for Basic Needs</h1>
                    <p className="lead fw-normal text-black-50 mb-0"> <b className="theme">E</b>ssential goods, <b className="theme">A</b>bsolute needs, <b className="theme">S</b>elf will, <b className="theme">Y</b>es things</p>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header