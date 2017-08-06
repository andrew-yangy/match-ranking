import { Component, OnInit } from '@angular/core';
import {MatchesService} from "../../services/matches.service";
import {Player} from "../../model/player";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {SelectItem} from "primeng/components/common/selectitem";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    public playerInfo: Player;
    private playerOptions: SelectItem[];
    private selectedPlayer: Player;
    constructor(private matchesService: MatchesService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.matchesService.getPlayer(+params.get('id')))
            .subscribe((res: Player) => this.playerInfo = res);
        this.matchesService.getPlayers()
            .subscribe(res => {
                this.playerOptions = [];
                this.playerOptions.push({label:'Select Player', value:null});
                res.map(p => {
                    this.playerOptions.push({label:p.name, value:p})
                });
            });
    }
    calRate = () => {
        if(this.selectedPlayer && this.playerInfo) {
            let win,lose;
            win = this.playerInfo.matches[0].filter(p => p.l_team.some(o => o.p_id === this.selectedPlayer.p_id)).length;
            lose = this.playerInfo.matches[1].filter(p => p.w_team.some(o => o.p_id === this.selectedPlayer.p_id)).length;
            return win+lose? win/(win+lose):NaN;
        }
    }
}
