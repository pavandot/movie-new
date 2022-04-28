import { User } from "iconsax-react";
import { FcClapperboard } from "react-icons/fc";
const Navbar = () => {
	return (
		<section className=' bg-primary-dark p-5'>
			<div className=' max-w-7xl mx-auto'>
				<div className=' flex items-center justify-between'>
					<div className=' flex items-center space-x-2'>
						<FcClapperboard className=' text-3xl' />
						<p className=' text-lg text-custom-white font-semibold'>MovieDB</p>
					</div>
					<div className=' flex items-center space-x-5'>
						<p className=' text-lg text-custom-white '>Movie</p>
						<p className=' text-lg text-custom-white '>Tv</p>
						<p className=' text-lg text-custom-white '>Bookmark</p>
						<p className=' text-lg text-custom-white '>Favorite</p>
					</div>
					<div>
						<User size='28' color='#ffffff' variant='Bold' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
