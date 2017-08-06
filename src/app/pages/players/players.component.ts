import { Component, OnInit } from '@angular/core';
import {Player} from "../../model/player";
import {MatchesService} from "../../services/matches.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
    public players: Array<Player>;
    constructor(private matchesService: MatchesService,
                private router: Router) { }

    ngOnInit() {
        this.loadPlayer();
    }
    loadPlayer = () => {
        this.matchesService.getPlayersWithStatus()
            .subscribe(players => {
                this.players = players;
            })
    };
    goToDetail = event => {
        let link = ['/detail', event.data.p_id];
        this.router.navigate(link);
    }
}
