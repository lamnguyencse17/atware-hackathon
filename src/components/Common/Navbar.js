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
				<div className='pt-2'>
					<span className='content-center px-1 align-middle float-left'>
						<Logo />
					</span>
					{isPublic ? <PublicNavbar /> : <PrivateNavbar setModal={setModal} />}
					<div className='clear-both'></div>
				</div>
				<div className='flex flex-row justify-center mt-1'>
					<div className='mx-2'>
						<Button>
							<Link to='/cafes'>
								<div className='text-xl text-white'>
									<RestaurantIcon color='secondary' />
									{" Eat out"}
								</div>
							</Link>
						</Button>
					</div>
					<div className='mx-2'>
						<Button>
							<Link to='/movies'>
								<div className='text-xl text-white'>
									<MovieIcon color='secondary' />
									{" Watching movie "}
								</div>
							</Link>
						</Button>
					</div>
					<div className='mx-2'>
						<Button>
							<Link to='/nightclub'>
								<div className='text-xl text-white'>
									<AlbumIcon color='secondary' />
									{" Night club"}
								</div>
							</Link>
						</Button>
					</div>
					<div className='mx-2'>
						<Button>
							<Link to='/sports'>
								<div className='text-xl text-white'>
									<SportsBasketballIcon color='secondary' />
									{" Sports Activity"}
								</div>
							</Link>
						</Button>
					</div>
					<div className='mx-2'>
						<Link to='/dating'>
							<Button>
								<div className='text-xl text-white'>
									<FavoriteIcon color='secondary' />
									{" Dating"}
								</div>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</AppBar>
	);
}
