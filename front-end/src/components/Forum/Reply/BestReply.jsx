import React from "react";
import './forumreplies.css';

const BestReply = () => {
    return (
        <div>
            <div className="bestreplycont">
                <h5 className="replytopic">How much is the entrance fees?</h5>
                <h6 className="postedauthor">Posted by Sam Petrick on May 20th 2021,9.45 AM </h6>
                <h6 className="bestreplyforum">Best Reply</h6>
                <p className="replydetails">No entrance fees for Ramayana related places in Srilanka but you can donate a reasonable amount if you wish for community services</p>
                <p className="repliedauthor">replied by Jayantha on May 20th 2022,10.15 AM</p>
            </div>
            <div className="bestreplycont">
                <h5 className="replytopic">Is it a hard/moderate/easy trek to Dolukanda Sanjeewani Mountain?</h5>
                <h6 className="postedauthor">Posted by James Kem on September 28th 2021,11.05 AM </h6>
                <h6 className="bestreplyforum">Best Reply</h6>
                <p className="replydetails">Yes this is bit hard trk and not recommend for senior citizens and travelers with kids
                What to bring to Dolukanda Sanjeewani Mountain?Adviceable to bring 2 Liters of water/snacks but ensure to bring back all plastics you bring 
                Is it danger to climb Dolukanda Sanjeewani Mountain?Not at all but make sure to go as a group.Beware of wild boars/insects</p>
                <p className="repliedauthor">replied by Nilanthi on September 28th 2021,01.35 PM</p>
            </div>
        </div>

    );
}
export default BestReply;