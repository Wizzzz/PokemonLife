import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">

                        </div>
                    </div>

                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong>Regna</strong>. All Rights Reserved
                    </div>
                        <div className="credits">
                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;