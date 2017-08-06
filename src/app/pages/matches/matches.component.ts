import { Component, OnInit } from '@angular/core';
import {MatchesService} from "../../services/matches.service";
import {Match} from "../../model/match";
import {Player} from "../../model/player";
import {Observable} from "rxjs";
import {SelectItem} from "primeng/components/common/selectitem";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
    private matches: Array<Match>;
    private players: Array<Player>;
    private new_match: Match = new Match;
    private options: SelectItem[];
    private winPlayerOptions: SelectItem[];
    private losePlayerOptions: SelectItem[];
    submitted: boolean;
    display: boolean;
    constructor(private matchesService: MatchesService) { }

    ngOnInit() {
        this.loadMatch();
    }
    loadMatch = () => {
        this.matchesService.matchSubject
            .subscribe((matches: Match[]) => {
                this.matches = [...matches];
            });
        this.matchesService.getPlayers()
            .subscribe(res => {
                this.players = res;
                this.winPlayerOptions = [];
                this.losePlayerOptions = [];
                this.options = [];
                this.players.map(p => {
                    this.options.push({label:p.name, value:p})
                });
                this.winPlayerOptions = this.options;
                this.losePlayerOptions = this.options;

            });
    };
    selectWin = event => {
        this.losePlayerOptions = this.losePlayerOptions.filter(l => !event.value.includes(l.value));
    };
    selectLose = event => {
        this.winPlayerOptions = this.winPlayerOptions.filter(w => !event.value.includes(w.value));
    };
    openAdd = () => {
        this.submitted = false;
        this.display = true;
        this.winPlayerOptions = this.options;
        this.losePlayerOptions = this.options;
        this.new_match = new Match;
        this.new_match.m_id = this.matches.length > 0?(this.matches[this.matches.length - 1].m_id + 1) : 1;
    };
    submitNewMatch = () => {
        this.submitted = true;
        if(this.new_match.w_team && this.new_match.l_team) {
            this.display = false;
            this.new_match.date = new Date();
            this.matchesService.addMatch(this.new_match);
        }
    };
    cancel = () => {
        this.submitted = false;
        this.display = false;
    }
}
