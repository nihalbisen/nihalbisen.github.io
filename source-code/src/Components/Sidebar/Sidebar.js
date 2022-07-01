export default function Sidebar(){
    return(
        <section className="filters">
            <span className="filter-category">Clothing / Women's / Outerwear</span>
            <span className="filter-head">Filters</span>
            <div className="attribute-sec">
                <h5 className="attribute-title">Attribute</h5>
                <ul className="filter-option">
                    <li><input type="checkbox" id="option1" name="option1" value="option1"/><label htmlFor="option1">Option</label></li>
                    <li><input type="checkbox" id="option2" name="option2" value="option1"/><label htmlFor="option2">Option</label></li>
                    <li><input type="checkbox" id="option3" name="option3" value="option1"/><label htmlFor="option3">Option</label></li>
                    <li><input type="checkbox" id="option4" name="option4" value="option1"/><label htmlFor="option4">Option</label></li>
                </ul>
                <a href="/" className="show-more" aria-label="show-more">Show more</a>
            </div>
            <div className="attribute-sec">
                <h5 className="attribute-title">Attribute</h5>
                <ul className="filter-option">
                    <li><input type="checkbox" id="option5" name="option5" value="option5"/><label htmlFor="option5">Option</label></li>
                    <li><input type="checkbox" id="option6" name="option6" value="option6"/><label htmlFor="option6">Option</label></li>
                    <li><input type="checkbox" id="option7" name="option7" value="option7"/><label htmlFor="option7">Option</label></li>
                    <li><input type="checkbox" id="option8" name="option8" value="option8"/><label htmlFor="option8">Option</label></li>
                    <li><input type="checkbox" id="option9" name="option9" value="option9"/><label htmlFor="option9">Option</label></li>
                </ul>
                <a href="/" className="show-more" aria-label="show-more">Show more</a>
            </div>
            <div className="attribute-sec">
                <h5 className="attribute-title">Color</h5>
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
                    <li><input type="checkbox" id="option5" name="option5" value="option5"/><label htmlFor="option5">Option</label></li>
                    <li><input type="checkbox" id="option6" name="option6" value="option6"/><label htmlFor="option6">Option</label></li>
                    <li><input type="checkbox" id="option7" name="option7" value="option7"/><label htmlFor="option7">Option</label></li>
                    <li><input type="checkbox" id="option8" name="option8" value="option8"/><label htmlFor="option8">Option</label></li>
                    <li><input type="checkbox" id="option9" name="option9" value="option9"/><label htmlFor="option9">Option</label></li>
                    <li><input type="checkbox" id="option7" name="option7" value="option7"/><label htmlFor="option7">Option</label></li>
                    <li><input type="checkbox" id="option8" name="option8" value="option8"/><label htmlFor="option8">Option</label></li>
                    <li><input type="checkbox" id="option9" name="option9" value="option9"/><label htmlFor="option9">Option</label></li>
                </ul>
            </div>
        </section>
    );
}