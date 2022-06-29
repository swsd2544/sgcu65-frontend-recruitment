import fbLogo from "@/assets/fb-logo.svg";
import igLogo from "@/assets/ig-logo.svg";
import twitterLogo from "@/assets/twitter-logo.svg";
import SocialButton from "./SocialButton";

function SocialContainer() {
	return (
		<div className="flex gap-4">
			<SocialButton
				src={igLogo}
				alt="Instagram logo"
				href="https://www.instagram.com/sgcu.chula"
			/>
			<SocialButton
				src={fbLogo}
				alt="Facebook logo"
				href="https://www.facebook.com/sgcu.chula"
			/>
			<SocialButton
				src={twitterLogo}
				alt="Twitter logo"
				href="https://www.twitter.com/sgcu.chula"
			/>
		</div>
	);
}

export default SocialContainer;
