/**
 * Created by Andrew on 8/5/2017.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable, BehaviorSubject} from "rxjs";
import {Match} from "../model/match";
import {MATCHES} from "../../assets/mock-data/matches";


@Injectable()
export class MatchesService {
    private playersUrl = './assets/mock-data/player.json';
    public matchSubject = new BehaviorSubject(MATCHES);
    constructor(public http: Http) { }

    public addMatch = (match: Match) => {
        let current = this.matchSubject.getValue();
        current.push(match);
        this.matchSubject.next(current);
    };
    public getPlayers(){
        return this.http.get(this.playersUrl)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }
    public getPlayersWithStatus(){
        return this.getPlayers()
            .map(players => {
                players.map(p=>{
                    p.matches = [];
                    p.matches[0] = this.matchSubject.getValue().filter(m => m.w_team.some(w=>w.p_id === p.p_id));
                    p.matches[1] = this.matchSubject.getValue().filter(m => m.l_team.some(l=>l.p_id === p.p_id));
                    p.rates = p.matches[0].length / (p.matches[0].length + p.matches[1].length);
                });
                return players;
            })
    }
    public getPlayer(id: number) {
        return this.getPlayersWithStatus()
            .map(players => players.find(p => p.p_id === id))
    }
}