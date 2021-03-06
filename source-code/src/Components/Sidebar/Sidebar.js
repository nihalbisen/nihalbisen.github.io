export default function Sidebar(){
    return(
        <section className="filters">
            <span className="filter-category">Clothing / Women's / Outerwear</span>
            <span className="filter-head">Filters</span>
            <div className="attribute-sec">
                <h2 className="attribute-title">Attribute</h2>
                <ul className="filter-option">
                    <li><input type="checkbox" id="option1" name="attribute1" value="option1"/><label htmlFor="option1">Option</label></li>
                    <li><input type="checkbox" id="option2" name="attribute1" value="option1"/><label htmlFor="option2">Option</label></li>
                    <li><input type="checkbox" id="option3" name="attribute1" value="option1"/><label htmlFor="option3">Option</label></li>
                    <li><input type="checkbox" id="option4" name="attribute1" value="option1"/><label htmlFor="option4">Option</label></li>
                </ul>
                <a href="/" className="show-more" aria-label="show-more">Show more</a>
            </div>
            <div className="attribute-sec">
                <h3 className="attribute-title">Attribute</h3>
                <ul className="filter-option">
                    <li><input type="checkbox" id="option5" name="attribute2" value="option5"/><label htmlFor="option5">Option</label></li>
                    <li><input type="checkbox" id="option6" name="attribute2" value="option6"/><label htmlFor="option6">Option</label></li>
                    <li><input type="checkbox" id="option7" name="attribute2" value="option7"/><label htmlFor="option7">Option</label></li>
                    <li><input type="checkbox" id="option8" name="attribute2" value="option8"/><label htmlFor="option8">Option</label></li>
                    <li><input type="checkbox" id="option9" name="attribute2" value="option9"/><label htmlFor="option9">Option</label></li>
                </ul>
                <a href="/" className="show-more" aria-label="show-more">Show more</a>
            </div>
            <div className="attribute-sec">
                <h4 className="attribute-title">Color</h4>
                <input className="colors colors-black" type="checkbox"  name="black" value="black"/>
                <input className="colors colors-white" type="checkbox"  name="white" value="white"/>
                <input className="colors colors-green" type="checkbox"  name="black" value="black"/>
                <input className="colors colors-orange" type="checkbox"  name="white" value="white"/>
                <input className="colors colors-blue" type="checkbox"  name="black" value="black"/>
                <input className="colors colors-red" type="checkbox"  name="white" value="white"/>
                <input className="colors colors-purple" type="checkbox"  name="black" value="black"/>
                <input className="colors colors-pink" type="checkbox"  name="white" value="white"/>
                <input className="colors colors-orangered" type="checkbox"  name="black" value="black"/>
                <input className="colors colors-gradient" type="checkbox"  name="white" value="white"/>
                <a href="/" className="show-more" aria-label="show-more">Show more</a>
            </div>
            <div className="attribute-sec">
                <h5 className="attribute-title">Attribute</h5>
                <ul className="filter-option">
                    <li><input type="checkbox" id="option10" name="attribute3" value="option10"/><label htmlFor="option10">Option</label></li>
                    <li><input type="checkbox" id="option11" name="attribute3" value="option11"/><label htmlFor="option11">Option</label></li>
                    <li><input type="checkbox" id="option12" name="attribute3" value="option12"/><label htmlFor="option12">Option</label></li>
                    <li><input type="checkbox" id="option13" name="attribute3" value="option13"/><label htmlFor="option13">Option</label></li>
                    <li><input type="checkbox" id="option14" name="attribute3" value="option14"/><label htmlFor="option14">Option</label></li>
                    <li><input type="checkbox" id="option15" name="attribute3" value="option15"/><label htmlFor="option15">Option</label></li>
                    <li><input type="checkbox" id="option16" name="attribute3" value="option16"/><label htmlFor="option16">Option</label></li>
                    <li><input type="checkbox" id="option17" name="attribute3" value="option17"/><label htmlFor="option17">Option</label></li>
                </ul>
            </div>
        </section>
    );
}