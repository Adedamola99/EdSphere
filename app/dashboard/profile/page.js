import Image from 'next/image'

const Profile = () => {
    return ( 
        <div className="sub-container">
            <div>
                <h3>Name: Adebitan Damola</h3>
                <h3>Class: JSS 2</h3>
                <h3>Post Held: Nil</h3>
                <h3>Achievement: </h3>
                <h3>Name: Adebitan Damola</h3>
            </div>
            <div>
                <Image 
                    src='/assets/icons/user.svg'
                    alt='image'
                    width={270}
                    height={200}
                />
            </div>
        </div>
     );
}
 
export default Profile;