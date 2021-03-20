import React from "react";
import Logo from "./Logo";
import PrivateNavbar from "./Navbar/PrivateNavbar";
import PublicNavbar from "./Navbar/PublicNavbar";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AlbumIcon from '@material-ui/icons/Album';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import MovieIcon from '@material-ui/icons/Movie';
const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
}));
export default function Navbar({ isPublic }) {
	const classes = useStyles();
	const category = ["Eat out","Night club","Sports Activity","Watching movie"	, "Dating"];
	const icons = [<RestaurantIcon></RestaurantIcon>,,,,];
	return (
		<AppBar position='static' color='primary' className={classes.appBar}>
			<div className='w-full h-20'>
				<div className='grid grid-cols-12'>
					<div className='content-center col-span-2 px-1 align-middle'>
						<Logo /> 
					</div>
					<div className='col-span-8 px-1 text-center text-5xl'>We connect people in a most possible way!</div>
					{isPublic ? <PublicNavbar /> : <PrivateNavbar />}
				</div> 
				<div className = 'container-fluid w-full bg-yellow-200'>
					
				<p className = "font-mono text-center text-4xl"> What do you want to do with your partner(s)?</p>
				<p className = "text-center text 2xl">Choose one below! </p>

					<div className = 'container-fluid w-full bg-blue-100 place-content-center flex '>


<div classname ='mx-8'><button className =' p-4 bg-opacity-75%  .rounded-md  hover:bg-red-200  ' onClick = "displayEatOut()">Eat out</button> <RestaurantIcon></RestaurantIcon> </div>
<div classname ='mx-8'><button className =' p-4 bg-opacity-75%  .rounded-md  hover:bg-red-200 ' onClick = "displayNightClub()">Night club</button><AlbumIcon></AlbumIcon> </div>
<div classname ='mx-8'><button className =' p-4 bg-opacity-75%  .rounded-md  hover:bg-red-200 ' onClick = "displaySportsActivity()">Sports Activity</button><SportsBasketballIcon></SportsBasketballIcon> </div>
<div classname ='mx-8'><button className =' p-4 bg-opacity-75%  .rounded-md  hover:bg-red-200 ' onClick = "displayWatchingMovies()">Watching movie</button><MovieIcon></MovieIcon> </div>
<div classname ='mx-8'><button className =' p-4 bg-opacity-75%  .rounded-md  hover:bg-red-200 ' onClick = "displayDating()">Dating</button><FavoriteIcon></FavoriteIcon> </div>
		
				</div>
				</div>
			</div>
		</AppBar> )
}
