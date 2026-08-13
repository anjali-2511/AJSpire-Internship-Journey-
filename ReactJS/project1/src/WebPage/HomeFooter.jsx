import icon from "../assets/image.png";

function HomeFooter() {
    return (
        <>
            <div class="container-fluid bg-light py-2">

                <div class="row align-items-center text-center">

                    <div class="col-6 col-md-2 mb-3 mb-md-0">
                        <img src={icon} class="img-fluid" alt="TomTom"/> <span>TomTom</span>
                    </div>

                    <div class="col-6 col-md-2 mb-3 mb-md-0">
                        <img src={icon} class="img-fluid" alt="Viatris"/><span>Viatris</span>
                    </div>

                    <div class="col-6 col-md-2 mb-3 mb-md-0">
                        <img src={icon} class="img-fluid" alt="Zoetis"/><span>Zoetis</span>
                    </div>

                    <div class="col-6 col-md-2 mb-3 mb-md-0">
                        <img src={icon} class="img-fluid" alt="Alitalia"/><span>Alitalia</span>
                    </div>

                    <div class="col-6 col-md-2">
                        <img src={icon} class="img-fluid" alt="HSBC"/><span>HSBC</span>
                    </div>

                    <div class="col-6 col-md-2">
                        <img src={icon} class="img-fluid" alt="Lexmark"/><span>Lexmark</span>
                    </div>

                </div>
            </div>
        </>
    )
};
export default HomeFooter;