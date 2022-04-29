import { User, VideoVertical, Monitor, Bookmark, Heart } from "iconsax-react";
import { FcClapperboard } from "react-icons/fc";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<section className=' bg-primary-dark p-5'>
			<div className=' flex items-center justify-between'>
				<div className=' flex items-center justify-center sm:space-x-2'>
					<FcClapperboard className=' text-3xl' />
					<p className=' text-lg text-custom-white font-semibold hidden sm:block'>MovieDB</p>
				</div>
				{/* Desktop */}
				<div className=' hidden justify-center sm:flex items-center space-x-6 md:space-x-8 lg:space-x-10 '>
					<Link to='/' className=' text-lg text-custom-white hidden sm:flex justify-center space-x-1 items-center '>
						<VideoVertical size='28' color='#3f51b5' variant='Bulk' />
						<span>Movie</span>
					</Link>
					<Link to='/' className=' text-lg text-custom-white hidden sm:flex justify-center space-x-1 items-center '>
						<Monitor size='28' color='#3f51b5' variant='Bulk' />
						<span>Tv</span>
					</Link>
					<Link to='/' className='  text-lg text-custom-white hidden sm:flex justify-center space-x-1 items-center '>
						<Bookmark size='28' color='#3f51b5' variant='Bulk' />

						<span>Bookmark</span>
					</Link>
					<Link to='/' className=' text-lg text-custom-white hidden sm:flex justify-center space-x-1 items-center  '>
						<Heart size='28' color='#3f51b5' variant='Bulk' />
						<span>Favorite</span>
					</Link>
				</div>
				{/* Mobile */}
				<div className='justify-center flex items-center space-x-5  sm:hidden'>
					<Link to='/'>
						<VideoVertical className='sm:hidden' size='32' color='#3f51b5' variant='Bulk' />
					</Link>
					<Link to='/'>
						<Monitor className='sm:hidden' size='32' color='#3f51b5' variant='Bulk' />
					</Link>
					<Link to='/'>
						<Bookmark className='sm:hidden ' size='32' color='#3f51b5' variant='Bulk' />
					</Link>
					<Link to='/'>
						<Heart className='sm:hidden' size='32' color='#3f51b5' variant='Bulk' />
					</Link>
				</div>
				<div>
					<User size='32' color='#3f51b5' variant='Bulk' className=' border-[1px] rounded-full p-1' />
				</div>
			</div>
		</section>
	);
};

export default Navbar;
