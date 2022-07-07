// PARENT = MAIN

import React from "react";

class FAQ extends React.Component {
  render() {
    return (
        <section id="faq">
            <h1>FAQ</h1>
                <div id="container">
                    <hr/>
                <ol>
                        <li>
                            <strong>Q:</strong> How is payment handled? | <strong>A:</strong> Half up-front; half on completion. As of now I am only accepting FIAT currency for payment.
                        </li>
                    <br/>
                        <li>
                            <strong>Q:</strong> Will my site work on mobile? | <strong>A:</strong> Yes! My sites are <em>dynamic by design</em> and <p id="strong">work on all devices</p>.
                        </li>
                    <br/>
                        <li>
                            <strong>Q:</strong> Do you use a website-builder? | <strong>A:</strong> <p id="strong">No!!</p> I program <em>every page</em> so that my client and I can have full control over our project; I can use a <a href="https://www.sitecore.com/knowledge-center/digital-marketing-resources/what-is-a-cms#:~:text=sites%2C%20and%20more.-,What%20is%20a%20CMS%3F%20%2D%20quick%20definition,pages%2C%20blog%20posts%2C%20etc." target="blank">CMS</a> if you desire <small>(given the liscense)</small>.
                        </li>
                    <br/>
                        <li>
                            <strong>Q:</strong> Why no <a href="https://www.sitecore.com/knowledge-center/digital-marketing-resources/what-is-a-cms#:~:text=sites%2C%20and%20more.-,What%20is%20a%20CMS%3F%20%2D%20quick%20definition,pages%2C%20blog%20posts%2C%20etc." target="blank">CMS</a> <small>(WordPress, Elementor, etc.)</small>? | <strong>A:</strong> Elaborating what has been previously mentioned: using raw code allows us to bypass limitations present in a CMS. Also, CMS' and their respective plugins are <em>infamously</em> exploited by <p id="strong">hackers</p>.⠀
                        </li>
                    <br/>
                        <li>
                            <strong>Q:</strong> How will I rank in <a href="https://digitalmarketinginstitute.com/blog/what-is-seo#:~:text=Well%2C%20SEO%20stands%20for%20'Search,more%20people%20will%20see%20it." target="blank">SEO</a>? | <strong>A:</strong> If you desire to rank for specific search terms, please contact me during development. Besides that, my websites are <em>made SEO</em>.⠀
                        </li>
                    <br/>
                        <li>
                            <strong>Q:</strong> Will my website look like this?? | <strong>A:</strong> No; unless you want it to. Your website will be styled according to your desire and you can <em>always</em> inqure for changes.
                        </li>
                    <br/>
                        <li>
                            <strong>Q:</strong> How can I publish my website online? | <strong>A:</strong> You must find a web host, I cannot host for you and that is not included in my services <small>(I can reccomend some hosts)</small>.⠀
                        </li>
                </ol>
                <hr/>
                </div>
    </section>
    )
  }
}

export default FAQ;