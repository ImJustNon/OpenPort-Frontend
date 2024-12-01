function Footer(): React.JSX.Element {
    return(
        <>
            <div className="lg:flex-row lg:justify-evenly lg:gap-0 flex-col items-center gap-3 flex bg-[#1f1f1f] rounded-md p-3 mb-5">
                <div className="font-semibold text-white">Copyright © 2024 - 2024, All right reserved</div>
                <div className="font-semibold text-white">Made with ❤️ by 
                    <a href="https://portfolio.imnon.xyz/en" target="_blank">
                        <span className="font-bold"> NNT</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;