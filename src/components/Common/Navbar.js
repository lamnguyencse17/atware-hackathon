import React from "react";
import Logo from "./Logo";
import PrivateNavbar from "./Navbar/PrivateNavbar";
import PublicNavbar from "./Navbar/PublicNavbar";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import AlbumIcon from "@material-ui/icons/Album";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import MovieIcon from "@material-ui/icons/Movie";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
}));
export default function Navbar({ isPublic, setModal }) {
	const classes = useStyles();
	const category = [
		"Eat out",
		"Night club",
		"Sports Activity",
		"Watching movie",
		"Dating",
	];
	return (
		<AppBar position='static' color='primary' className={classes.appBar}>
			<div className='w-full container m-auto'>
				<div className='grid grid-cols-6 pt-2'>
					<span className='content-center col-span-1 px-1 align-middle'>
						<Logo />
					</span>
					<div className='col-span-2 text-4xl text-center'></div>
					{isPublic ? <PublicNavbar /> : <PrivateNavbar setModal={setModal} />}
				</div>
				<div className='flex flex-row justify-center mt-1'>
					<div className="mx-4">
						<Button>
							<Link to='/cafes'>
								<div className='text-xl text-white'>
									{"Eat out "}
									<RestaurantIcon color='secondary' />
								</div>
							</Link>
						</Button>
					</div>
					<div className="mx-4">
						<Button>
							<Link to='/movies'>
								<div className='text-xl text-white'>
									{"Watching movie  "}
									<MovieIcon color='secondary' />
								</div>
							</Link>
						</Button>
					</div>
					<div className="mx-4">
						<Button>
							<Link to='/nightclub'>
								<div className='text-xl text-white'>
									{"Night club "}
									<AlbumIcon
										color='secondary'
										disableFocusRipple={true}
										disableRipple={true}
									/>
								</div>
							</Link>
						</Button>
					</div>
					<div className="mx-4">
						<Button>
							<Link to='/sports'>
								<div className='text-xl text-white'>
									{"Sports Activity "}
									<SportsBasketballIcon
										color='secondary'
										disableFocusRipple={true}
										disableRipple={true}
									/>
								</div>
							</Link>
						</Button>
					</div>
					<div className="mx-4"> 
						<Link to='/dating'>
							<Button>
								<div className='text-xl text-white'>
									{"Dating "}
									<FavoriteIcon
										color='secondary'
										disableFocusRipple={true}
										disableRipple={true}
									/>
								</div>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</AppBar>
	);
}
