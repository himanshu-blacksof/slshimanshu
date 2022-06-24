const PagerHeading = ({ num, text, className, bgclr, clr }) => {
    return (
        <div className={`${className} `} data-aos="fade-up">
            <h4 style={{ backgroundColor: `${bgclr}`, color: `${clr}`, zIndex:1, }}>{num}</h4>
            <span style={{ backgroundColor: `${clr}` }} className="pager__line" ></span>
            <h3 style={{ backgroundColor: `${bgclr}`, color: `${clr}`, zIndex:1, }}>{text}</h3>
        </div>
    )
}

export default PagerHeading