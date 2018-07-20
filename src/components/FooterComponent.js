import React, { Component } from 'react';
import { css } from 'emotion';
import linkedinIcon from '../icons/linkedinIcon.png';
import facebookIcon from '../icons/facebookIcon.png';
import twitterIcon from '../icons/twitterIcon.png';
import showLogo from '../icons/showLogo.png';
import { observer } from 'mobx-react';

const footer = css`
    margin: 30px 130px 0px 130px;
`;

const logo = css`
    height: 30px;
    margin-bottom: 40px;
`;

const textLink = css`
    color: rgb(163, 163, 163);
    font-size: 18;
    margin-right: 70px;
    font-family: Arial, sans-serif;
`;

const textLinksDiv = css`
    display: flex;
    flex-direction: row;
`;

const socialIcon = css`
    height: 50px;
    width: auto;
    margin-bottom: 20px;
    margin-right: 10px;
`;

const socialIcons = css`
    float: right;
`;

@observer
export class FooterComponent extends Component {
    render() {
        return(
            <div className={footer}>
                <div><img alt="Shows Logo" className={logo} src={showLogo} /></div>
                <div className={textLinksDiv}>
                    <p className={textLink}>
                        About <br />Us
                    </p>
                    <p className={textLink}>
                        Privacy <br />Policy
                     </p>
                    <p className={textLink}>
                        Terms of <br />Service
                    </p>
                </div>
                <p className={textLink}>©20118 Shows. All rights reserved. Additional terms and conditions may apply.</p>
                <div className={socialIcons}>
                    <img className={socialIcon} alt="Facebook Icon" src={facebookIcon} />
                    <img className={socialIcon}  alt="Twitter Icon" src={twitterIcon} />
                    <img className={socialIcon}  alt="LinkedIn Icon" src={linkedinIcon} />
                </div>
            </div>
        )
    }
}