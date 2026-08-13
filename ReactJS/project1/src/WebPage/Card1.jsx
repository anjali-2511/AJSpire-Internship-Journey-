import photo from '../assets/photo.png';
function Card1() {
    return (
        <>
             

                <div class="card border-dark w-100 h-30 m-1 text-center bg-success">
                        <img src={photo} alt="Profile" class="card-img-top rounded-circle w-25 mx-auto m-1" />
                       

                        <h3>Anjali Shinde</h3>

                        <p> MERN Developer</p>
                </div>
            
        </>
    )
}
export default Card1;