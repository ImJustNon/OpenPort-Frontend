import { Link } from "react-router-dom";

function Footer(): React.JSX.Element {
    return(
        <>
            <div className="lg:grid-cols-2 grid grid-cols-1 items-center text-center gap-3 bg-[#1f1f1f] rounded-md p-3 mb-5">
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-white">Copyright © 2024 - {new Date().getFullYear()}, All right reserved</div>
                    {/* <div className="font-semibold text-white">
                        <Link to="/terms" >Terms of Service</Link> | <Link to="/privacy" >Privacy Policy</Link> | <Link to="/contact" >Contact Me</Link>
                    </div> */}
                </div>
                <div className="font-semibold text-white">Made with ❤️ by 
                    <a href="https://portfolio.nknk.site/en" target="_blank">
                        <span className="font-bold"> Non</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;