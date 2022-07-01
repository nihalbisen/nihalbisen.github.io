import WomensOuterwear from "../../Images/WomensOuterwear.png";
export default function Banner(){
    return(
        <section className="banner-container aem-Grid aem-Grid--12">
            <div className="banner-sec1 aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <h3 className="banner-title">Women's<br/>Outerwear</h3>
                <hr className="divider"/>
            </div>
            <div className="banner-sec2 aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 aem-GridColumn--tablet--12">
                <img src={WomensOuterwear} alt="Women's Outerwear"/>
            </div>
        </section>
    );
}