
export default function Index() {

    return <>
        <div className="container">
            <div>
                <nav>
                  <img src="./Logo .svg" id="logo" />
                    <ul >
                        <button type="button" className="url">My URLs</button>

                        <li>
                            <a href="#">Features <i className="fa fa-angle-down"></i> </a>

                        </li>

                        <li>
                            <a href="#">Pricing</a>
                        </li>

                        <li>
                            <a href="#">Analytics</a>
                        </li>

                        <li>
                            <a href="#">FAQs</a>
                        </li>



                    </ul>
                    <div className="main">
                        <button type="button" className="log">
                            <a href="Login.html">Log in</a>
                        </button>
                        <button type="button"><a href="free.html">Try for free</a></button>
                    </div>
                </nav>
            </div>
            <div>

                <section className="hero">
                    <div id="optimize">
                        <h1> Optimize Your Online Experience with Our <br />
                            Advanced <span className="blue">URL Shortening </span>Solution
                        </h1>
                        <img src="./Vector .svg" />

                        <p id="paragraph">
                            Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, <br/>
                                branded links, and domain customization options to reinforce your brand presence and <br />
                                    enhance user engagement.
                                </p>
                                <div className="sign">
                                    <button type="button"><a href="sign.html">Sign up</a></button>
                                    <button type="button" id="learn">Learn more</button>
                                </div>

                                <img src="./Group.svg" />
                                    <img src="./hero.svg" />
                                    </div>
                </section>

                            </div>
                    </div>

                    <div className="flex-container">
                        <div id="stop"><h1>One stop. four <span className="blue">Possibilities</span>.</h1></div>
                        <div><h1>3M</h1><br />Active users</div>
                        <div><h1>60M</h1><br />Links & QR codes created</div>
                        <div><h1>1B</h1><br /> Clicked & Scanned connections</div>
                        <div><h1>300k</h1><br />App Integrations</div>
                    </div>

                    <div className="grid-container">
                        <div className="item1 grid-row-span-2 ">
                            <h1> <img src="./Line 70.svg" className="line" />Why choose <span className="blue">Scissors</span></h1>
                            <p className="scissors" style={{
                                lineHeight: '28px',
                                fontSize: '16px'
                            }}
                            >
                                Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none.
                            </p>
                        </div>

                        <div className="item2">
                            <img src="./Group 6.svg" />
                            <h2 className="shortening"> URL Shortening</h2>
                            <p style={{
                                lineHeight: '24px'
                            }} className="scissors">Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                        </div>
                        <div className="item3">
                            <img src="./Frame 1000001695.svg" />
                            <h2>Custom URLs</h2>
                            <p style={{ lineHeight: '24px' }} className="scissors">With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
                        </div>
                        <div className="item4">
                            <img src="./Frame 1000001695 (1).svg" />
                            <p style={{ lineHeight: '24px' }} className="scissors">Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                        </div>
                        <div className="item5">
                            <img src="./Frame 1000001718.svg" />
                            <p style={{ lineHeight: '24px' }} className="scissors">Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                        </div>

                    </div>

                    <div className="pricing-table">
                        <div className="details">
                            <h1 className="price"><img src="./Line 70.svg" /> A <span className="blue">price perfect</span> for your needs</h1>

                            <p style={{ textAlign: 'center', lineHeight: '23px', marginTop: '12px' }}>
                                From catering for your personal, business, event, socials needs, you can be<br />
                                    rest assured we have you in mind in our pricing.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="cards" >
                            <div className="card shadow">
                                <ul id="arranged">
                                    <li className="button-bar">Basic</li>
                                    <li className="button-bar"><h1 id="plans">Free</h1></li>
                                    <li className="button-bar"><h5>Free plan for all users</h5></li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Unlimited URL shortening</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Basic Link Analytics</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Customizable Short Links</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Standard support</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Ad-supported</li>


                                </ul>
                            </div>

                            <div className="card-active">
                                <ul id="arranged">
                                    <li className="button-bar">Professional</li>
                                    <li className="button-bar"><h1 id="plans">$15/month</h1></li>
                                    <li className="button-bar"><h5>ideal for business creators</h5></li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Enhanced Link Analytics</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Custom Branded Domains</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Advanced Link customization</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Priority support</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Ad-free Experience</li>


                                </ul>
                            </div>

                            <div className="card shadow">
                                <ul id="arranged">
                                    <li className="button-bar">Teams</li>
                                    <li className="button-bar" ><h1 id="plans">$25/month</h1></li>
                                    <li className="button-bar" ><h5>share up to 10 users</h5></li>
                                    <li className="button-bar"><img src="./check-circle.svg" /> Team collaboration</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  User Roles and Permissions</li>
                                    <li className="button-bar"><img src="./check-circle.svg" /> Enhanced Security</li>
                                    <li className="button-bar"><img src="./check-circle.svg" />  Api Access</li>
                                    <li className="button-bar"><img src="./check-circle.svg" /> Dedicated Account Manager</li>


                                </ul>
                            </div>

                        </div>
                    </div>

                    <div id="custom">
                        <button id="get">Get Custom Pricing</button>
                        <button id="select"> select pricing</button>
                    </div>

                    <div id="trim">

                        <form action="/action_page.php" className="paste">
                            <label htmlFor="fname"></label>
                            <input type="text" id="fname" name="firstname" placeholder="Paste URL here..." /><br />

                            <label htmlFor="lname"></label>
                            <input type="text" id="lname" name="lastname" placeholder="Choose domain" /><br />

                            <label htmlFor="lname"></label>
                            <input type="text" id="lname" name="lname" placeholder="Type Alias here" /><br />

                            <input type="submit" value="Trim URL" />
                            <h5 style={{ color: 'blue' }}>By clicking TrimURL, I agree to the <b>Terms of Service, <br />Privacy policy </b>and use of cookies</h5>
                        </form>

                    </div>

                    <div id="line">
                        <h1><img src="./Line 70.svg" />FAQs</h1>
                        <div id="margin">
                            <h4  > How does URL shortening work?</h4>
                            <p className="name" >URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the <br />
                                original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
                            </p>
                            <h4 className="name" >Is it necessary to create an account to use the URL shortening service?</h4>
                            <h4 className="name" >Are the shortened links permanent? Will they expire?</h4>
                            <h4 className="name" >Are there any limitations on the number of URLs I can shorten?</h4>
                            <h4 className="name" >Can I customize the shortened URLs to reflect my brand or content?</h4>
                            <h4 className="name" >Can I track the performance of my shortened URLs?</h4>
                            <h4 className="name" >How secure is the URL shortening service? Are the shortened links protected against <br />
                                spam or malicious activity?</h4>
                            <h4 className="name" >What is a QR code and what can it do?</h4>
                            <h4 className="name" >Is there an API available for integrating the URL shortening service into my own <br /> 
                                applications or websites?  </h4>



                        </div>
                    </div>

                    <div id="revolution">
                        <h1>Revolutionizing Link Optimization</h1>
                        <button style={{marginTop: '15px'}}>Get Started</button>
                    </div>

                    <footer>
                        <div id="scissors">
                            <div className="unit1 scissors-row-span-2" >
                                <img src="./Logo (2).svg" />
                                    <img style={{marginTop: '15px'}} src="./socials.svg" />
                                    </div>

                                    <div className="unit2">
                                        <h3>Why scissors ?</h3>
                                        <ul style={{marginTop: '10px'}}>
                                            <li id="Api">
                                                Scissors 101
                                            </li>
                                            <li id="Api">
                                                Integrations & API
                                            </li>
                                            <li id="Api">
                                                Pricing
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="unit3">
                                        <h3>Solutions</h3>
                                        <ul style={{marginTop: '10px'}}>
                                            <li id="Api">
                                                Social Media
                                            </li>
                                            <li id="Api">
                                                Digital Marketing
                                            </li>
                                            <li id="Api">
                                                Custom Service
                                            </li>

                                            <li id="Api">
                                                For Developers
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="unit4">
                                        <h3>Products</h3>
                                        <ul style={{marginTop: '10px'}}>
                                            <li id="Api">
                                                Link Management
                                            </li>
                                            <li id="Api">
                                                QR Codes
                                            </li>
                                            <li id="Api">
                                                Link-in-bio
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="unit5">
                                        <h3>Company </h3>
                                        <ul >
                                            <li id="Api">
                                                About Scissor
                                            </li>
                                            <li id="Api">
                                                Careers
                                            </li>
                                            <li id="Api">
                                                Partners
                                            </li>

                                            <li id="Api">
                                                Press
                                            </li>

                                            <li id="Api">
                                                Contact
                                            </li>

                                            <li id="Api">
                                                Reviews
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="unit6">
                                        <h3>Resources</h3>
                                        <ul style={{marginTop: '10px'}}>
                                            <li id="Api">
                                                Blog
                                            </li>
                                            <li id="Api">
                                                Resource Library
                                            </li>
                                            <li id="Api">
                                                Developers
                                            </li>

                                            <li id="Api">
                                                App Connectors
                                            </li>

                                            <li id="Api">
                                                Support
                                            </li>

                                            <li id="Api">
                                                Trust Center
                                            </li>

                                            <li id="Api">
                                                Browser Extension
                                            </li>

                                            <li id="Api">
                                                Mobile App
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="unit7">
                                        <h3>Features</h3>
                                        <ul style={{marginTop: '10px'}}>
                                            <li id="Api">
                                                Branded Links
                                            </li>
                                            <li id="Api">
                                                Mobile Links
                                            </li>
                                            <li id="Api">
                                                Campaign
                                            </li>

                                            <li id="Api">
                                                Management &
                                            </li>

                                            <li id="Api">
                                                Analytics
                                            </li>

                                            <li id="Api">
                                                QR code generation
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="unit8">
                                        <h3>Legal</h3>
                                        <ul style={{marginTop: '10px'}}>
                                            <li id="Api">
                                                Privacy Policy
                                            </li>
                                            <li id="Api">
                                                Cookie Policy
                                            </li>
                                            <li id="Api">
                                                Terms of Service
                                            </li>

                                            <li id="Api">
                                                Acceptable Use Policy
                                            </li>

                                            <li id="Api">
                                                Code of Conduct
                                            </li>

                                        </ul>
                                    </div>

                            </div>

                                <img style={{marginTop: '30px', alignItems: 'left'}} src="./footer.svg" />
                            </footer>
    </>
}