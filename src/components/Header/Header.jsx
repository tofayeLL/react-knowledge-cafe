
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center container mx-auto px-20 border-b-2 my-5 py-10'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
  
        </div>
       
    );
};

export default Header;