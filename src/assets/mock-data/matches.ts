/**
 * Created by Andrew on 8/5/2017.
 */
import {Match} from "../../app/model/match";

export const MATCHES: Match[] = [
    {
        "m_id":1,
        "w_team":[{"p_id":1,"name":"Andrew"}],
        "l_team":[{"p_id":2,"name":"Dane"}],
        "date": new Date("2017-08-05T12:41:57.161Z")
    },
    {
        "m_id":2,
        "w_team":[{"p_id":3,"name":"Gabe"}],
        "l_team":[{"p_id":6,"name":"Chris"}],
        "date":new Date("2017-08-05T12:42:01.985Z")
    },
    {
        "m_id":3,
        "w_team":[{"p_id":1,"name":"Andrew"},{"p_id":3,"name":"Gabe"}],
        "l_team":[{"p_id":5,"name":"Rudy"},{"p_id":8,"name":"Jaden"}],
        "date":new Date("2017-08-05T12:42:08.485Z")
    },
    {
        "m_id":4,
        "w_team":[{"p_id":5,"name":"Rudy"}],
        "l_team":[{"p_id":8,"name":"Jaden"}],
        "date":new Date("2017-08-05T12:42:13.493Z")
    },
    {
        "m_id":5,
        "w_team":[{"p_id":4,"name":"Skyler"}],
        "l_team":[{"p_id":6,"name":"Chris"}],
        "date":new Date("2017-08-05T12:42:23.635Z")
    }
];