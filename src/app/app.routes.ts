import {MatchesComponent} from "./pages/matches/matches.component";
import {PlayersComponent} from "./pages/players/players.component";
import {DetailsComponent} from "./pages/details/details.component";
/**
 * Created by andrew.yang on 7/27/2017.
 */
export const appRoutes=[
    {
        path:'',
        redirectTo:'matches',
        pathMatch:'full'
    },
    {
        path:'matches',
        component: MatchesComponent
    },
    {
        path: 'players',
        component: PlayersComponent,
    },
    {
        path: 'detail/:id',
        component: DetailsComponent,
    },
    {
        path:'**',
        redirectTo:'matches'
    }
];